import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import TestimonialSlider from "@/components/TestimonialSlider";
import VehicleCard from "@/components/VehicleCard";
import { Button } from "@/components/ui/button";
import { Shield, Award, Headphones } from "lucide-react";
import { vehicles } from "@/data/vehicles";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredVehicles = vehicles.slice(0, 3);

  return (
    <div>
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Ihr Partner für exklusive Fahrzeuge
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bei Nabil Automobile verbinden wir Leidenschaft für Technik mit höchster 
              Kundenzufriedenheit. Jedes Fahrzeug steht für Qualität, Transparenz und Stil. 
              Mit jahrelanger Erfahrung im Premium-Segment beraten wir Sie persönlich und 
              finden gemeinsam Ihr Traumfahrzeug.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Highlights */}
      <section id="highlights" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
      <TestimonialSlider />

      {/* Contact CTA */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
    </div>
  );
};

export default Index;
