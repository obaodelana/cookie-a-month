"use client";

import { useBox } from "@/context/BoxContext";
import { PRODUCTS } from "@/lib/products";
import { TIER_CONFIG, SubscriptionTier } from "@/lib/schemas";
import { Plus, Minus, Trash2, ShoppingBag, Sparkles, X, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function BoxBuilder() {
  const {
    items,
    updateQuantity,
    removeItem,
    totalItems,
    maxItems,
    tier,
    setTier,
    clearBox
  } = useBox();

  const [showCheckout, setShowCheckout] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const tierKeys = Object.keys(TIER_CONFIG) as SubscriptionTier[];

  const handleSubscribe = () => {
    setShowCheckout(true);
  };

  const confirmSubscription = () => {
    setIsSubscribed(true);
    setTimeout(() => {
        setShowCheckout(false);
        setIsSubscribed(false);
        clearBox();
    }, 3000);
  };

  return (
    <>
      <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-deep-chocolate/5 border border-brand-pink/20">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-brand-pink/30 p-2 rounded-xl">
            <ShoppingBag className="text-deep-chocolate" size={24} />
          </div>
          <h2 className="text-2xl font-black text-deep-chocolate">Your Custom Box</h2>
        </div>

        <div className="space-y-3 mb-10">
          <p className="text-[10px] font-black text-deep-chocolate/40 uppercase tracking-[0.2em] mb-4">
            1. Select Your Tier
          </p>
          <div className="grid grid-cols-1 gap-2">
              {tierKeys.map((t) => (
              <button
                  key={t}
                  onClick={() => setTier(t)}
                  className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${
                  tier === t
                      ? "border-brand-pink bg-brand-pink/5 shadow-sm"
                      : "border-brand-beige hover:border-brand-pink/30"
                  }`}
              >
                  <div className="text-left">
                      <p className={`font-black text-sm ${tier === t ? 'text-deep-chocolate' : 'text-deep-chocolate/60'}`}>
                          {TIER_CONFIG[t].name}
                      </p>
                      <p className="text-[10px] font-bold text-deep-chocolate/40">
                          {TIER_CONFIG[t].maxItems} Items
                      </p>
                  </div>
                  <div className={`font-black text-lg ${tier === t ? 'text-brand-pink' : 'text-deep-chocolate/40'}`}>
                      ${TIER_CONFIG[t].price}
                  </div>
              </button>
              ))}
          </div>
        </div>

        <div className="mb-10">
          <div className="flex justify-between items-end mb-3">
            <span className="text-[10px] font-black text-deep-chocolate/40 uppercase tracking-[0.2em]">
              2. Box Capacity
            </span>
            <span className="text-sm font-black text-deep-chocolate">
              {totalItems} <span className="text-brand-pink">/</span> {maxItems} <span className="text-xs text-deep-chocolate/40 font-bold ml-1">ITEMS</span>
            </span>
          </div>
          <div className="w-full bg-brand-beige h-5 rounded-2xl overflow-hidden p-1.5 border border-brand-pink/10">
            <div
              className="bg-brand-pink h-full rounded-xl transition-all duration-700 ease-out shadow-sm shadow-brand-pink/50"
              style={{ width: `${(totalItems / maxItems) * 100}%` }}
            />
          </div>
          {totalItems === maxItems && (
              <p className="flex items-center gap-1.5 text-[10px] font-bold text-soft-green mt-3 animate-pulse">
                  <Sparkles size={12} />
                  Box is perfectly full! Ready to subscribe.
              </p>
          )}
        </div>

        <div className="space-y-4 mb-10 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
          <p className="text-[10px] font-black text-deep-chocolate/40 uppercase tracking-[0.2em]">
              3. Selected Treats
          </p>
          {items.length === 0 ? (
            <div className="text-center py-16 px-6 border-2 border-dashed border-brand-beige rounded-[2rem] bg-brand-beige/20">
              <p className="text-deep-chocolate/30 font-bold text-sm leading-relaxed">
                Your box is lonely.<br />
                Tap treats to add them!
              </p>
            </div>
          ) : (
            items.map((item) => {
              const product = PRODUCTS.find((p) => p.id === item.productId);
              return (
                <div
                  key={item.productId}
                  className="flex items-center justify-between p-3.5 bg-brand-beige/30 rounded-2xl border border-brand-pink/5 hover:border-brand-pink/20 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white rounded-2xl overflow-hidden shrink-0 border border-brand-pink/10 shadow-sm p-1">
                      {product?.image && (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-deep-chocolate text-xs leading-tight mb-1">
                        {product?.name}
                      </h4>
                      <p className="text-[9px] font-black text-brand-pink uppercase tracking-widest">
                        {product?.category}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2.5 bg-white rounded-xl border border-brand-pink/20 p-1.5 shadow-sm">
                      <button
                        onClick={() =>
                          updateQuantity(item.productId, item.quantity - 1)
                        }
                        className="p-1 hover:bg-brand-pink hover:text-white rounded-lg text-deep-chocolate transition-all"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-xs font-black w-4 text-center text-deep-chocolate">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.productId, item.quantity + 1)
                        }
                        disabled={totalItems >= maxItems}
                        className="p-1 hover:bg-brand-pink hover:text-white rounded-lg text-deep-chocolate disabled:opacity-20 transition-all"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.productId)}
                      className="p-2 text-deep-chocolate/20 hover:text-red-400 transition-colors"
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
          onClick={handleSubscribe}
          disabled={totalItems === 0}
          className="w-full bg-deep-chocolate text-warm-beige py-5 rounded-[2rem] font-black text-lg hover:bg-deep-chocolate/90 transition-all disabled:opacity-20 disabled:cursor-not-allowed shadow-xl shadow-deep-chocolate/10 flex items-center justify-center gap-3"
        >
          Subscribe • ${TIER_CONFIG[tier].price}/mo
        </button>

        <p className="text-center mt-6 text-[10px] font-bold text-deep-chocolate/30 leading-relaxed uppercase tracking-widest">
          Free Monthly Delivery in Edmonton<br />
          Cancel or skip anytime
        </p>
      </div>

      {/* Fake Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-deep-chocolate/60 backdrop-blur-sm" onClick={() => !isSubscribed && setShowCheckout(false)}></div>
            <div className="relative bg-white w-full max-w-lg rounded-[3rem] shadow-2xl p-10 md:p-16 overflow-hidden">
                {!isSubscribed ? (
                    <>
                        <button
                            onClick={() => setShowCheckout(false)}
                            className="absolute top-8 right-8 text-deep-chocolate/20 hover:text-deep-chocolate transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="text-center mb-10">
                            <div className="bg-brand-pink/20 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 text-deep-chocolate">
                                <ShoppingBag size={32} />
                            </div>
                            <h3 className="text-3xl font-black text-deep-chocolate mb-2">Review &amp; Subscribe</h3>
                            <p className="text-deep-chocolate/60 font-bold">Your {TIER_CONFIG[tier].name} summary</p>
                        </div>

                        <div className="space-y-4 mb-10">
                            <div className="flex justify-between items-center py-4 border-b border-brand-beige">
                                <span className="font-bold text-deep-chocolate/60">Subscription Tier</span>
                                <span className="font-black text-deep-chocolate">{TIER_CONFIG[tier].name}</span>
                            </div>
                            <div className="flex justify-between items-center py-4 border-b border-brand-beige">
                                <span className="font-bold text-deep-chocolate/60">Total Items</span>
                                <span className="font-black text-deep-chocolate">{totalItems} items</span>
                            </div>
                            <div className="flex justify-between items-center py-4 border-b border-brand-beige">
                                <span className="font-bold text-deep-chocolate/60">Delivery Area</span>
                                <span className="font-black text-deep-chocolate">Edmonton, AB</span>
                            </div>
                            <div className="flex justify-between items-center pt-4">
                                <span className="text-xl font-black text-deep-chocolate">Monthly Total</span>
                                <span className="text-3xl font-black text-brand-pink">${TIER_CONFIG[tier].price}</span>
                            </div>
                        </div>

                        <button
                            onClick={confirmSubscription}
                            className="w-full bg-deep-chocolate text-warm-beige py-6 rounded-3xl font-black text-xl hover:translate-y-[-4px] transition-all shadow-xl shadow-deep-chocolate/20"
                        >
                            Confirm Subscription
                        </button>
                        <p className="text-center mt-6 text-[10px] font-bold text-deep-chocolate/30 leading-relaxed uppercase tracking-widest">
                            Monthly recurring payment &bull; Cancel anytime
                        </p>
                    </>
                ) : (
                    <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
                         <div className="bg-soft-green/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 text-soft-green">
                            <CheckCircle2 size={48} />
                        </div>
                        <h2 className="text-4xl font-black text-deep-chocolate mb-4">You&apos;re Subscribed!</h2>
                        <p className="text-lg text-deep-chocolate/60 font-medium leading-relaxed">
                            Welcome to the Fresh Batch family! You&apos;ll receive a confirmation email shortly.
                            Your first box of treats will be delivered soon.
                        </p>
                    </div>
                )}
            </div>
        </div>
      )}
    </>
  );
}
