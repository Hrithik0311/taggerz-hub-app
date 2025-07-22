'use client';

import type { GumFlavor } from '@/types';
import { type ReactNode, createContext, useContext, useState } from 'react';

export interface CartItem {
  flavor: GumFlavor;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (flavor: GumFlavor) => void;
  removeFromCart: (flavorId: string) => void;
  updateQuantity: (flavorId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (flavor: GumFlavor) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.flavor.id === flavor.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.flavor.id === flavor.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { flavor, quantity: 1 }];
    });
  };

  const removeFromCart = (flavorId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.flavor.id !== flavorId));
  };

  const updateQuantity = (flavorId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(flavorId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.flavor.id === flavorId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}