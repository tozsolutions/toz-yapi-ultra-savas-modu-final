import { useState, useCallback } from "react";

export interface LeadPayload {
  name: string;
  phone: string;
  service: string;
  city: string;
  message: string;
  source: string;
  timestamp: string;
}

export interface LeadCaptureResult {
  submit: (payload: Omit<LeadPayload, "source" | "timestamp">) => Promise<boolean>;
  loading: boolean;
  success: boolean;
  error: string | null;
}

/**
 * Validates a Turkish phone number.
 * Accepts formats:
 *   - 05XXXXXXXXX
 *   - +905XXXXXXXXX
 *   - 905XXXXXXXXX
 *   - 5XXXXXXXXX (10 digits starting with 5)
 */
function validatePhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s()-]/g, "");
  const patterns = [
    /^0?5\d{9}$/,      // 05XXXXXXXXX or 5XXXXXXXXX
    /^\+?905\d{9}$/,   // +905XXXXXXXXX or 905XXXXXXXXX
  ];
  return patterns.some((p) => p.test(cleaned));
}

function normalizePhone(phone: string): string {
  const cleaned = phone.replace(/[\s()-]/g, "");
  // Ensure it starts with +90
  if (cleaned.startsWith("0")) {
    return `+90${cleaned.slice(1)}`;
  }
  if (cleaned.startsWith("90") && !cleaned.startsWith("+")) {
    return `+${cleaned}`;
  }
  if (cleaned.startsWith("5") && cleaned.length === 10) {
    return `+90${cleaned}`;
  }
  if (cleaned.startsWith("+90")) {
    return cleaned;
  }
  return cleaned;
}

const LEADS_STORAGE_KEY = "tozyapi_leads";

function saveLead(payload: LeadPayload): void {
  try {
    const existing = localStorage.getItem(LEADS_STORAGE_KEY);
    const leads: LeadPayload[] = existing ? JSON.parse(existing) : [];
    leads.push(payload);
    // Keep last 100 leads
    if (leads.length > 100) {
      leads.splice(0, leads.length - 100);
    }
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(leads));
  } catch {
    // Silently fail — localStorage might be full or disabled
  }
}

/**
 * Centralized lead capture hook.
 * Validates phone, stores lead to localStorage, and returns submission state.
 */
export function useLeadCapture(): LeadCaptureResult {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = useCallback(
    async (payload: Omit<LeadPayload, "source" | "timestamp">): Promise<boolean> => {
      setError(null);
      setSuccess(false);

      // Validate phone
      if (!validatePhone(payload.phone)) {
        setError("Geçerli bir telefon numarası giriniz (örn: 05XX XXX XX XX)");
        return false;
      }

      // Validate name
      if (!payload.name.trim() || payload.name.trim().length < 2) {
        setError("Lütfen geçerli bir isim giriniz");
        return false;
      }

      setLoading(true);

      try {
        const fullPayload: LeadPayload = {
          ...payload,
          phone: normalizePhone(payload.phone),
          source: window.location.pathname,
          timestamp: new Date().toISOString(),
        };

        // Save to localStorage (future: send to webhook / API)
        saveLead(fullPayload);

        // TODO: Future webhook integration
        // await fetch("/api/leads", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(fullPayload),
        // });

        setSuccess(true);
        return true;
      } catch {
        setError("Bir hata oluştu. Lütfen tekrar deneyiniz.");
        return false;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { submit, loading, success, error };
}
