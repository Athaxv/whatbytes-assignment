"use client";

import { useMemo } from "react";
import { Sidebar } from "@/components/filters/Sidebar";
import { ProductGrid } from "@/components/products/ProductGrid";
import { filterProducts } from "@/lib/filters";
import { useProductFilters } from "@/hooks/useProductFilters";
import { useProducts } from "@/hooks/useProducts";

export function ProductListing() {
  const { products, loading, error } = useProducts();
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
        {loading && (
          <p className="text-center text-slate-500">Loading products...</p>
        )}
        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center text-red-600">
            Failed to load products. Please refresh the page.
          </div>
        )}
        {!loading && !error && <ProductGrid products={filteredProducts} />}
      </section>
    </div>
  );
}
