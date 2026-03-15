"use client";

import { useBox } from "@/context/BoxContext";
import { PRODUCTS } from "@/lib/products";
import { TIER_CONFIG } from "@/lib/schemas";
import { Plus, Minus, Trash2 } from "lucide-react";

export default function BoxBuilder() {
  const {
    items,
    addItem,
    updateQuantity,
    removeItem,
    totalItems,
    maxItems,
    tier,
    setTier,
  } = useBox();

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-pink-100">
      <h2 className="text-2xl font-black text-pink-900 mb-6">Build Your Box</h2>

      <div className="flex gap-2 mb-8 bg-pink-50 p-1 rounded-2xl">
        {(["basic", "premium", "ultimate"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTier(t)}
            className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all ${
              tier === t
                ? "bg-white text-pink-600 shadow-sm"
                : "text-pink-400 hover:text-pink-600"
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-end mb-2">
          <span className="text-sm font-bold text-pink-900/60 uppercase tracking-wider">
            Capacity
          </span>
          <span className="text-sm font-black text-pink-600">
            {totalItems} / {maxItems} items
          </span>
        </div>
        <div className="w-full bg-pink-50 h-4 rounded-full overflow-hidden p-1">
          <div
            className="bg-pink-500 h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(totalItems / maxItems) * 100}%` }}
          />
        </div>
      </div>

      <div className="space-y-4 max-h-100 overflow-y-auto pr-2 custom-scrollbar">
        {items.length === 0 ? (
          <div className="text-center py-12 px-4 border-2 border-dashed border-pink-100 rounded-3xl">
            <p className="text-pink-300 font-bold">
              Your box is empty.
              <br />
              Add some treats!
            </p>
          </div>
        ) : (
          items.map((item) => {
            const product = PRODUCTS.find((p) => p.id === item.productId);
            return (
              <div
                key={item.productId}
                className="flex items-center justify-between p-3 bg-pink-50/50 rounded-2xl border border-pink-50/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-pink-100 rounded-xl overflow-hidden shrink-0 border-2 border-white shadow-sm">
                    {product?.image && (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-pink-900 text-sm leading-tight">
                      {product?.name}
                    </h4>
                    <p className="text-[10px] font-bold text-pink-400 uppercase tracking-widest">
                      {product?.category}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 bg-white rounded-xl border border-pink-100 p-1 shadow-sm">
                    <button
                      onClick={() =>
                        updateQuantity(item.productId, item.quantity - 1)
                      }
                      className="p-1 hover:bg-pink-50 rounded-lg text-pink-600 transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="text-sm font-black w-4 text-center text-pink-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.productId, item.quantity + 1)
                      }
                      disabled={totalItems >= maxItems}
                      className="p-1 hover:bg-pink-50 rounded-lg text-pink-600 disabled:opacity-30 transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.productId)}
                    className="p-2 text-pink-200 hover:text-red-400 transition-colors"
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
        className="w-full mt-8 bg-pink-600 text-white py-5 rounded-3xl font-black text-lg hover:bg-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-pink-200"
      >
        Subscribe for ${TIER_CONFIG[tier].price}/mo
      </button>
    </div>
  );
}
