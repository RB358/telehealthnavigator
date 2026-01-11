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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          {/* Left content - 60% */}
          <div className="md:col-span-3 space-y-6">
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
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl" data-testid="text-hero-subheadline">
              Compare trusted USA telehealth providers for contraceptive care. 
              Transparent pricing, verified reviews, and easy online consultations.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
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
            <div className="flex flex-wrap gap-4 pt-4">
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

          {/* Right content - 40% */}
          <div className="md:col-span-2 hidden md:block">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-accent/20 rounded-full blur-2xl" />
              
              {/* Placeholder card stack effect */}
              <div className="relative space-y-4">
                <div className="bg-card border border-card-border rounded-lg p-6 shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300" data-testid="card-hero-preview-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-md bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-semibold">N</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Nurx</p>
                      <p className="text-xs text-muted-foreground">Same-day available</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <Badge variant="secondary" className="text-xs">Birth Control</Badge>
                    <Badge variant="secondary" className="text-xs">$15-25</Badge>
                  </div>
                </div>
                
                <div className="bg-card border border-card-border rounded-lg p-6 shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300" data-testid="card-hero-preview-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-md bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-semibold">W</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Wisp</p>
                      <p className="text-xs text-muted-foreground">Next-day delivery</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <Badge variant="secondary" className="text-xs">Emergency</Badge>
                    <Badge variant="secondary" className="text-xs">$20-35</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
