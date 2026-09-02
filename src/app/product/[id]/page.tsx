import { notFound } from "next/navigation";
import { ProductDetailClient } from "@/components/products/ProductDetailClient";
import { fetchProductById } from "@/lib/api";

export const dynamic = "force-dynamic";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  try {
    const product = await fetchProductById(id);
    return <ProductDetailClient product={product} />;
  } catch {
    notFound();
  }
}
