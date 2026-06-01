import { Link } from "react-router-dom";
import { Phone, Mail, Clock, Instagram, Facebook, Linkedin, MessageCircle } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-[#0a0f1a] text-white pt-20 pb-8 mt-20">
      <div className="container-x grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Column 1 – Logo & company info */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            {/* ✅ Logo image – replaced the orange square with your actual logo */}
            <img
              src="/logo/alufusion-logo.png"
              alt="867 ALUFUSION Logo"
              className="h-12 w-auto object-contain"
            />
            <div className="font-display font-extrabold text-xl">
              ALU<span className="text-gradient-orange">FUSION</span>
            </div>
          </div>
          <p className="text-orange-300 italic mb-4">"{t("footer_tagline")}"</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Premium aluminium and glass works company in Tanzania. Crafting architectural excellence since 2020.
          </p>
        </div>

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

        <div>
          <h4 className="font-display font-bold text-lg mb-5 text-white">Services</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li>Aluminium Works</li>
            <li>Glass Works</li>
            <li>Steel Fabrication</li>
            <li>Maintenance</li>
            <li>Custom Design</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-5 text-white">Get In Touch</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-orange-500" /> +255 778 959 501</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-orange-500" /> info@867alufusion.com</li>
            <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-orange-500" /> Mon–Fri 8am–6pm</li>
          </ul>
          <div className="mt-6">
            <p className="text-sm text-slate-300 mb-2">Subscribe for updates</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@email.com"
                className="flex-1 min-w-0 px-3 py-2 rounded-md bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500"
              />
              <button className="px-4 py-2 rounded-md bg-gradient-orange text-white text-sm font-semibold">Join</button>
            </form>
          </div>
          <div className="flex gap-3 mt-6">
            {[Instagram, Facebook, Linkedin, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 grid place-items-center rounded-full bg-white/5 hover:bg-gradient-orange transition">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container-x border-t border-white/10 pt-8 flex flex-col md:flex-row gap-3 items-center justify-between text-sm text-slate-500">
        <p>© {new Date().getFullYear()} 867 ALUFUSION LIMITED. {t("footer_rights")}</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-orange-400">Privacy Policy</a>
          <a href="#" className="hover:text-orange-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}