import { Layout } from "@/components/Layout";
import { PageHero, Reticle } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Link } from "wouter";
import { ArrowRight, Check, Gem, Award, Zap, ShieldCheck, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import gemstoneHeroImg from "@assets/service-gemstone-pHLXZliy_1783765682411.jpg";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Gemstone Enhancement by E-beam",
  "provider": { "@type": "Organization", "name": "GemsPride", "url": "https://gemspride.com" },
  "description": "Permanent gemstone color enhancement using electron beam (E-beam) treatment for Topaz, Diamonds, and Quartz - GIA/IGI accepted, pan-India service.",
  "areaServed": "IN",
  "serviceType": "Gemstone Enhancement",
  "url": "https://gemspride.com/services/gemstone-enhancement"
};

const gemTypes = [
  {
    stone: "Blue Topaz",
    variants: ["Sky Blue", "Swiss Blue", "London Blue"],
    desc: "Colourless or pale Topaz is transformed into vivid blue shades - from light Sky to deep London Blue. The colour is permanent and accepted worldwide.",
    band: "linear-gradient(90deg, #9BD1FF 0%, #2E8BFF 55%, #0A4FC4 100%)",
  },
  {
    stone: "Diamonds",
    variants: ["Fancy Yellow", "Fancy Blue", "Fancy Green"],
    desc: "E-beam treatment produces stable fancy colours in diamonds - yellows, blues, and greens - with full documentation for gem lab disclosure.",
    band: "linear-gradient(90deg, #F5D66B 0%, #7CC4FF 50%, #7FDB9A 100%)",
  },
  {
    stone: "Quartz & Others",
    variants: ["Prasiolite", "Smoky Quartz", "Citrine"],
    desc: "Quartz responds beautifully to E-beam treatment - green Prasiolite from Amethyst, rich Smoky tones, and stable Citrine colours.",
    band: "linear-gradient(90deg, #8FD6A8 0%, #8A7B66 50%, #E8B24A 100%)",
  },
];

const processSteps = [
  { num: "01", title: "Intake & assessment", desc: "Your stones are logged, weighed, and checked for suitability - clarity, existing colour, and condition - before any treatment begins." },
  { num: "02", title: "Colour planning", desc: "Our experts work out the exact treatment settings for the colour you want - so results stay consistent across the whole batch." },
  { num: "03", title: "E-beam treatment", desc: "Stones pass through the electron beam. It takes seconds per stone - no chemicals, no coatings, no damage to the gem." },
  { num: "04", title: "Colour fixing", desc: "For Blue Topaz and select stones, a gentle heat step locks in and stabilises the final colour tone." },
  { num: "05", title: "Final quality check", desc: "Every batch is colour-verified before it's handed back to you." },
];

const assurances = [
  { icon: Zap, title: "Fast processing", desc: "Treatment takes seconds per stone - even large batches are done quickly." },
  { icon: ShieldCheck, title: "Lab accepted", desc: "Treatment accepted by GIA, IGI, HRD, and all major gem laboratories." },
  { icon: Award, title: "Consistent results", desc: "Uniform colour across every stone in the batch - verified before dispatch." },
  { icon: Globe, title: "Export ready", desc: "Treated stones are welcomed in international markets including the USA, Europe, and Japan." },
];

