import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  AppWindow,
  Square,
  Wrench,
  Settings,
  PenTool,
  Truck,
  ClipboardList,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
  Star,
  CheckCircle2,
  Users,
  Award,
  Clock,
  Sparkles,
} from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { applySEO, SITE_URL } from "@/lib/seo";

const services = [
  {
    icon: AppWindow,
    title: "Aluminium Works",
    desc: "Sliding windows, casement windows, curtain walls, shop fronts, cladding, louvers, skylights.",
  },
  {
    icon: Square,
    title: "Glass Works",
    desc: "Frameless partitions, tempered glass, balustrades, structural glazing, glass facades.",
  },
  {
    icon: Wrench,
    title: "Steel Fabrication",
    desc: "Gates, grills, roofing structures, tanks, frames, custom metal products.",
  },
  {
    icon: Settings,
    title: "Maintenance",
    desc: "Repairs, replacement, preventive maintenance contracts, hardware replacement.",
  },
  {
    icon: PenTool,
    title: "Custom Design",
    desc: "Site assessment, technical advice, drawings, feasibility studies.",
  },
  {
    icon: Truck,
    title: "Supply Chain",
    desc: "High-quality profiles, glass panels, accessories, fittings.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    desc: "On-site installation, coordination, timeline adherence, safety compliance.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Compliance",
    desc: "Safety measures, local building codes, professional installation.",
  },
];

const whyUs = [
  {
    icon: Users,
    title: "Professional Workforce",
    desc: "Skilled technicians with years of experience",
  },
  {
    icon: Award,
    title: "High-Quality Materials",
    desc: "Premium aluminium profiles and glass panels",
  },
  { icon: Clock, title: "Timely Completion", desc: "Projects delivered on schedule, every time" },
  {
    icon: Sparkles,
    title: "Competitive Pricing",
    desc: "Best value without compromising premium quality",
  },
  {
    icon: ShieldCheck,
    title: "After-Sales Support",
    desc: "Ongoing maintenance and technical support",
  },
  { icon: Wrench, title: "Modern Equipment", desc: "Latest tools and fabrication technology" },
];

const testimonials = [
  {
    name: "Amani Mwakasege",
    project: "Office Glass Partitions • Dar es Salaam",
    quote:
      "The team at 867 ALUFUSION did an amazing job on our office glass partitions. Professional, on-time, and high quality.",
  },
  {
    name: "Fatma Hassan",
    project: "Residential Aluminium Windows • Arusha",
    quote:
      "From measurement to installation, every step was smooth. Our new windows transformed the entire house. Highly recommended.",
  },
  {
    name: "James Kileo",
    project: "Hotel Glass Facade • Zanzibar",
    quote:
      "We needed a partner who understood scale and precision. 867 ALUFUSION delivered beyond expectations.",
  },
  {
    name: "Engineer Said Juma",
    project: "Curtain Wall System • Mwanza",
    quote:
      "Their attention to safety and code compliance is unmatched. A true professional outfit.",
  },
];

const projectPreviews = [
  {
    title: "Commercial Curtain Wall Installation",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    tag: "Commercial",
  },
  {
    title: "Residential Glass Balustrades",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    tag: "Residential",
  },
  {
    title: "Hotel Lobby Glass Partitions",
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    tag: "Hospitality",
  },
];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const dur = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return (
    <span>
      {n}
      {suffix}
    </span>
  );
}

