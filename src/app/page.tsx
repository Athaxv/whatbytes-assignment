import { Suspense } from "react";
import { ProductListing } from "@/components/home/ProductListing";
import { fetchProducts } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const products = await fetchProducts();

  return (
    <Suspense fallback={<div className="p-8 text-center">Loading products...</div>}>
      <ProductListing products={products} />
    </Suspense>
  );
}
