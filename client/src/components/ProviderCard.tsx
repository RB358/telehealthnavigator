import { Link } from "wouter";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, CheckCircle, ArrowRight, Scale } from "lucide-react";
import type { Provider } from "@shared/schema";

interface ProviderCardProps {
  provider: Provider;
  isSelected?: boolean;
  onSelect?: (provider: Provider) => void;
  selectionDisabled?: boolean;
}

export function ProviderCard({ 
  provider, 
  isSelected = false, 
  onSelect,
  selectionDisabled = false 
}: ProviderCardProps) {
  const availabilityColors: Record<string, string> = {
    "same-day": "text-green-600 dark:text-green-400",
    "next-day": "text-blue-600 dark:text-blue-400",
    "2-3 days": "text-amber-600 dark:text-amber-400",
    "1 week": "text-muted-foreground",
  };

  const availabilityLabels: Record<string, string> = {
    "same-day": "Same-day available",
    "next-day": "Next-day available",
    "2-3 days": "2-3 days",
    "1 week": "Within a week",
  };

  const handleCompareClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Allow deselection even when max is reached
    if (onSelect && (!selectionDisabled || isSelected)) {
      onSelect(provider);
    }
  };

  return (
    <Card 
      className={`hover-elevate overflow-visible group transition-all duration-200 ${isSelected ? 'ring-2 ring-primary' : ''}`} 
      data-testid={`card-provider-${provider.id}`}
    >
      <CardContent className="p-6">
        {/* Selection checkbox for comparison */}
        {onSelect && (
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={handleCompareClick}
              disabled={selectionDisabled && !isSelected}
              className={`flex items-center gap-2 text-xs px-2 py-1 rounded-md transition-colors ${
                isSelected 
                  ? 'bg-primary text-primary-foreground' 
                  : selectionDisabled
                    ? 'text-muted-foreground cursor-not-allowed'
                    : 'text-muted-foreground hover:bg-muted'
              }`}
              data-testid={`button-select-compare-${provider.id}`}
            >
              <Scale className="h-3 w-3" />
              {isSelected ? 'Selected' : 'Compare'}
            </button>
          </div>
        )}

        {/* Header: Logo, Name, Rating */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            {/* Logo placeholder */}
            <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-bold text-lg">
                {provider.name.charAt(0)}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-lg leading-tight" data-testid={`text-provider-name-${provider.id}`}>
                {provider.name}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-1">
                {provider.tagline}
              </p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 flex-shrink-0">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-sm" data-testid={`text-provider-rating-${provider.id}`}>
              {provider.rating.toFixed(1)}
            </span>
            <span className="text-xs text-muted-foreground">
              ({provider.reviewCount})
            </span>
          </div>
        </div>

        {/* Service badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {provider.services.slice(0, 3).map((service) => (
            <Badge key={service} variant="secondary" className="text-xs" data-testid={`badge-service-${provider.id}-${service.toLowerCase().replace(/\s+/g, "-")}`}>
              {service}
            </Badge>
          ))}
          {provider.services.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{provider.services.length - 3} more
            </Badge>
          )}
        </div>

        {/* Price and availability */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-muted-foreground">Starting at</p>
            <p className="text-xl font-bold text-foreground" data-testid={`text-provider-price-${provider.id}`}>
              ${provider.priceRange.min}
              <span className="text-sm font-normal text-muted-foreground">
                {provider.priceRange.max > provider.priceRange.min && ` - $${provider.priceRange.max}`}
              </span>
            </p>
          </div>
          <div className={`flex items-center gap-1.5 ${availabilityColors[provider.availability]}`}>
            <Clock className="h-4 w-4" />
            <span className="text-sm font-medium" data-testid={`text-provider-availability-${provider.id}`}>
              {availabilityLabels[provider.availability]}
            </span>
          </div>
        </div>

        {/* Key features */}
        <ul className="space-y-2 mb-4">
          {provider.keyFeatures.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <span data-testid={`text-feature-${provider.id}-${index}`}>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Insurance badges */}
        {provider.insuranceAccepted.length > 0 && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>Accepts:</span>
            <div className="flex gap-1 flex-wrap">
              {provider.insuranceAccepted.slice(0, 3).map((insurance) => (
                <span key={insurance} className="text-foreground font-medium" data-testid={`text-insurance-${provider.id}-${insurance.toLowerCase().replace(/\s+/g, "-")}`}>
                  {insurance}
                </span>
              ))}
              {provider.insuranceAccepted.length > 3 && (
                <span>+{provider.insuranceAccepted.length - 3} more</span>
              )}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Link href={`/provider/${provider.slug}`} className="w-full">
          <Button className="w-full gap-2 group-hover:gap-3 transition-all" data-testid={`button-view-profile-${provider.id}`}>
            View Full Profile
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
