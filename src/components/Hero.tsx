import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useWebsiteData } from "@/context/WebsiteDataContext";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  const { data } = useWebsiteData();
  
  const scrollToCatalog = () => {
    const catalogSection = document.getElementById("highlights");
    catalogSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Full-Screen Background Video */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Minimalistic Content */}
      <div className="relative z-10 container mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="max-w-5xl mx-auto space-y-12"
        >
          <motion.h1
            className="font-display text-6xl md:text-8xl font-light tracking-tight text-white"
          >
            {data?.business_name || "Premium Automobile"}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-24 h-px bg-white mx-auto"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl text-white/80 font-light tracking-wide"
          >
            {data?.tagline || "Exclusive. Elegant. Unique."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="pt-8"
          >
            <Button
              size="lg"
              onClick={scrollToCatalog}
              className="bg-white text-black hover:bg-white/90 px-12 py-8 text-base font-light tracking-wider"
            >
              Discover Vehicles
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
