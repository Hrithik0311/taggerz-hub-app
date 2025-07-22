'use client';

import Image from 'next/image';
import type { GumFlavor } from '@/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from './ui/button';
import { useCart } from './cart-provider';
import { useToast } from '@/hooks/use-toast';

interface FlavorCardProps {
  flavor: GumFlavor;
}

export default function FlavorCard({ flavor }: FlavorCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(flavor);
    toast({
      title: "Added to cart!",
      description: `${flavor.name} has been added to your cart.`,
    });
  }

  return (
    <Link href={`/flavor/${flavor.id}`} className="group h-full flex flex-col">
      <Card className="flex flex-col overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 h-full">
        <div className="relative h-48 w-full">
          <Image
            src={flavor.image}
            alt={flavor.name}
            fill
            className="object-cover"
            data-ai-hint={flavor.aiHint}
          />
        </div>
        <CardHeader className="flex-grow">
          <CardTitle className="font-headline flex items-center gap-2">
            
            <span>{flavor.name}</span>
          </CardTitle>
          <CardDescription>{flavor.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Badge variant="secondary" className="text-lg font-bold bg-primary/20 text-primary-foreground">
            ${flavor.price.toFixed(2)}
          </Badge>
        </CardContent>
        <CardFooter className="mt-auto">
          <Button onClick={handleAddToCart} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
