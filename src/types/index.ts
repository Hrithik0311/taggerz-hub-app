import type { icons } from 'lucide-react';

export interface GumFlavor {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  aiHint: string;
  iconName: keyof typeof icons;
}

export interface Order {
  id: string;
  date: string;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  items: {
    flavor: GumFlavor;
    quantity: number;
  }[];
  total: number;
}
