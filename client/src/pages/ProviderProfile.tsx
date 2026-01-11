import { useRoute, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Star, 
  Clock, 
  Calendar, 
  Shield, 
  CheckCircle, 
  ArrowLeft, 
  ExternalLink,
  MapPin,
  Users,
  Zap
} from "lucide-react";
import type { Provider } from "@shared/schema";

function ProfileSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <Skeleton className="h-6 w-32 mb-8" />
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Skeleton className="w-16 h-16 rounded-lg" />
            <div className="flex-1">
              <Skeleton className="h-8 w-48 mb-2" />
              <Skeleton className="h-4 w-64" />
            </div>
          </div>
          <div className="flex gap-4">
            <Skeleton className="h-20 w-24" />
            <Skeleton className="h-20 w-24" />
            <Skeleton className="h-20 w-24" />
            <Skeleton className="h-20 w-24" />
          </div>
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    </div>
  );
}

export default function ProviderProfile() {
  const [, params] = useRoute("/provider/:slug");
  const slug = params?.slug;

  const { data: provider, isLoading, error } = useQuery<Provider>({
    queryKey: ["/api/providers", slug],
    enabled: !!slug,
  });

  if (isLoading) {
    return <ProfileSkeleton />;
  }

  if (error || !provider) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Provider Not Found</h1>
          <p className="text-muted-foreground mb-6">
            We couldn't find the provider you're looking for.
          </p>
          <Link href="/">
            <Button data-testid="button-back-home">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Providers
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const availabilityLabels: Record<string, string> = {
    "same-day": "Same-day available",
    "next-day": "Next-day available",
    "2-3 days": "2-3 days",
    "1 week": "Within a week",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Profile Hero */}
      <section className="bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* Back button */}
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-6 -ml-2" data-testid="button-back">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all providers
            </Button>
          </Link>

          {/* Provider header */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-bold text-2xl">
                {provider.name.charAt(0)}
              </span>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-2xl sm:text-3xl font-bold" data-testid="text-profile-name">
                  {provider.name}
                </h1>
                <Badge variant="secondary" className="gap-1">
                  <CheckCircle className="h-3 w-3" />
                  Verified
                </Badge>
              </div>
              <p className="text-muted-foreground" data-testid="text-profile-tagline">
                {provider.tagline}
              </p>
            </div>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div className="bg-background rounded-lg p-4 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="font-bold text-lg" data-testid="text-profile-rating">
                  {provider.rating.toFixed(1)}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                {provider.reviewCount} reviews
              </p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Clock className="h-4 w-4 text-primary" />
                <span className="font-bold text-lg" data-testid="text-profile-response">
                  {provider.responseTime}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">Response time</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="font-bold text-lg" data-testid="text-profile-years">
                  {provider.yearsInBusiness}+
                </span>
              </div>
              <p className="text-xs text-muted-foreground">Years in business</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Zap className="h-4 w-4 text-primary" />
                <span className="font-bold text-sm" data-testid="text-profile-availability">
                  {availabilityLabels[provider.availability]}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">Appointment</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="flex-1 gap-2" asChild data-testid="button-book-appointment">
              <a href={provider.websiteUrl} target="_blank" rel="noopener noreferrer">
                Book Appointment
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild data-testid="button-visit-website">
              <a href={provider.websiteUrl} target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Content tabs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full justify-start mb-6 overflow-x-auto" data-testid="tabs-profile">
            <TabsTrigger value="overview" data-testid="tab-overview">Overview</TabsTrigger>
            <TabsTrigger value="pricing" data-testid="tab-pricing">Pricing</TabsTrigger>
            <TabsTrigger value="reviews" data-testid="tab-reviews">Reviews</TabsTrigger>
            <TabsTrigger value="requirements" data-testid="tab-requirements">Requirements</TabsTrigger>
            <TabsTrigger value="faq" data-testid="tab-faq">FAQ</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">About {provider.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-profile-description">
                  {provider.description}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Services Offered</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {provider.services.map((service) => (
                    <Badge key={service} variant="secondary" data-testid={`badge-profile-service-${service.toLowerCase().replace(/\s+/g, "-")}`}>
                      {service}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {provider.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground" data-testid={`text-profile-feature-${index}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Pricing Tab */}
          <TabsContent value="pricing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pricing Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full" data-testid="table-pricing">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-2 font-medium">Service</th>
                        <th className="text-right py-3 px-2 font-medium">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {provider.pricingDetails.map((item, index) => (
                        <tr key={index} className="border-b border-border last:border-0">
                          <td className="py-3 px-2">
                            <p className="font-medium" data-testid={`text-pricing-service-${index}`}>{item.service}</p>
                            {item.description && (
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                            )}
                          </td>
                          <td className="py-3 px-2 text-right font-semibold" data-testid={`text-pricing-price-${index}`}>
                            ${item.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Insurance Accepted</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {provider.insuranceAccepted.map((insurance) => (
                    <Badge key={insurance} variant="outline" data-testid={`badge-profile-insurance-${insurance.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Shield className="h-3 w-3 mr-1" />
                      {insurance}
                    </Badge>
                  ))}
                </div>
                {provider.insuranceAccepted.length === 0 && (
                  <p className="text-muted-foreground text-sm">
                    Self-pay only. Insurance not currently accepted.
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Patient Reviews</CardTitle>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-semibold">{provider.rating.toFixed(1)}</span>
                    <span className="text-muted-foreground text-sm">
                      ({provider.reviewCount} reviews)
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {provider.reviews.map((review) => (
                    <div key={review.id} className="border-b border-border last:border-0 pb-6 last:pb-0" data-testid={`review-${review.id}`}>
                      <div className="flex items-start gap-3 mb-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-primary/10 text-primary text-sm">
                            {review.author.split(" ").map((n) => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium" data-testid={`text-review-author-${review.id}`}>
                              {review.author}
                            </span>
                            {review.verified && (
                              <Badge variant="secondary" className="text-xs gap-1">
                                <CheckCircle className="h-3 w-3" />
                                Verified
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i < review.rating
                                      ? "fill-amber-400 text-amber-400"
                                      : "text-muted"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {review.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`text-review-content-${review.id}`}>
                        {review.content}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Requirements Tab */}
          <TabsContent value="requirements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">State Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-2" data-testid="text-states-available">
                      Available in {provider.statesAvailable.length} states
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {provider.statesAvailable.map((state) => (
                        <Badge key={state} variant="outline" className="text-xs" data-testid={`badge-state-${state}`}>
                          {state}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Age Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-2">
                  <Users className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-muted-foreground" data-testid="text-age-requirement">
                    {provider.ageRequirement || "No specific age restrictions. Consult with provider for details."}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Prescription Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground" data-testid="text-prescription-policy">
                  {provider.prescriptionPolicy}
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* FAQ Tab */}
          <TabsContent value="faq" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full" data-testid="accordion-faq">
                  {provider.faq.map((item, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="text-left" data-testid={`faq-question-${index}`}>
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent data-testid={`faq-answer-${index}`}>
                        <p className="text-muted-foreground">{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
