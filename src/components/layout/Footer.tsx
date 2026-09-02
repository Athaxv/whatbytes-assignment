import { Globe, Share2, Link2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto bg-primary-dark text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-base text-white/90">
          &copy; {new Date().getFullYear()} Whatbytes Store. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 transition hover:text-white"
            aria-label="Social link 1"
          >
            <Share2 className="h-6 w-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 transition hover:text-white"
            aria-label="Social link 2"
          >
            <Globe className="h-6 w-6" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 transition hover:text-white"
            aria-label="Social link 3"
          >
            <Link2 className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
