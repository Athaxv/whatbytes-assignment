import type { CategoryFilter, Product } from "./types";

export const CATEGORY_OPTIONS: { value: CategoryFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "electronics", label: "Electronics" },
  { value: "clothing", label: "Clothing" },
  { value: "home", label: "Home" },
];

const CATEGORY_MAP: Record<Exclude<CategoryFilter, "all">, string[]> = {
  electronics: ["electronics"],
  clothing: ["men's clothing", "women's clothing"],
  home: ["jewelery"],
};

export function matchesCategory(
  product: Product,
  category: CategoryFilter,
): boolean {
  if (category === "all") return true;
  return CATEGORY_MAP[category].includes(product.category);
}
