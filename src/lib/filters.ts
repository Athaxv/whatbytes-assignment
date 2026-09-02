import { matchesCategory } from "./categories";
import type { CategoryFilter, Product } from "./types";

export interface FilterState {
  category: CategoryFilter;
  minPrice: number;
  maxPrice: number;
  query: string;
}

export function filterProducts(
  products: Product[],
  filters: FilterState,
): Product[] {
  const normalizedQuery = filters.query.trim().toLowerCase();

  return products.filter((product) => {
    const matchesPrice =
      product.price >= filters.minPrice && product.price <= filters.maxPrice;
    const matchesSearch =
      !normalizedQuery ||
      product.title.toLowerCase().includes(normalizedQuery);
    const matchesCat = matchesCategory(product, filters.category);

    return matchesPrice && matchesSearch && matchesCat;
  });
}

export function parsePriceParam(price: string | null): {
  minPrice: number;
  maxPrice: number;
} {
  if (!price) return { minPrice: 0, maxPrice: 1000 };

  const [min, max] = price.split("-").map(Number);
  if (Number.isNaN(min) || Number.isNaN(max)) {
    return { minPrice: 0, maxPrice: 1000 };
  }

  return { minPrice: min, maxPrice: max };
}
