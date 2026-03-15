'use client';

import { useBox } from '@/context/BoxContext';
import { PRODUCTS } from '@/lib/products';
import { Plus, Minus, Trash2 } from 'lucide-react';

export default function BoxBuilder() {
  const { items, addItem, updateQuantity, removeItem, totalItems, maxItems, tier, setTier } = useBox();

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-pink-100">
      <h2 className="text-2xl font-bold text-pink-800 mb-4">Build Your Box</h2>

      <div className="flex gap-2 mb-6">
        {(['basic', 'premium', 'ultimate'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTier(t)}
            className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors ${
              tier === t
                ? 'bg-pink-500 text-white'
                : 'bg-pink-50 text-pink-600 hover:bg-pink-100'
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-end mb-2">
          <span className="text-sm font-medium text-gray-600">Capacity</span>
          <span className="text-sm font-bold text-pink-600">{totalItems} / {maxItems} items</span>
        </div>
        <div className="w-full bg-pink-50 h-3 rounded-full overflow-hidden">
          <div
            className="bg-pink-500 h-full transition-all duration-300"
            style={{ width: `${(totalItems / maxItems) * 100}%` }}
          />
        </div>
      </div>

      <div className="space-y-4">
        {items.length === 0 ? (
          <p className="text-gray-400 text-center py-8">Your box is empty. Add some treats!</p>
        ) : (
          items.map((item) => {
            const product = PRODUCTS.find((p) => p.id === item.productId);
            return (
              <div key={item.productId} className="flex items-center justify-between p-3 bg-pink-50/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-200 rounded-md overflow-hidden">
                    {/* Image placeholder */}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">{product?.name}</h4>
                    <p className="text-xs text-gray-500">{product?.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-white rounded-lg border border-pink-100 p-1">
                    <button
                      onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                      className="p-1 hover:bg-pink-50 rounded text-pink-600"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                      disabled={totalItems >= maxItems}
                      className="p-1 hover:bg-pink-50 rounded text-pink-600 disabled:opacity-30"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.productId)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      <button
        disabled={totalItems === 0}
        className="w-full mt-8 bg-pink-600 text-white py-4 rounded-xl font-bold hover:bg-pink-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-pink-200"
      >
        Subscribe Now - ${tier === 'basic' ? 20 : tier === 'premium' ? 50 : 100}/mo
      </button>
    </div>
  );
}
