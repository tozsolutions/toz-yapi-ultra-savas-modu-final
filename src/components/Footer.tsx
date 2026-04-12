import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Hakkımızda", id: "about" },
  { label: "Ürünler", id: "products" },
  { label: "Referanslar", id: "references" },
  { label: "Online Mağaza", id: "store" },
  { label: "Blog", id: "blog" },
  { label: "İletişim", id: "contact" },
];

const serviceLinks = [
  { label: "Fiyat Hesaplayıcı", path: "/teklif-hesapla" },
  { label: "7/24 Teknik Destek", path: "/teknik-destek" },
  { label: "Sizi Arayalım", path: "/sizi-arayalim" },
];

const productLinks = [
  "Panjur Sistemleri",
  "Kepenk Sistemleri",
  "Pergola & Tente",
  "Otomatik Kapılar",
  "Giyotin Cam",
  "Akıllı Sistemler",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-toz-gradient text-primary-foreground">
      <div className="toz-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src="/images/logos/tozyapi-logo.webp?v=6" alt="Toz Yapı Teknolojileri" className="h-16 mb-4 object-contain" width="120" height="40" loading="lazy" decoding="async" />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              2008'den bu yana yapı teknolojileri sektöründe yenilikçi ve kaliteli çözümler sunan güvenilir markadır.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Linkedin, label: "LinkedIn" }
              ].map(({ Icon, label }, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-primary/60 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/80">
              {quickLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="hover:text-primary-foreground transition-colors cursor-pointer"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-2.5">
              {serviceLinks.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  className="block text-sm text-primary hover:underline"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Ürün Grupları</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/80">
              {productLinks.map((l) => (
                <li key={l}>
                  <button
                    onClick={() => scrollTo("products")}
                    className="hover:text-primary-foreground transition-colors cursor-pointer"
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">İletişim</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Timko İş Merkezi, Çamlıca Mah. Anadolu Bulvarı, Ğ Blok, İdil Sok. V8, Kat 1, 06200 Yenimahalle/Ankara</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+905367731404" className="hover:text-primary-foreground">
                  +90 536 773 14 04
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:merhaba@tozyapi.com.tr" className="hover:text-primary-foreground">
                  merhaba@tozyapi.com.tr
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Design credit */}
      <div className="border-t border-primary-foreground/10">
        <div className="toz-container py-6 flex flex-col items-center gap-3">
          <p className="text-xs text-primary-foreground/50">Site tasarımı ve kreatif üretim</p>
          <img src="/images/logos/designer-logo.webp?v=6" alt="Toz Eco Solutions" className="h-8 w-auto opacity-70" width="120" height="32" loading="lazy" decoding="async" />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="toz-container py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-primary-foreground/50">
          <span>© {currentYear} Toz Yapı Teknolojileri. Tüm hakları saklıdır.</span>
          <div className="flex gap-4">
            <button className="hover:text-primary-foreground cursor-pointer">Gizlilik Politikası</button>
            <button className="hover:text-primary-foreground cursor-pointer">Kullanım Koşulları</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
