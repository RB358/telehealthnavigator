import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Clock, ArrowDown } from "lucide-react";

interface HeroProps {
  providerCount: number;
  onScrollToProviders: () => void;
}

export function Hero({ providerCount, onScrollToProviders }: HeroProps) {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative text-center">
        <div className="space-y-6">
            {/* Origin badge */}
            <Badge variant="secondary" className="gap-1.5" data-testid="badge-origin">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              From the creators of Contraceptive Compass
            </Badge>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight" data-testid="text-hero-headline">
              Find Your Perfect{" "}
              <span className="text-primary">Telehealth</span>{" "}
              Provider
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto" data-testid="text-hero-subheadline">
              Compare trusted USA telehealth providers for contraceptive care. 
              Transparent pricing, verified reviews, and easy online consultations.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center">
              <Button 
                size="lg" 
                onClick={onScrollToProviders}
                data-testid="button-compare-providers"
                className="gap-2"
              >
                Compare {providerCount} Providers
                <ArrowDown className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                data-testid="button-how-it-works"
              >
                How It Works
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 pt-4 justify-center">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span data-testid="text-verified-count">{providerCount} Verified Providers</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span data-testid="text-updated">Updated Weekly</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                <span data-testid="text-hipaa">HIPAA Compliant</span>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
