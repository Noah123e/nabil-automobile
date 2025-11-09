import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedPage from "@/components/AnimatedPage";
import Hero from "@/components/Hero";
import TestimonialBanner from "@/components/TestimonialBanner";
import VehicleCard from "@/components/VehicleCard";
import { Button } from "@/components/ui/button";
import { Shield, Award, Headphones } from "lucide-react";
import { vehicles } from "@/data/vehicles";
import { Link } from "react-router-dom";
import redOpelImage from "@/assets/red-opel.jpg";
import mercedesAmgImage from "@/assets/mercedes-amg.jpg";

const Index = () => {
  const featuredVehicles = vehicles.slice(0, 3);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const parallaxRef2 = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  });
  
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: parallaxRef2,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y2 = useTransform(scrollYProgress2, [0, 1], ["0%", "30%"]);

  return (
    <AnimatedPage>
      
      {/* Hero Section */}
      <Hero />

      {/* Large Image Section with Text Overlay and Parallax */}
      <section ref={parallaxRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img 
            src={redOpelImage} 
            alt="Premium Vehicle" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
        <div className="relative z-10 h-full flex items-center justify-center px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-4xl text-center"
          >
            <h2 className="font-display text-5xl md:text-7xl font-light text-white mb-8 tracking-tight">
              Ihr Partner für exklusive Fahrzeuge
            </h2>
            <div className="w-24 h-px bg-white mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
              Bei Nabil Automobile verbinden wir Leidenschaft für Technik mit höchster 
              Kundenzufriedenheit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section - Minimalistic */}
      <section className="py-24 container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                icon: Shield,
                title: "Qualität",
                text: "TÜV-zertifiziert",
              },
              {
                icon: Award,
                title: "Premium",
                text: "Exklusive Auswahl",
              },
              {
                icon: Headphones,
                title: "Service",
                text: "Persönliche Betreuung",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center space-y-6"
              >
                <item.icon className="w-10 h-10 text-white mx-auto" />
                <h3 className="font-light text-foreground text-2xl tracking-wide">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-light">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Highlights */}
      <section id="highlights" className="py-24 bg-black">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-5xl md:text-7xl font-light text-foreground mb-6 tracking-tight">
              Unsere Fahrzeuge
            </h2>
            <div className="w-24 h-px bg-white mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featuredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 px-12 py-6 font-light tracking-wider">
              <Link to="/catalog">Alle Fahrzeuge ansehen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialBanner />

      {/* Contact CTA - Full Width Image */}
      <section ref={parallaxRef2} className="relative h-[70vh] overflow-hidden">
        <motion.div style={{ y: y2 }} className="absolute inset-0">
          <img 
            src={mercedesAmgImage} 
            alt="Contact" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 h-full flex items-center justify-center px-8"
        >
          <div className="text-center max-w-4xl">
            <h2 className="font-display text-4xl md:text-6xl font-light text-white mb-8 tracking-tight">
              Bereit für Ihr Traumfahrzeug?
            </h2>
            <div className="w-24 h-px bg-white mx-auto mb-12" />
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 px-12 py-6 font-light tracking-wider">
                <Link to="/contact">Kontakt aufnehmen</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-12 py-6 font-light tracking-wider">
                <a href="tel:015789502200">01578 9502200</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </AnimatedPage>
  );
};

export default Index;
