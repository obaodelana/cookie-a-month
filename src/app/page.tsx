"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCatalog from "@/components/ProductCatalog";
import { TIER_CONFIG, SubscriptionTier } from "@/lib/schemas";
import {
  Cookie,
  Truck,
  Heart,
  ArrowRight,
  ChevronRight,
  Package,
  Calendar,
  Star
} from "lucide-react";
import Link from "next/link";
import { useBox } from "@/context/BoxContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const { setTier } = useBox();
  const router = useRouter();

  const handleSelectTier = (tier: SubscriptionTier) => {
    setTier(tier);
    router.push("/menu");
  };

  return (
    <main className="min-h-screen bg-warm-beige">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-brand-pink/10 rounded-full blur-3xl -mr-32"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-beige rounded-full blur-3xl -ml-48"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 bg-brand-pink/20 px-4 py-2 rounded-full mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink"></span>
                </span>
                <span className="text-deep-chocolate font-black text-[10px] tracking-[0.2em] uppercase">
                  Handcrafted in YEG
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black text-deep-chocolate mb-8 leading-[0.9] tracking-tight">
                Freshly Baked.<br />
                <span className="text-brand-pink">Delivered Monthly.</span>
              </h1>

              <p className="text-xl text-deep-chocolate/70 max-w-xl mb-12 font-medium leading-relaxed">
                Edmonton’s only true fresh-treat subscription. Handcrafted cookies and cupcakes
                baked fresh in our local kitchen and delivered by us to your door.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#pricing"
                  className="bg-deep-chocolate text-warm-beige px-10 py-5 rounded-2xl font-black text-lg hover:translate-y-[-4px] transition-all shadow-xl shadow-deep-chocolate/20 flex items-center gap-3 group"
                >
                  Choose Your Tier
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  href="/menu"
                  className="bg-white text-deep-chocolate border-2 border-brand-pink/20 px-10 py-5 rounded-2xl font-black text-lg hover:bg-brand-beige transition-all"
                >
                  Browse Menu
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-8 border-t border-brand-beige pt-8">
                <div>
                  <p className="text-2xl font-black text-deep-chocolate">100%</p>
                  <p className="text-[10px] font-bold text-deep-chocolate/40 uppercase tracking-widest">Fresh Baked</p>
                </div>
                <div className="w-px h-8 bg-brand-beige"></div>
                <div>
                  <p className="text-2xl font-black text-deep-chocolate">Free</p>
                  <p className="text-[10px] font-bold text-deep-chocolate/40 uppercase tracking-widest">YEG Delivery</p>
                </div>
                <div className="w-px h-8 bg-brand-beige"></div>
                <div>
                  <p className="text-2xl font-black text-deep-chocolate">Easy</p>
                  <p className="text-[10px] font-bold text-deep-chocolate/40 uppercase tracking-widest">Cancellations</p>
                </div>
              </div>
            </div>

            <div className="relative lg:h-[700px] flex items-center justify-center">
               <div className="absolute inset-0 bg-brand-pink/5 rounded-[4rem] rotate-3 -z-10"></div>
               <div className="relative group">
                    <div className="absolute -inset-4 bg-white/50 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/images/cover-image.png"
                        alt="Handcrafted Fresh Cookies"
                        className="rounded-[3.5rem] w-full max-w-[500px] shadow-2xl border-[12px] border-white group-hover:rotate-[-2deg] transition-transform duration-700"
                    />

                    {/* Floating badge */}
                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl border border-brand-pink/10 animate-bounce">
                        <div className="flex items-center gap-3">
                            <div className="bg-soft-green/20 p-2 rounded-xl">
                                <Heart className="text-soft-green fill-soft-green" size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-black text-deep-chocolate">Baked with Love</p>
                                <p className="text-[10px] font-bold text-deep-chocolate/40 uppercase tracking-tighter">In Edmonton, AB</p>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section id="pricing" className="py-32 bg-warm-beige relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-black text-brand-pink uppercase tracking-[0.3em] mb-4">Pricing Plans</h2>
            <h3 className="text-5xl md:text-6xl font-black text-deep-chocolate mb-6">Choose Your Perfect Box</h3>
            <p className="text-xl text-deep-chocolate/60 max-w-2xl mx-auto font-medium">
              Each tier is a fixed monthly price with a maximum box size.
              No hidden fees, just pure sweetness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(Object.keys(TIER_CONFIG) as SubscriptionTier[]).map((key) => {
              const tier = TIER_CONFIG[key];
              return (
                <div
                  key={key}
                  className={`relative group bg-white p-10 rounded-[3rem] border-2 transition-all duration-500 hover:shadow-2xl hover:translate-y-[-8px] ${
                    tier.popular ? "border-brand-pink shadow-xl shadow-brand-pink/10" : "border-white"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-pink text-deep-chocolate px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-lg">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-8">
                    <h4 className="text-2xl font-black text-deep-chocolate mb-2">{tier.name}</h4>
                    <p className="text-deep-chocolate/40 font-bold text-sm">{tier.description}</p>
                  </div>

                  <div className="mb-10 flex items-baseline gap-1">
                    <span className="text-5xl font-black text-deep-chocolate">${tier.price}</span>
                    <span className="text-deep-chocolate/40 font-bold">/month</span>
                  </div>

                  <ul className="space-y-4 mb-12">
                    <li className="flex items-center gap-3 text-deep-chocolate/70 font-bold">
                        <div className="bg-soft-green/10 p-1 rounded-full"><Package size={16} className="text-soft-green" /></div>
                        {tier.maxItems} Handcrafted Items
                    </li>
                    <li className="flex items-center gap-3 text-deep-chocolate/70 font-bold">
                        <div className="bg-soft-green/10 p-1 rounded-full"><Truck size={16} className="text-soft-green" /></div>
                        Free Monthly Local Delivery
                    </li>
                    <li className="flex items-center gap-3 text-deep-chocolate/70 font-bold">
                        <div className="bg-soft-green/10 p-1 rounded-full"><Calendar size={16} className="text-soft-green" /></div>
                        Skip or Cancel Anytime
                    </li>
                    <li className="flex items-center gap-3 text-deep-chocolate/70 font-bold">
                        <div className="bg-soft-green/10 p-1 rounded-full"><Star size={16} className="text-soft-green" /></div>
                        ~${(tier.price / tier.maxItems).toFixed(2)} per treat
                    </li>
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

          <p className="text-center mt-12 text-deep-chocolate/40 font-bold text-sm">
            Note: We recommend at least 50% cookies or cupcakes for the best box experience!
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-black text-brand-pink uppercase tracking-[0.3em] mb-4">Process</h2>
            <h3 className="text-5xl font-black text-deep-chocolate">How It Works</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            {/* Connector line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-1 border-t-4 border-dashed border-brand-beige -translate-y-1/2 -z-0"></div>

            <div className="flex flex-col items-center text-center relative z-10 group">
              <div className="w-24 h-24 bg-brand-beige rounded-[2rem] flex items-center justify-center text-deep-chocolate mb-8 group-hover:rotate-6 transition-all duration-500 shadow-xl shadow-brand-beige/20">
                <Package size={40} />
              </div>
              <h4 className="text-2xl font-black mb-4">1. Pick Tier & Build</h4>
              <p className="text-deep-chocolate/60 font-medium leading-relaxed">
                Choose your box size (12, 24, or 48 items) and fill it with any mix
                of cookies and cupcakes from our current menu.
              </p>
            </div>

            <div className="flex flex-col items-center text-center relative z-10 group">
              <div className="w-24 h-24 bg-brand-pink/20 rounded-[2rem] flex items-center justify-center text-deep-chocolate mb-8 group-hover:-rotate-6 transition-all duration-500 shadow-xl shadow-brand-pink/10">
                <Cookie size={40} />
              </div>
              <h4 className="text-2xl font-black mb-4">2. We Bake Fresh</h4>
              <p className="text-deep-chocolate/60 font-medium leading-relaxed">
                Once a month, we get to work in our Edmonton kitchen, baking every single
                item by hand using premium, local ingredients.
              </p>
            </div>

            <div className="flex flex-col items-center text-center relative z-10 group">
              <div className="w-24 h-24 bg-soft-green/20 rounded-[2rem] flex items-center justify-center text-deep-chocolate mb-8 group-hover:rotate-6 transition-all duration-500 shadow-xl shadow-soft-green/10">
                <Truck size={40} />
              </div>
              <h4 className="text-2xl font-black mb-4">3. Monthly Delivery</h4>
              <p className="text-deep-chocolate/60 font-medium leading-relaxed">
                No courier damage. The owner personally delivers your treats
                to your door in Edmonton, ensuring everything arrives perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treats Section */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-[10px] font-black text-brand-pink uppercase tracking-[0.3em] mb-4">The Menu</h2>
            <h3 className="text-5xl font-black text-deep-chocolate">This Month&apos;s Favorites</h3>
          </div>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-deep-chocolate font-black border-b-4 border-brand-pink pb-1 hover:text-brand-pink transition-all"
          >
            View Full Menu
            <ArrowRight size={20} />
          </Link>
        </div>

        <ProductCatalog viewMode="featured" />
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-deep-chocolate text-warm-beige overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-black text-brand-pink uppercase tracking-[0.3em] mb-4">Testimonials</h2>
            <h3 className="text-5xl font-black text-white">What Our YEG Neighbors Say</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "The best subscription I&apos;ve ever had. Knowing they&apos;re baked right here in Edmonton and delivered fresh makes a huge difference. The M&M cookies are to die for!",
                author: "Sarah L.",
                neighborhood: "Glenora"
              },
              {
                text: "We get the Family Share box every month and it&apos;s the highlight for our kids. The cupcakes are so fluffy, and the pink buttercream is legendary.",
                author: "Mark & Jenn T.",
                neighborhood: "Summerside"
              },
              {
                text: "Perfect for office treats! I order the Big Batch for our team meetings once a month. Professional, fresh, and supporting a local business is a huge plus.",
                author: "David K.",
                neighborhood: "Downtown"
              }
            ].map((t, i) => (
              <div key={i} className="bg-white/5 p-10 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} className="fill-brand-pink text-brand-pink" />)}
                </div>
                <p className="text-lg font-medium leading-relaxed mb-8 italic">&quot;{t.text}&quot;</p>
                <div>
                  <p className="font-black text-brand-pink">{t.author}</p>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{t.neighborhood}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-pink rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-brand-pink/20">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mt-32"></div>
                <div className="relative z-10">
                    <h2 className="text-5xl md:text-7xl font-black text-deep-chocolate mb-8 leading-tight">
                        Ready for fresh treats<br />every month?
                    </h2>
                    <p className="text-xl text-deep-chocolate/70 font-bold mb-12 max-w-xl mx-auto">
                        Join hundreds of Edmontonians who enjoy the luxury of local,
                        handcrafted sweets delivered to their door.
                    </p>
                    <Link
                        href="#pricing"
                        className="inline-flex items-center gap-3 bg-deep-chocolate text-warm-beige px-12 py-6 rounded-3xl font-black text-xl hover:translate-y-[-4px] transition-all shadow-2xl shadow-deep-chocolate/30"
                    >
                        Get Started
                        <ArrowRight />
                    </Link>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
