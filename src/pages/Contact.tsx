import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, ChevronDown, Send, Paperclip, CheckCircle } from "lucide-react";
import { PageHeader } from "./About";
import { SectionHeading } from "./Home";
import { applySEO, SITE_URL } from "@/lib/seo";

const faqs = [
  {
    q: "What areas do you serve?",
    a: "We serve all regions of Tanzania including Dar es Salaam, Arusha, Mwanza, Zanzibar, and more.",
  },
  {
    q: "Do you provide free quotes?",
    a: "Yes, we provide free consultation and quotes for all projects.",
  },
  {
    q: "What is your typical project timeline?",
    a: "Timeline varies by project scope. Small projects take 1–2 weeks, large commercial projects 4–8 weeks.",
  },
  {
    q: "Do you offer warranty?",
    a: "Yes, we offer warranty on all our installation work and materials.",
  },
  {
    q: "Can you work with my architect/contractor?",
    a: "Absolutely! We collaborate with architects and contractors on all projects.",
  },
  {
    q: "What brands of aluminium do you use?",
    a: "We use premium grade aluminium profiles from trusted manufacturers.",
  },
];

const inputCls =
  "w-full px-4 py-3 rounded-md bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-orange-500 transition";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold mb-2">
        {label} {required && <span className="text-orange-500">*</span>}
      </span>
      {children}
    </label>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceInterest: "Aluminium Works",
    projectDetails: "",
    contactMethod: "Phone",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    applySEO({
      title: "Contact Us — Get a Free Quote for Aluminium & Glass Works",
      description:
        "Get in touch with 867 ALUFUSION LIMITED for your aluminium and glass project in Tanzania. Request a free quote, schedule a consultation, or call us at +255 778 959 501. Serving Dar es Salaam, Arusha, Mwanza, Zanzibar, and all of Tanzania.",
      path: "/contact",
      image: "/images/hd.jpeg",
    });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call (replace with actual backend integration)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        serviceInterest: "Aluminium Works",
        projectDetails: "",
        contactMethod: "Phone",
      });
    }, 3000);
  };

  return (
    <div className="bg-background">
      <PageHeader
        title="Get In Touch"
        sub="Request a free quote or schedule a consultation"
        img="/images/hd.jpeg"
      />

      <section className="py-24">
        <div className="container-x grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3 bg-card border border-border rounded-2xl p-8 md:p-10">
            <h2 className="font-display font-black text-3xl mb-2">Send Us a Message</h2>
            <p className="text-muted-foreground mb-8">
              We respond to every inquiry within 24 hours.
            </p>
            {submitted ? (
              <div className="p-8 rounded-xl bg-gradient-orange-soft border border-orange-500/40 text-center">
                <CheckCircle className="w-12 h-12 text-orange-500 mx-auto mb-3" />
                <h3 className="font-display font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thanks for reaching out. Our team will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Full Name" required>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className={inputCls}
                      placeholder="Your full name"
                    />
                  </Field>
                  <Field label="Email" required>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={inputCls}
                      placeholder="your@email.com"
                    />
                  </Field>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Phone" required>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputCls}
                      placeholder="+255 XXX XXX XXX"
                    />
                  </Field>
                  <Field label="Service Interest">
                    <select
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      className={inputCls}
                    >
                      <option>Aluminium Works</option>
                      <option>Glass Works</option>
                      <option>Steel Works</option>
                      <option>Maintenance</option>
                      <option>Design Consultancy</option>
                      <option>Material Supply</option>
                    </select>
                  </Field>
                </div>
                <Field label="Project Details / Budget">
                  <textarea
                    name="projectDetails"
                    rows={5}
                    value={formData.projectDetails}
                    onChange={handleChange}
                    className={inputCls}
                    placeholder="Tell us about your project, timeline, or budget..."
                  />
                </Field>
                <Field label="Preferred Contact Method">
                  <div className="flex gap-5 pt-1">
                    {["Phone", "Email", "WhatsApp"].map((method) => (
                      <label key={method} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          value={method}
                          checked={formData.contactMethod === method}
                          onChange={handleChange}
                          className="accent-orange-500"
                        />
                        <span className="text-sm">{method}</span>
                      </label>
                    ))}
                  </div>
                </Field>
                <Field label="Upload drawings or reference images (optional)">
                  <label
                    className={`${inputCls} flex items-center gap-2 cursor-pointer text-muted-foreground`}
                  >
                    <Paperclip className="w-4 h-4" /> Choose files...
                    <input type="file" multiple className="hidden" />
                  </label>
                </Field>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-gradient-orange text-white font-bold shadow-lg shadow-orange-500/30 hover:scale-[1.02] transition disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Request"}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: Phone, title: "Call Us", value: "+255 778 959 501", sub: "Mon–Fri 8am–6pm" },
              {
                icon: Mail,
                title: "Email Us",
                value: "info@867alufusion.com",
                sub: "Responses within 24 hours",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                value: "Silver Sand Road, Mtongani Street, Kunduchi",
                sub: "Dar es Salaam, TZ, 14122",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="p-6 rounded-2xl bg-card border border-border flex gap-4 hover:border-orange-500/50 transition"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-orange grid place-items-center">
                  <c.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">
                    {c.title}
                  </div>
                  <div className="font-display font-bold text-lg mt-1">{c.value}</div>
                  <div className="text-sm text-muted-foreground">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-muted/40">
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
          <iframe
            title="Our location"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15851.368932662983!2d39.207602360395256!3d-6.666464172004631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1skunduchi%20mtongani%20silver%20sand%20road!5e0!3m2!1sen!2stz!4v1784026833469!5m2!1sen!2stz"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            sub="Quick answers to common questions"
          />
          <div className="max-w-3xl mx-auto mt-12 space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className="rounded-xl bg-card border border-border overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center text-left p-6 hover:bg-muted/40 transition"
                >
                  <span className="font-display font-bold text-lg">{f.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-500 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
