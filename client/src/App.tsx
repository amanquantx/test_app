import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { MotionConfig } from "framer-motion";
import { useEffect } from "react";
import NotFound from "@/pages/not-found";

import Home from "@/pages/Home";
import EBeamServicesIndia from "@/pages/EBeamServicesIndia";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import HowItWorks from "@/pages/HowItWorks";
import Industries, { MedicalDevices, Polymers, Gemstones } from "@/pages/Industries";
import GemstoneEnhancement from "@/pages/GemstoneEnhancement";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

const SterilizationPage = () => <MedicalDevices />;
const CrosslinkingPage   = () => <Polymers />;
const ProcessingPage     = () => <Polymers />;

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/e-beam-services-india" component={EBeamServicesIndia} />
        <Route path="/services" component={Services} />
        <Route path="/services/e-beam-sterilization" component={SterilizationPage} />
        <Route path="/services/electron-beam-processing" component={ProcessingPage} />
        <Route path="/services/polymer-crosslinking" component={CrosslinkingPage} />
        <Route path="/industries" component={Industries} />
        <Route path="/industries/medical-devices" component={MedicalDevices} />
        <Route path="/industries/polymers-plastics" component={Polymers} />
        <Route path="/industries/gemstones" component={Gemstones} />
        <Route path="/services/gemstone-enhancement" component={GemstoneEnhancement} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App({ helmetContext }: { helmetContext?: Record<string, unknown> } = {}) {
  return (
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <MotionConfig reducedMotion="user">
            <Toaster />
            <Router />
          </MotionConfig>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
