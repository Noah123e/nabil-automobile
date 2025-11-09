import { motion } from "framer-motion";
import AnimatedPage from "@/components/AnimatedPage";
import { Card } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import teamMember1 from "@/assets/team-member-1.jpg";

const Team = () => {
  const owner = {
    name: "Nabil Alkubaisi",
    position: "Geschäftsführer",
    image: teamMember1,
    description: "Mit über 10 Jahren Erfahrung im Premium-Automobilgeschäft ist Nabil Alkubaisi Ihr persönlicher Ansprechpartner für exklusive Fahrzeuge. Seine Leidenschaft für Automobile und sein Engagement für höchste Kundenzufriedenheit machen jede Beratung zu einem besonderen Erlebnis.",
    email: "nabil@nabil-automobile.de",
    phone: "01578 9502200",
  };

  return (
    <AnimatedPage>
      {/* Header */}
      <section className="pt-32 pb-12 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ihr Ansprechpartner
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Persönliche Beratung auf höchstem Niveau – direkt vom Geschäftsführer.
          </p>
        </motion.div>
      </section>

      {/* Owner Profile */}
      <section className="pb-20 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="group bg-card border-border overflow-hidden hover:border-primary/50 transition-all">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={owner.image}
                    alt={owner.name}
                    className="w-full h-full object-cover object-[center_35%] group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center space-y-6">
                  <div>
                    <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                      {owner.name}
                    </h2>
                    <p className="text-primary font-semibold text-lg">{owner.position}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{owner.description}</p>

                  {/* Contact */}
                  <div className="space-y-3 pt-4 border-t border-border">
                    <a
                      href={`mailto:${owner.email}`}
                      className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      <span>{owner.email}</span>
                    </a>
                    <a
                      href={`tel:${owner.phone.replace(/\s/g, "")}`}
                      className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      <span>{owner.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Unsere Philosophie
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Bei Nabil Automobile steht der Kunde im Mittelpunkt. Wir nehmen uns Zeit für 
              eine ehrliche Beratung und helfen Ihnen, das perfekte Fahrzeug zu finden. 
              Unser Team besteht aus echten Automobil-Enthusiasten, die ihre Leidenschaft 
              mit Ihnen teilen möchten.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
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
