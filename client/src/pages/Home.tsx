import { useRef, useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Hero } from "@/components/Hero";
import { ProviderCard } from "@/components/ProviderCard";
import { ProviderCardSkeleton } from "@/components/ProviderCardSkeleton";
import { FilterSidebar } from "@/components/FilterSidebar";
import { Badge } from "@/components/ui/badge";
import type { Provider, ProviderFilter } from "@shared/schema";

export default function Home() {
  const providersRef = useRef<HTMLDivElement>(null);
  const [filters, setFilters] = useState<ProviderFilter>({});

  const { data: providers = [], isLoading } = useQuery<Provider[]>({
    queryKey: ["/api/providers"],
  });

  // Extract available filter options from providers
  const { availableServices, availableInsurance } = useMemo(() => {
    const services = new Set<string>();
    const insurance = new Set<string>();
    
    providers.forEach((provider) => {
      provider.services.forEach((s) => services.add(s));
      provider.insuranceAccepted.forEach((i) => insurance.add(i));
    });

    return {
      availableServices: Array.from(services).sort(),
      availableInsurance: Array.from(insurance).sort(),
    };
  }, [providers]);

  // Filter providers based on current filters
  const filteredProviders = useMemo(() => {
    return providers.filter((provider) => {
      // Price range filter - show providers whose starting price falls within the selected range
      if (filters.priceRange) {
        const [filterMin, filterMax] = filters.priceRange;
        const providerMin = provider.priceRange.min;
        
        // Provider's minimum price must be within the filter range
        if (providerMin < filterMin || providerMin > filterMax) {
          return false;
        }
      }

      // Availability filter
      if (filters.availability && filters.availability.length > 0) {
        if (!filters.availability.includes(provider.availability)) {
          return false;
        }
      }

      // Services filter
      if (filters.services && filters.services.length > 0) {
        const hasMatchingService = provider.services.some((s) =>
          filters.services!.includes(s)
        );
        if (!hasMatchingService) return false;
      }

      // Insurance filter
      if (filters.insurance && filters.insurance.length > 0) {
        const hasMatchingInsurance = provider.insuranceAccepted.some((i) =>
          filters.insurance!.includes(i)
        );
        if (!hasMatchingInsurance) return false;
      }

      // Min rating filter
      if (filters.minRating && provider.rating < filters.minRating) {
        return false;
      }

      return true;
    });
  }, [providers, filters]);

  const scrollToProviders = () => {
    providersRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero 
        providerCount={providers.length} 
        onScrollToProviders={scrollToProviders}
      />

      {/* Providers Section */}
      <section 
        ref={providersRef} 
        className="py-12 md:py-16 bg-background"
        id="providers"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight" data-testid="text-providers-heading">
                Top Telehealth Providers
              </h2>
              <p className="text-muted-foreground mt-1" data-testid="text-providers-subheading">
                Compare verified providers for contraceptive care
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" data-testid="badge-last-updated">
                Last updated: {new Date().toLocaleDateString()}
              </Badge>
            </div>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Filters sidebar */}
            <div className="lg:col-span-1">
              <FilterSidebar
                filters={filters}
                onFiltersChange={setFilters}
                availableServices={availableServices}
                availableInsurance={availableInsurance}
                resultCount={filteredProviders.length}
              />
            </div>

            {/* Provider cards grid */}
            <div className="lg:col-span-3">
              {isLoading ? (
                <div className="grid md:grid-cols-2 gap-6" data-testid="grid-providers-loading">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <ProviderCardSkeleton key={index} />
                  ))}
                </div>
              ) : filteredProviders.length === 0 ? (
                <div className="text-center py-12 bg-card rounded-lg border border-card-border" data-testid="container-no-results">
                  <p className="text-muted-foreground mb-2">No providers match your filters</p>
                  <p className="text-sm text-muted-foreground">
                    Try adjusting your filter criteria
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6" data-testid="grid-providers">
                  {filteredProviders.map((provider) => (
                    <ProviderCard key={provider.id} provider={provider} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 md:py-16 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4" data-testid="text-trust-heading">
              Trusted Information, Always Free
            </h3>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-trust-description">
              We research and verify all provider information weekly to ensure you have 
              accurate, up-to-date details. Our comparison service is completely free 
              to use and we never share your personal information.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
