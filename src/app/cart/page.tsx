'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Trash2 } from "lucide-react";
import { useCart } from "@/components/cart-provider";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartCount } = useCart();

  const subtotal = cartItems.reduce((acc, item) => acc + item.flavor.price * item.quantity, 0);
  const taxes = subtotal * 0.08;
  const total = subtotal + taxes;

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-2">
            <ShoppingCart />
            Your Cart
          </CardTitle>
          <CardDescription>Review your items and proceed to checkout. You have {cartCount} items in your cart.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-medium">Your cart is empty</h3>
              <p className="mt-1 text-sm text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
              <Button asChild className="mt-6">
                <Link href="/">Start Shopping</Link>
              </Button>
            </div>
          ) : (
            <>
              {cartItems.map(item => (
                <div key={item.flavor.id} className="flex justify-between items-center gap-4">
                   <div className="flex items-center gap-4">
                     <div className="relative h-16 w-16 rounded-md overflow-hidden">
                       <Image src={item.flavor.image} alt={item.flavor.name} fill className="object-cover" />
                     </div>
                      <div>
                        <p className="font-semibold">{item.flavor.name}</p>
                        <p className="text-sm text-muted-foreground">${item.flavor.price.toFixed(2)} each</p>
                      </div>
                   </div>
                  <div className="flex items-center gap-4">
                    <Input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.flavor.id, parseInt(e.target.value))}
                      className="w-20"
                    />
                    <p className="font-semibold w-20 text-right">${(item.flavor.price * item.quantity).toFixed(2)}</p>
                     <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.flavor.id)}>
                        <Trash2 className="h-5 w-5 text-destructive" />
                     </Button>
                  </div>
                </div>
              ))}
              <Separator />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <p className="text-muted-foreground">Subtotal</p>
                  <p>${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-muted-foreground">Taxes (8%)</p>
                  <p>${taxes.toFixed(2)}</p>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <p>Total</p>
                  <p>${total.toFixed(2)}</p>
                </div>
              </div>
            </>
          )}
        </CardContent>
        {cartItems.length > 0 && (
            <CardFooter>
                <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Proceed to Checkout
                </Button>
            </CardFooter>
        )}
      </Card>
    </div>
  );
}