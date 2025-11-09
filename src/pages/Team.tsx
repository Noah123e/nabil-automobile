import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedPage from "@/components/AnimatedPage";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import teamMember1 from "@/assets/team-member-1.jpg";
import greyCarImage from "@/assets/grey-car.jpg";
import porscheBadgeImage from "@/assets/porsche-badge.jpg";

const Team = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const parallaxRef2 = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  });
  
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: parallaxRef2,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y2 = useTransform(scrollYProgress2, [0, 1], ["0%", "30%"]);

  const owner = {
    name: "Nabil Alkubaisi",
    position: "Geschäftsführer & Gründer",
    image: teamMember1,
    email: "nabil@nabil-automobile.de",
    phone: "01578 9502200",
  };

  return (
    <AnimatedPage>
      {/* Hero Section with Large Image */}
      <section ref={parallaxRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img 
            src={greyCarImage} 
            alt="Nabil Automobile" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
        <div className="relative z-10 h-full flex items-center justify-center px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl text-center"
          >
            <h1 className="font-display text-5xl md:text-7xl font-light text-white mb-8 tracking-tight">
              Leidenschaft trifft Expertise
            </h1>
            <div className="w-24 h-px bg-white mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
              Persönliche Beratung auf höchstem Niveau
            </p>
          </motion.div>
        </div>
      </section>

      {/* Owner Profile Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[3/4] overflow-hidden"
            >
              <img
                src={owner.image}
                alt={owner.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
                  {owner.name}
                </h2>
                <p className="text-xl text-white/60 font-light">{owner.position}</p>
              </div>

              <div className="w-16 h-px bg-white/30" />

              <p className="text-lg text-white/80 font-light leading-relaxed">
                Mit über 10 Jahren Erfahrung im Premium-Automobilgeschäft bin ich Ihr 
                persönlicher Ansprechpartner für exklusive Fahrzeuge. Meine Leidenschaft 
                für Automobile und mein Engagement für höchste Kundenzufriedenheit machen 
                jede Beratung zu einem besonderen Erlebnis.
              </p>

              {/* Contact */}
              <div className="space-y-4 pt-4">
                <a
                  href={`mailto:${owner.email}`}
                  className="flex items-center space-x-3 text-white/60 hover:text-white transition-colors group"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-light">{owner.email}</span>
                </a>
                <a
                  href={`tel:${owner.phone.replace(/\s/g, "")}`}
                  className="flex items-center space-x-3 text-white/60 hover:text-white transition-colors group"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-light">{owner.phone}</span>
                </a>
              </div>

              <Button 
                asChild 
                size="lg" 
                className="bg-white text-black hover:bg-white/90 px-12 py-6 font-light tracking-wider mt-8"
              >
                <a href={`mailto:${owner.email}`}>Kontakt aufnehmen</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section with Large Image */}
      <section ref={parallaxRef2} className="relative h-screen overflow-hidden">
        <motion.div style={{ y: y2 }} className="absolute inset-0">
          <img 
            src={porscheBadgeImage} 
            alt="Premium Quality" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
        <div className="relative z-10 h-full flex items-center justify-center px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-4xl text-center"
          >
            <h2 className="font-display text-4xl md:text-6xl font-light text-white mb-8 tracking-tight">
              Unsere Philosophie
            </h2>
            <div className="w-24 h-px bg-white mx-auto mb-12" />
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-8">
              Bei Nabil Automobile steht der Kunde im Mittelpunkt. Wir nehmen uns Zeit für 
              eine ehrliche Beratung und helfen Ihnen, das perfekte Fahrzeug zu finden.
            </p>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
              Qualität, Transparenz und persönlicher Service sind nicht nur Werte – 
              sie sind die Grundlage unserer täglichen Arbeit.
            </p>
          </motion.div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Team;
