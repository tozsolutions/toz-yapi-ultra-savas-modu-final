import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { useLeadCapture } from "@/hooks/useLeadCapture";

const SERVICES = [
  "Panjur Sistemleri",
  "Kepenk Sistemleri",
  "Pergola & Tente",
  "Rolling Roof",
  "Otomatik Kapılar",
  "Giyotin Cam Sistemleri",
  "Kış Bahçesi",
  "Sundurma & Carport",
  "Bahçe & Çit Sistemleri",
  "Sineklik Sistemleri",
  "Dış Cephe Jaluzisi",
  "Diğer",
];

const WHATSAPP_NUMBER = "905367731404";

export default function QuickQuote() {
  const [service, setService] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { submit, loading, error } = useLeadCapture();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!service || !phone || !city) return;

    const ok = await submit({ name: "", phone, service, city, message: "" });
    if (ok) {
      setSubmitted(true);
      // Redirect to WhatsApp with pre-filled message
      const text = encodeURIComponent(
        `Merhaba! ${service} için teklif almak istiyorum. Şehir: ${city}. Telefon: ${phone}`
      );
      setTimeout(() => {
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
      }, 800);
    }
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-3 rounded-xl bg-green-500/10 border border-green-500/30 px-5 py-4">
        <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
        <p className="text-sm font-medium text-green-600 dark:text-green-400">
          Talebiniz alındı! WhatsApp ile devam ediyoruz...
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Service dropdown */}
        <div className="flex-1 relative">
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
            aria-label="Hizmet seçimi"
            className="w-full rounded-xl border border-border bg-card/80 backdrop-blur-sm px-4 py-3.5 text-sm text-foreground appearance-none cursor-pointer pr-10 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-transparent transition-all"
          >
            <option value="" disabled>
              Hizmet seçiniz...
            </option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Phone input */}
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="Telefon: 05XX XXX XX XX"
          aria-label="Telefon numarası"
          className="flex-1 rounded-xl border border-border bg-card/80 backdrop-blur-sm px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-transparent transition-all"
        />

        {/* City input */}
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
          placeholder="Şehir"
          aria-label="Şehir"
          className="w-full sm:w-36 rounded-xl border border-border bg-card/80 backdrop-blur-sm px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-transparent transition-all"
        />

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading || !service || !phone || !city}
          className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-toz-purple-light hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg whitespace-nowrap"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Gönderiliyor...
            </>
          ) : (
            <>
              30 Saniyede Teklif Al
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </div>

      {/* Error message */}
      {error && (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      )}

      {/* Subtle trust text */}
      <p className="mt-2 text-xs text-muted-foreground text-center sm:text-left">
        Bilgileriniz güvende. 30 saniye içinde teklifiniz hazırlanır.
      </p>
    </form>
  );
}
