"use client";

import { useCart } from "@/lib/hooks/use-cart";
import { Button } from "@/lib/ui/button";
import { readPrice } from "@/lib/utils/text-format";
import { Trash2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CartSummary() {
  const { cartItems, getTotal, removeItem } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="mt-20 flex flex-col items-center ">
        <h3 className="text-base font-medium">No items in cart</h3>
        <p className="text-stone-500 mt-3 sm:w-xl text-center">
          You don&apos;t have anything in your cart. Let&apos;s change that, use
          the link below to start browsing our products.
        </p>
        <Button className="mt-6 sm:w-fit" asChild>
          <Link href="/categories">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-6 sm:gap-10 mt-8">
      <div id="cart-items" className="md:col-span-4">
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.product_id}
              className="flex gap-4 p-4 border border-stone-200 rounded-md"
            >
              <Image
                src={
                  item.product.skus[0].media[0].media_public_url ||
                  "/img/placeholder.png"
                }
                width={80}
                height={96}
                quality={25}
                alt={item.product.name}
                className="w-20 h-24 rounded-md border border-stone-200 bg-white object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div className="line-clamp-2">{item.product.name}</div>
                  <button
                    className="cursor-pointer mt-1 text-stone-500 hover:text-red-700 transition-colors"
                    onClick={() => removeItem(item)}
                  >
                    <Trash2Icon className="size-3.5" />
                  </button>
                </div>
                <div className="mt-2 flex gap-1.5 text-sm">
                  <span className="text-sm text-stone-500">
                    {item.quantity} x
                  </span>

                  <span id="selling_price">
                    {readPrice(item.selling_price, {
                      format: true,
                    })}
                  </span>
                  <span
                    id="cost_price"
                    className="font-normal text-stone-500 line-through"
                  >
                    {readPrice(item.max_retail_price, {
                      format: true,
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="cart-summary" className="md:col-span-2">
        <div className="sticky top-8 bg-stone-100 p-6 rounded-md">
          <div id="cart-summary__heading">
            <h3 className="text-xl font-medium">Cart Summary</h3>
            <p className="mt-1 text-sm text-stone-500">
              Review your items before checkout
            </p>
          </div>
          <div id="cart-summary__bill" className="mt-4 sm:mt-8">
            <div className="flex items-center justify-between font-medium">
              <div>Subtotal</div>
              <div>
                {readPrice(getTotal().toString(), {
                  format: true,
                })}
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <Button className="w-full" scale="lg" asChild>
              <Link href="/checkout">Proceed to Checkout</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
