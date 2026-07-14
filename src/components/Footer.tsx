import { Link } from "react-router-dom";
import { Phone, Mail, Clock, Instagram, Facebook, Linkedin, MessageCircle } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    if (email && typeof email === "string") {
      // You can integrate with your email service here
      alert(`Thank you for subscribing with: ${email}`);
      e.currentTarget.reset();
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0a0f1a] text-white pt-20 pb-8 mt-20">
      <div className="container-x grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Column 1 – Logo & company info */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-5 hover:opacity-80 transition">
            <img
              src="/logo/alufusion-logo.png"
              alt="867 ALUFUSION LIMITED logo"
              className="h-12 w-auto object-contain"
              width="56"
              height="56"
            />
            <div className="flex flex-col leading-tight">
              <div className="font-display font-extrabold text-xl tracking-tight">
                <span className="text-white">867 </span>
                <span className="text-white">ALU</span>
                <span className="text-gradient-orange">FUSION</span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400">LIMITED</span>
            </div>
          </Link>
          <p className="text-orange-300 italic mb-4">"{t("footer_tagline")}"</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Premium aluminium and glass works company in Tanzania. Crafting architectural excellence
            since 2024.
          </p>
        </div>

        {/* Column 2 – Quick Links */}
        <div>
          <h4 className="font-display font-bold text-lg mb-5 text-white">Quick Links</h4>
          <ul className="space-y-3 text-slate-400">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/services", "Services"],
              ["/projects", "Projects"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-orange-400 transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 – Services with active links */}
        <div>
          <h4 className="font-display font-bold text-lg mb-5 text-white">Services</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li>
              <Link
                to="/services"
                onClick={() => scrollToSection("aluminium")}
                className="hover:text-orange-400 transition cursor-pointer"
              >
                Aluminium Works
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={() => scrollToSection("glass")}
                className="hover:text-orange-400 transition cursor-pointer"
              >
                Glass Works
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={() => scrollToSection("steel")}
                className="hover:text-orange-400 transition cursor-pointer"
              >
                Steel Fabrication
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={() => scrollToSection("maintenance")}
                className="hover:text-orange-400 transition cursor-pointer"
              >
                Maintenance
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={() => scrollToSection("design")}
                className="hover:text-orange-400 transition cursor-pointer"
              >
                Custom Design
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 – Contact & Social */}
        <div>
          <h4 className="font-display font-bold text-lg mb-5 text-white">Get In Touch</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-orange-500" />
              <a href="tel:+255778959501" className="hover:text-orange-400 transition">
                +255 778 959 501
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-orange-500" />
              <a href="mailto:info@867alufusion.com" className="hover:text-orange-400 transition">
                info@867alufusion.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-500" />
              <span>Mon–Fri 8am–6pm</span>
            </li>
          </ul>

          <div className="mt-6">
            <p className="text-sm text-slate-300 mb-2">Subscribe for updates</p>
            <form
              className="flex gap-2"
              onSubmit={handleSubscribe}
              aria-label="Newsletter subscribe"
            >
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                required
                aria-label="Email address"
                className="flex-1 min-w-0 px-3 py-2 rounded-md bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-gradient-orange text-white text-sm font-semibold hover:opacity-90 transition"
              >
                Join
              </button>
            </form>
          </div>

          <div className="flex gap-3 mt-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="w-9 h-9 grid place-items-center rounded-full bg-white/5 hover:bg-gradient-orange transition"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="w-9 h-9 grid place-items-center rounded-full bg-white/5 hover:bg-gradient-orange transition"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn"
              className="w-9 h-9 grid place-items-center rounded-full bg-white/5 hover:bg-gradient-orange transition"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/255778959501"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="w-9 h-9 grid place-items-center rounded-full bg-white/5 hover:bg-gradient-orange transition"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="container-x border-t border-white/10 pt-8 flex flex-col md:flex-row gap-3 items-center justify-between text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} 867 ALUFUSION LIMITED. {t("footer_rights")}
        </p>
        <div className="flex gap-6">
          <Link to="/contact" className="hover:text-orange-400 transition">
            Privacy Policy
          </Link>
          <Link to="/contact" className="hover:text-orange-400 transition">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
