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
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import Icon from './icon';

interface FlavorCardProps {
  flavor: GumFlavor;
}

export default function FlavorCard({ flavor }: FlavorCardProps) {
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: 'Added to cart!',
      description: `You've added ${flavor.name} to your cart.`,
    });
  };

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader>
        <div className="relative h-48 w-full mb-4">
            <Image
              src={flavor.image}
              alt={flavor.name}
              fill
              className="object-cover rounded-t-lg"
              data-ai-hint={flavor.aiHint}
            />
        </div>
        <CardTitle className="font-headline flex items-center gap-2">
            <Icon name={flavor.iconName} className="h-6 w-6 text-accent" />
            <span>{flavor.name}</span>
        </CardTitle>
        <CardDescription>{flavor.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <Badge variant="secondary" className="text-lg font-bold bg-primary/20 text-primary-foreground">
          ${flavor.price.toFixed(2)}
        </Badge>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" onClick={handleAddToCart}>
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
