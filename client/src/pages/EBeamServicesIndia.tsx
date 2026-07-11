import { Layout } from "@/components/Layout";
import { PageHero, Reticle } from "@/components/PageHero";
import { Link } from "wouter";
import { ArrowRight, Check, ShieldCheck, Zap, Factory, Microscope, Package } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import heroImage from "@assets/stock_images/modern_industrial_el_755afc7e.jpg";

/** Longform spec-row heading */
function DocHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-8 pb-4 border-b border-border">
      <span className="spec-label text-accent flex-shrink-0">{index}</span>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-[-0.01em]">{title}</h2>
    </div>
  );
}

const faqs = [
  {
    q: "Do you need to own an e-beam facility to provide services?",
    a: "No. GemsPride operates as a specialized technical service provider and aggregator. We partner with existing high-performance facilities to deliver services, allowing us to offer pan-India coverage and expert guidance independent of any single facility.",
  },
  {
    q: "How are partner facilities selected?",
    a: "Partner facilities are selected based on their equipment quality, capacity, maintenance record, and proven performance over time.",
  },
  {
    q: "Is electron beam sterilization approved for medical devices in India?",
    a: "Yes. Electron beam sterilization is a globally recognized method that meets international standards, and it is widely accepted by Indian regulatory authorities for the sterilization of medical devices.",
  },
  {
    q: "How does e-beam compare with older sterilization methods?",
    a: "E-beam is much faster than older radiation-based methods, which also means less wear on plastic materials. Unlike gas-based sterilization, it runs on electricity, leaves no toxic residue, and needs no airing-out time - so your goods are ready sooner.",
  },
  {
    q: "Can services be delivered across India?",
    a: "Yes. Through our network of partner facilities, we coordinate E-beam processing services across all major industrial regions in India.",
  },
];

/* FAQ rich-result schema - makes these questions eligible to appear directly in Google results */
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

