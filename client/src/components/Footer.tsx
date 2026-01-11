import { Link } from "wouter";
import { Stethoscope, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary">
                <Stethoscope className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-lg" data-testid="text-footer-logo">
                Contraceptive.ai
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Helping you find the right telehealth provider for your contraceptive care needs.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <span>Trusted by</span>
              <span className="font-semibold text-foreground">50,000+</span>
              <span>users</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4" data-testid="text-footer-quicklinks">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-compare">
                  Compare Providers
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-how-it-works">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-for-providers">
                  For Providers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-4" data-testid="text-footer-legal">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-terms">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-sm mb-4" data-testid="text-footer-newsletter">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Get updates on new providers and features.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
                data-testid="input-newsletter-email"
              />
              <Button type="submit" size="icon" data-testid="button-newsletter-submit">
                <Mail className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground" data-testid="text-copyright">
              &copy; {new Date().getFullYear()} Contraceptive.ai. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground text-center sm:text-right max-w-md" data-testid="text-disclaimer">
              This site is for informational purposes only and does not provide medical advice. 
              Consult with a healthcare professional for medical decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
