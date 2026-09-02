import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-7xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-2xl font-bold text-slate-800">Product not found</h1>
      <p className="mt-2 text-slate-500">
        The product you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-white transition hover:bg-primary-dark"
      >
        Back to Home
      </Link>
    </div>
  );
}
