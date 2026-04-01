import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
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
          {/* Logo */}
          <button onClick={() => scrollTo("home")} className="flex items-center gap-3">
            <img
              src="/images/logos/tozyapi_logo.png?v=2"
              alt="Toz Yapı Teknolojileri"
              className={`h-16 w-auto drop-shadow-md transition-all ${
                isScrolled ? "" : "brightness-0 invert"
              }`}
              width="200"
              height="80"
              loading="eager"
            />
          </button>

          {/* Desktop Nav */}
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
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
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

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+905367731404"
              className={`hidden md:flex items-center gap-2 text-sm font-medium ${
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
            >
              {isMobileOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mega Menu */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
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
                    <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 border border-border">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-background border-t border-border overflow-hidden"
          >
            <nav className="toz-container py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
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
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                      activeSection === item.id
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.label}
                    {item.hasMega && (
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
                    )}
                  </button>
                  {/* Mobile product sub-items */}
                  {item.hasMega && mobileProductsOpen && (
                    <div className="pl-4 border-l-2 border-primary/20 ml-4 mt-1 space-y-1 mb-2">
                      {products.map((p) => (
                        <Link
                          key={p.slug}
                          to={`/urunler/${p.slug}`}
                          onClick={() => setIsMobileOpen(false)}
                          className="flex items-center gap-3 text-left px-4 py-2 rounded-lg text-xs text-foreground hover:bg-muted transition-colors w-full"
                        >
                          <img src={p.image} alt={p.title} className="w-8 h-8 rounded object-cover flex-shrink-0" />
                          <span>{p.title}</span>
                          <ChevronRight className="w-3 h-3 ml-auto text-muted-foreground" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="tel:+905367731404"
                className="flex items-center gap-2 px-4 py-3 text-primary font-medium"
              >
                <Phone className="w-4 h-4" />
                +90 536 773 14 04
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
