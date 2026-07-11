import { Layout } from "@/components/Layout";
import { PageHero, Reticle } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Check, ArrowRight, Award, Globe, Users, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import facilityImg from "@assets/stock_images/modern_industrial_el_755afc7e.jpg";

const stats = [
  { val: "20+", label: "Years experience" },
  { val: "99.9%", label: "Precision rate" },
  { val: "5000+", label: "Batches processed" },
  { val: "24/7", label: "Monitoring" },
];

const values = [
  { icon: Award, title: "Consistent quality", desc: "The same rigorous quality checks at every partner facility." },
  { icon: Globe, title: "Pan-India network", desc: "Facilities near major industrial hubs for fast, low-cost turnaround." },
  { icon: Users, title: "Expert team", desc: "Experienced specialists guiding every step of your project." },
  { icon: Zap, title: "Fast turnaround", desc: "Treatment scheduled and completed at a time that suits you." },
];

export default function About() {
  return (
    <Layout>
      <Helmet>
        <title>About GemsPride | Industrial E Beam Services Company in India</title>
        <meta name="description" content="Learn about GemsPride - India's trusted industrial electron beam (E Beam) services company. 20+ years of precision processing experience, pan-India partner network." />
        <link rel="canonical" href="https://gemspride.com/about" />
        <meta property="og:title" content="About GemsPride | Industrial E Beam Services Company in India" />
        <meta property="og:description" content="India's trusted industrial electron beam services company. 20+ years of precision radiation processing experience." />
        <meta property="og:url" content="https://gemspride.com/about" />
      </Helmet>

      <PageHero
        label="About GemsPride"
        title={<>Your industrial E-beam partner in India</>}
        lede="Bridging the gap between manufacturers and advanced electron beam processing since 2004 - without asking you to build a plant."
      >
        {/* Stat strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 border border-chrome-border divide-x divide-chrome-border max-w-2xl">
          {stats.map((s, i) => (
            <div key={s.label} className={`px-4 py-4 ${i >= 2 ? "border-t sm:border-t-0 border-chrome-border" : ""}`}>
              <div className="text-xl font-bold text-white leading-none">{s.val}</div>
              <div className="spec-label text-chrome-muted mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Mission & model */}
      <section className="relative py-16 md:py-24 bg-background graph-paper">
        <div className="container-grid">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <SectionHeader
                label="Who we are"
                title="E-beam access without the capital outlay"
                className="mb-8"
              />
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  GemsPride is a specialized B2B service provider focused on delivering
                  world-class electron beam processing to Indian industries. Setting up a
                  captive E-beam facility takes massive capital investment and regulatory
                  clearance - not feasible for every manufacturer.
                </p>
                <p>
                  <strong className="text-foreground">Our model:</strong> we connect your
                  production to trusted capacity at partner facilities across India, and
                  manage the whole journey for you - from feasibility checks and validation
                  to routine processing and quality assurance.
                </p>
                <p>
                  Every partner facility is thoroughly vetted for equipment quality, safety,
                  and reliability - so your products are always in safe hands.
                </p>
              </div>
              <div className="mt-9">
                <Link href="/contact">
                  <button className="bg-accent hover:bg-accent/90 text-white px-7 py-3.5 text-sm font-bold shadow-lg shadow-accent/20 inline-flex items-center gap-2 group transition-colors">
                    Talk to our team
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.12 }}
            >
              <Reticle className="mb-8">
                <img
                  src={facilityImg}
                  alt="Modern industrial electron beam facility"
                  className="w-full h-64 object-cover border border-border"
                />
                <span className="absolute bottom-3 left-3 spec-label text-white/85 bg-chrome/70 px-2 py-1" style={{ backdropFilter: "blur(6px)" }}>
                  Partner facility network
                </span>
              </Reticle>

              <div className="bg-chrome text-chrome-text p-8 border border-chrome-border">
                <span className="spec-label text-accent block mb-5">The GemsPride advantage</span>
                <ul className="space-y-4">
                  {[
                    "No capital investment - use our partner network instead of building your own plant.",
                    "Technical expertise - we work out the right treatment for your product, so you don't have to.",
                    "Reliable partners - every facility is thoroughly vetted before joining our network.",
                    "Any scale - pilot lots or mass production, handled with equal care.",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-0.5 bg-accent/15 border border-accent/30 p-1 flex-shrink-0">
                        <Check className="text-accent h-3.5 w-3.5" />
                      </span>
                      <span className="text-chrome-muted text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-background border-t border-border">
        <div className="container-grid">
          <SectionHeader
            label="Operating principles"
            spec="HOW WE WORK"
            title="Built on precision and proof"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="bg-card border border-card-border p-7 hover:border-accent transition-colors group"
              >
                <div className="w-11 h-11 border border-border group-hover:border-accent/50 group-hover:bg-accent/5 flex items-center justify-center mb-5 transition-colors">
                  <v.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
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
            <span className="spec-label text-accent block mb-3">Work with us</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-[-0.02em]">
              Twenty years of trusted processing.
              <br className="hidden sm:block" /> Zero shortcuts.
            </h2>
          </div>
          <Link href="/contact" className="flex-shrink-0 w-full md:w-auto">
            <button className="w-full md:w-auto bg-accent hover:bg-accent/90 text-white px-8 py-4 text-sm font-bold shadow-lg shadow-accent/25 inline-flex items-center justify-center gap-2 group transition-colors">
              Start your project
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
