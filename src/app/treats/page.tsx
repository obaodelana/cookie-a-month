'use client';

import ProductCatalog from '@/components/ProductCatalog';
import BoxBuilder from '@/components/BoxBuilder';
import { Cookie, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TreatsPage() {
  return (
    <main className="min-h-screen bg-[#fffafb]">
      {/* Navigation */}
      <nav className="bg-white border-b border-pink-50 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-pink-600 font-bold hover:text-pink-700 transition-colors">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <div className="text-xl font-black text-pink-900 tracking-tight">
            COOKIE<span className="text-pink-400">AMONTH</span>
          </div>
        </div>
      </nav>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-black text-gray-900 mb-4">Choose Your Treats</h1>
          <p className="text-lg text-pink-700/70 font-medium">
            Mix and match your favorites to build your perfect monthly box.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Cookie className="text-pink-500" />
                Our Full Menu
              </h2>
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
      <footer className="bg-pink-900 text-pink-100 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-2xl font-black mb-4 tracking-tight">
            COOKIE<span className="text-pink-400">AMONTH</span>
          </div>
          <p className="opacity-60 text-sm">
            © {new Date().getFullYear()} Cookie a Month. All rights reserved. Edmonton, AB.
          </p>
        </div>
      </footer>
    </main>
  );
}
