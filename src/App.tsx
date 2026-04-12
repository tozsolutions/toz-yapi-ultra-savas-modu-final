import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnalyticsProvider } from "./contexts/AnalyticsContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import BlogDetail from "./pages/BlogDetail.tsx";
import NotFound from "./pages/NotFound.tsx";
import AdminDashboard from "./pages/admin/Dashboard.tsx";
import TeklifHesapla from "./pages/TeklifHesapla.tsx";
import TeknikDestek from "./pages/TeknikDestek.tsx";
import CallbackPage from "./pages/CallbackPage.tsx";
import Katalog from "./pages/Katalog.tsx";
import DistrictService from "./pages/DistrictService.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AnalyticsProvider trackingId={import.meta.env.VITE_GA_TRACKING_ID}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/urunler/:slug" element={<ProductDetail />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/teklif-hesapla" element={<TeklifHesapla />} />
              <Route path="/teknik-destek" element={<TeknikDestek />} />
              <Route path="/sizi-arayalim" element={<CallbackPage />} />
              <Route path="/katalog" element={<Katalog />} />
              <Route path="/:district/:service" element={<DistrictService />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </AnalyticsProvider>
  </QueryClientProvider>
);

export default App;
