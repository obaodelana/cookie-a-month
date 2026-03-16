"use client";

import { PRODUCTS } from "@/lib/products";
import { useBox } from "@/context/BoxContext";
import { Plus, Check } from "lucide-react";

interface ProductCatalogProps {
  viewMode?: "full" | "featured";
}

export default function ProductCatalog({
  viewMode = "full",
}: ProductCatalogProps) {
  const { addItem, items, totalItems, maxItems } = useBox();

  const productsToDisplay =
    viewMode === "featured" ? PRODUCTS.slice(0, 4) : PRODUCTS;

  const getItemQuantity = (id: string) => {
    return items.find((i) => i.productId === id)?.quantity || 0;
  };

  return (
    <div className={`grid grid-cols-1 ${viewMode === 'featured' ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
      {productsToDisplay.map((product) => (
        <div
          key={product.id}
          className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-pink/20 flex flex-col"
        >
          <div className="h-64 bg-brand-beige flex items-center justify-center relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute top-4 right-4">
              <span className="bg-white/90 backdrop-blur-sm text-deep-chocolate text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                {product.category}
              </span>
            </div>
            {getItemQuantity(product.id) > 0 && (
               <div className="absolute top-4 left-4">
               <span className="bg-brand-pink text-deep-chocolate text-xs font-black h-8 w-8 flex items-center justify-center rounded-full shadow-lg border-2 border-white">
                 {getItemQuantity(product.id)}
               </span>
             </div>
            )}
          </div>
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-bold text-deep-chocolate mb-2">
              {product.name}
            </h3>
            <p className="text-sm text-deep-chocolate/60 mb-6 font-medium leading-relaxed flex-1">
              {product.description}
            </p>

            {viewMode === "full" && (
              <button
                onClick={() => addItem(product.id)}
                disabled={totalItems >= maxItems}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-black text-sm transition-all shadow-sm ${
                  totalItems >= maxItems
                  ? "bg-brand-beige text-deep-chocolate/30 cursor-not-allowed"
                  : "bg-brand-pink text-deep-chocolate hover:bg-deep-chocolate hover:text-white"
                }`}
              >
                {totalItems >= maxItems && getItemQuantity(product.id) === 0 ? (
                    "Box Full"
                ) : (
                    <>
                        <Plus size={18} />
                        Add to Box
                    </>
                )}
              </button>
            )}

            {viewMode === "featured" && (
                <div className="h-1.5 w-12 bg-brand-pink rounded-full"></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
