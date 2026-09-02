"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export function CartSummary() {
  const items = useCartStore((state) => state.items);
  const subtotal = useCartStore((state) => state.subtotal);
  const totalItems = useCartStore((state) => state.totalItems);

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6">
      <h2 className="text-lg font-semibold text-slate-800">Order Summary</h2>
      <div className="mt-4 space-y-2 text-sm text-slate-600">
        <div className="flex justify-between">
          <span>Items ({totalItems()})</span>
          <span>${subtotal().toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-t border-slate-200 pt-2 text-base font-semibold text-slate-800">
          <span>Subtotal</span>
          <span className="text-primary">${subtotal().toFixed(2)}</span>
        </div>
      </div>
      {items.length > 0 ? (
        <button
          type="button"
          className="mt-6 w-full rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-white transition hover:bg-primary-dark"
        >
          Checkout
        </button>
      ) : (
        <Link
          href="/"
          className="mt-6 block w-full rounded-md bg-primary px-4 py-2.5 text-center text-sm font-medium text-white transition hover:bg-primary-dark"
        >
          Continue Shopping
        </Link>
      )}
    </div>
  );
}
