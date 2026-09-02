"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { useCartStore } from "@/store/cartStore";
import { StarRating } from "./StarRating";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <Link href={`/product/${product.id}`} className="block p-4">
        <div className="relative mx-auto h-48 w-full">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h3 className="mt-4 line-clamp-2 text-sm font-medium text-slate-800">
          {product.title}
        </h3>
        <p className="mt-2 text-lg font-semibold text-primary">
          ${product.price.toFixed(0)}
        </p>
        <div className="mt-2">
          <StarRating rating={product.rating.rate} />
        </div>
      </Link>
      <div className="mt-auto p-4 pt-0">
        <button
          type="button"
          onClick={() => addItem(product)}
          className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-white transition hover:bg-primary-dark"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}
