import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Star, Clock, CheckCircle, X, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import type { Provider } from "@shared/schema";

interface ComparisonModalProps {
  providers: Provider[];
  open: boolean;
  onClose: () => void;
}

function ComparisonColumn({ provider, index }: { provider: Provider; index: number }) {
  const availabilityLabels: Record<string, string> = {
    "same-day": "Same-day",
    "next-day": "Next-day",
    "2-3 days": "2-3 days",
    "1 week": "Within a week",
  };

  const availabilityColors: Record<string, string> = {
    "same-day": "text-green-600 dark:text-green-400",
    "next-day": "text-blue-600 dark:text-blue-400",
    "2-3 days": "text-amber-600 dark:text-amber-400",
    "1 week": "text-muted-foreground",
  };

  return (
    <div 
      className="flex-1 min-w-0"
      data-testid={`comparison-column-${provider.id}`}
    >
      {/* Provider Header */}
      <div className="text-center pb-4 border-b border-border mb-4">
        <div className="w-12 h-12 mx-auto rounded-md bg-primary/10 flex items-center justify-center mb-2">
          <span className="text-primary font-bold text-lg">
            {provider.name.charAt(0)}
          </span>
        </div>
        <h3 className="font-semibold text-base sm:text-lg truncate px-2">
          {provider.name}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground truncate px-2">
          {provider.tagline}
        </p>
      </div>

      {/* Comparison Rows */}
      <div className="space-y-4">
        {/* Rating */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground mb-1">Rating</p>
          <div className="flex items-center justify-center gap-1">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="font-semibold">{provider.rating.toFixed(1)}</span>
            <span className="text-xs text-muted-foreground">
              ({provider.reviewCount.toLocaleString()})
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground mb-1">Starting Price</p>
          <p className="text-xl sm:text-2xl font-bold text-primary">
            ${provider.priceRange.min}
          </p>
          {(provider.priceRange.consultationFee ?? 0) > 0 && (
            <p className="text-xs text-muted-foreground">
              + ${provider.priceRange.consultationFee} consultation
            </p>
          )}
        </div>

        {/* Availability */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground mb-1">Availability</p>
          <div className={`flex items-center justify-center gap-1 ${availabilityColors[provider.availability]}`}>
            <Clock className="h-4 w-4" />
            <span className="font-medium text-sm">
              {availabilityLabels[provider.availability]}
            </span>
          </div>
        </div>

        {/* Response Time */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground mb-1">Response Time</p>
          <p className="font-medium text-sm">{provider.responseTime}</p>
        </div>

        {/* Years in Business */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground mb-1">Years in Business</p>
          <p className="font-medium text-sm">{provider.yearsInBusiness} years</p>
        </div>

        {/* Age Requirement */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground mb-1">Age Requirement</p>
          <p className="font-medium text-xs sm:text-sm px-2">{provider.ageRequirement}</p>
        </div>

        {/* Services */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground mb-2">Services</p>
          <div className="flex flex-wrap justify-center gap-1">
            {provider.services.slice(0, 4).map((service) => (
              <Badge key={service} variant="secondary" className="text-xs">
                {service}
              </Badge>
            ))}
            {provider.services.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{provider.services.length - 4}
              </Badge>
            )}
          </div>
        </div>

        {/* Insurance */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground mb-2">Insurance</p>
          <div className="flex flex-wrap justify-center gap-1">
            {provider.insuranceAccepted.slice(0, 3).map((ins) => (
              <Badge key={ins} variant="outline" className="text-xs">
                {ins}
              </Badge>
            ))}
            {provider.insuranceAccepted.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{provider.insuranceAccepted.length - 3}
              </Badge>
            )}
          </div>
        </div>

        {/* Key Features */}
        <div>
          <p className="text-xs text-muted-foreground mb-2 text-center">Key Features</p>
          <ul className="space-y-1.5">
            {provider.keyFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-1.5 text-xs">
                <CheckCircle className="h-3 w-3 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="pt-4 space-y-2">
          <Link href={`/provider/${provider.slug}`} className="block">
            <Button className="w-full" size="sm" data-testid={`button-view-${provider.id}`}>
              View Full Profile
            </Button>
          </Link>
          <a href={provider.websiteUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="w-full gap-1" size="sm">
              Visit Website
              <ExternalLink className="h-3 w-3" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export function ComparisonModal({ providers, open, onClose }: ComparisonModalProps) {
  if (providers.length < 2) return null;

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent 
        className="max-w-4xl w-[95vw] max-h-[90vh] p-0 gap-0"
        data-testid="comparison-modal"
      >
        <DialogHeader className="p-4 sm:p-6 pb-0 sm:pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg sm:text-xl">
              Compare Providers
            </DialogTitle>
          </div>
        </DialogHeader>
        
        <ScrollArea className="flex-1 max-h-[calc(90vh-80px)]">
          <div className="p-4 sm:p-6 pt-4">
            {/* Mobile: Stacked view */}
            <div className="flex flex-col sm:hidden gap-6">
              {providers.map((provider, index) => (
                <div key={provider.id} className="border border-border rounded-lg p-4">
                  <ComparisonColumn provider={provider} index={index} />
                </div>
              ))}
            </div>

            {/* Desktop: Side by side */}
            <div className="hidden sm:flex gap-6">
              {providers.map((provider, index) => (
                <ComparisonColumn key={provider.id} provider={provider} index={index} />
              ))}
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
