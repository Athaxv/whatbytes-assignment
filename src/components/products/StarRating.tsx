import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
}

export function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, index) => {
        const filled = rating >= index + 1;
        const half = !filled && rating > index && rating < index + 1;

        return (
          <Star
            key={index}
            className={`h-4 w-4 ${
              filled || half
                ? "fill-yellow-400 text-yellow-400"
                : "fill-slate-200 text-slate-200"
            }`}
          />
        );
      })}
      <span className="ml-1 text-sm text-slate-500">{rating.toFixed(1)}</span>
    </div>
  );
}
