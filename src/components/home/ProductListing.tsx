"use client";

import { useMemo } from "react";
import { Sidebar } from "@/components/filters/Sidebar";
import { ProductGrid } from "@/components/products/ProductGrid";
import { filterProducts } from "@/lib/filters";
import type { Product } from "@/lib/types";
import { useProductFilters } from "@/hooks/useProductFilters";

interface ProductListingProps {
  products: Product[];
}

export function ProductListing({ products }: ProductListingProps) {
  const { filters } = useProductFilters();

  const filteredProducts = useMemo(
    () => filterProducts(products, filters),
    [products, filters],
  );

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:px-8">
      <div className="w-full shrink-0 lg:w-64">
        <Sidebar />
      </div>
      <section className="flex-1">
        <h1 className="mb-6 text-2xl font-bold text-slate-800">
          Product Listing
        </h1>
        <ProductGrid products={filteredProducts} />
      </section>
    </div>
  );
}
