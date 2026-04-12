import { useState, useEffect } from "react";
import { X, MessageCircle, ArrowRight } from "lucide-react";

const STORAGE_KEY = "tozyapi_exit_intent_shown";
const WHATSAPP_NUMBER = "905367731404";
const SESSION_DURATION_MS = 30 * 60 * 1000; // 30 minutes

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Only on desktop
    if (window.innerWidth < 768) return;

    // Check if already shown in this session
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const { timestamp } = JSON.parse(stored);
      if (Date.now() - timestamp < SESSION_DURATION_MS) {
        return;
      }
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) {
        setVisible(true);
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ timestamp: Date.now() }));
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [dismissed]);

  const handleClose = () => {
    setVisible(false);
    setDismissed(true);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
    >
      <div
        className="relative mx-4 w-full max-w-lg rounded-2xl bg-card shadow-2xl border border-border overflow-hidden animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative top bar */}
        <div className="h-1.5 bg-gradient-to-r from-primary to-toz-turquoise" />

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Kapat"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="p-8 text-center">
          {/* Icon */}
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <svg
              className="h-8 w-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>
          </div>

          <h2
            id="exit-intent-title"
            className="mb-2 text-2xl font-bold text-foreground font-display"
          >
            Ayrılmadan Önce Teklif Alın!
          </h2>
          <p className="mb-6 text-muted-foreground leading-relaxed">
            Panjur, kepenk, pergola ve otomatik kapı çözümlerimiz için
            <strong className="text-foreground"> ücretsiz fiyat teklifi</strong> alın.
            Uzman ekibimiz en kısa sürede size dönüş yapacaktır.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/teklif-hesapla"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-toz-purple-light hover:shadow-xl hover:shadow-primary/30"
            >
              Ücretsiz Teklif Al
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Merhaba! Toz Yapı hizmetleri hakkında bilgi almak istiyorum.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-green-500 px-6 py-3.5 text-lg font-semibold text-green-600 transition-all duration-200 hover:bg-green-500 hover:text-white"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp ile Yaz
            </a>
          </div>

          {/* Trust signal */}
          <p className="mt-4 text-xs text-muted-foreground">
            18+ yıl deneyim • 500+ tamamlanan proje • Ücretsiz keşif
          </p>
        </div>
      </div>
    </div>
  );
}
