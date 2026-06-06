import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, MapPin, ArrowRight } from "lucide-react";
import { PageHeader } from "./About";
import { applySEO, SITE_URL } from "@/lib/seo";

type Category = "All" | "Commercial" | "Residential" | "Industrial" | "Hospitality";

// All projects using your local images from the "projects" folder
const projects = [
  // Commercial
  {
    title: "Tanzania Revenue Authority HQ",
    category: "Commercial",
    location: "Dar es Salaam",
    scope: "Commercial Curtain Wall",
    img: "/projects/commercial-curtain-wall.jpeg",
  },
  {
    title: "Millennium Business Park",
    category: "Commercial",
    location: "Dar es Salaam",
    scope: "Commercial Office Partitions",
    img: "/projects/commercial-curtain-wall1.jpeg",
  },
  {
    title: "Dar es Salaam Mall",
    category: "Commercial",
    location: "Dar es Salaam",
    scope: "Commercial Shop Fronts",
    img: "/projects/commercial-curtain-wall2.jpeg",
  },
  {
    title: "NMB Bank Headquarters",
    category: "Commercial",
    location: "Dar es Salaam",
    scope: "Commercial Structural Glazing",
    img: "/projects/commercial-curtain-wall3.jpeg",
  },
  {
    title: "Commercial Tower Complex",
    category: "Commercial",
    location: "Dar es Salaam",
    scope: "Full Building Envelope",
    img: "/projects/commercial-curtain-wall4.jpeg",
  },
  // Residential
  {
    title: "Kisutu Residential Tower",
    category: "Residential",
    location: "Dar es Salaam",
    scope: "Residential Aluminium Windows",
    img: "/projects/residential-glass-balustrade.jpeg",
  },
  {
    title: "Regency Apartments",
    category: "Residential",
    location: "Mwanza",
    scope: "Residential Frameless Glass",
    img: "/projects/residential-glass-balustrade1.jpeg",
  },
  {
    title: "Harbour View Villas",
    category: "Residential",
    location: "Dar es Salaam",
    scope: "Glass Balustrades & Railings",
    img: "/projects/residential-glass-balustrade2.jpeg",
  },
  {
    title: "Garden City Apartments",
    category: "Residential",
    location: "Arusha",
    scope: "Aluminium Windows & Doors",
    img: "/projects/residential-glass-balustrade3.jpeg",
  },
  // Hospitality
  {
    title: "Serena Hotel Renovation",
    category: "Hospitality",
    location: "Zanzibar",
    scope: "Hospitality Glass Facade",
    img: "/projects/hotel-glass-partition.jpeg",
  },
  {
    title: "Kilimanjaro Resort",
    category: "Hospitality",
    location: "Arusha",
    scope: "Hospitality Glass Balustrades",
    img: "/projects/hotel-glass-partition1.jpeg",
  },
  {
    title: "Beachfront Hotel",
    category: "Hospitality",
    location: "Dar es Salaam",
    scope: "Glass Facade & Shop Fronts",
    img: "/projects/hotel-glass-partition2.jpeg",
  },
  {
    title: "Luxury Safari Lodge",
    category: "Hospitality",
    location: "Serengeti",
    scope: "Glass Partitions & Railings",
    img: "/projects/hotel-glass-partition3.jpeg",
  },
  {
    title: "City Center Hotel",
    category: "Hospitality",
    location: "Dar es Salaam",
    scope: "Lobby Glass Installation",
    img: "/projects/hotel-glass-partition4.jpeg",
  },
  // Industrial
  {
    title: "JNICC Convention Centre",
    category: "Industrial",
    location: "Dar es Salaam",
    scope: "Large‑Format Glass Works",
    img: "/projects/industrial-aluminium-facade.jpeg",
  },
  {
    title: "Industrial Manufacturing Plant",
    category: "Industrial",
    location: "Mwanza",
    scope: "Industrial Aluminium Facade",
    img: "/projects/industrial-aluminium-facade1.jpeg",
  },
  {
    title: "Warehouse Complex",
    category: "Industrial",
    location: "Dar es Salaam",
    scope: "Aluminium Cladding",
    img: "/projects/industrial-aluminium-facade2.jpeg",
  },
  {
    title: "Factory Expansion",
    category: "Industrial",
    location: "Arusha",
    scope: "Steel & Glass Integration",
    img: "/projects/industrial-aluminium-facade3.jpeg",
  },
  {
    title: "Industrial Park",
    category: "Industrial",
    location: "Dar es Salaam",
    scope: "Complete Facade System",
    img: "/projects/industrial-aluminium-facade4.jpeg",
  },
];

