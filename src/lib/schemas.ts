import { z } from "zod";

// Edmonton postal code regex: Starts with T5 or T6 followed by a digit and a letter, etc.
// Simplified for now to check the start: T5 or T6
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
  productId: z.string().uuid(),
  quantity: z.number().int().min(1).max(25),
});

export const subscriptionTierSchema = z.enum(["basic", "premium", "ultimate"]);

export type ProfileFormValues = z.infer<typeof profileSchema>;
export type BoxItemValues = z.infer<typeof boxItemSchema>;
export type SubscriptionTier = z.infer<typeof subscriptionTierSchema>;

export const TIER_CONFIG = {
  basic: { name: "Basic Box", price: 20, maxItems: 5 },
  premium: { name: "Premium Box", price: 50, maxItems: 10 },
  ultimate: { name: "Ultimate Box", price: 100, maxItems: 25 },
};
