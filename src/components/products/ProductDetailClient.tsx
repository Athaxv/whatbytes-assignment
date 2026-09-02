"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { ProductImageCarousel } from "@/components/products/ProductImageCarousel";
import { StarRating } from "@/components/products/StarRating";
import type { Product } from "@/lib/types";
import { useCartStore } from "@/store/cartStore";

interface ProductDetailClientProps {
  product: Product;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:px-8">
      <ProductImageCarousel images={[product.image]} title={product.title} />

      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-primary">
          {product.category}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-800">
          {product.title}
        </h1>
        <p className="mt-4 text-3xl font-semibold text-primary">
          ${product.price.toFixed(2)}
        </p>
        <div className="mt-4">
          <StarRating rating={product.rating.rate} />
          <p className="mt-1 text-sm text-slate-500">
            {product.rating.count} reviews
          </p>
        </div>
        <p className="mt-6 leading-relaxed text-slate-600">
          {product.description}
        </p>

        <div className="mt-8 flex items-center gap-4">
          <div className="flex items-center rounded-md border border-slate-200">
            <button
              type="button"
              onClick={() => setQuantity((value) => Math.max(1, value - 1))}
              className="p-2 hover:bg-slate-50"
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-10 text-center font-medium">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((value) => value + 1)}
              className="p-2 hover:bg-slate-50"
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-white transition hover:bg-primary-dark"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
