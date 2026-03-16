"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-warm-beige">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-pink/20 px-4 py-2 rounded-full mb-8">
                <Sparkles size={14} className="text-brand-pink" />
                <span className="text-deep-chocolate font-black text-[10px] tracking-[0.2em] uppercase">
                  Our Story
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-deep-chocolate mb-8 leading-tight">
                From Our Edmonton Kitchen <span className="text-brand-pink">to Your Door.</span>
              </h1>
              <p className="text-xl text-deep-chocolate/70 font-medium leading-relaxed mb-8">
                Hi, I&apos;m the owner of Fresh Batch Box. Baking has always been a way to bring
                joy to my friends and family right here in Edmonton. I wanted to create
                something that brings that same fresh-baked warmth to everyone in our city,
                every single month.
              </p>
              <p className="text-lg text-deep-chocolate/60 font-medium leading-relaxed mb-12">
                Fresh Batch Box isn&apos;t just about cookies; it&apos;s about the excitement of
                knowing that something delicious, handcrafted, and local is arriving at your
                door. We don&apos;t use couriers who might toss your treats around. We handle
                delivery ourselves because we care about every single box.
              </p>

              <div className="flex items-center gap-6">
                 <div className="bg-white p-4 rounded-3xl shadow-xl shadow-deep-chocolate/5 border border-brand-pink/10">
                    <p className="text-2xl font-black text-deep-chocolate">100%</p>
                    <p className="text-[10px] font-bold text-deep-chocolate/40 uppercase tracking-widest">Local Ingredients</p>
                 </div>
                 <div className="bg-white p-4 rounded-3xl shadow-xl shadow-deep-chocolate/5 border border-brand-pink/10">
                    <p className="text-2xl font-black text-deep-chocolate">Hand</p>
                    <p className="text-[10px] font-bold text-deep-chocolate/40 uppercase tracking-widest">Delivered in YEG</p>
                 </div>
              </div>
            </div>

            <div className="relative">
                <div className="absolute inset-0 bg-brand-pink/10 rounded-[4rem] -rotate-3"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/images/cover-image.png"
                    alt="Baking with Love"
                    className="relative rounded-[4rem] w-full shadow-2xl border-8 border-white"
                />
            </div>
          </div>

          <div className="bg-deep-chocolate text-warm-beige rounded-[4rem] p-12 md:p-20 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
             <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-black mb-8">The Fresh Batch Promise</h2>
                    <ul className="space-y-6">
                        {[
                            { title: "Baked Fresh", desc: "We never freeze our dough. Everything is mixed, scooped, and baked hours before delivery." },
                            { title: "No Shipping Damage", desc: "Traditional shipping is rough on treats. We hand-carry every box to your doorstep." },
                            { title: "Support Local", desc: "Every subscription supports a small Edmonton-based business and local ingredient suppliers." },
                            { title: "Quality Over Quantity", desc: "We focus on doing a few items perfectly rather than many items mediocrely." }
                        ].map((item, i) => (
                            <li key={i} className="flex gap-4">
                                <div className="bg-brand-pink/20 p-2 rounded-xl h-fit">
                                    <CheckIcon />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-brand-pink mb-1">{item.title}</h4>
                                    <p className="text-warm-beige/60 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-pink mb-8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <h3 className="text-3xl font-black mb-6">Serving Edmonton</h3>
                    <p className="text-warm-beige/70 font-medium leading-relaxed mb-8">
                        We currently deliver to all residential areas in Edmonton, Alberta.
                        If your postal code starts with T5 or T6, you&apos;re in our fresh-delivery zone!
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {["T5A", "T5B", "T6C", "T6E", "T5M", "T6H", "..."].map((zip) => (
                            <span key={zip} className="bg-white/10 px-4 py-2 rounded-xl text-xs font-black tracking-widest">{zip}</span>
                        ))}
                    </div>
                </div>
             </div>
          </div>

          <div className="mt-32 text-center">
            <h2 className="text-4xl font-black text-deep-chocolate mb-8">Ready to join the family?</h2>
            <Link
                href="/pricing"
                className="inline-flex items-center gap-3 bg-brand-pink text-deep-chocolate px-12 py-6 rounded-3xl font-black text-xl hover:translate-y-[-4px] transition-all shadow-2xl shadow-brand-pink/20"
            >
                Choose Your Box
                <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function CheckIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="#E8C7C8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}
