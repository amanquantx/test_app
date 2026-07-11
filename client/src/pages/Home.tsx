import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Reticle } from "@/components/PageHero";
import {
  ShieldCheck, Zap, Gem, ArrowRight, Award, Activity, Globe, Clock,
  Phone, MessageSquare, CalendarCheck, PackageCheck,
} from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useState, useEffect, useRef } from "react";

import gemstoneEnhancementImg from "@assets/service-gemstone-pHLXZliy_1783765682411.jpg";
import polymerImg from "@assets/polymer_crosslinking_1783761046630.jpeg";
import medicalImg from "@assets/medical_sterlization_1783761046630.jpg";
import beamMachineImg from "@assets/stock_images/beam_machine.jpg";

/* ── Data ─────────────────────────────────────────────────────── */

const specimens = [
  {
    code: "01",
    name: "Medical Sterilization",
    sub: "Medical & pharma",
    img: medicalImg,
    href: "/services/e-beam-sterilization",
    alt: "Medical device E-beam sterilization in India",
  },
  {
    code: "02",
    name: "Polymer Cross-Linking",
    sub: "Wire · Cable · Heat-shrink",
    img: polymerImg,
    href: "/services/polymer-crosslinking",
    alt: "Polymer cross-linking by electron beam - wire and cable industry",
  },
  {
    code: "03",
    name: "Gemstone Enhancement",
    sub: "Topaz · Diamond · Quartz",
    img: gemstoneEnhancementImg,
    href: "/services/gemstone-enhancement",
    alt: "Cut gemstones colour-enhanced by electron beam treatment",
  },
];

const metrics = [
  { target: 20, suffix: "+", decimals: 0, label: "Years experience", icon: Award },
  { target: 99.9, suffix: "%", decimals: 1, label: "Precision rate", icon: Activity },
  { target: 5000, suffix: "+", decimals: 0, label: "Batches processed", icon: Globe },
  { target: null, static: "24/7", label: "Process monitoring", icon: Clock },
] as const;

const processSteps = [
  { num: "01", title: "Reach out", desc: "Call, WhatsApp, or send the form - tell us about your product and what you need.", icon: Phone },
  { num: "02", title: "Discuss requirements", desc: "Our team talks through your requirement and gives you a clear plan and quote.", icon: MessageSquare },
  { num: "03", title: "Agree a time", desc: "We fix a date and time that is feasible for both sides.", icon: CalendarCheck },
  { num: "04", title: "Visit & treat your goods", desc: "Visit at the agreed time and have your goods treated exactly as discussed.", icon: PackageCheck },
];

const industryRows = [
  { title: "Medical Devices", desc: "Single-use disposables, implants, surgical textiles, diagnostic kits.", href: "/industries/medical-devices", icon: ShieldCheck },
  { title: "Wire, Cable & Polymers", desc: "Automotive and solar cable, heat-shrink, PEX pipe, engineered components.", href: "/industries/polymers-plastics", icon: Zap },
  { title: "Gemstones", desc: "Blue Topaz, fancy-colour Diamonds, Quartz - GIA/IGI-accepted treatment.", href: "/industries/gemstones", icon: Gem },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "GemsPride E-beam Services",
  "url": "https://gemspride.com/",
  "description": "Industrial Electron Beam (E-beam) processing services across India - sterilization, polymer cross-linking, gemstone enhancement, and material modification.",
  "telephone": "+91-7977753638",
  "email": "info@gemspride.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Om Plaza C.H.S, Sector 2, Plot 96, Kopar Khairane",
    "addressLocality": "Navi Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400709",
    "addressCountry": "IN"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 19.107563624995954, "longitude": 73.00290651500478 },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:30",
    "closes": "18:00"
  }],
  "serviceType": ["E Beam Sterilization", "Polymer Cross-Linking", "Electron Beam Processing", "Gemstone Enhancement"],
  "areaServed": "IN"
};

/* ── Motion presets ───────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.09 } } };

/* ── Count-up metric ──────────────────────────────────────────── */