const filters: Category[] = ["All", "Commercial", "Residential", "Industrial", "Hospitality"];

export default function Projects() {
  const [filter, setFilter] = useState<Category>("All");
  const [active, setActive] = useState<(typeof projects)[number] | null>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    applySEO({
      title: "Our Portfolio — Aluminium & Glass Projects in Tanzania",
      description:
        "Browse our portfolio of completed aluminium and glass installations across Tanzania: curtain walls, glass facades, partitions, balustrades, windows, and more for commercial, residential, industrial, and hospitality sectors.",
      path: "/projects",
      image: "/images/hd.jpeg",
    });
  }, []);

  return (
    <div className="bg-background">
      <PageHeader
        title="Our Portfolio"
        sub="Showcasing our finest aluminium and glass installations across Tanzania"
        img="/images/hd.jpeg"
      />

      <section className="py-20">
        <div className="container-x">
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition ${
                  filter === f
                    ? "bg-gradient-orange text-white shadow-lg shadow-orange-500/30"
                    : "bg-card border border-border text-foreground hover:border-orange-500/50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onClick={() => setActive(p)}
                  className="cursor-pointer group rounded-2xl overflow-hidden bg-card border border-border hover:border-orange-500/60 transition"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      width="800"
                      height="600"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gradient-orange text-white text-xs font-bold uppercase tracking-wider">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1.5 mb-3">
                      <MapPin className="w-4 h-4" /> {p.location}
                    </p>
                    <span className="text-sm font-semibold text-orange-500 inline-flex items-center gap-1">
                      View Case Study <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-sm grid place-items-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-2xl max-w-3xl w-full overflow-hidden my-8"
            >
              <div className="relative">
                <img
                  src={active.img}
                  alt={active.title}
                  className="w-full aspect-video object-cover"
                  width="1200"
                  height="675"
                />
                <button
                  onClick={() => setActive(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white grid place-items-center hover:bg-orange-500 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-gradient-orange text-white text-xs font-bold uppercase tracking-wider mb-3">
                  {active.category}
                </span>
                <h3 className="font-display font-black text-3xl mb-2">{active.title}</h3>
                <p className="text-muted-foreground flex items-center gap-1.5 mb-6">
                  <MapPin className="w-4 h-4" /> {active.location}
                </p>
                <dl className="grid sm:grid-cols-2 gap-6 text-sm">
                  <div>
                    <dt className="font-bold text-foreground mb-1">Scope of Work</dt>
                    <dd className="text-muted-foreground">{active.scope}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-foreground mb-1">Materials Used</dt>
                    <dd className="text-muted-foreground">
                      Premium aluminium profiles, 12mm tempered glass, stainless steel hardware
                    </dd>
                  </div>
                  <div>
                    <dt className="font-bold text-foreground mb-1">Timeline</dt>
                    <dd className="text-muted-foreground">
                      6–10 weeks from measurement to handover
                    </dd>
                  </div>
                  <div>
                    <dt className="font-bold text-foreground mb-1">Client Feedback</dt>
                    <dd className="text-muted-foreground italic">
                      "Delivered ahead of schedule, exceptional craftsmanship."
                    </dd>
                  </div>
                </dl>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-24 bg-gradient-orange text-white text-center">
        <div className="container-x">
          <h2 className="font-display font-black text-3xl md:text-5xl mb-5">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-white/90 mb-8">Let's bring your vision to life.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-white text-orange-600 font-bold shadow-2xl hover:scale-105 transition"
          >
            Contact Our Team <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
