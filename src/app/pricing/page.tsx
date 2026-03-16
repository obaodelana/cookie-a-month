"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TIER_CONFIG, SubscriptionTier } from "@/lib/schemas";
import { Check, HelpCircle, Package, Truck, Calendar, ArrowRight } from "lucide-react";
import { useBox } from "@/context/BoxContext";
import { useRouter } from "next/navigation";

export default function PricingPage() {
  const { setTier } = useBox();
  const router = useRouter();

  const handleSelectTier = (tier: SubscriptionTier) => {
    setTier(tier);
    router.push("/menu");
  };

  const faqs = [
    {
      q: "How often is delivery?",
      a: "We deliver once a month, typically during the first week. You'll receive a notification 48 hours before your delivery window."
    },
    {
      q: "Can I skip a month or cancel?",
      a: "Absolutely! You can skip a month or cancel your subscription at any time through your account settings. No strings attached."
    },
    {
      q: "Is it really Edmonton-only?",
      a: "Yes. To ensure maximum freshness and no shipping damage, the owner personally delivers every box within Edmonton city limits (T5 & T6 postal codes)."
    },
    {
      q: "How do I choose my treats?",
      a: "After picking a tier, you can use our Box Builder to select any combination of cookies and cupcakes from our current menu."
    },
    {
      q: "What about allergens?",
      a: "Our treats are made in a kitchen that handles nuts, dairy, gluten, and eggs. Detailed ingredient lists are available for every item on the menu page."
    },
    {
        q: "When is the deadline to change my box?",
        a: "You can change your selection anytime up until the 25th of the month for the following month's delivery."
    }
  ];

  return (
    <main className="min-h-screen bg-warm-beige">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-black text-deep-chocolate mb-6 tracking-tight">Simple Pricing</h1>
            <p className="text-xl text-deep-chocolate/60 max-w-2xl mx-auto font-medium leading-relaxed">
              Premium handcrafted treats at a fixed monthly price.
              No delivery fees, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {(Object.keys(TIER_CONFIG) as SubscriptionTier[]).map((key) => {
              const tier = TIER_CONFIG[key];
              return (
                <div
                  key={key}
                  className={`relative bg-white p-10 rounded-[3rem] border-2 transition-all duration-500 hover:shadow-2xl ${
                    tier.popular ? "border-brand-pink shadow-xl shadow-brand-pink/10" : "border-white"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-pink text-deep-chocolate px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest">
                      Most Popular
                    </div>
                  )}

                  <h4 className="text-2xl font-black text-deep-chocolate mb-2">{tier.name}</h4>
                  <p className="text-deep-chocolate/40 font-bold text-sm mb-8">{tier.description}</p>

                  <div className="mb-10 flex items-baseline gap-1 border-b border-brand-beige pb-8">
                    <span className="text-5xl font-black text-deep-chocolate">${tier.price}</span>
                    <span className="text-deep-chocolate/40 font-bold">/month</span>
                  </div>

                  <ul className="space-y-4 mb-12">
                    {[
                        `${tier.maxItems} Handcrafted Treats`,
                        "Free Edmonton Delivery",
                        "Change items monthly",
                        "Skip or cancel anytime",
                        "Owner-delivered (No damage)"
                    ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-deep-chocolate/70 font-bold">
                            <Check size={18} className="text-soft-green" />
                            {feature}
                        </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleSelectTier(key)}
                    className={`w-full py-5 rounded-[2rem] font-black text-lg transition-all ${
                        tier.popular
                        ? "bg-brand-pink text-deep-chocolate hover:bg-deep-chocolate hover:text-white"
                        : "bg-brand-beige text-deep-chocolate hover:bg-brand-pink"
                    }`}
                  >
                    Select Tier
                  </button>
                </div>
              );
            })}
          </div>

          {/* Comparison Table */}
          <div className="mb-32">
            <h3 className="text-4xl font-black text-deep-chocolate text-center mb-16">Compare Tiers</h3>
            <div className="overflow-x-auto bg-white rounded-[3rem] border border-brand-pink/10 shadow-xl shadow-deep-chocolate/5">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-brand-beige">
                            <th className="p-8 text-xs font-black uppercase tracking-widest text-deep-chocolate/40">Feature</th>
                            <th className="p-8 text-xl font-black text-deep-chocolate text-center">Dozen</th>
                            <th className="p-8 text-xl font-black text-brand-pink text-center">Family</th>
                            <th className="p-8 text-xl font-black text-deep-chocolate text-center">Big Batch</th>
                        </tr>
                    </thead>
                    <tbody className="font-bold text-deep-chocolate/70">
                        <tr className="border-b border-brand-beige">
                            <td className="p-8">Items per month</td>
                            <td className="p-8 text-center">12</td>
                            <td className="p-8 text-center">24</td>
                            <td className="p-8 text-center">48</td>
                        </tr>
                        <tr className="border-b border-brand-beige">
                            <td className="p-8">Price per treat (avg)</td>
                            <td className="p-8 text-center">$2.42</td>
                            <td className="p-8 text-center">$2.29</td>
                            <td className="p-8 text-center">$2.06</td>
                        </tr>
                        <tr className="border-b border-brand-beige">
                            <td className="p-8">Customizable selection</td>
                            <td className="p-8 text-center">Yes</td>
                            <td className="p-8 text-center">Yes</td>
                            <td className="p-8 text-center">Yes</td>
                        </tr>
                        <tr className="border-b border-brand-beige">
                            <td className="p-8">Local Edmonton delivery</td>
                            <td className="p-8 text-center">Free</td>
                            <td className="p-8 text-center">Free</td>
                            <td className="p-8 text-center">Free</td>
                        </tr>
                        <tr>
                            <td className="p-8">Monthly billing</td>
                            <td className="p-8 text-center">Yes</td>
                            <td className="p-8 text-center">Yes</td>
                            <td className="p-8 text-center">Yes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <HelpCircle size={48} className="mx-auto text-brand-pink mb-6" />
                <h3 className="text-4xl font-black text-deep-chocolate mb-4">Frequently Asked Questions</h3>
                <p className="text-deep-chocolate/60 font-medium">Everything you need to know about Fresh Batch Box.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {faqs.map((faq, i) => (
                    <div key={i} className="bg-white/50 p-8 rounded-3xl border border-brand-pink/5">
                        <h4 className="text-lg font-black text-deep-chocolate mb-3">{faq.q}</h4>
                        <p className="text-deep-chocolate/60 font-medium leading-relaxed">{faq.a}</p>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