export default function GemstoneEnhancement() {
  return (
    <Layout>
      <Helmet>
        <title>Gemstone Enhancement by E-beam | GemsPride - Blue Topaz, Diamond, Quartz Coloration India</title>
        <meta name="description" content="GemsPride offers precision E-beam gemstone enhancement - permanent colour treatment for Blue Topaz, Diamonds, and Quartz. GIA/IGI accepted, pan-India service." />
        <meta name="keywords" content="gemstone enhancement India, e beam gemstone treatment, blue topaz irradiation, diamond colour enhancement, electron beam gemstone, GIA accepted gemstone treatment, irradiated gemstones India, GemsPride gemstone" />
        <link rel="canonical" href="https://gemspride.com/services/gemstone-enhancement" />
        <meta property="og:title" content="Gemstone Enhancement by E-beam | GemsPride India" />
        <meta property="og:description" content="Permanent colour enhancement for Blue Topaz, Diamonds, and Quartz using E-beam treatment. GIA/IGI accepted, pan-India service." />
        <meta property="og:url" content="https://gemspride.com/services/gemstone-enhancement" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://gemspride.com/assets/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <PageHero
        label="Gemstone services"
        spec="GIA/IGI ACCEPTED"
        title={
          <>
            Gemstone enhancement
            <br />
            <span className="text-accent">that lasts forever.</span>
          </>
        }
        lede="Permanent colour enhancement for Blue Topaz, Diamonds, and Quartz using precision electron beam treatment - accepted by GIA, IGI, and major gem laboratories worldwide."
        aside={
          <Reticle>
            <img
              src={gemstoneHeroImg}
              alt="Colourful gemstones enhanced by E-beam irradiation"
              className="w-full h-[380px] object-cover border border-chrome-border"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-chrome/80 border border-chrome-border px-4 py-3" style={{ backdropFilter: "blur(8px)" }}>
              <p className="spec-label text-accent mb-1">Colour & clarity modification</p>
              <p className="text-white font-bold text-sm">Electron-beam enhanced gemstones</p>
            </div>
          </Reticle>
        }
      >
        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          <Link href="/contact">
            <button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-7 py-3.5 text-sm font-bold shadow-lg shadow-accent/25 inline-flex items-center justify-center gap-2 group transition-colors">
              Request a quote
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <Link href="/how-it-works">
            <button className="w-full sm:w-auto border border-chrome-border text-chrome-text hover:border-chrome-muted hover:bg-white/5 px-7 py-3.5 text-sm font-semibold transition-colors">
              How it works
            </button>
          </Link>
        </div>
      </PageHero>

      {/* Stat strip */}
      <div className="bg-chrome-2 border-b border-chrome-border">
        <div className="container-grid grid grid-cols-2 md:grid-cols-4">
          {[
            { val: "GIA/IGI", label: "Accepted treatment" },
            { val: "100%", label: "Permanent colour" },
            { val: "24/7", label: "Monitoring" },
            { val: "Zero", label: "Chemicals used" },
          ].map((s, i) => (
            <div key={s.label} className={`px-6 py-5 text-center ${i > 0 ? "md:border-l border-chrome-border" : ""} ${i % 2 === 1 ? "border-l border-chrome-border" : ""} ${i >= 2 ? "border-t md:border-t-0 border-chrome-border" : ""}`}>
              <div className="text-xl font-bold text-accent">{s.val}</div>
              <div className="spec-label text-chrome-muted mt-1.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* What is it */}
      <section className="relative py-16 md:py-24 bg-background graph-paper">
        <div className="container-grid">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <SectionHeader
                label="About the service"
                title="What is E-beam gemstone enhancement?"
                className="mb-8"
              />
              <p className="text-muted-foreground leading-relaxed mb-5">
                E-beam treatment is a widely accepted, fully disclosed way of enhancing gemstone
                colour. The electron beam changes the colour of the stone from within - producing
                rich, vivid hues that are completely permanent, with no chemicals involved.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Unlike surface coatings or fillers, the colour becomes part of the gem itself. It
                doesn't fade, chip, or wash off - and the treatment is fully disclosed and accepted
                by international gem laboratories including GIA and IGI.
              </p>
              <ul className="space-y-3">
                {[
                  "No chemicals - clean, safe treatment",
                  "Permanent colour - not a coating or film",
                  "Accepted by GIA, IGI, and all major gem labs",
                  "Fast turnaround, even on large lots",
                  "Consistent, uniform colour across every batch",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 bg-accent/10 border border-accent/25 p-1 flex-shrink-0">
                      <Check className="text-accent h-3.5 w-3.5" />
                    </span>
                    <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Before/after dose plate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="lg:sticky lg:top-28"
            >
              <div className="bg-chrome text-chrome-text border border-chrome-border p-8">
                <span className="spec-label text-accent block mb-7">The Blue Topaz transformation</span>

                {/* The transformation, before → after */}
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-sm font-semibold text-white">Before</span>
                      <span className="spec-label text-chrome-muted">Colourless / pale</span>
                    </div>
                    <div className="h-9 border border-chrome-border" style={{ background: "linear-gradient(90deg, #E9EDF3 0%, #D8DFE8 100%)" }} />
                  </div>

                  <div className="flex items-center gap-3" aria-hidden>
                    <div className="beam-line beam-line--static flex-grow" />
                    <span className="spec-label text-accent">E-beam treatment</span>
                    <div className="beam-line beam-line--static flex-grow" />
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-sm font-semibold text-white">After</span>
                      <span className="spec-label text-chrome-muted">Vivid, permanent blue</span>
                    </div>
                    <div className="h-9 border border-accent/40" style={{ background: "linear-gradient(90deg, #9BD1FF 0%, #2E8BFF 50%, #0A4FC4 100%)" }} />
                    <div className="flex justify-between mt-2">
                      <span className="spec-label text-chrome-muted">Sky</span>
                      <span className="spec-label text-chrome-muted">Swiss</span>
                      <span className="spec-label text-chrome-muted">London</span>
                    </div>
                  </div>
                </div>

                <p className="text-chrome-muted text-xs leading-relaxed mt-7 pt-5 border-t border-chrome-border">
                  Colour depth is precisely controlled, then locked in with a gentle heat
                  treatment - the same result, stone after stone.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stone types - chrome */}
      <section className="relative py-16 md:py-24 bg-chrome text-chrome-text overflow-hidden">
        <div className="absolute inset-0 chrome-grid" aria-hidden />
        <div className="container-grid relative z-10">
          <SectionHeader
            dark
            label="Gemstones we treat"
            spec="TOPAZ · DIAMOND · QUARTZ"
            title="Colour enhancement by stone type"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {gemTypes.map((gem, i) => (
              <motion.div
                key={gem.stone}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-chrome-2 border border-chrome-border hover:border-accent/50 transition-colors"
              >
                <div className="h-1.5" style={{ background: gem.band }} aria-hidden />
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 bg-accent/15 border border-accent/30 flex items-center justify-center flex-shrink-0">
                      <Gem className="h-4 w-4 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{gem.stone}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {gem.variants.map((v) => (
                      <span key={v} className="spec-label text-accent border border-accent/25 bg-accent/5 px-2 py-1">
                        {v}
                      </span>
                    ))}
                  </div>
                  <p className="text-chrome-muted text-sm leading-relaxed">{gem.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - a true 5-step sequence */}
      <section className="relative py-16 md:py-24 bg-background graph-paper">
        <div className="container-grid max-w-5xl">
          <SectionHeader
            label="Treatment process"
            spec="INTAKE → DISPATCH · 5 STEPS"
            title="From rough stone to vivid gem"
          />
          <div className="relative">
            <div className="hidden md:block absolute left-[35px] top-4 bottom-4 w-px bg-border" aria-hidden />
            <div className="space-y-5">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.45 }}
                  className="relative flex flex-col md:flex-row gap-4 md:gap-8 group"
                >
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-[72px] h-[72px] bg-card border-2 border-primary group-hover:border-accent group-hover:bg-accent transition-colors flex items-center justify-center">
                      <span className="font-mono text-xl font-semibold text-foreground group-hover:text-white transition-colors">
                        {step.num}
                      </span>
                    </div>
                  </div>
                  <div className="flex-grow bg-card border border-card-border group-hover:border-accent/50 transition-colors p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Assurance grid */}
      <section className="py-16 md:py-20 bg-background border-t border-border">
        <div className="container-grid">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {assurances.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="bg-card border border-card-border p-6 hover:border-accent transition-colors group"
              >
                <div className="w-10 h-10 border border-border group-hover:border-accent/50 group-hover:bg-accent/5 flex items-center justify-center mb-4 transition-colors">
                  <item.icon className="h-[18px] w-[18px] text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-chrome text-chrome-text overflow-hidden">
        <div className="absolute inset-0 chrome-grid" aria-hidden />
        <div className="container-grid relative z-10 py-14 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="spec-label text-accent block mb-3">Ready when you are</span>
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight tracking-[-0.02em]">
              Get a quote for your
              <br />
              next gemstone batch.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full md:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-8 py-4 text-sm font-bold shadow-lg shadow-accent/25 inline-flex items-center justify-center gap-2 group transition-colors">
                Contact us today
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/how-it-works" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto border border-chrome-border text-chrome-text hover:border-chrome-muted hover:bg-white/5 px-8 py-4 text-sm font-semibold transition-colors">
                See the process
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
