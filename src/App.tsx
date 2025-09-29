import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { Chatbot } from "./components/Chatbot";
import React, { useEffect, useState } from "react";
import { pageview } from "./lib/ga";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Apply from "./pages/Apply";
import BlogDetails from "./pages/BlogDetails";
import PersonalAppPage from "./pages/personal-app";
import HappinessMindsetPage from "./pages/happiness-mindset";
import ServiceDetail from "./pages/ServiceDetail"; // 🚀 NEW
import SelectedCandidates from "./pages/SelectedCandidates"; // 🎉 NEW

const queryClient = new QueryClient();

function AppWithGA() {
  const location = useLocation();
  useEffect(() => {
    pageview(location.pathname + location.search);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/apply" element={<Apply />} />
      <Route path="/selected-candidates" element={<SelectedCandidates />} />
      <Route path="/blog/tech-trends-2025" element={<BlogDetails />} />
      <Route path="/personal-app" element={<PersonalAppPage />} />
      <Route path="/happiness-mindset" element={<HappinessMindsetPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#18181b] via-[#8B5CF6] to-[#18181b] animate-fade-in-out">
          <div className="flex flex-col items-center gap-4">
            <img
              src="/DST_logo.png"
              alt="Damodara Smart Tech Logo"
              className="w-24 h-24 rounded-full shadow-2xl animate-bounce-slow"
            />
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide animate-gradient-text bg-gradient-to-r from-white via-[#8B5CF6] to-white bg-clip-text text-transparent">
              Welcome to Damodara Smart Tech
            </h1>
            <span className="text-base md:text-lg text-white/80 animate-fade-in">
              Empowering Your Digital Journey...
            </span>
          </div>
        </div>
      )}

      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <AppWithGA />
              <Chatbot />
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
