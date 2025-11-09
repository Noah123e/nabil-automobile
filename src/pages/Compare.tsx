import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedPage from "@/components/AnimatedPage";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { vehicles } from "@/data/vehicles";
import { ArrowLeft } from "lucide-react";

const Compare = () => {
  const [searchParams] = useSearchParams();
  const ids = searchParams.get("ids")?.split(",") || [];
  const compareVehicles = vehicles.filter((v) => ids.includes(v.id));

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (compareVehicles.length === 0) {
    return (
      <AnimatedPage>
        <div className="pt-32 pb-20 container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-foreground mb-4"
          >
            Keine Fahrzeuge zum Vergleichen ausgewählt
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button asChild>
              <Link to="/catalog">Zum Katalog</Link>
            </Button>
          </motion.div>
        </div>
      </AnimatedPage>
    );
  }

  const comparisonRows = [
    { label: "Preis", getValue: (v: typeof compareVehicles[0]) => formatPrice(v.price) },
    { label: "Marke", getValue: (v: typeof compareVehicles[0]) => v.brand },
    { label: "Modell", getValue: (v: typeof compareVehicles[0]) => v.model },
    { label: "Baujahr", getValue: (v: typeof compareVehicles[0]) => v.year },
    {
      label: "Kilometerstand",
      getValue: (v: typeof compareVehicles[0]) => `${v.mileage.toLocaleString("de-DE")} km`,
    },
    { label: "Leistung", getValue: (v: typeof compareVehicles[0]) => `${v.power} PS` },
    { label: "Kraftstoff", getValue: (v: typeof compareVehicles[0]) => v.fuel },
    { label: "Getriebe", getValue: (v: typeof compareVehicles[0]) => v.transmission },
    { label: "Fahrzeugtyp", getValue: (v: typeof compareVehicles[0]) => v.type },
  ];

  return (
    <AnimatedPage>
      <div className="pt-32 pb-16 container mx-auto px-4">
        {/* Back Button */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Button variant="ghost" asChild className="mb-8 hover:text-primary">
            <Link to="/catalog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zum Katalog
            </Link>
          </Button>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Fahrzeugvergleich
          </h1>
          <p className="text-muted-foreground text-lg">
            Vergleichen Sie bis zu 3 Fahrzeuge nebeneinander
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="bg-card border-border overflow-hidden">
            {/* Vehicle Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-b border-border">
              {compareVehicles.map((vehicle) => (
                <div key={vehicle.id} className="relative aspect-[4/3] border-r border-border last:border-r-0">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.brand} ${vehicle.model}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {vehicle.brand} {vehicle.model}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparison Rows */}
            <div className="divide-y divide-border">
              {comparisonRows.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-3 gap-0"
                >
                  {compareVehicles.map((vehicle, vIndex) => (
                    <div
                      key={vehicle.id}
                      className={`p-4 border-r border-border last:border-r-0 ${
                        index === 0 ? "bg-primary/10" : ""
                      }`}
                    >
                      {vIndex === 0 && (
                        <p className="text-xs text-muted-foreground mb-2 font-semibold uppercase">
                          {row.label}
                        </p>
                      )}
                      <p
                        className={`${
                          index === 0
                            ? "text-xl font-bold text-primary"
                            : "text-foreground font-semibold"
                        }`}
                      >
                        {row.getValue(vehicle)}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-border">
              {compareVehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="p-4 border-r border-border last:border-r-0"
                >
                  <Button
                    asChild
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Link to={`/vehicle/${vehicle.id}`}>Details ansehen</Link>
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default Compare;
