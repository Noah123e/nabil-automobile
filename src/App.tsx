import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WebsiteDataProvider, useWebsiteData } from "@/context/WebsiteDataContext";
import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import VehicleDetail from "./pages/VehicleDetail";
import Compare from "./pages/Compare";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { Loader2 } from "lucide-react";

const queryClient = new QueryClient();

const LoadingSpinner = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center space-y-4">
      <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

const ErrorPage = ({ error }: { error: string }) => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center space-y-4 max-w-md px-8">
      <h1 className="font-display text-4xl font-light text-foreground">Website Not Found</h1>
      <p className="text-muted-foreground">{error}</p>
      <p className="text-sm text-muted-foreground">
        Please check the URL and try again.
      </p>
    </div>
  </div>
);

const AppContent = () => {
  const { loading, error } = useWebsiteData();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-background">
        <Navigation />
        <Routes>
          <Route path="/:slug" element={<Index />} />
          <Route path="/:slug/catalog" element={<Catalog />} />
          <Route path="/:slug/vehicle/:id" element={<VehicleDetail />} />
          <Route path="/:slug/compare" element={<Compare />} />
          <Route path="/:slug/team" element={<Team />} />
          <Route path="/:slug/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <WebsiteDataProvider>
        <AppContent />
      </WebsiteDataProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
