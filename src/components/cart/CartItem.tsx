"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartItem } from "@/lib/types";
import { useCartStore } from "@/store/cartStore";

interface CartItemRowProps {
  item: CartItem;
}

export function CartItemRow({ item }: CartItemRowProps) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-4 sm:flex-row sm:items-center">
      <div className="relative h-24 w-24 shrink-0">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-contain"
          sizes="96px"
        />
      </div>

      <div className="flex-1">
        <h3 className="font-medium text-slate-800">{item.title}</h3>
        <p className="mt-1 text-primary font-semibold">
          ${item.price.toFixed(2)}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="rounded-md border border-slate-200 p-1.5 hover:bg-slate-50"
          aria-label="Decrease quantity"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-8 text-center font-medium">{item.quantity}</span>
        <button
          type="button"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="rounded-md border border-slate-200 p-1.5 hover:bg-slate-50"
          aria-label="Increase quantity"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <button
        type="button"
        onClick={() => removeItem(item.id)}
        className="rounded-md p-2 text-red-500 transition hover:bg-red-50"
        aria-label="Remove item"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  );
}
