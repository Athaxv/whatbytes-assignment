"use client";

import { CategoryFilter } from "./CategoryFilter";
import { PriceRangeSlider } from "./PriceRangeSlider";
import { useProductFilters } from "@/hooks/useProductFilters";

export function Sidebar() {
  const { filters, setCategory, setMaxPrice } = useProductFilters();

  return (
    <aside className="rounded-lg bg-primary p-5 text-white shadow-md">
      <h2 className="mb-5 text-lg font-semibold">Filters</h2>
      <div className="space-y-6">
        <CategoryFilter value={filters.category} onChange={setCategory} />
        <PriceRangeSlider
          maxPrice={filters.maxPrice}
          onChange={setMaxPrice}
        />
      </div>
    </aside>
  );
}
