import type { Provider } from "@shared/schema";

export interface IStorage {
  getAllProviders(): Promise<Provider[]>;
  getProviderBySlug(slug: string): Promise<Provider | undefined>;
}

// Telehealth provider data
const providers: Provider[] = [
  {
    id: "1",
    name: "Nurx",
    slug: "nurx",
    tagline: "Birth control and reproductive health, delivered",
    description: "Nurx is a telehealth company focused on making birth control and other reproductive health services more accessible. They offer a wide range of contraceptive options, from pills to patches to rings, with free delivery and ongoing support from licensed healthcare providers. Their platform is designed to be convenient and discreet, with most patients completing their consultation in under 10 minutes.",
    websiteUrl: "https://www.nurx.com",
    rating: 4.6,
    reviewCount: 12500,
    priceRange: { min: 15, max: 75, consultationFee: 0 },
    services: ["Birth Control Pills", "Emergency Contraception", "Birth Control Patch", "Vaginal Ring", "PrEP"],
    availability: "same-day",
    insuranceAccepted: ["Aetna", "Blue Cross", "Cigna", "United Healthcare", "Humana"],
    statesAvailable: ["CA", "NY", "TX", "FL", "PA", "IL", "OH", "GA", "NC", "MI", "NJ", "VA", "WA", "AZ", "MA", "TN", "IN", "MO", "MD", "WI", "CO", "MN", "SC", "AL", "LA", "KY", "OR", "OK", "CT", "UT", "NV", "IA", "AR", "MS", "KS", "NE", "NM", "WV", "ID", "HI", "NH", "ME", "MT", "RI", "DE", "SD", "ND", "AK", "DC", "VT", "WY"],
    ageRequirement: "18 years or older. Minors may need parental consent depending on state laws.",
    keyFeatures: [
      "Free delivery on all prescriptions",
      "Licensed providers available 24/7",
      "Most insurance plans accepted with $0 copay options"
    ],
    prescriptionPolicy: "Prescriptions are written by licensed healthcare providers after completing an online consultation. Prescriptions are valid for up to 12 months with refills included.",
    responseTime: "2-4 hours",
    yearsInBusiness: 8,
    reviews: [
      { id: "r1", author: "Sarah M.", rating: 5, content: "Super easy to use! Got my birth control delivered right to my door. The whole process took less than a day.", date: "Dec 2025", verified: true },
      { id: "r2", author: "Jessica L.", rating: 4, content: "Great service overall. The app is intuitive and the doctors responded quickly. Would recommend to friends.", date: "Nov 2025", verified: true },
      { id: "r3", author: "Amanda K.", rating: 5, content: "Finally a convenient way to get my prescription without going to a doctor's office. Love the discreet packaging.", date: "Oct 2025", verified: true }
    ],
    faq: [
      { question: "How long does delivery take?", answer: "Most orders ship within 24-48 hours and arrive within 3-5 business days via USPS. Expedited shipping is available for an additional fee." },
      { question: "Do I need insurance?", answer: "No, insurance is not required. We offer affordable self-pay options. However, if you have insurance, we can often bill your plan directly." },
      { question: "Can I switch birth control methods?", answer: "Yes! You can discuss switching methods with your provider at any time through our messaging system." }
    ],
    pricingDetails: [
      { service: "Birth Control Consultation", price: 0, description: "Free with subscription" },
      { service: "Birth Control Pills (monthly)", price: 15, description: "Generic options" },
      { service: "Birth Control Patch (monthly)", price: 45, description: "Xulane generic" },
      { service: "Emergency Contraception", price: 20, description: "Ella or Plan B alternatives" }
    ]
  },
  {
    id: "2",
    name: "Wisp",
    slug: "wisp",
    tagline: "Sexual health care, simplified",
    description: "Wisp provides discreet, convenient access to sexual and reproductive health treatments. Founded by women for women, Wisp offers birth control, UTI treatment, STI testing, and emergency contraception with same-day prescription and next-day delivery options. Their platform prioritizes privacy and convenience.",
    websiteUrl: "https://www.hellowisp.com",
    rating: 4.7,
    reviewCount: 8900,
    priceRange: { min: 20, max: 90, consultationFee: 0 },
    services: ["Birth Control Pills", "Emergency Contraception", "UTI Treatment", "STI Testing", "Yeast Infection Treatment"],
    availability: "same-day",
    insuranceAccepted: ["Self-pay", "HSA/FSA accepted"],
    statesAvailable: ["CA", "NY", "TX", "FL", "PA", "IL", "OH", "GA", "NC", "MI", "NJ", "VA", "WA", "AZ", "MA", "TN", "IN", "MO", "MD", "WI", "CO", "MN", "SC", "AL", "LA", "KY", "OR", "OK", "CT", "UT", "NV", "IA", "AR", "MS", "KS", "NE", "NM", "WV", "ID", "HI", "NH", "ME", "MT", "RI", "DE", "SD", "ND", "AK", "DC", "VT", "WY"],
    ageRequirement: "18 years or older",
    keyFeatures: [
      "Same-day prescriptions available",
      "Discreet, unmarked packaging",
      "No appointment needed - async consultation"
    ],
    prescriptionPolicy: "Complete a brief online questionnaire and a licensed provider will review your information. Prescriptions are typically issued within hours.",
    responseTime: "1-3 hours",
    yearsInBusiness: 6,
    reviews: [
      { id: "r4", author: "Emily R.", rating: 5, content: "Wisp has been a lifesaver! Got my prescription the same day and it arrived at my door the next morning.", date: "Dec 2025", verified: true },
      { id: "r5", author: "Lauren T.", rating: 5, content: "I love how private and easy this service is. No awkward conversations at the pharmacy.", date: "Nov 2025", verified: true },
      { id: "r6", author: "Michelle D.", rating: 4, content: "Very straightforward process. The prices are reasonable and the team is responsive.", date: "Oct 2025", verified: true }
    ],
    faq: [
      { question: "How fast can I get my medication?", answer: "We offer same-day prescription approval and next-day delivery in most areas. Local pharmacy pickup is also available." },
      { question: "Is my information kept private?", answer: "Absolutely. All communications are encrypted and your package arrives in discreet, unmarked packaging with no mention of Wisp or the contents." },
      { question: "What payment methods do you accept?", answer: "We accept all major credit cards, debit cards, and HSA/FSA cards. We don't currently bill insurance directly." }
    ],
    pricingDetails: [
      { service: "Birth Control Consultation", price: 0, description: "Free" },
      { service: "Birth Control Pills (3-month supply)", price: 45, description: "Generic options" },
      { service: "Emergency Contraception", price: 30, description: "Ella prescription" },
      { service: "UTI Treatment", price: 35, description: "Antibiotics + consultation" }
    ]
  },
  {
    id: "3",
    name: "The Pill Club",
    slug: "the-pill-club",
    tagline: "Your birth control, your way",
    description: "The Pill Club is a telehealth service dedicated to making birth control accessible and affordable. They offer a wide variety of contraceptive options with free delivery and the option to use insurance or pay out of pocket. Known for their fun, colorful branding and excellent customer service.",
    websiteUrl: "https://www.thepillclub.com",
    rating: 4.5,
    reviewCount: 15200,
    priceRange: { min: 0, max: 50, consultationFee: 0 },
    services: ["Birth Control Pills", "Birth Control Patch", "Vaginal Ring", "Emergency Contraception", "Acne Treatment"],
    availability: "next-day",
    insuranceAccepted: ["Aetna", "Blue Cross", "Cigna", "United Healthcare", "Kaiser", "Anthem", "Molina"],
    statesAvailable: ["CA", "NY", "TX", "FL", "PA", "IL", "OH", "GA", "NC", "MI", "NJ", "VA", "WA", "AZ", "MA", "TN", "IN", "MO", "MD", "WI", "CO", "MN", "SC", "AL", "LA", "KY", "OR", "OK", "CT", "UT", "NV", "IA"],
    ageRequirement: "13 years or older with appropriate consent",
    keyFeatures: [
      "$0 with most insurance plans",
      "Cute care packages with goodies",
      "Easy prescription transfers from other providers"
    ],
    prescriptionPolicy: "After completing a health questionnaire, a licensed provider reviews your information and writes a prescription. Most consultations are completed within 24 hours.",
    responseTime: "12-24 hours",
    yearsInBusiness: 9,
    reviews: [
      { id: "r7", author: "Chloe S.", rating: 5, content: "I've been using The Pill Club for 3 years and love it! The care packages with candy and stickers are such a nice touch.", date: "Dec 2025", verified: true },
      { id: "r8", author: "Brianna M.", rating: 4, content: "Super convenient and my insurance covers everything. The app makes reordering easy.", date: "Nov 2025", verified: true },
      { id: "r9", author: "Taylor K.", rating: 5, content: "Transferred my prescription from my old doctor seamlessly. Great experience overall.", date: "Oct 2025", verified: true }
    ],
    faq: [
      { question: "Do you accept my insurance?", answer: "We work with most major insurance providers. Enter your insurance info during signup and we'll check your coverage instantly." },
      { question: "What's included in the care package?", answer: "Along with your medication, each shipment includes fun items like stickers, candy, and helpful health information." },
      { question: "Can I transfer my existing prescription?", answer: "Yes! We can transfer your current prescription from another provider or pharmacy. Just provide the details during your consultation." }
    ],
    pricingDetails: [
      { service: "Birth Control Consultation", price: 0, description: "Always free" },
      { service: "Birth Control (with insurance)", price: 0, description: "Most plans cover 100%" },
      { service: "Birth Control (without insurance)", price: 15, description: "Generic pills monthly" },
      { service: "Emergency Contraception", price: 25, description: "Plan B alternatives" }
    ]
  },
  {
    id: "4",
    name: "Lemonaid Health",
    slug: "lemonaid-health",
    tagline: "Quick, affordable healthcare from home",
    description: "Lemonaid Health offers affordable telehealth visits for a range of conditions including birth control. With flat-rate pricing and board-certified doctors available via video or phone, Lemonaid makes getting a prescription simple and transparent. Part of the 23andMe family of companies.",
    websiteUrl: "https://www.lemonaidhealth.com",
    rating: 4.4,
    reviewCount: 6800,
    priceRange: { min: 25, max: 100, consultationFee: 25 },
    services: ["Birth Control Pills", "Emergency Contraception", "UTI Treatment", "Erectile Dysfunction", "Mental Health"],
    availability: "same-day",
    insuranceAccepted: ["Self-pay only", "HSA/FSA accepted"],
    statesAvailable: ["CA", "NY", "TX", "FL", "PA", "IL", "OH", "GA", "NC", "MI", "NJ", "VA", "WA", "AZ", "MA", "TN", "IN", "MO", "MD", "WI", "CO", "MN", "AL", "LA", "OR", "CT", "NV", "IA", "KS", "NE"],
    ageRequirement: "18 years or older",
    keyFeatures: [
      "Flat $25 consultation fee - no hidden costs",
      "Same-day prescriptions sent to any pharmacy",
      "Board-certified doctors for every visit"
    ],
    prescriptionPolicy: "Complete a quick medical intake form, then connect with a doctor via secure message or video. Prescriptions are sent directly to your preferred pharmacy.",
    responseTime: "2-4 hours",
    yearsInBusiness: 10,
    reviews: [
      { id: "r10", author: "Hannah P.", rating: 4, content: "Transparent pricing is refreshing. I knew exactly what I'd pay upfront. Doctor was helpful and thorough.", date: "Dec 2025", verified: true },
      { id: "r11", author: "Olivia C.", rating: 5, content: "Got my prescription sent to my local pharmacy within hours. Easy and professional service.", date: "Nov 2025", verified: true },
      { id: "r12", author: "Grace W.", rating: 4, content: "Good experience overall. The video visit option was nice for asking questions.", date: "Oct 2025", verified: true }
    ],
    faq: [
      { question: "What is the consultation fee?", answer: "Our flat-rate consultation fee is $25 for most services. This covers your visit with a licensed doctor." },
      { question: "Can I pick up my prescription locally?", answer: "Yes! We can send your prescription to any pharmacy you choose, including major chains like CVS, Walgreens, and Walmart." },
      { question: "Do you offer video visits?", answer: "Yes, we offer both asynchronous messaging and live video visits with our doctors." }
    ],
    pricingDetails: [
      { service: "Birth Control Consultation", price: 25, description: "One-time fee" },
      { service: "Birth Control Pills (at pharmacy)", price: 15, description: "Varies by pharmacy and insurance" },
      { service: "Emergency Contraception", price: 45, description: "Includes consultation" },
      { service: "Follow-up Visit", price: 25, description: "If needed within 6 months" }
    ]
  },
  {
    id: "5",
    name: "Ro",
    slug: "ro",
    tagline: "Modern healthcare, done right",
    description: "Ro is a direct-to-patient healthcare company offering a range of telehealth services. Their birth control service provides access to various contraceptive options with licensed providers, discreet packaging, and free delivery. Ro emphasizes quality care and has expanded to include primary care, mental health, and more.",
    websiteUrl: "https://www.ro.co",
    rating: 4.3,
    reviewCount: 9200,
    priceRange: { min: 20, max: 85, consultationFee: 0 },
    services: ["Birth Control Pills", "Emergency Contraception", "Primary Care", "Mental Health", "Hair Loss Treatment"],
    availability: "next-day",
    insuranceAccepted: ["Self-pay primarily", "HSA/FSA accepted"],
    statesAvailable: ["CA", "NY", "TX", "FL", "PA", "IL", "OH", "GA", "NC", "MI", "NJ", "VA", "WA", "AZ", "MA", "TN", "IN", "MO", "MD", "WI", "CO", "MN", "SC", "AL", "LA", "KY", "OR", "OK", "CT", "UT", "NV"],
    ageRequirement: "18 years or older",
    keyFeatures: [
      "Free ongoing care and unlimited follow-ups",
      "Home delivery included with subscriptions",
      "24/7 access to care team via messaging"
    ],
    prescriptionPolicy: "Complete an online visit, receive a prescription from a licensed provider, and have medications delivered to your door. Annual subscriptions include ongoing care.",
    responseTime: "4-8 hours",
    yearsInBusiness: 7,
    reviews: [
      { id: "r13", author: "Sophia H.", rating: 4, content: "Really appreciate the unlimited follow-ups. Makes it easy to ask questions or adjust my prescription.", date: "Dec 2025", verified: true },
      { id: "r14", author: "Megan R.", rating: 5, content: "Clean app interface and professional doctors. Delivery was fast and discreet.", date: "Nov 2025", verified: true },
      { id: "r15", author: "Rachel B.", rating: 4, content: "Good service, though slightly pricier than some alternatives. The quality feels premium though.", date: "Oct 2025", verified: true }
    ],
    faq: [
      { question: "Are follow-up visits included?", answer: "Yes, all follow-up visits and messaging with your care team are included at no additional cost with your subscription." },
      { question: "How does the subscription work?", answer: "You can choose monthly, quarterly, or annual delivery options. Your prescription and care are included in the subscription price." },
      { question: "What if I need to switch medications?", answer: "Simply message your care team through the app. They can adjust your prescription at no extra charge." }
    ],
    pricingDetails: [
      { service: "Birth Control (monthly subscription)", price: 20, description: "Includes medication + care" },
      { service: "Birth Control (quarterly)", price: 55, description: "3-month supply" },
      { service: "Emergency Contraception", price: 40, description: "One-time purchase" },
      { service: "Follow-up Consultations", price: 0, description: "Included with subscription" }
    ]
  },
  {
    id: "6",
    name: "Simple Health",
    slug: "simple-health",
    tagline: "Birth control without the barriers",
    description: "Simple Health specializes in birth control and reproductive healthcare, making it easy to get prescriptions online with insurance billing or affordable self-pay options. Their focus is specifically on contraceptive care, with expert providers who understand reproductive health.",
    websiteUrl: "https://www.simplehealth.com",
    rating: 4.6,
    reviewCount: 5400,
    priceRange: { min: 0, max: 60, consultationFee: 0 },
    services: ["Birth Control Pills", "Birth Control Patch", "Vaginal Ring", "Emergency Contraception", "Acne Treatment"],
    availability: "same-day",
    insuranceAccepted: ["Aetna", "Blue Cross", "Cigna", "United Healthcare", "Oscar", "Bright Health"],
    statesAvailable: ["CA", "NY", "TX", "FL", "PA", "IL", "OH", "GA", "NC", "MI", "NJ", "VA", "WA", "AZ", "MA", "TN", "IN", "MO", "MD", "WI", "CO", "MN", "SC", "AL", "LA", "KY", "OR", "OK", "CT", "UT"],
    ageRequirement: "16 years or older",
    keyFeatures: [
      "Insurance billing with $0 copay for many",
      "Specialized in contraceptive care",
      "Free consultations, always"
    ],
    prescriptionPolicy: "Answer health questions online, get a prescription from specialized reproductive health providers, and have your birth control delivered or pick up at a local pharmacy.",
    responseTime: "2-6 hours",
    yearsInBusiness: 5,
    reviews: [
      { id: "r16", author: "Natalie F.", rating: 5, content: "They specialize in birth control and it shows. The providers really know their stuff and helped me find the right option.", date: "Dec 2025", verified: true },
      { id: "r17", author: "Ashley G.", rating: 5, content: "Free with my insurance! The process was smooth and I got my pills delivered within a week.", date: "Nov 2025", verified: true },
      { id: "r18", author: "Katie M.", rating: 4, content: "Good service and knowledgeable staff. Had some shipping delays once but customer service resolved it quickly.", date: "Oct 2025", verified: true }
    ],
    faq: [
      { question: "Why specialize in birth control?", answer: "By focusing on contraceptive care, our providers develop deep expertise in this area and can offer better guidance for your specific needs." },
      { question: "Will insurance cover my birth control?", answer: "Under the ACA, most insurance plans must cover FDA-approved birth control methods at no cost. We handle the billing for you." },
      { question: "Can you help me switch methods?", answer: "Absolutely! Our providers can help you explore different options and find the method that works best for your body and lifestyle." }
    ],
    pricingDetails: [
      { service: "Consultation", price: 0, description: "Always free" },
      { service: "Birth Control (with insurance)", price: 0, description: "Covered under most plans" },
      { service: "Birth Control (self-pay monthly)", price: 20, description: "Generic pills" },
      { service: "Vaginal Ring (self-pay)", price: 60, description: "NuvaRing generic" }
    ]
  },
  {
    id: "7",
    name: "Hers",
    slug: "hers",
    tagline: "Women's health, reimagined",
    description: "Hers is a women's health company offering telehealth services for a variety of conditions including birth control, skincare, hair loss, and mental health. Part of the Hims & Hers Health family, they provide a modern, streamlined approach to women's healthcare.",
    websiteUrl: "https://www.forhers.com",
    rating: 4.4,
    reviewCount: 7600,
    priceRange: { min: 25, max: 85, consultationFee: 0 },
    services: ["Birth Control Pills", "Emergency Contraception", "Skincare", "Hair Loss", "Mental Health"],
    availability: "next-day",
    insuranceAccepted: ["Self-pay", "HSA/FSA accepted"],
    statesAvailable: ["CA", "NY", "TX", "FL", "PA", "IL", "OH", "GA", "NC", "MI", "NJ", "VA", "WA", "AZ", "MA", "TN", "IN", "MO", "MD", "WI", "CO", "MN", "SC", "AL", "LA", "KY", "OR", "OK", "CT", "UT", "NV", "IA", "AR", "MS", "KS", "NE", "NM", "WV", "ID", "HI", "NH", "ME", "MT", "RI", "DE"],
    ageRequirement: "18 years or older",
    keyFeatures: [
      "Comprehensive women's health platform",
      "Stylish, discreet packaging",
      "Personalized treatment plans"
    ],
    prescriptionPolicy: "Complete an online consultation, receive personalized recommendations from a licensed provider, and get medications delivered to your door with ongoing support.",
    responseTime: "4-8 hours",
    yearsInBusiness: 6,
    reviews: [
      { id: "r19", author: "Jennifer L.", rating: 5, content: "Love that I can handle multiple health needs in one place. Birth control, skincare, and mental health all through Hers.", date: "Dec 2025", verified: true },
      { id: "r20", author: "Stephanie N.", rating: 4, content: "Great platform with nice branding. Products arrive in beautiful packaging. Service is reliable.", date: "Nov 2025", verified: true },
      { id: "r21", author: "Christina P.", rating: 4, content: "Slightly more expensive than some alternatives but the convenience and quality are worth it.", date: "Oct 2025", verified: true }
    ],
    faq: [
      { question: "What makes Hers different?", answer: "We offer a comprehensive women's health platform where you can address multiple health needs - from birth control to skincare to mental health - all in one place." },
      { question: "How does the subscription work?", answer: "Choose your products and delivery frequency. Your medications arrive automatically, and you can pause or cancel anytime." },
      { question: "Do you offer mental health services?", answer: "Yes! We offer online therapy and psychiatry services, including prescriptions for anxiety and depression when appropriate." }
    ],
    pricingDetails: [
      { service: "Birth Control (monthly)", price: 25, description: "Generic pills" },
      { service: "Birth Control (quarterly)", price: 60, description: "3-month supply" },
      { service: "Emergency Contraception", price: 45, description: "Ella or similar" },
      { service: "Mental Health Consultation", price: 85, description: "Initial visit" }
    ]
  },
  {
    id: "8",
    name: "Favor",
    slug: "favor",
    tagline: "Birth control on your terms",
    description: "Favor delivers birth control right to your door with a focus on accessibility and affordability. They work directly with manufacturers to offer competitive pricing and accept most insurance plans. Their mission is to remove barriers to contraceptive access.",
    websiteUrl: "https://www.favorhealth.com",
    rating: 4.5,
    reviewCount: 3200,
    priceRange: { min: 0, max: 45, consultationFee: 0 },
    services: ["Birth Control Pills", "Birth Control Patch", "Emergency Contraception", "Vaginal Ring"],
    availability: "2-3 days",
    insuranceAccepted: ["Aetna", "Blue Cross", "Cigna", "United Healthcare", "Medicaid in select states"],
    statesAvailable: ["CA", "NY", "TX", "FL", "PA", "IL", "OH", "GA", "NC", "NJ", "VA", "WA", "AZ", "MA", "TN", "MO", "MD", "WI", "CO", "MN", "OR", "CT", "NV"],
    ageRequirement: "15 years or older with consent",
    keyFeatures: [
      "Works with Medicaid in select states",
      "Low-cost options for uninsured",
      "Transfer existing prescriptions easily"
    ],
    prescriptionPolicy: "Consult with a provider online, get your prescription, and receive free home delivery. We work with your insurance to minimize costs.",
    responseTime: "6-12 hours",
    yearsInBusiness: 4,
    reviews: [
      { id: "r22", author: "Danielle S.", rating: 5, content: "Finally a service that takes Medicaid! Made getting my birth control so much easier.", date: "Dec 2025", verified: true },
      { id: "r23", author: "Maria G.", rating: 4, content: "Affordable options and they helped me navigate my insurance. Good customer service.", date: "Nov 2025", verified: true },
      { id: "r24", author: "Lisa H.", rating: 5, content: "Transferred my prescription from Planned Parenthood easily. Delivery is reliable.", date: "Oct 2025", verified: true }
    ],
    faq: [
      { question: "Do you accept Medicaid?", answer: "Yes! We accept Medicaid in California, New York, Texas, Florida, and several other states. Check during signup for your state's eligibility." },
      { question: "How much does it cost without insurance?", answer: "Without insurance, birth control pills start at $15/month for generic options. We offer some of the lowest self-pay prices available." },
      { question: "Can I transfer my current prescription?", answer: "Yes, we make transferring prescriptions easy. Just provide your current pharmacy info and we handle the rest." }
    ],
    pricingDetails: [
      { service: "Consultation", price: 0, description: "Free" },
      { service: "Birth Control (with insurance)", price: 0, description: "Covered for most" },
      { service: "Birth Control (self-pay)", price: 15, description: "Starting price for generics" },
      { service: "Vaginal Ring", price: 45, description: "Monthly self-pay" }
    ]
  },
  {
    id: "9",
    name: "Planned Parenthood Direct",
    slug: "planned-parenthood-direct",
    tagline: "Care. No matter what.",
    description: "Planned Parenthood Direct is the official telehealth app from Planned Parenthood, offering birth control prescriptions and other reproductive health services. Backed by decades of expertise in reproductive healthcare, they provide trusted care with a sliding fee scale for those who need it.",
    websiteUrl: "https://www.plannedparenthood.org/get-care/get-care-online",
    rating: 4.7,
    reviewCount: 11000,
    priceRange: { min: 0, max: 75, consultationFee: 20 },
    services: ["Birth Control Pills", "Emergency Contraception", "UTI Treatment", "STI Testing Referrals"],
    availability: "same-day",
    insuranceAccepted: ["Most major insurers", "Medicaid", "Title X funding available"],
    statesAvailable: ["CA", "CO", "DC", "FL", "GA", "HI", "ID", "IL", "ME", "MD", "MA", "MN", "MT", "NV", "NJ", "NM", "NY", "NC", "OH", "OR", "PA", "RI", "TX", "VT", "VA", "WA", "WI"],
    ageRequirement: "Varies by state, often 13+ for contraceptive services",
    keyFeatures: [
      "Backed by 100+ years of reproductive health expertise",
      "Sliding fee scale for low-income patients",
      "Connection to local Planned Parenthood clinics"
    ],
    prescriptionPolicy: "Answer questions about your health, consult with a Planned Parenthood clinician, and get your prescription. Pick up at a pharmacy or have it delivered in participating states.",
    responseTime: "1-4 hours",
    yearsInBusiness: 7,
    reviews: [
      { id: "r25", author: "Emma J.", rating: 5, content: "Trust Planned Parenthood completely. Their app makes getting birth control so convenient while maintaining their quality care.", date: "Dec 2025", verified: true },
      { id: "r26", author: "Ava T.", rating: 5, content: "The sliding fee scale helped me get affordable care when I was between jobs. So grateful for this service.", date: "Nov 2025", verified: true },
      { id: "r27", author: "Lily M.", rating: 4, content: "Good service connected to a trusted organization. Easy to use and providers are knowledgeable.", date: "Oct 2025", verified: true }
    ],
    faq: [
      { question: "Is this really from Planned Parenthood?", answer: "Yes! Planned Parenthood Direct is the official app created by Planned Parenthood to expand access to care." },
      { question: "What is the sliding fee scale?", answer: "We offer discounted care based on your income. During checkout, you can see if you qualify for reduced fees." },
      { question: "Can I still visit a clinic?", answer: "Absolutely! The app can also help you find and schedule appointments at your nearest Planned Parenthood health center." }
    ],
    pricingDetails: [
      { service: "Birth Control Consultation", price: 20, description: "Reduced with sliding scale" },
      { service: "Birth Control Pills", price: 0, description: "Often covered or low-cost" },
      { service: "Emergency Contraception", price: 35, description: "Prescription service" },
      { service: "UTI Treatment", price: 30, description: "Consultation + prescription" }
    ]
  },
  {
    id: "10",
    name: "Twentyeight Health",
    slug: "twentyeight-health",
    tagline: "Healthcare access for all",
    description: "Twentyeight Health focuses on making reproductive healthcare accessible to underserved communities. Named after the 28-day menstrual cycle, they offer birth control, STI testing, and other services with a focus on affordability and cultural competence. They accept most insurance including Medicaid.",
    websiteUrl: "https://www.twentyeighthealth.com",
    rating: 4.6,
    reviewCount: 2800,
    priceRange: { min: 0, max: 55, consultationFee: 0 },
    services: ["Birth Control Pills", "Birth Control Patch", "Vaginal Ring", "Emergency Contraception", "STI Testing"],
    availability: "next-day",
    insuranceAccepted: ["Medicaid", "Medicare", "Aetna", "Blue Cross", "Cigna", "United Healthcare"],
    statesAvailable: ["CA", "NY", "TX", "FL", "PA", "IL", "OH", "GA", "NC", "MI", "NJ", "VA", "WA", "AZ", "MA", "TN", "IN", "MO", "MD", "WI", "CO", "MN", "SC", "AL", "LA", "KY", "OR", "OK", "CT", "UT", "NV", "DC"],
    ageRequirement: "13 years or older for most services",
    keyFeatures: [
      "Strong focus on health equity",
      "Medicaid and Medicare accepted",
      "Culturally competent care team"
    ],
    prescriptionPolicy: "Complete a health assessment, receive a prescription from providers trained in cultural competence, and get medications delivered free. Sliding scale pricing available.",
    responseTime: "4-8 hours",
    yearsInBusiness: 5,
    reviews: [
      { id: "r28", author: "Jasmine W.", rating: 5, content: "Love that they focus on health equity. The providers are understanding and the care is excellent.", date: "Dec 2025", verified: true },
      { id: "r29", author: "Diana R.", rating: 5, content: "They accept my Medicaid! Finally a telehealth service that works for me. Highly recommend.", date: "Nov 2025", verified: true },
      { id: "r30", author: "Carmen L.", rating: 4, content: "Great mission-driven company. The team is helpful and makes healthcare feel accessible.", date: "Oct 2025", verified: true }
    ],
    faq: [
      { question: "What does health equity mean to you?", answer: "We believe everyone deserves access to quality healthcare regardless of their background, location, or income. We design our services to reach underserved communities." },
      { question: "Do you accept Medicaid?", answer: "Yes! We accept Medicaid in all states where we operate, along with Medicare and most major insurance plans." },
      { question: "What languages do you support?", answer: "Our platform and many of our providers offer support in English and Spanish, with additional languages available upon request." }
    ],
    pricingDetails: [
      { service: "Consultation", price: 0, description: "Free" },
      { service: "Birth Control (with Medicaid)", price: 0, description: "Fully covered" },
      { service: "Birth Control (self-pay)", price: 15, description: "Affordable generics" },
      { service: "STI Testing Kit", price: 55, description: "Comprehensive panel" }
    ]
  }
];

export class MemStorage implements IStorage {
  async getAllProviders(): Promise<Provider[]> {
    return providers;
  }

  async getProviderBySlug(slug: string): Promise<Provider | undefined> {
    return providers.find((p) => p.slug === slug);
  }
}

export const storage = new MemStorage();
