"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Search, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get("q") || "");
  const totalItems = useCartStore((state) => state.totalItems);
  const hasHydrated = useCartStore((state) => state.hasHydrated);

  useEffect(() => {
    setSearchValue(searchParams.get("q") || "");
  }, [searchParams]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      const currentQuery = params.get("q") || "";

      if (searchValue === currentQuery) return;

      if (searchValue) {
        params.set("q", searchValue);
      } else {
        params.delete("q");
      }

      const queryString = params.toString();
      router.push(queryString ? `/?${queryString}` : "/");
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchValue, router, searchParams]);

  return (
    <header className="bg-primary-dark text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0 text-xl font-bold">
          Logo
        </Link>

        <div className="relative mx-auto w-full max-w-xl">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder="Search for products..."
            className="w-full rounded-md border-0 bg-white py-2.5 pr-4 pl-10 text-sm text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-white/50 focus:outline-none"
          />
        </div>

        <Link
          href="/cart"
          className="relative flex shrink-0 items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-primary-dark transition hover:bg-slate-100"
        >
          <ShoppingCart className="h-4 w-4" />
          Cart
          {hasHydrated && totalItems() > 0 && (
            <span className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white">
              {totalItems()}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
