import { Globe, Share2, Link2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Whatbytes Store. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-primary"
            aria-label="Social link 1"
          >
            <Share2 className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-primary"
            aria-label="Social link 2"
          >
            <Globe className="h-5 w-5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-primary"
            aria-label="Social link 3"
          >
            <Link2 className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
