import { Layout } from "@/components/Layout";
import { PageHero, Reticle } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Link } from "wouter";
import { ArrowRight, ShieldCheck, Zap, Gem, Check } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import pharmaImg from "@assets/medical_sterlization_1783761046630.jpg";
import polymerImg from "@assets/polymer_crosslinking_1783761046630.jpeg";
import gemsImg from "@assets/service-gemstone-pHLXZliy_1783765682411.jpg";

/* ── Shared industry detail template ─────────────────────────── */

const IndustryDetail = ({
  label,
  title,
  spec,
  description,
  image,
  benefits,
  applications,
}: {
  label: string;
  title: string;
  spec: string;
  description: string;
  image: string;
  benefits: string[];
  applications: string[];
}) => (
  <Layout>
    <PageHero label={label} spec={spec} title={title} lede={description} />

    <section className="relative py-16 md:py-24 bg-background graph-paper">
      <div className="container-grid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <Reticle className="mb-10">
              <img src={image} alt={title} className="w-full h-64 object-cover border border-border" />
            </Reticle>

            <div className="bg-card border border-card-border p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground">Key benefits</h3>
              </div>
              <ul className="space-y-3.5">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 bg-accent/10 border border-accent/25 p-1 flex-shrink-0">
                      <Check className="text-accent h-3.5 w-3.5" />
                    </span>
                    <span className="text-muted-foreground text-sm leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            <SectionHeader label="Industry focus" title={title} className="mb-8" />
            <p className="text-muted-foreground mb-9 leading-relaxed">{description}</p>

            <div className="bg-chrome text-chrome-text border border-chrome-border p-8 mb-9">
              <span className="spec-label text-accent block mb-5">Common applications</span>
              <ul className="space-y-3.5">
                {applications.map((a, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="text-accent h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span className="text-chrome-muted text-sm leading-relaxed">{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/contact">
              <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-sm font-bold shadow-lg shadow-accent/20 inline-flex items-center gap-2 group transition-colors">
                Request validation study
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

/* ── Sector details ───────────────────────────────────────────── */

export function MedicalDevices() {
  return (
    <IndustryDetail
      label="Industry focus"
      spec="CHEMICAL-FREE"
      title="Medical Devices"
      description="E-beam sterilization is a fast, reliable, chemical-free alternative to older sterilization methods for medical products - safe for patients and gentle on materials."
      image={pharmaImg}
      benefits={[
        "Processing in seconds or minutes - vs. days for gas methods",
        "No chemical residues - completely patient-safe",
        "Gentler on plastics than older radiation methods",
        "Meets international sterilization standards",
        "Room-temperature process protects heat-sensitive devices",
      ]}
      applications={[
        "Single-use disposables (syringes, catheters, cannulas)",
        "Dialyzers and blood transfusion sets",
        "Surgical gowns, drapes, and non-woven textiles",
        "Labware, petri dishes, and diagnostic kits",
        "Implants, orthopedics, and dental devices",
      ]}
    />
  );
}

export function Polymers() {
  return (
    <IndustryDetail
      label="Industry focus"
      spec="WIRE · CABLE · PIPES"
      title="Polymers & Plastics"
      description="E-beam cross-linking makes plastic materials tougher - better heat resistance, strength, and durability without any chemical additives - for products that survive demanding industrial environments."
      image={polymerImg}
      benefits={[
        "Increased heat resistance - higher service temperatures",
        "Improved chemical and solvent resistance",
        "Enhanced tensile strength and abrasion resistance",
        "Memory effect creation for heat-shrinkable products",
        "No chemical additives required in the process",
      ]}
      applications={[
        "Wire and cable insulation (automotive, solar, rail)",
        "Heat shrink tubes, sleeves, and connectors",
        "PEX pipes (cross-linked polyethylene) for plumbing",
        "O-rings, gaskets, and sealing components",
        "Foams, sheets, and semi-finished plastic profiles",
      ]}
    />
  );
}

export function Gemstones() {
  return (
    <IndustryDetail
      label="Industry focus"
      spec="GIA/IGI ACCEPTED"
      title="Gemstone Industry"
      description="Electron beam treatment delivers permanent colour enhancement for Topaz, Diamonds, and Quartz - precise, repeatable, and accepted by gem laboratories worldwide."
      image={gemsImg}
      benefits={[
        "Permanent, stable colour - no fading over time",
        "Accepted by major gem labs (GIA, IGI)",
        "Consistent, repeatable colour across every batch",
        "Fast turnaround, even on bulk lots",
        "Uniform results from the first stone to the last",
      ]}
      applications={[
        "Blue Topaz coloration (Sky, Swiss, London Blue)",
        "Diamond colour enhancement and clarity modification",
        "Quartz and Prasiolite coloration",
        "Fancy coloured gemstone production",
        "Treatment trusted in export markets worldwide",
      ]}
    />
  );
}

/* ── Industries index ─────────────────────────────────────────── */

export default function Industries() {
  const sectors = [
    {
      title: "Medical Devices",
      icon: ShieldCheck,
      href: "/industries/medical-devices",
      spec: "Chemical-free",
      desc: "Reliable sterilization for single-use disposables, implants, and diagnostic products.",
      image: pharmaImg,
    },
    {
      title: "Polymers & Plastics",
      icon: Zap,
      href: "/industries/polymers-plastics",
      spec: "Wire & cable",
      desc: "Cross-linking for wires, cables, pipes, heat-shrink products, and engineered components.",
      image: polymerImg,
    },
    {
      title: "Gemstones",
      icon: Gem,
      href: "/industries/gemstones",
      spec: "GIA/IGI",
      desc: "Permanent colour enhancement for Topaz, Diamonds, and Quartz - lab-accepted worldwide.",
      image: gemsImg,
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Industries Served | GemsPride E Beam Services - Medical, Polymers & Gemstones</title>
        <meta name="description" content="GemsPride's e beam services support medical devices, polymers & plastics, and gemstone industries across India. Precision electron beam processing for regulated and industrial sectors." />
        <link rel="canonical" href="https://gemspride.com/industries" />
        <meta property="og:title" content="Industries Served | GemsPride E Beam Services" />
        <meta property="og:description" content="E beam services for medical devices, polymers & plastics, and gemstones across India." />
        <meta property="og:url" content="https://gemspride.com/industries" />
      </Helmet>

      <PageHero
        label="Sectors we serve"
        spec="REGULATED & INDUSTRIAL"
        title="Industries served"
        lede="Tailored E-beam programs for regulated and industrial sectors across India - from medical manufacturing to wire & cable and gemstone export."
      />

      <section className="relative py-16 md:py-24 bg-background graph-paper">
        <div className="container-grid">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {sectors.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link href={item.href} className="group block h-full">
                  <article className="relative h-full bg-card border border-card-border hover:border-accent transition-all duration-300 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-accent/10">
                    <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-chrome/70 to-transparent" />
                      <span className="absolute top-3.5 left-3.5 spec-label text-white/85 bg-chrome/60 px-2 py-1" style={{ backdropFilter: "blur(6px)" }}>
                        {item.spec}
                      </span>
                      <div className="absolute bottom-3.5 right-3.5 w-10 h-10 bg-accent flex items-center justify-center shadow-lg">
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="p-7 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-foreground mb-2.5 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{item.desc}</p>
                      <div className="flex items-center gap-2 mt-5 spec-label text-accent group-hover:gap-3 transition-all">
                        View sector <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500" />
                  </article>
                </Link>
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
            <span className="spec-label text-accent block mb-3">Other sectors</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-[-0.02em]">
              Don't see your industry?
            </h2>
            <p className="text-chrome-muted mt-3 max-w-xl leading-relaxed">
              E-beam technology is versatile. Tell us your material and processing requirements -
              we'll confirm feasibility.
            </p>
          </div>
          <Link href="/contact" className="flex-shrink-0 w-full md:w-auto">
            <button className="w-full md:w-auto bg-accent hover:bg-accent/90 text-white px-8 py-4 text-sm font-bold shadow-lg shadow-accent/25 inline-flex items-center justify-center gap-2 group transition-colors">
              Discuss your industry
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
