"use client";

import { useCallback, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { parsePriceParam } from "@/lib/filters";
import type { CategoryFilter } from "@/lib/types";

export function useProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const rawCategory = searchParams.get("category");
  const category: CategoryFilter =
    rawCategory === "electronics" ||
    rawCategory === "clothing" ||
    rawCategory === "home"
      ? rawCategory
      : "all";
  const query = searchParams.get("q") || "";
  const { minPrice, maxPrice } = parsePriceParam(searchParams.get("price"));

  const updateParams = useCallback(
    (updates: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (value === null || value === "") {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      });

      const queryString = params.toString();
      router.push(queryString ? `/?${queryString}` : "/");
    },
    [router, searchParams],
  );

  const setCategory = useCallback(
    (value: CategoryFilter) => {
      updateParams({ category: value === "all" ? null : value });
    },
    [updateParams],
  );

  const setQuery = useCallback(
    (value: string) => {
      updateParams({ q: value || null });
    },
    [updateParams],
  );

  const setMaxPrice = useCallback(
    (value: number) => {
      updateParams({ price: `0-${value}` });
    },
    [updateParams],
  );

  const filters = useMemo(
    () => ({ category, minPrice, maxPrice, query }),
    [category, minPrice, maxPrice, query],
  );

  return {
    filters,
    setCategory,
    setQuery,
    setMaxPrice,
  };
}
