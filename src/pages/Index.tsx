import { Suspense, lazy } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";

const ReferencesSection = lazy(() => import("@/components/ReferencesSection"));
const StoreSection = lazy(() => import("@/components/StoreSection"));
const BlogSection = lazy(() => import("@/components/BlogSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const PartnersSection = lazy(() => import("@/components/PartnersSection"));
const PergoCleanSection = lazy(() => import("@/components/PergoCleanSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));
const LunaBot = lazy(() => import("@/components/LunaBot"));
const ScrollToTop = lazy(() => import("@/components/ScrollToTop"));

const Index = () => {
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
        <LunaBot />
        <ScrollToTop />
      </Suspense>
    </div>
  );
};

export default Index;