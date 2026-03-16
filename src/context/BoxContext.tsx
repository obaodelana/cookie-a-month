'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { BoxItemValues, SubscriptionTier, TIER_CONFIG } from '../lib/schemas';

interface BoxContextType {
  tier: SubscriptionTier;
  setTier: (tier: SubscriptionTier) => void;
  items: BoxItemValues[];
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearBox: () => void;
  totalItems: number;
  maxItems: number;
}

const BoxContext = createContext<BoxContextType | undefined>(undefined);

export const BoxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tier, setTier] = useState<SubscriptionTier>('dozen');
  const [items, setItems] = useState<BoxItemValues[]>([]);
  const isInitialized = useRef(false);

  // Load from localStorage
  useEffect(() => {
    const savedTier = localStorage.getItem('fbb_tier') as SubscriptionTier;
    const savedItems = localStorage.getItem('fbb_items');

    if (savedTier && TIER_CONFIG[savedTier]) {
      setTier(savedTier);
    }
    if (savedItems) {
      try {
        setItems(JSON.parse(savedItems));
      } catch (e) {
        console.error("Failed to parse saved items", e);
      }
    }
    isInitialized.current = true;
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (isInitialized.current) {
      localStorage.setItem('fbb_tier', tier);
      localStorage.setItem('fbb_items', JSON.stringify(items));
    }
  }, [tier, items]);

  const maxItems = TIER_CONFIG[tier].maxItems;
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const addItem = useCallback((productId: string) => {
    setItems((prev) => {
        const currentTotal = prev.reduce((sum, item) => sum + item.quantity, 0);
        if (currentTotal >= maxItems) return prev;

        const existing = prev.find((i) => i.productId === productId);
        if (existing) {
            return prev.map((i) =>
            i.productId === productId ? { ...i, quantity: i.quantity + 1 } : i
            );
        }
        return [...prev, { productId, quantity: 1 }];
    });
  }, [maxItems]);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }

    setItems((prev) => {
      const otherItemsCount = prev
        .filter((i) => i.productId !== productId)
        .reduce((sum, i) => sum + i.quantity, 0);

      const newQuantity = Math.min(quantity, maxItems - otherItemsCount);

      if (newQuantity <= 0) {
         return prev.filter((i) => i.productId !== productId);
      }

      const existing = prev.find(i => i.productId === productId);
      if (existing) {
        return prev.map((i) =>
          i.productId === productId ? { ...i, quantity: newQuantity } : i
        );
      } else {
          return [...prev, { productId, quantity: newQuantity }];
      }
    });
  }, [maxItems, removeItem]);

  const clearBox = useCallback(() => {
    setItems([]);
  }, []);

  // Adjust items if tier changes to a smaller capacity
  useEffect(() => {
    if (totalItems > maxItems) {
      let currentTotal = 0;
      const newItems: BoxItemValues[] = [];

      for (const item of items) {
        if (currentTotal >= maxItems) break;
        const available = maxItems - currentTotal;
        const take = Math.min(item.quantity, available);
        newItems.push({ ...item, quantity: take });
        currentTotal += take;
      }
      setItems(newItems);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tier, maxItems]);

  return (
    <BoxContext.Provider value={{ tier, setTier, items, addItem, removeItem, updateQuantity, clearBox, totalItems, maxItems }}>
      {children}
    </BoxContext.Provider>
  );
};

export const useBox = () => {
  const context = useContext(BoxContext);
  if (!context) throw new Error('useBox must be used within a BoxProvider');
  return context;
};
