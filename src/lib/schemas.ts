import { z } from "zod";

// Edmonton postal code regex: Starts with T5 or T6 followed by a digit and a letter, etc.
const edmontonPostalCodeRegex = /^[T][5-6][A-Z][0-9][A-Z][0-9]$/i;

export const profileSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  fullAddress: z.string().min(5, "Please provide a complete address"),
  postalCode: z
    .string()
    .regex(
      edmontonPostalCodeRegex,
      "We only deliver to Edmonton (postal codes starting with T5 or T6)",
    ),
  googleMapsLink: z.string().url().optional().or(z.literal("")),
});

export const boxItemSchema = z.object({
  productId: z.string(),
  quantity: z.number().int().min(1).max(48),
});

export const subscriptionTierSchema = z.enum(["dozen", "family", "big"]);

export type ProfileFormValues = z.infer<typeof profileSchema>;
export type BoxItemValues = z.infer<typeof boxItemSchema>;
export type SubscriptionTier = z.infer<typeof subscriptionTierSchema>;

export interface TierDetail {
    name: string;
    price: number;
    maxItems: number;
    description: string;
    popular?: boolean;
}

export const TIER_CONFIG: Record<SubscriptionTier, TierDetail> = {
  dozen: {
    name: "Dozen Delight",
    price: 29,
    maxItems: 12,
    description: "Perfect for a single treat-lover."
  },
  family: {
    name: "Family Share",
    price: 55,
    maxItems: 24,
    description: "Our most popular choice for families.",
    popular: true
  },
  big: {
    name: "Big Batch",
    price: 99,
    maxItems: 48,
    description: "For the ultimate party or office stash."
  },
};
