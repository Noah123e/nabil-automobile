import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedPage from "@/components/AnimatedPage";
import VehicleCard from "@/components/VehicleCard";
import FilterBar, { FilterState } from "@/components/FilterBar";
import { Button } from "@/components/ui/button";
import { vehicles, Vehicle } from "@/data/vehicles";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { toast } from "sonner";

const Catalog = () => {
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>(vehicles);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterState>({
    brand: "",
    fuel: "",
    transmission: "",
    type: "",
    minPrice: "",
    maxPrice: "",
    minYear: "",
    maxYear: "",
  });
  const [compareList, setCompareList] = useLocalStorage<string[]>("compareList", []);
  const navigate = useNavigate();

  const applyFilters = (newFilters: FilterState, search: string) => {
    let result = vehicles;

    // Search filter
    if (search) {
      result = result.filter(
        (v) =>
          v.brand.toLowerCase().includes(search.toLowerCase()) ||
          v.model.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Brand filter
    if (newFilters.brand) {
      result = result.filter((v) => v.brand === newFilters.brand);
    }

    // Fuel filter
    if (newFilters.fuel) {
      result = result.filter((v) => v.fuel === newFilters.fuel);
    }

    // Transmission filter
    if (newFilters.transmission) {
      result = result.filter((v) => v.transmission === newFilters.transmission);
    }

    // Type filter
    if (newFilters.type) {
      result = result.filter((v) => v.type === newFilters.type);
    }

    // Price filter
    if (newFilters.minPrice) {
      result = result.filter((v) => v.price >= parseInt(newFilters.minPrice));
    }
    if (newFilters.maxPrice) {
      result = result.filter((v) => v.price <= parseInt(newFilters.maxPrice));
    }

    // Year filter
    if (newFilters.minYear) {
      result = result.filter((v) => v.year >= parseInt(newFilters.minYear));
    }
    if (newFilters.maxYear) {
      result = result.filter((v) => v.year <= parseInt(newFilters.maxYear));
    }

    setFilteredVehicles(result);
  };

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    applyFilters(newFilters, searchQuery);
  };

  const handleSearchChange = (search: string) => {
    setSearchQuery(search);
    applyFilters(filters, search);
  };

  const handleCompare = (vehicleId: string) => {
    if (compareList.includes(vehicleId)) {
      setCompareList(compareList.filter((id) => id !== vehicleId));
      toast.success("Vehicle removed from comparison");
    } else if (compareList.length < 3) {
      setCompareList([...compareList, vehicleId]);
      toast.success("Vehicle added to comparison");
    } else {
      toast.error("Maximum 3 vehicles can be compared");
    }
  };

  const goToComparison = () => {
    navigate(`/compare?ids=${compareList.join(",")}`);
  };

  return (
    <AnimatedPage>
      {/* Header */}
      <section className="pt-32 pb-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Vehicles
          </h1>
          <p className="text-muted-foreground text-lg">
            {filteredVehicles.length} exclusive vehicles available
          </p>
        </motion.div>

        {/* Filter Bar */}
        <FilterBar onFilterChange={handleFilterChange} onSearchChange={handleSearchChange} />
      </section>

      {/* Vehicle Grid */}
      <section className="pb-16 container mx-auto px-4">
        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onCompare={handleCompare}
                isInComparison={compareList.includes(vehicle.id)}
              />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground text-lg">
              No vehicles found. Please adjust your filters.
            </p>
          </motion.div>
        )}
      </section>

      {/* Compare Button (Floating) */}
      {compareList.length > 0 && (
        <motion.div
          initial={{ y: 100, scale: 0.8 }}
          animate={{ y: 0, scale: 1 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <Button
            size="lg"
            onClick={goToComparison}
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-2xl hover:shadow-primary/50 transition-all duration-300 text-base px-8 py-6"
          >
            <span className="flex items-center gap-2">
              <span className="bg-primary-foreground text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                {compareList.length}
              </span>
              Compare Vehicle{compareList.length > 1 ? "s" : ""}
            </span>
          </Button>
        </motion.div>
      )}
    </AnimatedPage>
  );
};

export default Catalog;