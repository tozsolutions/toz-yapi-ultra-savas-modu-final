import { Suspense, lazy, useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ScrollToTop from "@/components/ScrollToTop";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const ReferencesSection = lazy(() => import("@/components/ReferencesSection"));
const StoreSection = lazy(() => import("@/components/StoreSection"));
const BlogSection = lazy(() => import("@/components/BlogSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const PartnersSection = lazy(() => import("@/components/PartnersSection"));
const PergoCleanSection = lazy(() => import("@/components/PergoCleanSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));
const LazyLunaBot = lazy(() => import("@/components/LunaBot"));

const Index = () => {
  const [loadBot, setLoadBot] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadBot(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />

      <Suspense fallback={<div className="px-4 py-8 text-sm">İçerik yükleniyor...</div>}>
        <ReferencesSection />
        <StoreSection />
        <BlogSection />
        <FAQSection />
        <PartnersSection />
        <PergoCleanSection />
        <ContactSection />
        <Footer />
      </Suspense>
      {loadBot && (
        <Suspense fallback={null}>
          <LazyLunaBot />
        </Suspense>
      )}
      <ScrollToTop />
      <StickyMobileCTA />
      <WhatsAppFloat />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;