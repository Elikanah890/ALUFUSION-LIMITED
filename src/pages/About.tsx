import { motion } from "framer-motion";
import { Eye, Target, Shield, Award, Lightbulb, Heart, CheckCircle2, Users } from "lucide-react";
import { SectionHeading } from "./Home";

const values = [
  { icon: Award, title: "Quality", desc: "Premium materials and craftsmanship in every project." },
  { icon: Shield, title: "Integrity", desc: "Honest dealings and transparent communication." },
  { icon: Lightbulb, title: "Innovation", desc: "Modern techniques and creative solutions." },
  { icon: Heart, title: "Customer Focus", desc: "Your vision is at the center of everything we do." },
  { icon: CheckCircle2, title: "Reliability", desc: "On-time delivery and dependable service." },
  { icon: Shield, title: "Safety", desc: "Strict adherence to safety standards and codes." },
];

const objectives = [
  { title: "Deliver Architectural Excellence", desc: "Set the benchmark for aluminium and glass installations across Tanzania through precision craftsmanship and innovative design." },
  { title: "Build Lasting Client Relationships", desc: "Earn long-term trust by exceeding expectations on quality, timeline, and post-installation support." },
  { title: "Lead in Safety & Sustainability", desc: "Champion responsible building practices, modern safety protocols, and energy-efficient material choices." },
];

const team = [
  { name: "Managing Director", role: "Strategic Leadership", img: "/team/alufusion-team-1.png" },
  { name: "Head of Operations", role: "Project Delivery", img: "/team/alufusion-team-2.png" },
  { name: "Lead Engineer", role: "Technical Design", img: "/team/alufusion-team-1.png" },
];

export default function About() {
  return (
    <div className="bg-background">
      <PageHeader
        title="About 867 ALUFUSION LIMITED"
        sub="Crafting architectural excellence across Tanzania"
        img="/images/hd.jpeg"
      />

      {/* Our Story */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-orange-500 font-semibold uppercase tracking-widest text-sm">Our Journey</span>
            <h2 className="font-display font-black text-4xl md:text-5xl mt-3 mb-6">Building Tanzania's Future, One Project at a Time</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-5">
              Founded in 2020, 867 ALUFUSION LIMITED has grown into a trusted partner for architects, developers, contractors, and homeowners across Tanzania.
              We specialize in the design, fabrication, and installation of high-quality aluminium and glass solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team combines years of technical expertise with a commitment to safety, sustainability, and customer satisfaction. From a single residential window to a full commercial curtain wall, every project receives the same attention to detail.
            </p>
          </div>
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src="/service/customer.jpeg"
            alt="Team at work"
            className="rounded-2xl shadow-2xl w-full aspect-square object-cover"
          />
        </div>
      </section>

      {/* Vision Mission */}
      <section className="py-24 bg-muted/40">
        <div className="container-x grid md:grid-cols-2 gap-8">
          {[
            { icon: Eye, title: "Our Vision", text: "To be Tanzania's most trusted name in aluminium and glass works — recognized for innovation, craftsmanship, and uncompromising quality across East Africa." },
            { icon: Target, title: "Our Mission", text: "To deliver superior aluminium and glass solutions that transform architectural visions into lasting realities, through skilled craftsmanship, premium materials, and exceptional service." },
          ].map((c) => (
            <div key={c.title} className="bg-card border border-border rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-orange" />
              <div className="w-14 h-14 rounded-xl bg-gradient-orange grid place-items-center mb-6">
                <c.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display font-black text-3xl mb-4">{c.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Core values" title="What We Stand For" sub="The principles that guide every decision and every installation" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {values.map((v) => (
              <div key={v.title} className="p-8 rounded-2xl bg-card border border-border text-center hover:border-orange-500/50 hover:-translate-y-1 transition">
                <div className="w-20 h-20 rounded-full bg-gradient-orange-soft border border-orange-500/30 grid place-items-center mx-auto mb-5">
                  <v.icon className="w-9 h-9 text-orange-500" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{v.title}</h3>
                <p className="text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-24 bg-muted/40">
        <div className="container-x">
          <SectionHeading eyebrow="Strategic objectives" title="Where We're Headed" sub="Our roadmap for sustained excellence" />
          <div className="space-y-5 mt-16 max-w-4xl mx-auto">
            {objectives.map((o, i) => (
              <div key={o.title} className="p-8 rounded-2xl bg-card border border-border flex gap-6">
                <div className="shrink-0 w-14 h-14 rounded-full bg-gradient-orange grid place-items-center font-display font-black text-white text-xl">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">{o.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-24 bg-gradient-orange text-white">
        <div className="container-x text-center max-w-4xl mx-auto">
          <span className="uppercase tracking-widest text-sm font-bold opacity-80">Our Commitment</span>
          <p className="font-display font-bold text-3xl md:text-5xl leading-tight mt-5">
            "Every project is executed with attention to detail to ensure durability, safety, and aesthetic excellence."
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Leadership" title="Meet Our Team" sub="Experienced professionals dedicated to your vision" />
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {team.map((m) => (
              <div key={m.name} className="rounded-2xl overflow-hidden bg-card border border-border group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={m.img} alt={m.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display font-bold text-xl">{m.name}</h3>
                  <p className="text-orange-500 font-semibold text-sm mt-1">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-muted/40">
        <div className="container-x text-center">
          <SectionHeading eyebrow="Clients" title="Industries We Serve" sub="Trusted across sectors throughout Tanzania" />
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {["Residential", "Commercial", "Industrial", "Hospitality", "Healthcare", "Education", "Government"].map((c) => (
              <span key={c} className="px-6 py-3 rounded-full bg-card border border-border font-semibold text-foreground hover:border-orange-500/50 hover:text-orange-500 transition">
                <Users className="w-4 h-4 inline-block mr-2 -mt-0.5" />
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function PageHeader({ title, sub, img }: { title: string; sub: string; img: string }) {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${img})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/85 via-[#0a0f1a]/75 to-[#0a0f1a]/85" />
      <div className="container-x relative z-10 text-center text-white">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display font-black text-4xl md:text-6xl lg:text-7xl mb-5">
          {title}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
          {sub}
        </motion.p>
      </div>
    </section>
  );
}