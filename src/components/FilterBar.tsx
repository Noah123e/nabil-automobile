import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { brands, fuelTypes, transmissionTypes, vehicleTypes } from "@/data/vehicles";

interface FilterBarProps {
  onFilterChange: (filters: FilterState) => void;
  onSearchChange: (search: string) => void;
}

export interface FilterState {
  brand: string;
  fuel: string;
  transmission: string;
  type: string;
  minPrice: string;
  maxPrice: string;
  minYear: string;
  maxYear: string;
}

const FilterBar = ({ onFilterChange, onSearchChange }: FilterBarProps) => {
  const [showFilters, setShowFilters] = useState(false);
  const [search, setSearch] = useState("");
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

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    onSearchChange(value);
  };

  const clearFilters = () => {
    const emptyFilters: FilterState = {
      brand: "",
      fuel: "",
      transmission: "",
      type: "",
      minPrice: "",
      maxPrice: "",
      minYear: "",
      maxYear: "",
    };
    setFilters(emptyFilters);
    setSearch("");
    onFilterChange(emptyFilters);
    onSearchChange("");
  };

  const hasActiveFilters = Object.values(filters).some((v) => v !== "") || search !== "";

  return (
    <Card className="bg-card border-border p-6 space-y-4">
      {/* Search Bar */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Marke oder Modell suchen..."
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-10 bg-background border-border"
          />
        </div>
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="border-border hover:border-primary"
        >
          <SlidersHorizontal className="w-5 h-5 mr-2" />
          Filter
        </Button>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            onClick={clearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5 mr-2" />
            Zurücksetzen
          </Button>
        )}
      </div>

      {/* Advanced Filters */}
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-border">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Marke</label>
            <Select value={filters.brand} onValueChange={(v) => handleFilterChange("brand", v)}>
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder="Alle Marken" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Alle Marken</SelectItem>
                {brands.map((brand) => (
                  <SelectItem key={brand} value={brand}>
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Kraftstoff</label>
            <Select value={filters.fuel} onValueChange={(v) => handleFilterChange("fuel", v)}>
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder="Alle Kraftstoffe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Alle Kraftstoffe</SelectItem>
                {fuelTypes.map((fuel) => (
                  <SelectItem key={fuel} value={fuel}>
                    {fuel}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Getriebe</label>
            <Select
              value={filters.transmission}
              onValueChange={(v) => handleFilterChange("transmission", v)}
            >
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder="Alle Getriebe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Alle Getriebe</SelectItem>
                {transmissionTypes.map((trans) => (
                  <SelectItem key={trans} value={trans}>
                    {trans}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Fahrzeugtyp</label>
            <Select value={filters.type} onValueChange={(v) => handleFilterChange("type", v)}>
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder="Alle Typen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Alle Typen</SelectItem>
                {vehicleTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Preis von</label>
            <Input
              type="number"
              placeholder="Min. €"
              value={filters.minPrice}
              onChange={(e) => handleFilterChange("minPrice", e.target.value)}
              className="bg-background border-border"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Preis bis</label>
            <Input
              type="number"
              placeholder="Max. €"
              value={filters.maxPrice}
              onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
              className="bg-background border-border"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Baujahr von</label>
            <Input
              type="number"
              placeholder="Min. Jahr"
              value={filters.minYear}
              onChange={(e) => handleFilterChange("minYear", e.target.value)}
              className="bg-background border-border"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Baujahr bis</label>
            <Input
              type="number"
              placeholder="Max. Jahr"
              value={filters.maxYear}
              onChange={(e) => handleFilterChange("maxYear", e.target.value)}
              className="bg-background border-border"
            />
          </div>
        </div>
      )}
    </Card>
  );
};

export default FilterBar;
