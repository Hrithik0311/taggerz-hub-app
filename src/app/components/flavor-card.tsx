'use client';

import type { Flavor } from '@/data/flavors';
import { useCart } from '@/context/cart-provider';
import Image from 'next/image';

export default function FlavorCard({ flavor }: { flavor: Flavor }) {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <Image
        src={flavor.image}
        alt={flavor.name}
        width={300}
        height={200}
        data-ai-hint={flavor.aiHint}
        className="w-full h-48 object-cover"
      />
      <div className="card-content">
        <h3>{flavor.name}</h3>
        <p>{flavor.description}</p>
        <div className="price">${flavor.price.toFixed(2)}</div>
        <button className="btn" onClick={() => addToCart(flavor)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
