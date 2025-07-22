import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { gumFlavors } from "@/lib/mock-data";
import { ShoppingCart } from "lucide-react";

export default function CartPage() {
  const cartItems = [
    { flavor: gumFlavors[0], quantity: 2 },
    { flavor: gumFlavors[2], quantity: 1 },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.flavor.price * item.quantity, 0);
  const taxes = subtotal * 0.08;
  const total = subtotal + taxes;

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-2">
            <ShoppingCart />
            Your Cart
          </CardTitle>
          <CardDescription>Review your items and proceed to checkout.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {cartItems.map(item => (
            <div key={item.flavor.id} className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{item.flavor.name} <span className="text-sm text-muted-foreground">x{item.quantity}</span></p>
                <p className="text-sm text-muted-foreground">${item.flavor.price.toFixed(2)} each</p>
              </div>
              <p className="font-semibold">${(item.flavor.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <Separator />
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="text-muted-foreground">Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-muted-foreground">Taxes</p>
              <p>${taxes.toFixed(2)}</p>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <p>Total</p>
              <p>${total.toFixed(2)}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            Proceed to Checkout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
