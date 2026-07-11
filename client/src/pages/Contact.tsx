import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet-async";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useSubmitContact } from "@/hooks/use-contact";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Mail, Phone, MapPin, CheckCircle, Clock, ShieldCheck, ArrowRight, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

// Matches backend schema insertContactInquirySchema
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().optional(),
  serviceInterest: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide more details about your requirement"),
});

const inputClasses =
  "h-12 bg-card border-input focus:border-accent focus-visible:ring-0 focus-visible:ring-offset-0";

export default function Contact() {
  const mutation = useSubmitContact();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      serviceInterest: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation.mutate(values, {
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <Layout>
      <Helmet>
        <title>Contact GemsPride | Request E Beam Services in India</title>
        <meta name="description" content="Contact GemsPride to request e beam services across India. Discuss electron beam sterilization, polymer cross-linking, and radiation processing requirements with our technical experts." />
        <meta name="keywords" content="contact GemsPride, request e beam services India, e beam quote India, electron beam processing inquiry" />
        <link rel="canonical" href="https://gemspride.com/contact" />
        <meta property="og:title" content="Contact GemsPride | Request E Beam Services in India" />
        <meta property="og:description" content="Contact GemsPride to request e beam services across India. Discuss electron beam sterilization and radiation processing with our experts." />
        <meta property="og:url" content="https://gemspride.com/contact" />
      </Helmet>

      <PageHero
        label="Contact"
        spec="RESPONSE WITHIN 24 BUSINESS HOURS"
        title="Start your project"
        lede="Tell us about your product and what you need. We'll reply with whether E-beam is the right fit, a recommended approach, and a clear quote."
      >
        <div className="flex flex-wrap gap-2.5">
          {[
            { icon: Clock, text: "24h response" },
            { icon: ShieldCheck, text: "Pan-India network" },
            { icon: CheckCircle, text: "20+ years experience" },
          ].map(({ icon: Icon, text }) => (
            <span key={text} className="flex items-center gap-2 border border-chrome-border px-3.5 py-2">
              <Icon className="h-3.5 w-3.5 text-accent" />
              <span className="spec-label text-chrome-muted">{text}</span>
            </span>
          ))}
        </div>
      </PageHero>

      <div className="relative bg-background graph-paper">
        <div className="container-grid py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* ── Inquiry form (3 cols) ── */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="lg:col-span-3"
            >
              {mutation.isSuccess ? (
                /* Success state */
                <div className="bg-card border border-accent/40 p-10 flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-accent flex items-center justify-center mb-5">
                    <CheckCircle className="h-7 w-7 text-white" />
                  </div>
                  <span className="spec-label text-accent mb-3">Inquiry logged</span>
                  <h3 className="text-2xl font-bold text-foreground mb-3">We have your requirements.</h3>
                  <p className="text-muted-foreground max-w-sm leading-relaxed mb-6">
                    Our technical team will review them and respond within{" "}
                    <strong className="text-foreground">24 business hours</strong>.
                  </p>
                  <div className="bg-background border border-border p-4 w-full text-sm text-muted-foreground mb-7 text-left">
                    <span className="font-semibold text-foreground">What happens next:</span> we assess
                    your product specifications, recommend the right E-beam parameters, and send a
                    detailed quote.
                  </div>
                  <Button
                    onClick={() => mutation.reset()}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-5 font-semibold group"
                  >
                    Submit another inquiry
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              ) : (
                /* Form */
                <div className="bg-card border border-card-border p-6 sm:p-9">
                  <div className="flex items-baseline justify-between gap-4 mb-8">
                    <h2 className="text-2xl font-bold text-foreground">Send an inquiry</h2>
                    <span className="spec-label text-muted-foreground hidden sm:block">Free · No obligation</span>
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="spec-label text-muted-foreground">
                                Full name <span className="text-accent">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input placeholder="Full name" {...field} className={inputClasses} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="spec-label text-muted-foreground">
                                Work email <span className="text-accent">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input placeholder="name@company.com" {...field} className={inputClasses} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="spec-label text-muted-foreground">
                                Company <span className="text-accent">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input placeholder="Company name" {...field} className={inputClasses} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="spec-label text-muted-foreground">Phone</FormLabel>
                              <FormControl>
                                <Input placeholder="+91 98765 43210" {...field} className={inputClasses} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="serviceInterest"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="spec-label text-muted-foreground">
                              Service interest <span className="text-accent">*</span>
                            </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 bg-card border-input focus:border-accent focus:ring-0 focus:ring-offset-0">
                                  <SelectValue placeholder="Select a service..." />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Sterilization">E-beam Sterilization (Medical / Pharma)</SelectItem>
                                <SelectItem value="Polymer Cross-linking">Polymer Cross-linking</SelectItem>
                                <SelectItem value="Gemstone Coloration">Gemstone Enhancement</SelectItem>
                                <SelectItem value="Semiconductors">Semiconductor Processing</SelectItem>
                                <SelectItem value="Other">Other / General Consultation</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="spec-label text-muted-foreground">
                              Project details <span className="text-accent">*</span>
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe your product, volume requirements, and any specific processing or quality needs..."
                                className="min-h-[140px] bg-card border-input focus:border-accent focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {mutation.isError && (
                        <div className="border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                          Something went wrong. Try again, or email us directly at info@gemspride.com.
                        </div>
                      )}

                      <Button
                        type="submit"
                        disabled={mutation.isPending}
                        className="w-full h-14 bg-accent hover:bg-accent/90 text-white font-bold text-sm uppercase tracking-widest shadow-lg shadow-accent/20 group"
                      >
                        {mutation.isPending ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Submitting...
                          </>
                        ) : (
                          <>
                            Submit inquiry{" "}
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        Your information is kept confidential and used only to respond to your inquiry.
                      </p>
                    </form>
                  </Form>
                </div>
              )}
            </motion.div>

            {/* ── Info panel (2 cols) ── */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
              className="lg:col-span-2 space-y-4"
            >
              {[
                {
                  icon: Mail,
                  label: "Email",
                  primary: "info@gemspride.com",
                  secondary: "Quotes & general inquiries",
                  href: "mailto:info@gemspride.com",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  primary: "+91 79777 53638",
                  secondary: "Mon-Sat · 09:30-18:00 IST",
                  href: "tel:+917977753638",
                },
                {
                  icon: MessageSquare,
                  label: "WhatsApp",
                  primary: "Chat with the team",
                  secondary: "Fastest for quick questions",
                  href: "https://wa.me/917977753638",
                },
                {
                  icon: MapPin,
                  label: "Head office",
                  primary: "Navi Mumbai, Maharashtra",
                  secondary: "Om Plaza C.H.S, Kopar Khairane 400709",
                  href: null,
                },
              ].map(({ icon: Icon, label, primary, secondary, href }) => (
                <div
                  key={label}
                  className="flex gap-4 p-5 bg-card border border-card-border hover:border-accent/50 transition-colors group"
                >
                  <div className="w-11 h-11 bg-primary flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="spec-label text-muted-foreground mb-1">{label}</div>
                    {href ? (
                      <a href={href} className="font-semibold text-foreground hover:text-accent transition-colors leading-tight block">
                        {primary}
                      </a>
                    ) : (
                      <p className="font-semibold text-foreground leading-tight">{primary}</p>
                    )}
                    <p className="text-sm text-muted-foreground mt-0.5">{secondary}</p>
                  </div>
                </div>
              ))}

              {/* Response commitment */}
              <div className="bg-chrome text-chrome-text p-6 border-l-2 border-accent">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="h-4 w-4 text-accent flex-shrink-0" />
                  <span className="spec-label text-white">Response commitment</span>
                </div>
                <p className="text-chrome-muted text-sm leading-relaxed">
                  Every inquiry gets a response within{" "}
                  <strong className="text-white">24 business hours</strong>. Detailed quotes are
                  delivered within 48 hours.
                </p>
              </div>

              {/* Partner network */}
              <div className="p-6 bg-card border border-card-border">
                <span className="spec-label text-foreground block mb-2.5">Pan-India partner network</span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Processing facilities near major industrial hubs. We route your batch to the
                  closest partner facility to your plant.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {["Mumbai", "Delhi", "Chennai", "Bengaluru", "Hyderabad"].map((city) => (
                    <span key={city} className="spec-label text-muted-foreground border border-border px-2 py-1">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
