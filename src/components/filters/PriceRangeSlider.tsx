"use client";

interface PriceRangeSliderProps {
  maxPrice: number;
  onChange: (value: number) => void;
}

export function PriceRangeSlider({ maxPrice, onChange }: PriceRangeSliderProps) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold">Price</h3>
      <input
        type="range"
        min={0}
        max={1000}
        step={10}
        value={maxPrice}
        onChange={(event) => onChange(Number(event.target.value))}
        className="w-full"
      />
      <div className="mt-2 flex justify-between text-xs">
        <span>0</span>
        <span>{maxPrice}</span>
        <span>1000</span>
      </div>
    </div>
  );
}
