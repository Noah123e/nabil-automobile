import { motion } from "framer-motion";
import AnimatedPage from "@/components/AnimatedPage";
import Hero from "@/components/Hero";
import TestimonialBanner from "@/components/TestimonialBanner";
import VehicleCard from "@/components/VehicleCard";
import { Button } from "@/components/ui/button";
import { Shield, Award, Headphones } from "lucide-react";
import { vehicles } from "@/data/vehicles";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredVehicles = vehicles.slice(0, 3);

  return (
    <AnimatedPage>
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="relative py-32 container mx-auto px-4 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[shine_3s_linear_infinite]">
                  Ihr Partner für exklusive Fahrzeuge
                </span>
              </h2>
            </motion.div>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
              Bei Nabil Automobile verbinden wir Leidenschaft für Technik mit höchster 
              Kundenzufriedenheit. Jedes Fahrzeug steht für Qualität, Transparenz und Stil.
            </p>
            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
              Mit jahrelanger Erfahrung im Premium-Segment beraten wir Sie persönlich und 
              finden gemeinsam Ihr Traumfahrzeug.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Qualität & Sicherheit",
                text: "Alle Fahrzeuge werden sorgfältig geprüft und sind TÜV-zertifiziert",
              },
              {
                icon: Award,
                title: "Premium-Auswahl",
                text: "Exklusive Fahrzeuge von Mercedes, BMW, Audi, Porsche und mehr",
              },
              {
                icon: Headphones,
                title: "Persönlicher Service",
                text: "Individuelle Beratung, Finanzierung und Rundum-Betreuung",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.15)] hover:-translate-y-2"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                
                <div className="relative">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-xl mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Highlights */}
      <section id="highlights" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Premium-Fahrzeuge
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Entdecken Sie unsere handverlesene Auswahl an Luxusfahrzeugen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/catalog">Alle Fahrzeuge ansehen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialBanner />

      {/* Contact CTA */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-card to-secondary border border-border rounded-2xl p-12 text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Bereit für Ihr Traumfahrzeug?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Vereinbaren Sie noch heute einen unverbindlichen Beratungstermin oder besuchen 
            Sie uns in unserem Showroom in Senden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact">Jetzt Kontakt aufnehmen</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <a href="tel:015789502200">01578 9502200</a>
            </Button>
          </div>
        </motion.div>
      </section>
    </AnimatedPage>
  );
};

export default Index;
