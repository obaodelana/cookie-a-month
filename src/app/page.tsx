'use client';

import ProductCatalog from '@/components/ProductCatalog';
import BoxBuilder from '@/components/BoxBuilder';
import { Cookie, Truck, Heart, Star } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-pink-50 pt-20 pb-32 overflow-hidden">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 border border-pink-100">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
            <span className="text-pink-700 font-bold text-sm tracking-wide uppercase">Edmonton Only</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-pink-900 mb-6 leading-tight">
            A cookie a month,<br />
            <span className="text-pink-600">keeps the cravings at bay</span>
          </h1>
          <p className="text-xl text-pink-700/80 max-w-2xl mx-auto mb-10 font-medium">
            Hand-crafted, artisanal treats delivered fresh to your doorstep. Choose your box size and fill it with your favorite sweets.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#build" className="bg-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-pink-700 transition-all shadow-xl shadow-pink-200">
              Start Your Box
            </a>
            <a href="#catalog" className="bg-white text-pink-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-pink-50 transition-all border border-pink-200">
              View Treats
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white border-y border-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 mb-4">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Local Delivery</h3>
              <p className="text-gray-500">Exclusively serving the Edmonton area with fresh, local delivery.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 mb-4">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Baked with Love</h3>
              <p className="text-gray-500">Every cookie and cupcake is hand-crafted using premium ingredients.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 mb-4">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Subs</h3>
              <p className="text-gray-500">Change your items or pause your subscription anytime in settings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main App Section */}
      <section id="build" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div id="catalog" className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900">Choose Your Treats</h2>
              <div className="text-pink-600 font-semibold flex items-center gap-2">
                <Cookie size={20} />
                5 Artisanal Options
              </div>
            </div>
            <ProductCatalog />
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <BoxBuilder />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-900 text-pink-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-2xl font-black mb-4 tracking-tight">
            COOKIE<span className="text-pink-400">AMONTH</span>
          </div>
          <p className="opacity-60 text-sm">© 2024 Cookie a Month. All rights reserved. Edmonton, AB.</p>
        </div>
      </footer>
    </main>
  );
}
