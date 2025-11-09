import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Michael Schmidt",
    rating: 5,
    text: "Exzellenter Service! Vom Erstkontakt bis zur Abholung – alles perfekt.",
    role: "Mercedes S-Klasse Kunde",
  },
  {
    id: 2,
    name: "Sarah Weber",
    rating: 5,
    text: "Top Beratung, ehrliche Preise und ein echtes Luxusgefühl beim Kauf.",
    role: "BMW M5 Kundin",
  },
  {
    id: 3,
    name: "Thomas Müller",
    rating: 5,
    text: "Sehr professionelles Team mit echter Leidenschaft für Automobile.",
    role: "Porsche 911 Kunde",
  },
  {
    id: 4,
    name: "Anna Becker",
    rating: 5,
    text: "Fantastische Erfahrung! Wurde nie unter Druck gesetzt und habe mein Traumauto gefunden.",
    role: "Audi RS6 Kundin",
  },
  {
    id: 5,
    name: "Markus Klein",
    rating: 5,
    text: "Beste Autohaus-Erfahrung meines Lebens. Absolute Empfehlung!",
    role: "AMG GT Kunde",
  },
];

const TestimonialBanner = () => {
  // Duplicate testimonials for seamless loop
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="pt-12 pb-16 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Vertrauen und Zufriedenheit sind die Grundlage unserer Arbeit
          </p>
        </div>
      </div>

      {/* Scrolling Banner */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-secondary/30 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-secondary/30 to-transparent z-10" />
        
        <div className="flex animate-scroll-banner">
          {allTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-[400px] mx-4"
            >
              <div className="bg-card border border-border rounded-lg p-6 h-full">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 line-clamp-3">
                  "{testimonial.text}"
                </p>
                <div className="mt-auto">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialBanner;
