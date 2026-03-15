'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { BoxItemValues, SubscriptionTier, TIER_CONFIG } from '../lib/schemas';

interface BoxContextType {
  tier: SubscriptionTier;
  setTier: (tier: SubscriptionTier) => void;
  items: BoxItemValues[];
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  totalItems: number;
  maxItems: number;
}

const BoxContext = createContext<BoxContextType | undefined>(undefined);

export const BoxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tier, setTier] = useState<SubscriptionTier>('basic');
  const [items, setItems] = useState<BoxItemValues[]>([]);

  const maxItems = TIER_CONFIG[tier].maxItems;
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const addItem = (productId: string) => {
    if (totalItems >= maxItems) return;

    setItems((prev) => {
      const existing = prev.find((i) => i.productId === productId);
      if (existing) {
        return prev.map((i) =>
          i.productId === productId ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { productId, quantity: 1 }];
    });
  };

  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }

    setItems((prev) => {
      const otherItemsCount = prev
        .filter((i) => i.productId !== productId)
        .reduce((sum, i) => sum + i.quantity, 0);

      const newQuantity = Math.min(quantity, maxItems - otherItemsCount);

      return prev.map((i) =>
        i.productId === productId ? { ...i, quantity: newQuantity } : i
      );
    });
  };

  return (
    <BoxContext.Provider value={{ tier, setTier, items, addItem, removeItem, updateQuantity, totalItems, maxItems }}>
      {children}
    </BoxContext.Provider>
  );
};

export const useBox = () => {
  const context = useContext(BoxContext);
  if (!context) throw new Error('useBox must be used within a BoxProvider');
  return context;
};
