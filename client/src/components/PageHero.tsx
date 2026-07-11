import { motion } from "framer-motion";
import { ReactNode } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.09 } } };

/** Calibration-mark corner frame for imagery - the dosimetrist's reticle. */
export function Reticle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {children}
      <span aria-hidden className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-accent" />
      <span aria-hidden className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-accent" />
      <span aria-hidden className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-accent" />
      <span aria-hidden className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-accent" />
    </div>
  );
}

interface PageHeroProps {
  /** Eyebrow, e.g. "Service catalog" */
  label: string;
  /** Right-aligned mono annotation, e.g. "ISO 11137 · 10 MeV" */
  spec?: string;
  title: ReactNode;
  lede?: string;
  /** CTAs, chips, stat strips - rendered under the lede */
  children?: ReactNode;
  /** Framed image or panel on the right */
  aside?: ReactNode;
}

/**
 * Shared chrome hero for interior pages. Typographic and confident -
 * no washed-out stock photography. Ends in the beam line.
 */
export function PageHero({ label, spec, title, lede, children, aside }: PageHeroProps) {
  return (
    <section className="relative bg-chrome text-chrome-text overflow-hidden">
      <div className="absolute inset-0 chrome-grid" aria-hidden />
      <div className="container-grid relative z-10 pt-14 pb-12 md:pt-24 md:pb-16">
        <div className={aside ? "grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center" : ""}>
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-baseline justify-between gap-6 mb-6">
              <span className="spec-label text-accent">{label}</span>
              {spec && <span className="spec-label text-chrome-muted hidden sm:block">{spec}</span>}
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.04] tracking-[-0.02em] text-white max-w-3xl mb-6"
            >
              {title}
            </motion.h1>
            {lede && (
              <motion.p variants={fadeUp} className="text-base md:text-lg text-chrome-muted leading-relaxed max-w-2xl">
                {lede}
              </motion.p>
            )}
            {children && (
              <motion.div variants={fadeUp} className="mt-8">
                {children}
              </motion.div>
            )}
          </motion.div>
          {aside && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
              className="hidden lg:block"
            >
              {aside}
            </motion.div>
          )}
        </div>
      </div>
      <div className="beam-line" aria-hidden />
    </section>
  );
}