export default function EBeamServicesIndia() {
  return (
    <Layout>
      <Helmet>
        <title>E Beam Services India | GemsPride - Pan-India Electron Beam Processing</title>
        <meta name="description" content="GemsPride provides specialized E Beam services across India through a trusted pan-India partner network. Expert electron beam sterilization, cross-linking & material modification." />
        <meta name="keywords" content="e beam services India, electron beam services India, industrial e beam India, e beam sterilization India, e beam processing India, GemsPride India" />
        <link rel="canonical" href="https://gemspride.com/e-beam-services-india" />
        <meta property="og:title" content="E Beam Services India | GemsPride - Pan-India Electron Beam Processing" />
        <meta property="og:description" content="Specialized E Beam services across India through a trusted pan-India partner network. Expert electron beam sterilization, cross-linking & material modification." />
        <meta property="og:url" content="https://gemspride.com/e-beam-services-india" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
      </Helmet>

      <PageHero
        label="E-beam services · India"
        spec="PAN-INDIA PARTNER NETWORK"
        title="E-beam services in India"
        lede="GemsPride provides specialized pan-India Electron Beam (E-beam) services delivered through our network of trusted partner facilities - your technical consultant and single point of coordination for advanced processing."
        aside={
          <Reticle>
            <img
              src={heroImage}
              alt="Modern industrial electron beam accelerator facility"
              className="w-full h-[340px] object-cover border border-chrome-border"
            />
            <span className="absolute bottom-3 left-3 spec-label text-white/85 bg-chrome/70 px-2 py-1" style={{ backdropFilter: "blur(6px)" }}>
              Inside a partner facility
            </span>
          </Reticle>
        }
      >
        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          <Link href="/contact">
            <button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-7 py-3.5 text-sm font-bold shadow-lg shadow-accent/25 inline-flex items-center justify-center gap-2 group transition-colors">
              Request E-beam service
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <Link href="/contact">
            <button className="w-full sm:w-auto border border-chrome-border text-chrome-text hover:border-chrome-muted hover:bg-white/5 px-7 py-3.5 text-sm font-semibold transition-colors">
              Consult a technical expert
            </button>
          </Link>
        </div>
      </PageHero>

      <div className="relative bg-background graph-paper">
        <div className="container-grid py-16 md:py-20">
          <div className="max-w-4xl mx-auto space-y-20">
            {/* 01 Why choose */}
            <section id="why-choose">
              <DocHeading index="01" title="Why choose GemsPride for E-beam services in India" />
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-5">
                  <p className="text-muted-foreground leading-relaxed">
                    Navigating the landscape of industrial radiation processing requires technical
                    depth and operational reliability. GemsPride bridges the gap between
                    manufacturers and high-end E-beam technology.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Deep expertise in electron beam processing, built over 20+ years.",
                      "A verified network of trusted partner facilities.",
                      "One point of contact for logistics, compliance, and execution.",
                      "Pan-India reach serving all major industrial hubs.",
                      "Consistent quality and full regulatory compliance, every time.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="mt-0.5 bg-accent/10 border border-accent/25 p-1 flex-shrink-0">
                          <Check className="text-accent h-3.5 w-3.5" />
                        </span>
                        <span className="text-foreground text-sm font-medium leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-chrome text-chrome-text border border-chrome-border p-8 h-fit">
                  <span className="spec-label text-accent block mb-4">Industrial reliability</span>
                  <p className="text-sm text-chrome-muted leading-relaxed">
                    Our model ensures that your projects are matched with the facility best suited
                    for your specific technical requirements - whether it's high-throughput
                    sterilization or precise polymer modification.
                  </p>
                </div>
              </div>
            </section>

            {/* 02 Capabilities */}
            <section id="capabilities">
              <DocHeading index="02" title="Our E-beam service capabilities" />
              <div className="grid sm:grid-cols-3 gap-5">
                {[
                  { title: "Sterilization", desc: "Medical devices and pharmaceutical packaging.", icon: ShieldCheck },
                  { title: "Cross-linking", desc: "Enhancing polymer properties for wires and cables.", icon: Zap },
                  { title: "Irradiation", desc: "Precision material modification and R&D support.", icon: Microscope },
                ].map((cap, i) => (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    className="bg-card border border-card-border p-6 hover:border-accent transition-colors group"
                  >
                    <div className="w-10 h-10 border border-border group-hover:border-accent/50 group-hover:bg-accent/5 flex items-center justify-center mb-4 transition-colors">
                      <cap.icon className="h-[18px] w-[18px] text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <h3 className="font-bold text-foreground mb-1.5">{cap.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* 03 Delivery model */}
            <section id="delivery-model" className="bg-card border border-card-border p-8 md:p-10">
              <DocHeading index="03" title="How we deliver E-beam services across India" />
              <p className="text-muted-foreground leading-relaxed mb-8">
                GemsPride operates on a specialized partnership model. We do not own an electron
                beam plant; instead, we leverage spare capacity at trusted, high-performance
                partner facilities across India. This allows us to provide flexible, geographically
                optimized services.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-base font-bold text-foreground flex items-center gap-2.5 mb-3">
                    <Factory className="h-4 w-4 text-accent" /> Facility selection & validation
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every partner facility is rigorously vetted by our experts for equipment
                    performance, treatment accuracy, and operational compliance.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground flex items-center gap-2.5 mb-3">
                    <ShieldCheck className="h-4 w-4 text-accent" /> Coordination & execution
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We manage the end-to-end workflow - from feasibility trials and process
                    validation to routine processing and quality documentation, with complete
                    transparency.
                  </p>
                </div>
              </div>
            </section>

            {/* 04 Technology */}
            <section id="technology">
              <DocHeading index="04" title="What is Electron Beam (E-beam) technology" />
              <p className="text-muted-foreground leading-relaxed">
                Electron Beam (E-beam) technology uses a focused beam of electrons - powered
                entirely by electricity - to sterilize products or improve materials. It kills
                microbes and strengthens plastics without radioactive sources or chemicals, can be
                switched on and off instantly, and treats products in seconds with pinpoint control.
              </p>
            </section>

            {/* 05 Applications */}
            <section id="applications">
              <DocHeading index="05" title="Applications of electron beam services" />
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { title: "Sterilization", desc: "Widely used for sterilizing medical devices - meeting the strictest international standards for patient safety." },
                  { title: "Polymer strengthening", desc: "Makes plastic components tougher - better heat resistance, strength, and durability for industrial use." },
                  { title: "Material transformation", desc: "Precisely changes the properties of semiconductors, gemstones, and advanced materials." },
                  { title: "R&D trials", desc: "Small-batch processing so engineering teams can test and refine treatments during product development." },
                ].map((app) => (
                  <div key={app.title} className="bg-card border border-card-border border-l-2 border-l-accent p-6">
                    <h3 className="text-base font-bold text-foreground mb-2">{app.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{app.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 06 Industries */}
            <section id="industries">
              <DocHeading index="06" title="Industries we serve" />
              <div className="grid sm:grid-cols-3 gap-5">
                {[
                  { title: "Medical Devices", icon: Microscope, href: "/industries/medical-devices" },
                  { title: "Polymers & Plastics", icon: Factory, href: "/industries/polymers-plastics" },
                  { title: "Packaging", icon: Package, href: "/contact" },
                ].map((industry) => (
                  <Link key={industry.title} href={industry.href} className="group">
                    <div className="text-center p-7 bg-card border border-card-border hover:border-accent transition-colors">
                      <industry.icon className="h-8 w-8 mx-auto text-muted-foreground group-hover:text-accent mb-4 transition-colors" />
                      <h3 className="font-bold text-foreground group-hover:text-accent transition-colors">{industry.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* 07 Quality */}
            <section id="quality" className="bg-chrome text-chrome-text border border-chrome-border p-8 md:p-10">
              <div className="flex items-baseline gap-4 mb-8 pb-4 border-b border-chrome-border">
                <span className="spec-label text-accent flex-shrink-0">07</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-[-0.01em]">Quality, compliance, and safety</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8 text-sm">
                {[
                  { title: "Regulatory compliance", desc: "We follow international standards for medical sterilization and quality management." },
                  { title: "Process control", desc: "Rigorous checks and measurement ensure every batch is treated uniformly, edge to edge." },
                  { title: "Material protection", desc: "We assess your material upfront to make sure the treatment never degrades your product." },
                ].map((q) => (
                  <div key={q.title} className="space-y-3">
                    <h3 className="spec-label text-white">{q.title}</h3>
                    <p className="text-chrome-muted leading-relaxed">{q.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 08 FAQ */}
            <section id="faq">
              <DocHeading index="08" title="Frequently asked questions" />
              <div className="divide-y divide-border border-y border-border">
                {faqs.map((faq, i) => (
                  <div key={i} className="py-6 grid md:grid-cols-[64px_1fr] gap-2 md:gap-4">
                    <span className="spec-label text-accent pt-1">Q.{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="font-bold text-foreground mb-2 leading-snug">{faq.q}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="relative bg-chrome text-chrome-text border border-chrome-border overflow-hidden">
              <div className="absolute inset-0 chrome-grid" aria-hidden />
              <div className="relative z-10 p-10 md:p-12 text-center">
                <span className="spec-label text-accent block mb-4">Next step</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-[-0.02em]">
                  Discuss your E-beam requirements
                </h2>
                <p className="text-chrome-muted max-w-2xl mx-auto mb-8 leading-relaxed">
                  Contact our technical team to discuss material compatibility, dose mapping, and
                  logistics for your next project.
                </p>
                <Link href="/contact">
                  <button className="bg-accent hover:bg-accent/90 text-white px-9 py-4 text-sm font-bold shadow-lg shadow-accent/25 inline-flex items-center gap-2 group transition-colors">
                    Get a professional quote
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
