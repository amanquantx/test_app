import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

const services = [
  { href: "/services/e-beam-sterilization", label: "E-beam Sterilization" },
  { href: "/services/polymer-crosslinking", label: "Polymer Cross-Linking" },
  { href: "/services/gemstone-enhancement", label: "Gemstone Enhancement" },
  { href: "/services/electron-beam-processing", label: "Material Modification" },
];
const industries = [
  { href: "/industries/medical-devices", label: "Medical Devices" },
  { href: "/industries/polymers-plastics", label: "Wire & Cable / Polymers" },
  { href: "/industries/gemstones", label: "Gemstones" },
];

/** Faceted gem mark - beam blue, the one place the topaz gradient always lives. */
function GemMark({ size = 36, idPrefix }: { size?: number; idPrefix: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id={`${idPrefix}-f1`} x1="20" y1="2" x2="20" y2="18" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="hsl(219 100% 78%)" />
          <stop offset="100%" stopColor="hsl(219 100% 56%)" />
        </linearGradient>
        <linearGradient id={`${idPrefix}-f2`} x1="4" y1="14" x2="20" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="hsl(219 100% 56%)" />
          <stop offset="100%" stopColor="hsl(224 100% 30%)" />
        </linearGradient>
        <linearGradient id={`${idPrefix}-f3`} x1="36" y1="14" x2="20" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="hsl(219 100% 66%)" />
          <stop offset="100%" stopColor="hsl(224 100% 38%)" />
        </linearGradient>
      </defs>
      <polygon points="20,2 30,10 34,14 6,14 10,10" fill={`url(#${idPrefix}-f1)`} />
      <polygon points="6,14 20,14 20,38 12,30" fill={`url(#${idPrefix}-f2)`} />
      <polygon points="34,14 20,14 20,38 28,30" fill={`url(#${idPrefix}-f3)`} />
      <polygon points="20,2 30,10 34,14 6,14 10,10 20,2" fill="none" stroke="white" strokeOpacity="0.35" strokeWidth="0.75" />
      <path d="M6 14 L20 38 L34 14" fill="none" stroke="white" strokeOpacity="0.25" strokeWidth="0.75" />
      <path d="M20 14 L20 38 M20 2 L20 14" stroke="white" strokeOpacity="0.3" strokeWidth="0.6" />
      <path d="M14 14 L10 10 M26 14 L30 10" stroke="white" strokeOpacity="0.2" strokeWidth="0.5" />
    </svg>
  );
}

function NavLink({ href, children, active }: { href: string; children: React.ReactNode; active?: boolean }) {
  return (
    <Link
      href={href}
      className={`px-3.5 py-2 text-sm font-semibold transition-all duration-200 border-b-2 ${
        active
          ? "text-white border-accent"
          : "text-chrome-text/80 border-transparent hover:text-white hover:border-chrome-border"
      }`}
    >
      {children}
    </Link>
  );
}

