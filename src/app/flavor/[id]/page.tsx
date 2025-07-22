import { gumFlavors } from '@/lib/mock-data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ArrowLeft, Ruler } from 'lucide-react';
import Icon from '@/components/icon';
import Link from 'next/link';

export default function FlavorDetailPage({ params }: { params: { id: string } }) {
  const flavor = gumFlavors.find((f) => f.id === params.id);

  if (!flavor) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
       <Button variant="outline" asChild className="mb-4">
         <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Flavors
         </Link>
       </Button>
      <Card className="overflow-hidden md:flex">
        <div className="md:w-1/2 relative h-80 md:h-auto">
            <Image
                src={flavor.image}
                alt={flavor.name}
                fill
                className="object-cover"
                data-ai-hint={flavor.aiHint}
            />
        </div>
        <div className="md:w-1/2 flex flex-col">
          <CardHeader>
            <CardTitle className="font-headline text-4xl flex items-center gap-3">
                <Icon name={flavor.iconName} className="h-10 w-10 text-accent" />
                <span>{flavor.name}</span>
            </CardTitle>
            <CardDescription className="text-lg">{flavor.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-6">
            <Badge variant="secondary" className="text-2xl font-bold bg-primary/20 text-primary-foreground">
              ${flavor.price.toFixed(2)}
            </Badge>

            <div className="flex items-center gap-4">
              <div className="relative w-[76mm] h-[20mm] border border-dashed p-2 rounded-md">
                 <Image src="https://placehold.co/76x20.png" alt="Actual size of gum piece" fill className="object-contain" data-ai-hint="gum stick" />
              </div>
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <Ruler className="h-5 w-5" />
                <div>
                    <p className='font-bold'>Actual gum size</p>
                    <p>76mm x 20mm</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}
