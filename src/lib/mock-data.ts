import type { GumFlavor } from '@/types';

export const gumFlavors: GumFlavor[] = [
  {
    id: '1',
    name: 'Cosmic Mint',
    price: 2.99,
    description: 'A supernova of cool mint that will send your senses into orbit.',
    image: 'https://placehold.co/600x400',
    aiHint: 'mint leaves',
    iconName: 'Wind',
  },
  {
    id: '2',
    name: 'Galaxy Grape',
    price: 2.99,
    description: 'Ride a comet of juicy grape flavor through the cosmos.',
    image: 'https://placehold.co/600x400',
    aiHint: 'purple grapes',
    iconName: 'Grape',
  },
  {
    id: '3',
    name: 'Rocket Raspberry',
    price: 3.49,
    description: 'A tangy blast of raspberry that\'s out of this world.',
    image: 'https://placehold.co/600x400',
    aiHint: 'red raspberry',
    iconName: 'Cherry',
  },
  {
    id: '4',
    name: 'Lemon-Lime Laser',
    price: 2.99,
    description: 'A sharp, zesty beam of citrus that zaps your taste buds.',
    image: 'https://placehold.co/600x400',
    aiHint: 'lemon lime',
    iconName: 'Citrus',
  },
  {
    id: '5',
    name: 'Astral Apple',
    price: 3.49,
    description: 'Crisp apple flavor with a hint of cosmic wonder.',
    image: 'https://placehold.co/600x400',
    aiHint: 'green apple',
    iconName: 'Apple',
  },
  {
    id: '6',
    name: 'Stardust Strawberry',
    price: 3.99,
    description: 'Sweet strawberry fields, sprinkled with shimmering stardust.',
    image: 'https://placehold.co/600x400',
    aiHint: 'fresh strawberry',
    iconName: 'Sparkles',
  },
  {
    id: '7',
    name: 'Zero-G Green Tea',
    price: 3.99,
    description: 'A calming, zero-gravity infusion of fresh green tea leaves.',
    image: 'https://placehold.co/600x400',
    aiHint: 'tea leaves',
    iconName: 'Sprout',
  },
  {
    id: '8',
    name: 'Singularity Sour',
    price: 3.49,
    description: 'A flavor so intensely sour it bends the fabric of spacetime.',
    image: 'https://placehold.co/600x400',
    aiHint: 'sour candy',
    iconName: 'BrainCircuit',
  },
];

export const userOrders: Order[] = [
  {
    id: 'TGZ-86753',
    date: '2024-07-15',
    status: 'Delivered',
    items: [
      { flavor: gumFlavors[0], quantity: 2 },
      { flavor: gumFlavors[3], quantity: 1 },
    ],
    total: 8.97,
  },
  {
    id: 'TGZ-84119',
    date: '2024-06-28',
    status: 'Delivered',
    items: [
      { flavor: gumFlavors[2], quantity: 3 },
    ],
    total: 10.47,
  },
  {
    id: 'TGZ-13123',
    date: '2024-05-10',
    status: 'Delivered',
    items: [
      { flavor: gumFlavors[1], quantity: 1 },
      { flavor: gumFlavors[4], quantity: 1 },
      { flavor: gumFlavors[5], quantity: 1 },
    ],
    total: 10.47,
  },
    {
    id: 'TGZ-09871',
    date: '2024-07-28',
    status: 'Shipped',
    items: [
      { flavor: gumFlavors[6], quantity: 2 },
      { flavor: gumFlavors[7], quantity: 2 },
    ],
    total: 14.96,
  },
];
