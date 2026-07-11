import { Layout } from "@/components/Layout";
import { PageHero, Reticle } from "@/components/PageHero";
import { Link } from "wouter";
import { ArrowRight, Phone, MessageSquare, CalendarCheck, PackageCheck } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import facilityImg from "@assets/stock_images/industrial_electron__46ad95a8.jpg";

const steps = [
  {
    num: "01",
    title: "Reach out",
    desc: "Call, WhatsApp, or send the contact form - tell us about your product and what you need done.",
    output: "A response within 24 business hours",
    icon: Phone,
  },
  {
    num: "02",
    title: "Discuss your requirements",
    desc: "Our team talks through your requirements in detail - material, quantities, and the right treatment - and answers all your questions.",
    output: "A clear plan and quote",
    icon: MessageSquare,
  },
  {
    num: "03",
    title: "Agree a time",
    desc: "We fix a date and time that is feasible for both sides - scheduled around your production, not ours.",
    output: "A confirmed appointment",
    icon: CalendarCheck,
  },
  {
    num: "04",
    title: "Visit & treat your goods",
    desc: "Visit at the agreed time and have your goods treated exactly as discussed - you stay involved at every step.",
    output: "Your goods, treated as agreed",
    icon: PackageCheck,
  },
];

export default function HowItWorks() {
  return (
    <Layout>
      <Helmet>
        <title>How E Beam Processing Works | GemsPride Process Guide India</title>
        <meta name="description" content="Learn how GemsPride's e beam processing works - reach out, discuss your requirements, agree a time, and have your goods treated. Simple, fast, transparent." />
        <meta name="keywords" content="how e beam processing works, e beam process India, electron beam sterilization process, GemsPride process" />
        <link rel="canonical" href="https://gemspride.com/how-it-works" />
        <meta property="og:title" content="How E Beam Processing Works | GemsPride Process Guide India" />
        <meta property="og:description" content="Learn how GemsPride's e beam processing works - from first contact to treated goods. Simple, fast, transparent." />
        <meta property="og:url" content="https://gemspride.com/how-it-works" />
      </Helmet>

      <PageHero
        label="How it works"
        spec="REACH OUT → TREATMENT · 4 STEPS"
        title="How E-beam processing works"
        lede="A simple, transparent process: reach out, discuss your requirements, agree a time - then visit and have your goods treated exactly as you need."
        aside={
          <Reticle>
            <img
              src={facilityImg}
              alt="Electron beam processing facility in India"
              className="w-full h-[320px] object-cover border border-chrome-border"
            />
            <span className="absolute bottom-3 left-3 spec-label text-white/85 bg-chrome/70 px-2 py-1" style={{ backdropFilter: "blur(6px)" }}>
              Inside a partner facility
            </span>
          </Reticle>
        }
      />

      {/* Steps - a true sequence, so the numerals lead */}
      <section className="relative py-16 md:py-24 bg-background graph-paper">
        <div className="container-grid max-w-5xl">
          <div className="relative">
            {/* Rail */}
            <div className="hidden md:block absolute left-[43px] top-4 bottom-4 w-px bg-border" aria-hidden />

            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="relative flex flex-col md:flex-row gap-5 md:gap-10 group"
                >
                  {/* Numeral */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-[88px] h-[88px] bg-card border-2 border-primary group-hover:border-accent group-hover:bg-accent transition-colors flex flex-col items-center justify-center">
                      <span className="font-mono text-2xl font-semibold text-foreground group-hover:text-white transition-colors leading-none">
                        {step.num}
                      </span>
                      <step.icon className="h-4 w-4 mt-2 text-muted-foreground group-hover:text-white/80 transition-colors" />
                    </div>
                  </div>

                  {/* Plate */}
                  <div className="flex-grow bg-card border border-card-border group-hover:border-accent/50 transition-colors p-7">
                    <h3 className="text-xl font-bold text-foreground mb-2.5 group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-5">{step.desc}</p>
                    <div className="flex items-baseline gap-3 pt-4 border-t border-border">
                      <span className="spec-label text-muted-foreground">You receive</span>
                      <span className="font-mono text-xs text-accent">{step.output}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA plate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-14 bg-chrome text-chrome-text border border-chrome-border p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          >
            <div>
              <span className="spec-label text-accent block mb-3">Step 01 starts here</span>
              <h3 className="text-2xl font-bold text-white mb-2">Ready to get started?</h3>
              <p className="text-chrome-muted max-w-xl leading-relaxed text-sm">
                Send us your product details today - we'll discuss your requirements and
                agree a time that works for you.
              </p>
            </div>
            <Link href="/contact" className="flex-shrink-0 w-full md:w-auto">
              <button className="w-full md:w-auto bg-accent hover:bg-accent/90 text-white px-8 py-4 text-sm font-bold shadow-lg shadow-accent/25 inline-flex items-center justify-center gap-2 group transition-colors">
                Get a quote
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
