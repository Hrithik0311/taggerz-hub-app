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
import Icon from './icon';
import Link from 'next/link';
import { Button } from './ui/button';

interface FlavorCardProps {
  flavor: GumFlavor;
}

export default function FlavorCard({ flavor }: FlavorCardProps) {
  return (
    <Link href={`/flavor/${flavor.id}`} className="group">
      <Card className="flex flex-col overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 h-full">
        <CardHeader className="flex-grow">
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
        <CardContent>
          <Badge variant="secondary" className="text-lg font-bold bg-primary/20 text-primary-foreground">
            ${flavor.price.toFixed(2)}
          </Badge>
        </CardContent>
        <CardFooter>
           <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" asChild>
             <div>
                <ShoppingCart className="mr-2 h-4 w-4" /> View Details
             </div>
           </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
