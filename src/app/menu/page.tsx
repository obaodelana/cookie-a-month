"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCatalog from "@/components/ProductCatalog";
import BoxBuilder from "@/components/BoxBuilder";
import { useBox } from "@/context/BoxContext";
import { TIER_CONFIG } from "@/lib/schemas";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MenuPage() {
  const { tier, totalItems, maxItems } = useBox();

  return (
    <main className="min-h-screen bg-warm-beige">
      <Navbar />

      <section className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-pink/20 px-4 py-2 rounded-full mb-6">
               <Sparkles size={14} className="text-brand-pink" />
               <span className="text-deep-chocolate font-black text-[10px] tracking-[0.2em] uppercase">
                 Customize Your Box
               </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-deep-chocolate mb-4 tracking-tight">
              Our Fresh Menu
            </h1>
            <p className="text-xl text-deep-chocolate/60 font-medium max-w-xl">
              Mix and match your favorites. Every item is handcrafted in our
              Edmonton kitchen just for your monthly delivery.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-xl shadow-deep-chocolate/5 border border-brand-pink/10 min-w-[300px]">
            <p className="text-[10px] font-black text-deep-chocolate/40 uppercase tracking-widest mb-2">Selected Tier</p>
            <div className="flex justify-between items-center">
                <span className="text-xl font-black text-deep-chocolate">{TIER_CONFIG[tier].name}</span>
                <span className="text-brand-pink font-black">${TIER_CONFIG[tier].price}</span>
            </div>
            <div className="mt-4 flex items-center gap-2">
                <div className="h-2 flex-1 bg-brand-beige rounded-full overflow-hidden">
                    <div
                        className="h-full bg-brand-pink transition-all duration-700"
                        style={{ width: `${(totalItems/maxItems) * 100}%` }}
                    ></div>
                </div>
                <span className="text-xs font-black text-deep-chocolate">{totalItems}/{maxItems}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <ProductCatalog />

            <div className="mt-20 p-12 bg-white rounded-[3rem] border border-brand-pink/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/5 rounded-full -mr-16 -mt-16"></div>
                <h3 className="text-3xl font-black text-deep-chocolate mb-6">Subscription Note</h3>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-deep-chocolate/70 font-bold">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-pink mt-2 shrink-0"></div>
                        Monthly deliveries are made during the first week of every month.
                    </li>
                    <li className="flex items-start gap-3 text-deep-chocolate/70 font-bold">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-pink mt-2 shrink-0"></div>
                        You can update your treat selection anytime before the 25th of the month.
                    </li>
                    <li className="flex items-start gap-3 text-deep-chocolate/70 font-bold">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-pink mt-2 shrink-0"></div>
                        We recommend a 50/50 mix of cookies and cupcakes for the ultimate variety.
                    </li>
                </ul>
            </div>
          </div>

          <div className="lg:col-span-4 sticky top-32">
            <BoxBuilder />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
