import type { GumFlavor, Order } from '@/types';

export const gumFlavors: GumFlavor[] = [
  {
    id: '1',
    name: 'Polar Ice',
    price: 1.99,
    description: 'A chilly blast of intense mint. Each pack contains 2 sticks.',
    image: 'https://placehold.co/600x400',
    aiHint: 'ice glacier',
    iconName: 'Snowflake',
  },
  {
    id: '2',
    name: 'Sweet Watermelon',
    price: 1.99,
    description: 'The sweet, juicy taste of summer watermelon. Each pack contains 2 sticks.',
    image: 'https://placehold.co/600x400',
    aiHint: 'watermelon slice',
    iconName: 'Vegan',
  },
  {
    id: '3',
    name: 'Berry Burst',
    price: 2.49,
    description: 'A delicious fusion of strawberry and raspberry. Each pack contains 2 sticks.',
    image: 'https://placehold.co/600x400',
    aiHint: 'mixed berries',
    iconName: 'Grape',
  },
  {
    id: '4',
    name: 'Classic Bubble',
    price: 1.99,
    description: 'The nostalgic, sweet flavor of classic bubblegum. Each pack contains 2 sticks.',
    image: 'https://placehold.co/600x400',
    aiHint: 'pink bubblegum',
    iconName: 'Sparkles',
  },
  {
    id: '5',
    name: 'Spearmint',
    price: 2.49,
    description: 'A smooth, refreshing burst of classic spearmint. Each pack contains 2 sticks.',
    image: 'https://placehold.co/600x400',
    aiHint: 'mint leaf',
    iconName: 'Sprout',
  },
  {
    id: '6',
    name: 'Peppermint',
    price: 2.49,
    description: 'A powerful and refreshing peppermint experience. Each pack contains 2 sticks.',
    image: 'https://placehold.co/600x400',
    aiHint: 'peppermint candy',
    iconName: 'Wind',
  },
  {
    id: '7',
    name: 'Winterfresh',
    price: 2.49,
    description: 'An icy-cool mint flavor that leaves you feeling fresh. Each pack contains 2 sticks.',
    image: 'https://placehold.co/600x400',
    aiHint: 'winter mountain',
    iconName: 'Mountain',
  },
  {
    id: '8',
    name: 'Cinnamon Surge',
    price: 2.49,
    description: 'A bold, spicy wave of cinnamon flavor. Each pack contains 2 sticks.',
    image: 'https://placehold.co/600x400',
    aiHint: 'cinnamon sticks',
    iconName: 'Flame',
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
