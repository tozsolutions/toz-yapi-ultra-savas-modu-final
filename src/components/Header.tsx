import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { products } from "@/data/products";

const navItems = [
  { id: "home", label: "Ana Sayfa" },
  { id: "about", label: "Hakkımızda" },
  { id: "products", label: "Ürünler", hasMega: true },
  { id: "references", label: "Referanslar" },
  { id: "store", label: "Mağaza" },
  { id: "blog", label: "Blog" },
  { id: "faq", label: "S.S.S" },
  { id: "partners", label: "İş Ortakları" },
  { id: "contact", label: "İletişim" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (location.pathname !== "/") return;
      const sections = navItems.map((n) => n.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  const scrollTo = (id: string) => {
    setIsMobileOpen(false);
    setMegaOpen(false);
    if (location.pathname !== "/") {
      navigate("/#" + id);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMegaEnter = () => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };

  const handleMegaLeave = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 200);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-toz-gradient"
      }`}
    >
      <div className="toz-container">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-3">
            <img
              src="/images/logos/tozyapi-logo.webp?v=6"
              alt="Toz Yapı Teknolojileri"
              className={`h-16 w-auto drop-shadow-md transition-all ${
                isScrolled ? "" : "brightness-0 invert"
              }`}
              width="120"
              height="40"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
          </button>

          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={item.hasMega ? handleMegaEnter : undefined}
                onMouseLeave={item.hasMega ? handleMegaLeave : undefined}
              >
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-2 text-[0.95rem] font-medium rounded-md transition-colors flex items-center gap-1 ${
                    activeSection === item.id
                      ? "text-primary bg-primary/10"
                      : isScrolled
                      ? "text-foreground hover:text-primary hover:bg-primary/5"
                      : "text-primary-foreground/90 hover:text-primary-foreground"
                  }`}
                >
                  {item.label}
                  {item.hasMega && <ChevronDown className="w-3 h-3" />}
                </button>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+905367731404"
              className={`hidden md:flex items-center gap-2 text-[0.95rem] font-medium ${
                isScrolled ? "text-primary" : "text-primary-foreground"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>+90 536 773 14 04</span>
            </a>

            <Button
              variant="ghost"
              size="icon"
              className={`xl:hidden ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            >
              {isMobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </Button>
          </div>
        </div>
      </div>

      {megaOpen && (
        <div
          className="hidden xl:block absolute left-0 right-0 top-full bg-background/98 backdrop-blur-lg border-b border-border shadow-xl z-50"
          onMouseEnter={handleMegaEnter}
          onMouseLeave={handleMegaLeave}
        >
          <div className="toz-container py-8">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-5">
              Ürün Gruplarımız
            </h3>
            <div className="grid grid-cols-4 gap-3">
              {products.map((item) => (
                <Link
                  key={item.slug}
                  to={`/urunler/${item.slug}`}
                  onClick={() => setMegaOpen(false)}
                  className="group flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors text-left"
                >
                  <div className="w-14 h-14 rounded-lg overflow-hidden border border-border">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      width="56"
                      height="56"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {isMobileOpen && (
        <div className="xl:hidden bg-background border-t border-border">
          <nav className="toz-container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => {
                    if (item.hasMega) {
                      setMobileProductsOpen(!mobileProductsOpen);
                    } else {
                      scrollTo(item.id);
                    }
                  }}
                  className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium"
                >
                  {item.label}
                </button>
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}