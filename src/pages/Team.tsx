import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
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
    offset: ["end end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y2 = useTransform(scrollYProgress2, [0, 1], ["0%", "30%"]);

  const owner = {
    name: "Alex",
    position: "CEO & Founder",
    image: teamMember1,
    email: "alex@alex-automobile.com",
    phone: "+1 555 950 2200",
  };

  return (
    <AnimatedPage>
      {/* Hero Section with Large Image */}
      <section ref={parallaxRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img 
            src={greyCarImage} 
            alt="Alex Automobile" 
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
              Passion Meets Expertise
            </h1>
            <div className="w-24 h-px bg-white mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
              Personal consultation at the highest level
            </p>
          </motion.div>
        </div>
      </section>

      {/* Owner Profile Section */}
      <section className="py-20 bg-black">
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
                With over 10 years of experience in the premium automotive business, I am your 
                personal contact for exclusive vehicles. My passion for automobiles and my 
                commitment to the highest customer satisfaction make every consultation 
                a special experience.
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
                <a href={`mailto:${owner.email}`}>Get in Touch</a>
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
              Our Philosophy
            </h2>
            <div className="w-24 h-px bg-white mx-auto mb-12" />
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-8">
              At Alex Automobile, the customer is at the center. We take time for 
              honest advice and help you find the perfect vehicle.
            </p>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-12">
              Quality, transparency, and personal service are not just values – 
              they are the foundation of our daily work.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-black hover:bg-white/90 px-12 py-6 font-light tracking-wider"
            >
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Team;