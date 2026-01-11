import { z } from "zod";

export const providerSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  tagline: z.string(),
  description: z.string(),
  logoUrl: z.string().optional(),
  websiteUrl: z.string(),
  rating: z.number().min(0).max(5),
  reviewCount: z.number(),
  priceRange: z.object({
    min: z.number(),
    max: z.number(),
    consultationFee: z.number().optional(),
  }),
  services: z.array(z.string()),
  availability: z.enum(["same-day", "next-day", "2-3 days", "1 week"]),
  insuranceAccepted: z.array(z.string()),
  statesAvailable: z.array(z.string()),
  ageRequirement: z.string().optional(),
  keyFeatures: z.array(z.string()),
  prescriptionPolicy: z.string(),
  responseTime: z.string(),
  yearsInBusiness: z.number(),
  reviews: z.array(z.object({
    id: z.string(),
    author: z.string(),
    rating: z.number(),
    content: z.string(),
    date: z.string(),
    verified: z.boolean(),
  })),
  faq: z.array(z.object({
    question: z.string(),
    answer: z.string(),
  })),
  pricingDetails: z.array(z.object({
    service: z.string(),
    price: z.number(),
    description: z.string().optional(),
  })),
});

export type Provider = z.infer<typeof providerSchema>;

export const filterSchema = z.object({
  priceRange: z.tuple([z.number(), z.number()]).optional(),
  availability: z.array(z.enum(["same-day", "next-day", "2-3 days", "1 week"])).optional(),
  services: z.array(z.string()).optional(),
  insurance: z.array(z.string()).optional(),
  minRating: z.number().optional(),
});

export type ProviderFilter = z.infer<typeof filterSchema>;

export const users = null;
export const insertUserSchema = z.object({
  username: z.string(),
  password: z.string(),
});
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = { id: string; username: string; password: string };
