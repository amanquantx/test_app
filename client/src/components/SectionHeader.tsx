interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  /** Right-aligned mono annotation, e.g. "PER ISO 11137-2" */
  spec?: string;
  centered?: boolean;
  /** Set when the header sits on a chrome (dark) surface */
  dark?: boolean;
  className?: string;
}

/**
 * Spec-row section header: mono label (+ optional annotation) over an
 * engineered display title, closed by a hairline rule - the header row
 * of a processing report.
 */
export function SectionHeader({
  label,
  title,
  description,
  spec,
  centered = false,
  dark = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-14 ${centered ? "text-center mx-auto max-w-3xl" : ""} ${className}`}>
      <div className={`flex items-baseline gap-6 mb-4 ${centered ? "justify-center" : "justify-between"}`}>
        <span className="spec-label text-accent">{label}</span>
        {spec && !centered && (
          <span className={`spec-label hidden sm:block ${dark ? "text-chrome-muted" : "text-muted-foreground"}`}>
            {spec}
          </span>
        )}
      </div>
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.08] tracking-[-0.02em] mb-5 ${
          dark ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base md:text-lg leading-relaxed ${
            dark ? "text-chrome-muted" : "text-muted-foreground"
          } ${centered ? "" : "max-w-2xl"}`}
        >
          {description}
        </p>
      )}
      {!centered && <div className={`mt-7 h-px ${dark ? "bg-chrome-border" : "bg-border"}`} />}
    </div>
  );
}
