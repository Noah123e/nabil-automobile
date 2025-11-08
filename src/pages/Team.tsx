import { motion } from "framer-motion";
import AnimatedPage from "@/components/AnimatedPage";
import { Card } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import teamMember1 from "@/assets/team-member-1.jpg";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Nabil Alkubaisi",
      position: "Geschäftsführer & Verkaufsleitung",
      image: teamMember1,
      description: "Experte für Premium-Fahrzeuge mit über 10 Jahren Erfahrung",
      email: "nabil@nabil-automobile.de",
      phone: "01578 9502200",
    },
    {
      id: 2,
      name: "Michael Schneider",
      position: "Verkaufsberater",
      image: teamMember1,
      description: "Spezialist für Mercedes-Benz und Sportwagen",
      email: "michael@nabil-automobile.de",
      phone: "01578 9502201",
    },
    {
      id: 3,
      name: "Sarah Weber",
      position: "Finanzierungsberatung",
      image: teamMember1,
      description: "Ihre Expertin für maßgeschneiderte Finanzierungslösungen",
      email: "sarah@nabil-automobile.de",
      phone: "01578 9502202",
    },
  ];

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
            Unser Team
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Lernen Sie die Menschen hinter Nabil Automobile kennen. 
            Leidenschaft, Expertise und persönlicher Service – das ist unser Versprechen.
          </p>
        </motion.div>
      </section>

      {/* Team Members */}
      <section className="pb-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="group bg-card border-border overflow-hidden hover:border-primary/50 transition-all">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold">{member.position}</p>
                  </div>

                  <p className="text-muted-foreground text-sm">{member.description}</p>

                  {/* Contact */}
                  <div className="space-y-2 pt-4 border-t border-border">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{member.email}</span>
                    </a>
                    <a
                      href={`tel:${member.phone.replace(/\s/g, "")}`}
                      className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{member.phone}</span>
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
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
