import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ReferencesSection from "@/components/ReferencesSection";
import StoreSection from "@/components/StoreSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import PartnersSection from "@/components/PartnersSection";
import PergoCleanSection from "@/components/PergoCleanSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LunaBot from "@/components/LunaBot";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
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
    </div>
  );
};

export default Index;
