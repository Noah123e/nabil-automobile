import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Michael Schmidt",
    rating: 5,
    text: "Exzellenter Service! Vom Erstkontakt bis zur Abholung – alles perfekt. Das Team hat sich viel Zeit genommen und alle Fragen beantwortet.",
    role: "Mercedes S-Klasse Kunde",
  },
  {
    id: 2,
    name: "Sarah Weber",
    rating: 5,
    text: "Top Beratung, ehrliche Preise und ein echtes Luxusgefühl beim Kauf. Ich wurde nie unter Druck gesetzt und habe mein Traumauto gefunden.",
    role: "BMW M5 Kundin",
  },
  {
    id: 3,
    name: "Thomas Müller",
    rating: 5,
    text: "Sehr professionelles Team mit echter Leidenschaft für Automobile. Die Fahrzeugübergabe war ein Erlebnis. Absolut empfehlenswert!",
    role: "Porsche 911 Kunde",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Vertrauen und Zufriedenheit sind die Grundlage unserer Arbeit
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-card border-border p-8 md:p-12">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-foreground text-center mb-8 font-light leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="text-center">
                <p className="font-semibold text-foreground text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
