"use client";

import { useCart } from "@/lib/hooks/use-cart";
import { Button } from "@/lib/ui/button";
import { Product } from "@etailify/types";
import Link from "next/link";

type ProductActionsProps = {
  product: Product;
};

export default function ProductActions({ product }: ProductActionsProps) {
  const { addToCart, cartItems } = useCart();
  const hasProductInCart = cartItems.some((p) => p.product_id === product.uuid);

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {hasProductInCart ? (
        <Button scale="lg" asChild>
          <Link href="/cart">Go to cart</Link>
        </Button>
      ) : (
        <Button scale="lg" onClick={() => addToCart(product)}>
          Add to cart
        </Button>
      )}
    </div>
  );
}
