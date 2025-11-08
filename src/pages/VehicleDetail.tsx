import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import FinanceCalculator from "@/components/FinanceCalculator";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { vehicles } from "@/data/vehicles";
import { ArrowLeft, Phone, Mail, Calendar, Gauge, Fuel, Settings } from "lucide-react";

const VehicleDetail = () => {
  const { id } = useParams();
  const vehicle = vehicles.find((v) => v.id === id);

  if (!vehicle) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Fahrzeug nicht gefunden</h1>
          <Button asChild>
            <Link to="/catalog">Zurück zum Katalog</Link>
          </Button>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="pt-32 pb-20 container mx-auto px-4">
        {/* Back Button */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Button variant="ghost" asChild className="mb-8 hover:text-primary">
            <Link to="/catalog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zum Katalog
            </Link>
          </Button>
        </motion.div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Image */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src={vehicle.image}
                alt={`${vehicle.brand} ${vehicle.model}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-4 py-2 rounded-full font-semibold">
                {vehicle.condition}
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
                {vehicle.brand} {vehicle.model}
              </h1>
              <p className="text-3xl font-bold text-primary">{formatPrice(vehicle.price)}</p>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card border-border p-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Erstzulassung</p>
                    <p className="font-semibold text-foreground">{vehicle.year}</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card border-border p-4">
                <div className="flex items-center space-x-3">
                  <Gauge className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Kilometerstand</p>
                    <p className="font-semibold text-foreground">
                      {vehicle.mileage.toLocaleString("de-DE")} km
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card border-border p-4">
                <div className="flex items-center space-x-3">
                  <Settings className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Leistung</p>
                    <p className="font-semibold text-foreground">{vehicle.power} PS</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card border-border p-4">
                <div className="flex items-center space-x-3">
                  <Fuel className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Kraftstoff</p>
                    <p className="font-semibold text-foreground">{vehicle.fuel}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href="tel:015789502200">
                  <Phone className="w-4 h-4 mr-2" />
                  Jetzt anrufen
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="flex-1 border-primary text-primary hover:bg-primary/10"
              >
                <Link to="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Anfrage senden
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Details Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="w-full bg-card border border-border">
                  <TabsTrigger value="description" className="flex-1">
                    Beschreibung
                  </TabsTrigger>
                  <TabsTrigger value="features" className="flex-1">
                    Ausstattung
                  </TabsTrigger>
                  <TabsTrigger value="specs" className="flex-1">
                    Technische Daten
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="description" className="mt-6">
                  <Card className="bg-card border-border p-6">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                      Fahrzeugbeschreibung
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {vehicle.description}
                    </p>
                  </Card>
                </TabsContent>

                <TabsContent value="features" className="mt-6">
                  <Card className="bg-card border-border p-6">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                      Ausstattungshighlights
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {vehicle.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center space-x-2 text-muted-foreground"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </TabsContent>

                <TabsContent value="specs" className="mt-6">
                  <Card className="bg-card border-border p-6">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                      Technische Daten
                    </h3>
                    <div className="space-y-3">
                      {[
                        { label: "Marke", value: vehicle.brand },
                        { label: "Modell", value: vehicle.model },
                        { label: "Erstzulassung", value: vehicle.year },
                        {
                          label: "Kilometerstand",
                          value: `${vehicle.mileage.toLocaleString("de-DE")} km`,
                        },
                        { label: "Leistung", value: `${vehicle.power} PS` },
                        { label: "Kraftstoff", value: vehicle.fuel },
                        { label: "Getriebe", value: vehicle.transmission },
                        { label: "Fahrzeugtyp", value: vehicle.type },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between py-3 border-b border-border last:border-0"
                        >
                          <span className="text-muted-foreground">{item.label}</span>
                          <span className="font-semibold text-foreground">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>

          {/* Finance Calculator */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <FinanceCalculator vehiclePrice={vehicle.price} />
            </motion.div>
          </div>
        </div>
      </div>
  );
};

export default VehicleDetail;
