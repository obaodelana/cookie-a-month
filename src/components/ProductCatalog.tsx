'use client';

import { PRODUCTS } from '@/lib/products';
import { useBox } from '@/context/BoxContext';
import { Plus } from 'lucide-react';

export default function ProductCatalog() {
  const { addItem, totalItems, maxItems } = useBox();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {PRODUCTS.map((product) => (
        <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-pink-50">
          <div className="h-48 bg-pink-100 flex items-center justify-center relative overflow-hidden">
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 right-3">
              <span className="bg-white/90 backdrop-blur-sm text-pink-600 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                {product.category}
              </span>
            </div>
          </div>
          <div className="p-5">
            <h3 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h3>
            <p className="text-sm text-gray-500 mb-4 line-clamp-2">{product.description}</p>
            <button
              onClick={() => addItem(product.id)}
              disabled={totalItems >= maxItems}
              className="w-full flex items-center justify-center gap-2 bg-pink-50 text-pink-600 py-2 rounded-xl font-semibold hover:bg-pink-500 hover:text-white transition-all disabled:opacity-50 disabled:hover:bg-pink-50 disabled:hover:text-pink-600"
            >
              <Plus size={18} />
              Add to Box
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
