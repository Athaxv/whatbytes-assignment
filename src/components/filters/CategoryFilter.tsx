"use client";

import { CATEGORY_OPTIONS } from "@/lib/categories";
import type { CategoryFilter } from "@/lib/types";

interface CategoryFilterProps {
  value: CategoryFilter;
  onChange: (value: CategoryFilter) => void;
}

export function CategoryFilter({ value, onChange }: CategoryFilterProps) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold">Category</h3>
      <div className="space-y-2">
        {CATEGORY_OPTIONS.map((option) => (
          <label
            key={option.value}
            className="flex cursor-pointer items-center gap-2 text-sm"
          >
            <input
              type="radio"
              name="category"
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="h-4 w-4 accent-white"
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
}
