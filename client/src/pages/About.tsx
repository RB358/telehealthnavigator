import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Shield, Clock, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-transparent to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Badge variant="secondary" className="mb-4" data-testid="badge-about-origin">
            From the creators of Contraceptive Compass
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6" data-testid="text-about-headline">
            About Contraceptive.AI
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto" data-testid="text-about-intro">
            We're on a mission to make contraceptive care more accessible by helping 
            people find the right telehealth provider for their needs.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12" data-testid="text-how-it-works-heading">
            How It Works
          </h2>
          
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">1</span>
              </div>
              <h3 className="font-semibold mb-2" data-testid="text-step-1-title">Compare Providers</h3>
              <p className="text-sm text-muted-foreground" data-testid="text-step-1-description">
                Browse our curated list of verified telehealth providers offering contraceptive services.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">2</span>
              </div>
              <h3 className="font-semibold mb-2" data-testid="text-step-2-title">Review Details</h3>
              <p className="text-sm text-muted-foreground" data-testid="text-step-2-description">
                Check pricing, services, reviews, and availability to find the perfect fit for you.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">3</span>
              </div>
              <h3 className="font-semibold mb-2" data-testid="text-step-3-title">Book Appointment</h3>
              <p className="text-sm text-muted-foreground" data-testid="text-step-3-description">
                Click through to your chosen provider's website to schedule your consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12" data-testid="text-values-heading">
            Our Commitment
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="hover-elevate" data-testid="card-value-transparency">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Transparency</h3>
                    <p className="text-sm text-muted-foreground">
                      We provide clear, accurate information about pricing, services, and availability.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-value-accuracy">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Up-to-Date</h3>
                    <p className="text-sm text-muted-foreground">
                      Our team researches and verifies provider information on a weekly basis.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-value-privacy">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Privacy First</h3>
                    <p className="text-sm text-muted-foreground">
                      We never collect or share your personal health information.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-value-free">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Always Free</h3>
                    <p className="text-sm text-muted-foreground">
                      Our comparison service is completely free to use, with no hidden fees.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <div data-testid="stat-providers">
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">10+</p>
              <p className="text-sm text-muted-foreground">Verified Providers</p>
            </div>
            <div data-testid="stat-users">
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">50K+</p>
              <p className="text-sm text-muted-foreground">Monthly Users</p>
            </div>
            <div data-testid="stat-states">
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">50</p>
              <p className="text-sm text-muted-foreground">States Covered</p>
            </div>
            <div data-testid="stat-updates">
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">Weekly</p>
              <p className="text-sm text-muted-foreground">Data Updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Providers */}
      <section className="py-16 md:py-20 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="h-6 w-6 text-primary" />
            <h2 className="text-2xl sm:text-3xl font-bold" data-testid="text-for-providers-heading">
              For Healthcare Providers
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6" data-testid="text-for-providers-description">
            Are you a telehealth provider offering contraceptive services? 
            We'd love to include you in our comparison. Contact us to learn more 
            about listing your service on Contraceptive.AI.
          </p>
          <p className="text-sm text-muted-foreground">
            Email us at{" "}
            <a href="mailto:providers@contraceptive.ai" className="text-primary hover:underline">
              providers@contraceptive.ai
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
