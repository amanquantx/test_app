import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-chrome text-chrome-text relative overflow-hidden">
      <div className="absolute inset-0 chrome-grid" aria-hidden />
      <div className="relative z-10 max-w-lg mx-4 text-center">
        <p className="spec-label text-accent mb-6">Error · Path not in catalog</p>
        <h1 className="font-mono font-semibold text-[7rem] leading-none text-white tracking-tight mb-6">404</h1>
        <div className="beam-line mb-8" aria-hidden />
        <p className="text-chrome-muted leading-relaxed mb-9">
          The page you requested doesn't exist. It may have moved - or the address has a typo.
        </p>
        <Link href="/">
          <button className="bg-accent hover:bg-accent/90 text-white px-8 py-3.5 text-sm font-bold shadow-lg shadow-accent/25 inline-flex items-center gap-2 group transition-colors">
            Back to home
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>
    </div>
  );
}
