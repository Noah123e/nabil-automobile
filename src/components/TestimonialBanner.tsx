import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Michael Smith",
    rating: 5,
    text: "Excellent service! From the first contact to pickup – everything was perfect.",
    role: "Mercedes S-Class Customer",
  },
  {
    id: 2,
    name: "Sarah Weber",
    rating: 5,
    text: "Top consultation, honest prices, and a true luxury experience when buying.",
    role: "BMW M5 Customer",
  },
  {
    id: 3,
    name: "Thomas Miller",
    rating: 5,
    text: "Very professional team with genuine passion for automobiles.",
    role: "Porsche 911 Customer",
  },
  {
    id: 4,
    name: "Anna Becker",
    rating: 5,
    text: "Fantastic experience! Never felt pressured and found my dream car.",
    role: "Audi RS6 Customer",
  },
  {
    id: 5,
    name: "Marcus Klein",
    rating: 5,
    text: "Best dealership experience of my life. Highly recommended!",
    role: "AMG GT Customer",
  },
];

const TestimonialBanner = () => {
  // Duplicate testimonials for seamless loop
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="pt-12 pb-28 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trust and satisfaction are the foundation of our work
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