function DropdownPanel({
  items,
}: {
  items: { href: string; label: string }[];
}) {
  return (
    <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50 min-w-[260px]">
      <div className="bg-chrome-2 border border-chrome-border shadow-2xl shadow-black/60 py-2">
        {items.map((item) => (
          <Link
            key={item.href + item.label}
            href={item.href}
            className="block px-5 py-3 text-sm font-medium text-chrome-text/75 border-l-2 border-transparent hover:text-white hover:border-accent hover:bg-white/5 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [location] = useLocation();
  const isActive = (path: string) => location === path || location.startsWith(path + "/");

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 bg-chrome/[0.97] border-b border-chrome-border" style={{ backdropFilter: "blur(16px)" }}>
        {/* Utility bar - the compliance line */}
        <div className="hidden md:block border-b border-chrome-border/60">
          <div className="container-grid h-9 flex items-center justify-between">
            <span className="spec-label text-chrome-muted">
              Pan-India network
            </span>
            <div className="flex items-center gap-6">
              <a href="tel:+917977753638" className="spec-label text-chrome-muted hover:text-accent transition-colors flex items-center gap-2">
                <Phone className="h-3 w-3" /> +91 79777 53638
              </a>
              <a href="mailto:info@gemspride.com" className="spec-label text-chrome-muted hover:text-accent transition-colors flex items-center gap-2">
                <Mail className="h-3 w-3" /> info@gemspride.com
              </a>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="container-grid h-[70px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <GemMark idPrefix="nav" size={36} />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white leading-none group-hover:text-accent transition-colors">
                GemsPride
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-chrome-muted mt-1">
                E-beam Services · India
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            <div className="relative group">
              <button
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold transition-colors border-b-2 ${
                  isActive("/e-beam-services-india") || isActive("/services")
                    ? "text-white border-accent"
                    : "text-chrome-text/80 border-transparent hover:text-white hover:border-chrome-border"
                }`}
              >
                Services <ChevronDown className="h-3.5 w-3.5 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <DropdownPanel items={[{ href: "/e-beam-services-india", label: "All E-beam Services" }, ...services]} />
            </div>

            <div className="relative group">
              <button
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold transition-colors border-b-2 ${
                  isActive("/industries")
                    ? "text-white border-accent"
                    : "text-chrome-text/80 border-transparent hover:text-white hover:border-chrome-border"
                }`}
              >
                Industries <ChevronDown className="h-3.5 w-3.5 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <DropdownPanel items={industries} />
            </div>

            <NavLink href="/how-it-works" active={isActive("/how-it-works")}>Process</NavLink>
            <NavLink href="/about" active={isActive("/about")}>About</NavLink>
            <NavLink href="/contact" active={isActive("/contact")}>Contact</NavLink>

            <Link href="/contact">
              <button className="ml-3 px-6 py-2.5 bg-accent text-white text-sm font-bold hover:bg-accent/90 transition-colors shadow-lg shadow-accent/25">
                Request Service
              </button>
            </Link>
          </nav>

          <div className="lg:hidden flex items-center gap-2">
            <button
              className="p-2 text-white hover:bg-white/10 transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile nav ── */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 pt-24 px-6 overflow-y-auto bg-chrome/[0.99]" style={{ backdropFilter: "blur(20px)" }}>
          <nav className="flex flex-col gap-1">
            <div>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")}
                className="w-full flex items-center justify-between text-lg font-semibold pl-4 py-3 text-white border-l-2 border-transparent hover:border-accent transition-all"
              >
                Services{" "}
                <ChevronDown className={`h-4 w-4 mr-2 transition-transform ${mobileExpanded === "services" ? "rotate-180" : ""}`} />
              </button>
              {mobileExpanded === "services" && (
                <div className="pl-8 flex flex-col gap-1 mb-2">
                  {[{ href: "/e-beam-services-india", label: "All E-beam Services" }, ...services].map((s) => (
                    <Link
                      key={s.href + s.label}
                      href={s.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-sm text-chrome-muted hover:text-accent py-2 transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === "industries" ? null : "industries")}
                className="w-full flex items-center justify-between text-lg font-semibold pl-4 py-3 text-white border-l-2 border-transparent hover:border-accent transition-all"
              >
                Industries{" "}
                <ChevronDown className={`h-4 w-4 mr-2 transition-transform ${mobileExpanded === "industries" ? "rotate-180" : ""}`} />
              </button>
              {mobileExpanded === "industries" && (
                <div className="pl-8 flex flex-col gap-1 mb-2">
                  {industries.map((i) => (
                    <Link
                      key={i.href}
                      href={i.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-sm text-chrome-muted hover:text-accent py-2 transition-colors"
                    >
                      {i.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {[
              { href: "/how-it-works", label: "Process" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold border-l-2 border-transparent pl-4 py-3 hover:border-accent hover:text-white transition-all text-chrome-text/85"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-6 pt-6 border-t border-chrome-border flex flex-col gap-3 text-sm text-chrome-muted">
              <a href="mailto:info@gemspride.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="h-4 w-4" /> info@gemspride.com
              </a>
              <a href="tel:+917977753638" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" /> +91 79777 53638
              </a>
            </div>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full mt-4 px-6 py-4 bg-accent text-white font-bold uppercase tracking-wider hover:bg-accent/90 transition-colors">
                Request Service
              </button>
            </Link>
          </nav>
        </div>
      )}

      <main className="flex-grow">{children}</main>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/917977753638"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-xl hover:scale-110 transition-transform duration-200"
        style={{ backgroundColor: "#25D366" }}
      >
        <svg viewBox="0 0 32 32" fill="white" width="28" height="28" aria-hidden>
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.824.737 5.47 2.027 7.77L0 32l8.437-2.01A15.94 15.94 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.28 13.28 0 01-6.784-1.856l-.486-.29-5.01 1.194 1.24-4.883-.318-.501A13.267 13.267 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.874c-.398-.2-2.355-1.162-2.72-1.294-.366-.133-.632-.2-.898.2-.266.398-1.031 1.294-1.264 1.56-.233.266-.465.3-.863.1-.398-.2-1.68-.619-3.2-1.974-1.183-1.055-1.981-2.358-2.214-2.756-.233-.398-.025-.613.175-.813.18-.18.398-.465.598-.698.2-.233.266-.398.398-.664.133-.266.067-.498-.033-.698-.1-.2-.898-2.164-1.23-2.963-.325-.78-.655-.674-.898-.686-.233-.012-.498-.015-.764-.015s-.698.1-1.064.498c-.366.398-1.396 1.364-1.396 3.328s1.43 3.861 1.629 4.127c.2.266 2.815 4.3 6.82 6.03.953.412 1.697.658 2.276.843.956.305 1.826.262 2.515.159.767-.114 2.355-.963 2.688-1.893.333-.93.333-1.726.233-1.893-.1-.167-.366-.266-.764-.465z" />
        </svg>
      </a>

      {/* ── Footer - chrome bookend ── */}
      <footer className="relative bg-chrome text-chrome-muted overflow-hidden">
        <div className="h-[2px] bg-accent" aria-hidden />
        <div className="absolute inset-0 chrome-grid" aria-hidden />

        <div className="container-grid relative z-10 pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <GemMark idPrefix="foot" size={32} />
                <span className="text-white text-lg font-bold tracking-tight">GemsPride</span>
              </div>
              <p className="text-sm leading-relaxed mb-6 max-w-xs">
                Electron beam services across India - sterilization, polymer cross-linking,
                and gemstone enhancement, trusted by manufacturers nationwide.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Pan-India network", "20+ years experience"].map((chip) => (
                  <span key={chip} className="spec-label text-chrome-muted border border-chrome-border px-2.5 py-1.5">
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="spec-label text-white mb-5">Services</h4>
              <ul className="space-y-2.5 text-sm">
                {services.map((s) => (
                  <li key={s.href + s.label}>
                    <Link href={s.href} className="hover:text-accent transition-colors inline-flex items-center gap-2 group">
                      <ArrowRight className="h-3 w-3 text-accent/60 group-hover:translate-x-0.5 transition-transform" />
                      {s.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/how-it-works" className="hover:text-accent transition-colors inline-flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 text-accent/60 group-hover:translate-x-0.5 transition-transform" />
                    How It Works
                  </Link>
                </li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="spec-label text-white mb-5">Industries</h4>
              <ul className="space-y-2.5 text-sm">
                {industries.map((i) => (
                  <li key={i.href}>
                    <Link href={i.href} className="hover:text-accent transition-colors inline-flex items-center gap-2 group">
                      <ArrowRight className="h-3 w-3 text-accent/60 group-hover:translate-x-0.5 transition-transform" />
                      {i.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/about" className="hover:text-accent transition-colors inline-flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 text-accent/60 group-hover:translate-x-0.5 transition-transform" />
                    About GemsPride
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="spec-label text-white mb-5">Contact</h4>
              <ul className="space-y-3.5 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>
                    Om Plaza C.H.S, Plot 96, Sector 2,<br />
                    Kopar Khairane, Navi Mumbai 400709
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <a href="mailto:info@gemspride.com" className="hover:text-white transition-colors">
                    info@gemspride.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <a href="tel:+917977753638" className="hover:text-white transition-colors">
                    +91 79777 53638
                  </a>
                </li>
                <li className="pl-7 spec-label text-chrome-muted">Mon-Sat · 09:30-18:00 IST</li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 pt-6 border-t border-chrome-border flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-xs">
            <p>&copy; {new Date().getFullYear()} GemsPride. All rights reserved.</p>
            <p className="spec-label text-chrome-muted">Processing for regulated industries · Pan-India</p>
          </div>
        </div>

        {/* Watermark wordmark - sized to always fit the viewport */}
        <div aria-hidden className="relative z-0 w-full overflow-hidden select-none pointer-events-none -mb-2 md:-mb-4">
          <div className="font-mono font-semibold uppercase text-center whitespace-nowrap leading-none tracking-[0.04em] text-white/[0.045] text-[min(10vw,9rem)]">
            GEMSPRIDE
          </div>
        </div>
      </footer>
    </div>
  );
}
