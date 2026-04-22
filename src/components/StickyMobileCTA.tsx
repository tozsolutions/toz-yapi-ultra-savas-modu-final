import { Phone, MessageCircle, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-md border-t border-border shadow-lg">
      <div className="flex items-center justify-around py-3">
        <a
          href="tel:+905367731404"
          className="flex flex-col items-center gap-1 text-primary hover:text-toz-purple-light transition-colors"
          aria-label="Hemen ara"
        >
          <Phone className="w-6 h-6" />
          <span className="text-[0.65rem] font-medium">Hemen Ara</span>
        </a>

        <a
          href="https://wa.me/905367731404"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-green-600 hover:text-green-700 transition-colors"
          aria-label="WhatsApp ile yazın"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="text-[0.65rem] font-medium">WhatsApp</span>
        </a>

        <Link
          to="/teklif-hesapla"
          className="flex flex-col items-center gap-1 text-primary hover:text-toz-purple-light transition-colors"
          aria-label="Fiyat hesaplayıcı"
        >
          <Calculator className="w-6 h-6" />
          <span className="text-[0.65rem] font-medium">Fiyat Hesapla</span>
        </Link>
      </div>
    </div>
  );
}
