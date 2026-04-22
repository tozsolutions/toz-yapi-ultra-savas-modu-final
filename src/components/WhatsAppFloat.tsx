import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "905367731404";

const PAGE_MESSAGES: Record<string, string> = {
  "/": "Merhaba! Toz Yapi hizmetleri hakkında bilgi almak istiyorum.",
  "/urunler": "Ürünleriniz hakkında detaylı bilgi almak istiyorum.",
  "/hakkimizda": "Firmanız ve hizmetleriniz hakkında bilgi almak istiyorum.",
  "/iletisim": "Sizinle iletişime geçmek istiyorum.",
  "/blog": "Blog yazılarınız hakkında konuşmak istiyorum.",
};

const SECTION_MESSAGES: Record<string, { keyword: string; message: string }> = {
  panjur: { keyword: "panjur", message: "Panjur sistemleriniz hakkında bilgi almak istiyorum." },
  kepenk: { keyword: "kepenk", message: "Kepen sistemleriniz hakkında bilgi almak istiyorum." },
  pergola: { keyword: "pergola", message: "Pergola sistemleriniz hakkında bilgi almak istiyorum." },
  "otomatik-kapi": { keyword: "otomatik", message: "Otomatik kapı sistemleriniz hakkında bilgi almak istiyorum." },
  "cam-sistemleri": { keyword: "cam", message: "Cam sistemleriniz hakkında bilgi almak istiyorum." },
  teklif: { keyword: "teklif", message: "Fiyat teklifi almak istiyorum." },
};

function getContextMessage(): string {
  const pathname = window.location.pathname;

  // Check explicit page routes first
  const trimmed = pathname.replace(/\/$/, "") || "/";
  if (PAGE_MESSAGES[trimmed]) {
    return PAGE_MESSAGES[trimmed];
  }

  // Check URL hash for section context
  const hash = window.location.hash.replace("#", "").toLowerCase();
  for (const key of Object.values(SECTION_MESSAGES)) {
    if (hash.includes(key.keyword)) {
      return key.message;
    }
  }

  // Check path segments for product context
  for (const key of Object.values(SECTION_MESSAGES)) {
    if (pathname.includes(key.keyword)) {
      return key.message;
    }
  }

  return PAGE_MESSAGES["/"];
}

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [contextMessage, setContextMessage] = useState("");

  useEffect(() => {
    setContextMessage(getContextMessage());
  }, []);

  // Update context message on route change
  useEffect(() => {
    const handler = () => setContextMessage(getContextMessage());
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);

  const handleClick = () => {
    const encoded = encodeURIComponent(contextMessage || getContextMessage());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="fixed bottom-[5.5rem] right-6 z-[45] flex flex-col items-center"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip */}
      <div
        className={`mb-2 whitespace-nowrap rounded-lg bg-toz-anthracite px-3 py-1.5 text-sm font-medium text-white shadow-lg transition-all duration-200 ${
          showTooltip ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none"
        }`}
      >
        WhatsApp ile Yazın
        {/* Tooltip arrow */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-toz-anthracite rotate-45" />
      </div>

      {/* Button */}
      <button
        onClick={handleClick}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600 hover:shadow-xl whatsapp-float-pulse"
        aria-label="WhatsApp ile iletişime geç"
      >
        <MessageCircle className="h-7 w-7" />
      </button>
    </div>
  );
}
