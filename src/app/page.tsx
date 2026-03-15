"use client";

import ProductCatalog from "@/components/ProductCatalog";
import { Cookie, Truck, Heart, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffafb]">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 pb-32 overflow-hidden">
        {/* Visual Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 animate-bounce">
            <Cookie size={40} className="text-pink-400 rotate-12" />
          </div>
          <div className="absolute top-40 right-20 animate-pulse">
            <Heart size={30} className="text-pink-300 -rotate-12" />
          </div>
          <div className="absolute bottom-20 left-1/4 animate-bounce delay-700">
            <Star size={35} className="text-pink-400 rotate-45" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 border border-pink-100">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                </span>
                <span className="text-pink-700 font-bold text-sm tracking-wide uppercase">
                  Edmonton Only
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-pink-900 mb-6 leading-tight">
                A cookie a month,
                <br />
                <span className="text-pink-600">keeps the cravings at bay</span>
              </h1>
              <p className="text-xl text-pink-700/80 max-w-2xl mb-10 font-medium">
                Hand-crafted, artisanal treats delivered fresh to your doorstep.
                Choose your box size and fill it with your favorite sweets.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/treats"
                  className="bg-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-pink-700 transition-all shadow-xl shadow-pink-200 flex items-center gap-2"
                >
                  Start Your Box
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-pink-200/50 rounded-[40px] blur-2xl transform rotate-3"></div>
              <div className="relative bg-white p-4 rounded-[40px] shadow-2xl border border-pink-100 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/images/cover-image.png"
                  alt="Delicious Cookies"
                  className="rounded-4xl w-full h-150 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white border-y border-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-pink-50 rounded-3xl flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300">
                <Truck size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-pink-900">
                Local Delivery
              </h3>
              <p className="text-pink-700/60 font-medium">
                Exclusively serving the Edmonton area with fresh, local delivery
                every week.
              </p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-pink-50 rounded-3xl flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300">
                <Heart size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-pink-900">
                Baked with Love
              </h3>
              <p className="text-pink-700/60 font-medium">
                Every cookie and cupcake is hand-crafted using premium
                ingredients.
              </p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-pink-50 rounded-3xl flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300">
                <Star size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-pink-900">
                Flexible Subs
              </h3>
              <p className="text-pink-700/60 font-medium">
                Change your items or pause your subscription anytime in your
                dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-pink-900 mb-4">
            Popular This Month
          </h2>
          <p className="text-lg text-pink-700/70 font-medium max-w-2xl mx-auto">
            Our most loved treats that our subscribers can't get enough of.
          </p>
        </div>

        <ProductCatalog viewMode="featured" />

        <div className="mt-16 text-center">
          <Link
            href="/treats"
            className="inline-flex items-center gap-2 bg-white text-pink-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-pink-50 transition-all border-2 border-pink-100 shadow-sm"
          >
            Browse All Treats
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-900 text-pink-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-3xl font-black mb-6 tracking-tight">
            COOKIE<span className="text-pink-400">AMONTH</span>
          </div>
          <div className="flex justify-center gap-8 mb-10 opacity-60 font-bold uppercase tracking-widest text-xs">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/treats" className="hover:text-white">
              Treats
            </Link>
            <Link href="/profile" className="hover:text-white">
              Profile
            </Link>
          </div>
          <p className="opacity-40 text-sm">
            © {new Date().getFullYear()} Cookie a Month. All rights reserved.
            Edmonton, AB.
          </p>
        </div>
      </footer>
    </main>
  );
}
