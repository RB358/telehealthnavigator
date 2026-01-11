# Design Guidelines: Contraceptive.ai

## Design Approach

**Reference-Based Approach**: Healthcare marketplace combining Stripe's data clarity + Airbnb's card sophistication + ZocDoc's trust signals

**Core Principles**:
- Medical credibility through clean, professional layouts
- Rapid comparison facilitation with scannable information architecture
- Trust-building through clear provider credentials and transparency

## Typography

**Font Stack**: Inter (primary), system-ui (fallback) via Google Fonts CDN

**Hierarchy**:
- Hero Headline: text-5xl md:text-6xl, font-bold, tracking-tight
- Section Headers: text-3xl md:text-4xl, font-bold
- Provider Names: text-2xl, font-semibold
- Card Titles: text-lg, font-semibold
- Body Text: text-base, font-normal, leading-relaxed
- Metadata/Labels: text-sm, font-medium
- Fine Print: text-xs, font-normal

## Layout System

**Spacing Primitives**: Tailwind units of 3, 4, 6, 8, 12, 16, 20

**Container Strategy**:
- Page max-width: max-w-7xl mx-auto px-6
- Provider grid container: max-w-6xl
- Profile detail content: max-w-4xl
- Section padding: py-16 md:py-20

## Component Library

### Homepage Layout

**Hero Section** (py-16 md:py-24):
- Split layout: 60/40 text-to-image ratio on desktop
- Left: Headline + subheadline + search/filter bar + trust indicators ("10 verified providers", "Updated weekly")
- Right: Hero image showing diverse patients using telehealth
- CTA integration: Subtle badge referencing Contraceptive Compass origin

**Provider Grid Section**:
- 2-column layout (md:grid-cols-2)
- Gap-6 spacing between cards
- Sticky filter sidebar on desktop (hidden mobile, drawer pattern)

**Provider Cards** (Hover elevation effect):
```
Structure per card:
- Provider logo (h-12 w-auto, top-left)
- Star rating + review count (top-right)
- Service summary (2-3 key offerings as pills/badges)
- Price range display (clear, prominent)
- Coverage badges (insurance accepted icons)
- Key differentiators (3 bullet points max)
- Availability indicator (same-day/next-day)
- CTA: "View Full Profile" button (full-width)
```

**Filter System**:
- Multi-select checkboxes for: insurance types, price range, appointment availability, services offered
- Active filter chips with dismiss functionality
- Result count display

### Provider Profile Page

**Profile Hero**:
- Provider branding section (logo, name, tagline)
- Key metrics row: rating, appointment availability, response time, years in business
- Primary CTA: "Book Appointment" (prominent, sticky on scroll)

**Content Sections** (Tabbed interface):
- Overview: About, services, what to expect
- Pricing: Transparent cost breakdown table, insurance coverage matrix
- Reviews: Filterable testimonials with verified badge
- Requirements: State availability, age restrictions, prescription policies
- FAQ: Accordion pattern

**Comparison Widget** (Sticky bottom bar):
- "Add to Compare" toggle on each profile
- Compare bar shows selected providers (max 3)
- Launches comparison modal

### Navigation

**Header** (sticky):
- Logo left, "Compare Providers" + "About" center, "List Your Service" right
- Mobile: Hamburger menu

**Footer**:
- Quick links: How it works, For providers, Privacy, Terms
- Newsletter signup: "Get updates on new providers"
- Social proof: "Trusted by 50,000+ users"
- Disclaimers: Medical advice disclaimer

## Images

**Hero Image**: Professional, diverse patients using laptop/phone for telehealth consultation. Bright, optimistic, modern setting. Shows comfort and privacy. (Right side of hero, 40% width on desktop, hidden on mobile)

**Provider Logos**: Each provider card requires their official logo (placeholder if unavailable). Square format, h-12 w-12, object-contain.

**Profile Headers**: Optional provider-branded header images (abstract medical patterns or clean lifestyle imagery). Full-width, h-48, subtle.

**Trust Badges**: Small icons for insurance logos, certifications, security badges throughout. Grayscale with subtle hover color.

**Testimonial Avatars**: Circular, small (h-10 w-10), with initials fallback for privacy.

## Interaction Patterns

- Card hover: Subtle lift (shadow-lg transition)
- Filter changes: Smooth 200ms fade transitions on grid
- Profile tabs: Instant switching, no page reload
- Comparison modal: Slide-up from bottom, three-column table layout
- Loading states: Skeleton screens for cards, shimmer effect

## Mobile Adaptations

- Single column provider grid
- Drawer-based filters (bottom sheet)
- Sticky "Filter & Sort" button
- Collapsed profile sections (accordion)
- Floating comparison bar (shows count, tapping expands)

## Trust & Credibility Elements

- "Last updated" timestamps on provider info
- Verification badges (checkmark icons)
- Clear data sourcing disclaimers
- Medical advice disclaimer banner (dismissible)
- HIPAA compliance mention in footer