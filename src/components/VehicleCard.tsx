import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Fuel, Gauge, Calendar, Settings, Check } from "lucide-react";
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
      <Card className={`group overflow-hidden bg-card transition-all duration-500 border-0 ${
        isInComparison 
          ? "ring-1 ring-white" 
          : "hover:ring-1 hover:ring-white/30"
      }`}>
        {/* Image */}
        <div className="relative overflow-hidden aspect-[3/4]">
          <img
            src={vehicle.image}
            alt={`${vehicle.brand} ${vehicle.model}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Selected Badge */}
          {isInComparison && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-6 right-6 bg-white text-black p-2"
            >
              <Check className="w-5 h-5" />
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Title & Price */}
          <div className="space-y-3">
            <h3 className="font-display text-2xl font-light text-foreground tracking-tight line-clamp-2">
              {vehicle.brand} {vehicle.model}
            </h3>
            <p className="text-3xl font-light text-white tracking-wide">
              {formatPrice(vehicle.price)}
            </p>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
            <div className="flex flex-col space-y-1">
              <span className="text-xs text-muted-foreground font-light tracking-wider uppercase">Km</span>
              <span className="text-sm text-foreground font-light">{vehicle.mileage.toLocaleString("de-DE")}</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-xs text-muted-foreground font-light tracking-wider uppercase">Jahr</span>
              <span className="text-sm text-foreground font-light">{vehicle.year}</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-xs text-muted-foreground font-light tracking-wider uppercase">PS</span>
              <span className="text-sm text-foreground font-light">{vehicle.power}</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-xs text-muted-foreground font-light tracking-wider uppercase">Kraftstoff</span>
              <span className="text-sm text-foreground font-light">{vehicle.fuel}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button asChild className="flex-1 bg-white text-black hover:bg-white/90 font-light tracking-wider">
              <Link to={`/vehicle/${vehicle.id}`}>Details</Link>
            </Button>
            {onCompare && (
              <Button
                variant="outline"
                onClick={() => onCompare(vehicle.id)}
                className={`flex-1 transition-all duration-300 font-light tracking-wider ${
                  isInComparison
                    ? "border-white text-white bg-white/10 hover:bg-white/20"
                    : "border-white/30 text-white hover:border-white hover:bg-white/5"
                }`}
              >
                {isInComparison && <Check className="w-4 h-4 mr-1" />}
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