export default function Home() {
  const { t } = useLang();

  useEffect(() => {
    applySEO({
      title: "Premium Aluminium & Glass Works in Tanzania",
      description:
        "867 ALUFUSION LIMITED is Tanzania's trusted aluminium and glass works company. We specialize in aluminium fabrication, glass installations, steel fabrication, and maintenance for residential, commercial, and industrial projects.",
      path: "/",
      image: "/images/hd.jpeg",
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: "867 ALUFUSION LIMITED — Premium Aluminium & Glass Works in Tanzania",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        primaryImageOfPage: { "@id": `${SITE_URL}/images/hd.jpeg` },
        inLanguage: "en",
      },
    });
  }, []);

  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hd.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a]/90 via-[#0a0f1a]/70 to-[#ea580c]/30" />
        <div className="container-x relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 text-orange-400" /> {t("hero_badge")}
            </span>
            <h1 className="font-display font-black text-white text-5xl md:text-7xl lg:text-[5rem] leading-[1.05] mb-8">
              {t("hero_title").split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-gradient-orange">{t("hero_title").split(" ").slice(-1)}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium mb-5">{t("hero_sub")}</p>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mb-10 leading-relaxed">
              {t("hero_desc")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-gradient-orange text-white font-semibold text-base shadow-2xl shadow-orange-500/40 hover:scale-105 transition-transform glow-orange"
              >
                {t("cta_free_quote")} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-white/10 backdrop-blur border-2 border-white/30 text-white font-semibold text-base hover:bg-white/20 transition"
              >
                {t("cta_view_work")}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl"
          >
            {[
              { n: 500, s: "+", l: "Projects Delivered" },
              { n: 200, s: "+", l: "Happy Clients" },
              { n: 15, s: "+", l: "Team Members" },
              { n: 100, s: "%", l: "Timely Delivery" },
            ].map((stat) => (
              <div key={stat.l}>
                <div className="text-4xl md:text-5xl font-display font-black text-gradient-orange">
                  <Counter to={stat.n} suffix={stat.s} />
                </div>
                <div className="text-sm text-white/70 mt-2">{stat.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Services" title={t("services_title")} sub={t("services_sub")} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-orange-500/60 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-orange-soft border border-orange-500/30 grid place-items-center mb-5 group-hover:bg-gradient-orange transition">
                  <s.icon className="w-7 h-7 text-orange-500 group-hover:text-white transition" />
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-orange-500 hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 md:py-32 bg-muted/40">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/images/alluminium.jpeg"
              alt="Aluminium installation work by 867 ALUFUSION"
              className="rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover"
              loading="lazy"
              width="600"
              height="750"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-orange text-white p-6 rounded-2xl shadow-2xl hidden md:block">
              <div className="font-display font-black text-4xl">2+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-orange-500 font-semibold uppercase tracking-widest text-sm">
              About Us
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl mt-3 mb-6">
              Excellence in <span className="text-gradient-orange">Aluminium & Glass</span> Since
              2024
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              867 ALUFUSION LIMITED is a leading aluminium and glass works company based in
              Tanzania, transforming architectural visions into reality. We specialize in the
              design, fabrication, and installation of high-quality aluminium and glass solutions
              for residential, commercial, and industrial projects.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Our skilled team combines craftsmanship, modern technology, and uncompromising safety
              standards to deliver lasting results.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Quality", "Integrity", "Innovation", "Safety", "Reliability"].map((v) => (
                <span
                  key={v}
                  className="px-4 py-2 rounded-full bg-gradient-orange-soft border border-orange-500/30 text-sm font-semibold text-orange-600 dark:text-orange-300"
                >
                  {v}
                </span>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-gradient-orange text-white font-semibold shadow-lg shadow-orange-500/30 hover:scale-105 transition-transform"
            >
              Learn More About Us <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Why us" title={t("why_title")} sub={t("why_sub")} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {whyUs.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-8 rounded-2xl bg-card border border-border flex gap-5 hover:border-orange-500/50 transition"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-orange grid place-items-center">
                  <w.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-2">{w.title}</h3>
                  <p className="text-muted-foreground">{w.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-muted/40">
        <div className="container-x">
          <SectionHeading
            eyebrow="Testimonials"
            title={t("testimonials_title")}
            sub={t("testimonials_sub")}
          />
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {testimonials.map((te) => (
              <div key={te.name} className="p-8 rounded-2xl bg-card border border-border">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-lg italic leading-relaxed mb-6 text-foreground">"{te.quote}"</p>
                <div>
                  <div className="font-display font-bold">{te.name}</div>
                  <div className="text-sm text-muted-foreground">{te.project}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Portfolio"
            title={t("projects_preview_title")}
            sub="A glimpse of our recent work across Tanzania"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {projectPreviews.map((p) => (
              <Link
                key={p.title}
                to="/projects"
                className="group rounded-2xl overflow-hidden bg-card border border-border block"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-gradient-orange-soft border border-orange-500/30 text-orange-600 dark:text-orange-300 text-xs font-bold uppercase tracking-wider mb-3">
                    {p.tag}
                  </span>
                  <h3 className="font-display font-bold text-xl mb-3">{p.title}</h3>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-orange-500 group-hover:gap-2 transition-all">
                    View Project <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-16 bg-muted/40 border-y border-border">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "ISO Certified",
            "Licensed Contractor",
            "Fully Insured",
            "Tanzania Construction Association",
          ].map((b) => (
            <div key={b} className="flex flex-col items-center gap-2">
              <CheckCircle2 className="w-8 h-8 text-orange-500" />
              <span className="font-semibold text-foreground">{b}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-orange relative overflow-hidden">
        <div className="container-x relative z-10 text-center text-white">
          <h2 className="font-display font-black text-4xl md:text-6xl mb-5">{t("cta_ready")}</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">{t("cta_ready_sub")}</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-md bg-white text-orange-600 font-bold text-lg shadow-2xl hover:scale-105 transition-transform"
          >
            Request a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub: string;
}) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <span className="text-orange-500 font-semibold uppercase tracking-widest text-sm">
        {eyebrow}
      </span>
      <h2 className="font-display font-black text-4xl md:text-5xl mt-3 mb-4">{title}</h2>
      <p className="text-lg text-muted-foreground">{sub}</p>
    </div>
  );
}
