import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { ShieldCheck, Zap, Microscope, Gem, Layers, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "E-beam Sterilization",
    description:
      "Safe, chemical-free sterilization for medical devices and pharma packaging. Processing takes seconds, making it ideal for high-volume manufacturing.",
    icon: ShieldCheck,
    href: "/services/e-beam-sterilization",
    chips: ["Medical devices", "Pharma", "Chemical-free"],
  },
  {
    num: "02",
    title: "Polymer Cross-Linking",
    description:
      "Makes plastics tougher - better heat resistance, chemical stability, and strength for wires, cables, tubes, and moulded parts. No chemical additives involved.",
    icon: Zap,
    href: "/services/polymer-crosslinking",
    chips: ["Wire & cable", "Pipes", "Heat-shrink"],
  },
  {
    num: "03",
    title: "Gemstone Enhancement",
    description:
      "Permanent colour enhancement for Topaz, Diamonds, and Quartz. Accepted by GIA and IGI, trusted by jewellers and exporters worldwide.",
    icon: Gem,
    href: "/services/gemstone-enhancement",
    chips: ["Blue Topaz", "Diamond", "Quartz"],
  },
  {
    num: "04",
    title: "Semiconductor Enhancement",
    description:
      "Fine-tunes the performance of semiconductor components - enabling tighter tolerances and faster, more reliable devices.",
    icon: Microscope,
    href: "/services/electron-beam-processing",
    chips: ["Electronics", "Performance"],
  },
  {
    num: "05",
    title: "Wire & Cable",
    description:
      "Toughens wire insulation so it withstands heat and soldering without melting - essential for automotive, solar, and aerospace applications.",
    icon: Layers,
    href: "/services/polymer-crosslinking",
    chips: ["Automotive", "Solar", "Aerospace"],
  },
];

export default function Services() {
  return (
    <Layout>
      <Helmet>
        <title>E Beam Services | GemsPride - Sterilization, Cross-Linking & Gemstone Enhancement</title>
        <meta name="description" content="Explore GemsPride's full range of electron beam services: e beam sterilization, polymer cross-linking, gemstone enhancement, and semiconductor processing. Industrial-grade precision across India." />
        <link rel="canonical" href="https://gemspride.com/services" />
        <meta property="og:title" content="E Beam Services | GemsPride - Sterilization, Cross-Linking & Gemstone Enhancement" />
        <meta property="og:description" content="Explore GemsPride's full range of electron beam services across India." />
        <meta property="og:url" content="https://gemspride.com/services" />
      </Helmet>

      <PageHero
        label="Our services"
        spec="FIVE SERVICES · PAN-INDIA"
        title="E-beam services in India"
        lede="Electron beam processing for sterilization, cross-linking, gemstone enhancement, and material modification - delivered across India, fast and reliable."
      />

      {/* Catalog grid */}
      <section className="relative py-16 md:py-24 bg-background graph-paper">
        <div className="container-grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((card, i) => (
              <motion.div
                key={card.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
              >
                <Link href={card.href} className="group block h-full">
                  <article className="relative h-full bg-card border border-card-border hover:border-accent transition-all duration-300 flex flex-col p-7 hover:shadow-xl hover:shadow-accent/10">
                    <div className="flex items-start justify-between mb-7">
                      <div className="w-11 h-11 border border-border group-hover:border-accent/50 group-hover:bg-accent/5 flex items-center justify-center transition-colors">
                        <card.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                      </div>
                      <span className="spec-label text-muted-foreground">{card.num}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2.5 group-hover:text-accent transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{card.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-5 mb-6">
                      {card.chips.map((chip) => (
                        <span key={chip} className="spec-label text-muted-foreground border border-border px-2 py-1">
                          {chip}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 spec-label text-accent group-hover:gap-3 transition-all">
                      View service <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500" />
                  </article>
                </Link>
              </motion.div>
            ))}

            {/* Consultation slot - the sixth cell */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16, duration: 0.5 }}
            >
              <Link href="/contact" className="group block h-full">
                <article className="relative h-full bg-chrome border border-chrome-border hover:border-accent transition-all duration-300 flex flex-col p-7">
                  <span className="spec-label text-accent mb-7">Free consultation</span>
                  <h3 className="text-lg font-bold text-white mb-2.5">Not sure which service fits?</h3>
                  <p className="text-sm text-chrome-muted leading-relaxed flex-grow">
                    Tell us about your product and what you need it to do. Our team recommends
                    the right E-beam service - free of charge.
                  </p>
                  <div className="flex items-center gap-2 spec-label text-accent mt-6 group-hover:gap-3 transition-all">
                    Request consultation <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500" />
                </article>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
