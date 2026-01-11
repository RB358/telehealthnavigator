import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Filter, X, SlidersHorizontal } from "lucide-react";
import type { ProviderFilter } from "@shared/schema";

interface FilterSidebarProps {
  filters: ProviderFilter;
  onFiltersChange: (filters: ProviderFilter) => void;
  availableServices: string[];
  availableInsurance: string[];
  resultCount: number;
}

const AVAILABILITY_OPTIONS = [
  { value: "same-day", label: "Same-day" },
  { value: "next-day", label: "Next-day" },
  { value: "2-3 days", label: "2-3 days" },
  { value: "1 week", label: "1 week" },
] as const;

export function FilterSidebar({
  filters,
  onFiltersChange,
  availableServices,
  availableInsurance,
  resultCount,
}: FilterSidebarProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>(
    filters.priceRange || [0, 200]
  );

  const activeFilterCount = [
    filters.priceRange && (filters.priceRange[0] > 0 || filters.priceRange[1] < 200),
    filters.availability && filters.availability.length > 0,
    filters.services && filters.services.length > 0,
    filters.insurance && filters.insurance.length > 0,
    filters.minRating && filters.minRating > 0,
  ].filter(Boolean).length;

  const handleAvailabilityChange = (value: string, checked: boolean) => {
    const current = filters.availability || [];
    const updated = checked
      ? [...current, value as "same-day" | "next-day" | "2-3 days" | "1 week"]
      : current.filter((v) => v !== value);
    onFiltersChange({ ...filters, availability: updated.length > 0 ? updated : undefined });
  };

  const handleServiceChange = (value: string, checked: boolean) => {
    const current = filters.services || [];
    const updated = checked
      ? [...current, value]
      : current.filter((v) => v !== value);
    onFiltersChange({ ...filters, services: updated.length > 0 ? updated : undefined });
  };

  const handleInsuranceChange = (value: string, checked: boolean) => {
    const current = filters.insurance || [];
    const updated = checked
      ? [...current, value]
      : current.filter((v) => v !== value);
    onFiltersChange({ ...filters, insurance: updated.length > 0 ? updated : undefined });
  };

  const handlePriceChange = (value: number[]) => {
    const range: [number, number] = [value[0], value[1]];
    setPriceRange(range);
    onFiltersChange({ ...filters, priceRange: range });
  };

  const clearFilters = () => {
    setPriceRange([0, 200]);
    onFiltersChange({});
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Price Range */}
      <div>
        <h4 className="font-medium text-sm mb-3" data-testid="text-filter-price-label">Price Range</h4>
        <div className="px-2">
          <Slider
            value={priceRange}
            onValueChange={handlePriceChange}
            min={0}
            max={200}
            step={5}
            className="mb-2"
            data-testid="slider-price-range"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}+</span>
          </div>
        </div>
      </div>

      {/* Availability */}
      <div>
        <h4 className="font-medium text-sm mb-3" data-testid="text-filter-availability-label">Availability</h4>
        <div className="space-y-2">
          {AVAILABILITY_OPTIONS.map((option) => (
            <div key={option.value} className="flex items-center gap-2">
              <Checkbox
                id={`availability-${option.value}`}
                checked={filters.availability?.includes(option.value) || false}
                onCheckedChange={(checked) =>
                  handleAvailabilityChange(option.value, checked === true)
                }
                data-testid={`checkbox-availability-${option.value}`}
              />
              <Label
                htmlFor={`availability-${option.value}`}
                className="text-sm font-normal cursor-pointer"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div>
        <h4 className="font-medium text-sm mb-3" data-testid="text-filter-services-label">Services</h4>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {availableServices.map((service) => (
            <div key={service} className="flex items-center gap-2">
              <Checkbox
                id={`service-${service}`}
                checked={filters.services?.includes(service) || false}
                onCheckedChange={(checked) =>
                  handleServiceChange(service, checked === true)
                }
                data-testid={`checkbox-service-${service.toLowerCase().replace(/\s+/g, "-")}`}
              />
              <Label
                htmlFor={`service-${service}`}
                className="text-sm font-normal cursor-pointer"
              >
                {service}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Insurance */}
      <div>
        <h4 className="font-medium text-sm mb-3" data-testid="text-filter-insurance-label">Insurance Accepted</h4>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {availableInsurance.map((insurance) => (
            <div key={insurance} className="flex items-center gap-2">
              <Checkbox
                id={`insurance-${insurance}`}
                checked={filters.insurance?.includes(insurance) || false}
                onCheckedChange={(checked) =>
                  handleInsuranceChange(insurance, checked === true)
                }
                data-testid={`checkbox-insurance-${insurance.toLowerCase().replace(/\s+/g, "-")}`}
              />
              <Label
                htmlFor={`insurance-${insurance}`}
                className="text-sm font-normal cursor-pointer"
              >
                {insurance}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Clear filters */}
      {activeFilterCount > 0 && (
        <Button
          variant="outline"
          className="w-full"
          onClick={clearFilters}
          data-testid="button-clear-filters"
        >
          <X className="h-4 w-4 mr-2" />
          Clear All Filters
        </Button>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <Card className="hidden lg:block sticky top-24" data-testid="sidebar-filters-desktop">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <h3 className="font-semibold" data-testid="text-filters-heading">Filters</h3>
            </div>
            <Badge variant="secondary" data-testid="badge-result-count">
              {resultCount} results
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <FilterContent />
        </CardContent>
      </Card>

      {/* Mobile filter button + sheet */}
      <div className="lg:hidden sticky top-20 z-40 pb-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full gap-2" data-testid="button-filters-mobile">
              <SlidersHorizontal className="h-4 w-4" />
              Filter & Sort
              {activeFilterCount > 0 && (
                <Badge variant="secondary" className="ml-auto">
                  {activeFilterCount}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh]">
            <SheetHeader className="mb-4">
              <SheetTitle className="flex items-center justify-between">
                <span>Filters</span>
                <Badge variant="secondary">{resultCount} results</Badge>
              </SheetTitle>
            </SheetHeader>
            <div className="overflow-y-auto h-[calc(100%-4rem)]">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
