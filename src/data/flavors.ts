export interface Flavor {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  aiHint: string;
}

export const flavors: Flavor[] = [
  {
    id: 1,
    name: 'Polar Ice',
    description:
      'A chilling blast of arctic mint that freshens your breath instantly.',
    price: 2.99,
    image: 'https://placehold.co/300x200.png',
    aiHint: 'ice glacier',
  },
  {
    id: 2,
    name: 'Classic Bubble',
    description:
      "The timeless taste of sweet, pink bubblegum. Perfect for blowing huge bubbles.",
    price: 2.99,
    image: 'https://placehold.co/300x200.png',
    aiHint: 'pink balloon',
  },
  {
    id: 3,
    name: 'Berry Burst',
    description: 'A juicy explosion of strawberry, raspberry, and blueberry.',
    price: 3.49,
    image: 'https://placehold.co/300x200.png',
    aiHint: 'berry fruit',
  },
  {
    id: 4,
    name: 'Winterfresh',
    description:
      'A crisp, cool wave of refreshing wintergreen for a clean feeling.',
    price: 3.49,
    image: 'https://placehold.co/300x200.png',
    aiHint: 'winter mountain',
  },
  {
    id: 5,
    name: 'Cinnamon Surge',
    description: 'A bold and spicy surge of warm cinnamon flavor.',
    price: 3.99,
    image: 'https://placehold.co/300x200.png',
    aiHint: 'cinnamon spice',
  },
  {
    id: 6,
    name: 'Tropical Tango',
    description: 'A vibrant dance of mango, pineapple, and passionfruit.',
    price: 3.99,
    image: 'https://placehold.co/300x200.png',
    aiHint: 'tropical beach',
  },
];
