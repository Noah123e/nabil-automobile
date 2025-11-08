import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Fuel, Gauge, Calendar, Settings } from "lucide-react";
import { Vehicle } from "@/data/vehicles";

interface VehicleCardProps {
  vehicle: Vehicle;
  onCompare?: (vehicleId: string) => void;
  isInComparison?: boolean;
}

const VehicleCard = ({ vehicle, onCompare, isInComparison }: VehicleCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={vehicle.image}
            alt={`${vehicle.brand} ${vehicle.model}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Condition Badge */}
          <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
            {vehicle.condition}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title & Price */}
          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-1">
              {vehicle.brand} {vehicle.model}
            </h3>
            <p className="text-2xl font-bold text-primary">
              {formatPrice(vehicle.price)}
            </p>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Gauge className="w-4 h-4 text-primary" />
              <span>{vehicle.mileage.toLocaleString("de-DE")} km</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{vehicle.year}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Settings className="w-4 h-4 text-primary" />
              <span>{vehicle.power} PS</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Fuel className="w-4 h-4 text-primary" />
              <span>{vehicle.fuel}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-2">
            <Button asChild className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to={`/vehicle/${vehicle.id}`}>Details</Link>
            </Button>
            {onCompare && (
              <Button
                variant="outline"
                onClick={() => onCompare(vehicle.id)}
                className={`flex-1 ${
                  isInComparison
                    ? "border-primary text-primary bg-primary/10"
                    : "border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {isInComparison ? "Entfernen" : "Vergleichen"}
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default VehicleCard;