function CountUp({ target, suffix, decimals = 0, duration = 1600 }: {
  target: number; suffix: string; decimals?: number; duration?: number;
}) {
  const [count, setCount] = useState(0);
  const elRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !startedRef.current) {
        startedRef.current = true;
        observer.disconnect();
        let startTime: number | null = null;
        const step = (ts: number) => {
          if (!startTime) startTime = ts;
          const progress = Math.min((ts - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(eased * target);
          if (progress < 1) requestAnimationFrame(step);
          else setCount(target);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div ref={elRef} className="text-2xl lg:text-3xl font-bold text-white leading-none tracking-tight">
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </div>
  );
}

/* ── Specimen strip - hover/cycle expanding service panels ────── */

function SpecimenStrip() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    if (hovered !== null) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setActive((a) => (a + 1) % specimens.length), 3600);
    return () => clearInterval(t);
  }, [hovered]);

  const focus = hovered ?? active;

  return (
    <div className="flex flex-col lg:flex-row gap-2 h-[400px] sm:h-[440px] lg:h-[540px]">
      {specimens.map((s, i) => {
        const isFocus = focus === i;
        return (
          <Link
            key={s.code}
            href={s.href}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(i)}
            onBlur={() => setHovered(null)}
            className="relative overflow-hidden border border-chrome-border group block min-h-0"
            style={{ flexGrow: isFocus ? 2.6 : 1, flexBasis: 0, transition: "flex-grow 0.65s cubic-bezier(0.45, 0, 0.25, 1)" }}
          >
            <img
              src={s.img}
              alt={s.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                isFocus ? "scale-100 opacity-100" : "scale-105 opacity-55"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-chrome via-chrome/25 to-transparent" />

            {/* Catalog code */}
            <span className="absolute top-4 left-4 spec-label text-white/80 bg-chrome/60 px-2 py-1 border border-chrome-border" style={{ backdropFilter: "blur(6px)" }}>
              {s.code}
            </span>

            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
              <p className={`spec-label mb-1.5 transition-colors duration-300 ${isFocus ? "text-accent" : "text-white/50"}`}>
                {s.sub}
              </p>
              <div className="flex items-center justify-between gap-3">
                <p className="text-white font-bold text-base lg:text-lg leading-tight">{s.name}</p>
                <span
                  className={`w-8 h-8 bg-accent items-center justify-center flex flex-shrink-0 transition-all duration-300 ${
                    isFocus ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                  }`}
                >
                  <ArrowRight className="h-4 w-4 text-white" />
                </span>
              </div>
            </div>

            {/* Focus edge */}
            <div className={`absolute top-0 left-0 right-0 h-0.5 bg-accent transition-transform duration-500 origin-left ${isFocus ? "scale-x-100" : "scale-x-0"}`} />
          </Link>
        );
      })}
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>E Beam Services India | Electron Beam Processing & Sterilization - GemsPride</title>
        <meta name="description" content="GemsPride delivers precision E-beam services across India: electron beam sterilization, polymer cross-linking, and material modification. 20+ years experience, pan-India network." />
        <meta name="keywords" content="e beam services India, electron beam processing India, e beam sterilization India, polymer cross-linking India, industrial electron beam, GemsPride, radiation processing India" />
        <link rel="canonical" href="https://gemspride.com/" />
        <meta property="og:title" content="GemsPride | E Beam Services India - Electron Beam Processing" />
        <meta property="og:description" content="Precision E-beam services across India - sterilization, polymer cross-linking, material modification. 20+ years, pan-India network." />
        <meta property="og:url" content="https://gemspride.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://gemspride.com/assets/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* ══ HERO - the beam, stated plainly ══════════════════════ */}
      <section className="relative bg-chrome text-chrome-text overflow-hidden">
        <div className="absolute inset-0 chrome-grid" aria-hidden />

        <div className="container-grid relative z-10 pt-12 pb-10 lg:pt-20 lg:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[0.94fr_1.06fr] gap-10 lg:gap-14 items-center">
            {/* Copy */}
            <motion.div variants={stagger} initial="hidden" animate="show">
              <motion.div variants={fadeUp} className="mb-7">
                <span className="spec-label text-accent">Sterilize · Cross-link · Enhance</span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-[2.6rem] sm:text-5xl lg:text-[3.4rem] xl:text-[3.9rem] font-bold leading-[1.04] tracking-[-0.02em] text-white mb-6"
              >
                Electron beam services
                <br />
                <span className="text-accent">across India.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-base md:text-lg text-chrome-muted leading-relaxed max-w-[480px] mb-8">
                GemsPride delivers E-beam sterilization for medical devices, polymer
                cross-linking, and gemstone colour enhancement - fast, safe, and completely
                chemical-free.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-7 py-3.5 text-sm font-bold shadow-lg shadow-accent/25 inline-flex items-center justify-center gap-2 group transition-colors">
                    Get a free consultation
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
                <Link href="/e-beam-services-india" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto border border-chrome-border text-chrome-text hover:border-chrome-muted hover:bg-white/5 px-7 py-3.5 text-sm font-semibold transition-colors">
                    Explore E-beam services in India
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Specimen strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            >
              <SpecimenStrip />
            </motion.div>
          </div>
        </div>

        {/* Beam line - the one traveling pulse on this page */}
        <div className="beam-line relative z-10" aria-hidden />

        {/* Metrics bar */}
        <div className="relative z-10 bg-chrome-2">
          <div className="container-grid grid grid-cols-2 lg:grid-cols-4">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className={`flex items-center gap-4 px-2 sm:px-6 py-6 ${i > 0 ? "lg:border-l border-chrome-border" : ""} ${i % 2 === 1 ? "border-l border-chrome-border lg:border-l" : ""} ${i >= 2 ? "border-t lg:border-t-0 border-chrome-border" : ""}`}
              >
                <div className="w-10 h-10 border border-accent/40 bg-accent/10 hidden sm:flex items-center justify-center flex-shrink-0">
                  <m.icon className="h-[18px] w-[18px] text-accent" />
                </div>
                <div>
                  {"target" in m && m.target !== null ? (
                    <CountUp target={m.target} suffix={m.suffix} decimals={m.decimals} />
                  ) : (
                    <div className="text-2xl lg:text-3xl font-bold text-white leading-none tracking-tight">
                      {"static" in m ? m.static : ""}
                    </div>
                  )}
                  <div className="spec-label text-chrome-muted mt-2">{m.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICE CATALOG - paper ══════════════════════════════ */}
      <section className="relative py-16 md:py-24 bg-background graph-paper">
        <div className="container-grid">
          <SectionHeader
            label="Our services"
            spec="STERILIZE · CROSS-LINK · ENHANCE"
            title="What we put under the beam"
            description="Three core services, one promise: consistent results and fast turnaround, batch after batch."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {specimens.map((card, i) => (
              <motion.div
                key={card.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link href={card.href} className="group block h-full">
                  <article className="relative h-full bg-card border border-card-border hover:border-accent transition-all duration-300 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-accent/10">
                    <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                      <img
                        src={card.img}
                        alt={card.alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-chrome/70 to-transparent" />
                      <span className="absolute top-3.5 left-3.5 spec-label text-white/85 bg-chrome/60 px-2 py-1" style={{ backdropFilter: "blur(6px)" }}>
                        {card.code}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {card.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                        {card.code === "01" &&
                          "Safe, chemical-free sterilization for medical devices and pharma packaging - done in seconds, with nothing left behind."}
                        {card.code === "02" &&
                          "Makes wires, cables, tubes, and moulded parts tougher - more heat-resistant and durable, with no chemical additives."}
                        {card.code === "03" &&
                          "Permanent colour for Topaz, Diamonds, and Quartz - accepted by GIA and IGI, trusted by jewellers and exporters."}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-4 mb-5">
                        {card.sub.split(" · ").map((chip) => (
                          <span key={chip} className="spec-label text-muted-foreground border border-border px-2 py-1">
                            {chip}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 spec-label text-accent group-hover:gap-3 transition-all">
                        View service <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500" />
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 spec-label text-foreground border border-input px-6 py-3.5 hover:border-accent hover:text-accent transition-colors group">
              See all E-beam services
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ THE MACHINE - chrome showcase ════════════════════════ */}
      <section className="relative bg-chrome text-chrome-text overflow-hidden">
        <div className="absolute inset-0 chrome-grid" aria-hidden />
        <div className="container-grid relative z-10 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <span className="spec-label text-accent block mb-5">The technology</span>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.08] tracking-[-0.02em] text-white mb-6">
                One beam. Three industries.
                <br />
                Zero chemicals.
              </h2>
              <p className="text-chrome-muted leading-relaxed mb-5 max-w-xl">
                At the heart of every project is the electron beam - a focused stream of pure
                energy that treats your product in seconds. It runs on electricity and switches
                on and off like a light.
              </p>
              <p className="text-chrome-muted leading-relaxed mb-8 max-w-xl">
                Nothing touches your product except the beam itself. No chemicals, no residue,
                no waiting for gases to clear - goods arrive, get treated, and ship straight
                back to you.
              </p>
              <Link href="/how-it-works">
                <button className="bg-accent hover:bg-accent/90 text-white px-7 py-3.5 text-sm font-bold shadow-lg shadow-accent/25 inline-flex items-center gap-2 group transition-colors">
                  See how it works
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.12 }}
            >
              <Reticle>
                <img
                  src={beamMachineImg}
                  alt="Electron beam machine in action"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[340px] md:h-[440px] object-cover border border-chrome-border"
                />
                <span className="absolute bottom-3 left-3 spec-label text-white/85 bg-chrome/70 px-2 py-1" style={{ backdropFilter: "blur(6px)" }}>
                  Electron beam in action
                </span>
              </Reticle>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ PROCESS - paper, a true sequence ═════════════════════ */}
      <section className="relative py-16 md:py-24 bg-background graph-paper">
        <div className="container-grid">
          <SectionHeader
            label="How it works"
            spec="REACH OUT → TREATMENT"
            title="From first contact to treated goods"
            description="Reach out, discuss your requirements, agree a time - then visit and get your goods treated."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative bg-card border border-card-border p-6 hover:border-accent transition-colors group"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-3xl font-semibold text-border group-hover:text-accent/30 transition-colors leading-none">
                    {step.num}
                  </span>
                  <div className="w-9 h-9 border border-border group-hover:border-accent/50 group-hover:bg-accent/5 flex items-center justify-center transition-colors">
                    <step.icon className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                </div>
                <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                {i < processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-[22px] -translate-y-1/2 h-4 w-4 text-border z-10" aria-hidden />
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/how-it-works" className="inline-flex items-center gap-2 spec-label text-foreground border border-input px-6 py-3.5 hover:border-accent hover:text-accent transition-colors group">
              See how E-beam processing works
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ INDUSTRIES - paper band ══════════════════════════════ */}
      <section className="py-16 md:py-24 bg-background border-t border-border">
        <div className="container-grid">
          <SectionHeader
            label="Industries served"
            spec="REGULATED & INDUSTRIAL SECTORS"
            title="Built for buyers who audit their suppliers"
          />
          <div className="divide-y divide-border border-y border-border">
            {industryRows.map((row, i) => (
              <motion.div
                key={row.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
              >
                <Link href={row.href} className="group flex items-center gap-5 sm:gap-8 py-6 px-1 sm:px-4 hover:bg-card transition-colors">
                  <div className="w-11 h-11 border border-border group-hover:border-accent group-hover:bg-accent/5 flex items-center justify-center flex-shrink-0 transition-colors">
                    <row.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="font-bold text-foreground group-hover:text-accent transition-colors">{row.title}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{row.desc}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-border group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA - chrome ═══════════════════════════════════ */}
      <section className="relative bg-chrome text-chrome-text overflow-hidden">
        <div className="absolute inset-0 chrome-grid" aria-hidden />
        <div className="container-grid relative z-10 py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="spec-label text-accent block mb-4">Start a project</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.06] tracking-[-0.02em]">
                Put your product
                <br />
                under the beam.
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-3 w-full md:w-auto"
            >
              <Link href="/contact" className="w-full md:w-auto">
                <button className="w-full md:w-auto bg-accent hover:bg-accent/90 text-white px-8 py-4 text-sm font-bold shadow-lg shadow-accent/25 inline-flex items-center justify-center gap-2 group transition-colors">
                  Request consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
              <p className="spec-label text-chrome-muted text-center md:text-right">
                Technical response within 24 business hours
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
