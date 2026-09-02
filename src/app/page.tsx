import { Suspense } from "react";
import { ProductListing } from "@/components/home/ProductListing";

export default function HomePage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading products...</div>}>
      <ProductListing />
    </Suspense>
  );
}
