'use client';

import Link from 'next/link';
import { Sparkles, ShoppingCart, User } from 'lucide-react';
import { useCart } from '@/context/cart-provider';
import { useEffect, useState } from 'react';

export default function Header() {
  const { cartCount } = useCart();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  return (
    <header>
      <div className="container">
        <Link href="/" className="logo">
          <Sparkles />
          <h1>Taggerz Hub</h1>
        </Link>
        <nav>
          <Link href="/">Flavors</Link>
          <Link href="/orders">My Orders</Link>
        </nav>
        <div className="header-actions">
          <Link href="/cart" className="cart-link">
            <ShoppingCart />
            {isClient && cartCount > 0 && (
              <span id="cart-count-badge" className="badge">
                {cartCount}
              </span>
            )}
          </Link>
          <Link href="/login">
            <User />
          </Link>
        </div>
      </div>
    </header>
  );
}
