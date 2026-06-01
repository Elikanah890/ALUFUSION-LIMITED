import { CheckCircle2, Download } from "lucide-react";
import { PageHeader } from "./About";
import { motion } from "framer-motion";

const services = [
  {
    title: "Aluminium Works",
    img: "/service/alluminium.jpeg",
    desc: "Premium aluminium fabrication and installation tailored to your architectural needs. Built to last, designed to impress.",
    items: ["Sliding Windows", "Casement Windows", "Top-Hung Windows", "Aluminium Doors", "Shop Front Systems", "Office Partitions", "Curtain Wall Systems", "Aluminium Cladding", "Louvers", "Canopies", "Skylights"],
  },
  {
    title: "Glass Works",
    img: "/service/glasswork.jpeg",
    desc: "Modern glass solutions that bring light, transparency, and elegance to every space.",
    items: ["Frameless Glass Partitions", "Tempered Glass Installations", "Glass Doors", "Shower Cubicles", "Glass Railings", "Mirrors", "Glass Balustrades", "Structural Glazing", "Glass Facades", "Display Units"],
  },
  {
    title: "Steel Works & Metal Fabrication",
    img: "/service/steel and metal.jpeg",
    desc: "Robust steel and metal fabrication for security, structure, and custom architectural elements.",
    items: ["Steel Structures", "Gates & Grills", "Steel Doors & Windows", "Roofing Structures", "Tanks & Frames", "Custom Metal Products"],
  },
  {
    title: "Maintenance Services",
    img: "/service/maintainess.jpeg",
    desc: "Keep your installations in pristine condition with our preventive maintenance and rapid response repair services.",
    items: ["Aluminium & Glass Repairs", "Replacement of Damaged Glass", "Door & Window Maintenance", "Hardware Replacement", "Preventive Maintenance Contracts"],
  },
  {
    title: "Custom Design & Consultancy",
    img: "/service/customer.jpeg",
    desc: "From feasibility study to final drawings, our consultancy ensures the right solution before a single profile is cut.",
    items: ["Site Assessment & Measurements", "Technical Advice", "Drawings & Specifications", "Feasibility Assessments"],
  },
  {
    title: "Supply of Materials",
    img: "/service/supply.jpeg",
    desc: "Source premium aluminium profiles, glass panels, and hardware from our trusted supply chain.",
    items: ["Aluminium Profiles", "Glass Panels", "Accessories & Fittings", "Steel & Metal Materials"],
  },
  {
    title: "Installation & Project Management",
    img: "/service/installation-project-management.jpeg",
    desc: "End-to-end project leadership — coordinated, scheduled, and delivered on time, every time.",
    items: ["On-site Installation", "Coordination with Contractors", "Timeline Adherence", "Safety Compliance"],
  },
  {
    title: "Health & Safety Compliance",
    img: "/service/health-safety-compliance.jpeg",
    desc: "Every job site is run to the highest safety standards and in full compliance with local building codes.",
    items: ["Safety Measures & PPE", "Local Building Code Compliance", "Risk Assessments", "Compliance Documentation"],
  },
];

const handleDownloadPDF = async () => {
  const pdfUrl = '/brochure.pdf';
  try {
    const response = await fetch(pdfUrl, { method: 'HEAD' });
    if (response.ok) {
      // File exists – trigger download
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = '867_ALUFUSION_Service_Brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert('Brochure PDF not available yet. Please contact us for more information.');
    }
  } catch {
    alert('Brochure PDF not available yet. Please contact us for more information.');
  }
};

export default function Services() {
  return (
    <div className="bg-background">
      <PageHeader
        title="Our Comprehensive Services"
        sub="End-to-end solutions from design to installation"
        img="/images/hd.jpeg"
      />

      <section className="py-24 md:py-32">
        <div className="container-x space-y-24">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="relative">
                <img src={s.img} alt={s.title} loading="lazy" className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover" />
                <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-gradient-orange text-white font-bold text-sm">
                  0{i + 1} / 0{services.length}
                </div>
              </div>
              <div>
                <h2 className="font-display font-black text-3xl md:text-4xl mb-5">{s.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">{s.desc}</p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-orange text-white text-center">
        <div className="container-x">
          <h2 className="font-display font-black text-3xl md:text-4xl mb-4">Want all of this in one PDF?</h2>
          <p className="text-lg text-white/90 mb-8">Download our full service brochure and pricing guide.</p>
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-white text-orange-600 font-bold shadow-2xl hover:scale-105 transition"
          >
            <Download className="w-5 h-5" /> Download Brochure (PDF)
          </button>
        </div>
      </section>
    </div>
  );
}