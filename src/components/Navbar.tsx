import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Languages } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLang } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: t("nav_home") },
    { to: "/about", label: t("nav_about") },
    { to: "/services", label: t("nav_services") },
    { to: "/projects", label: t("nav_projects") },
    { to: "/contact", label: t("nav_contact") },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-2" : "py-4 bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between gap-4">
        {/* Logo area – UPDATED */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/logo/alufusion-logo.png"
            alt="867 ALUFUSION Logo"
            className="h-12 w-auto object-contain md:h-14"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-display font-extrabold text-xl md:text-2xl tracking-tight">
              <span className="text-foreground">867 </span>
              <span className="text-foreground">ALU</span>
              <span className="text-gradient-orange">FUSION</span>
            </span>
            <span className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground">
              LIMITED
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "sw" : "en")}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-muted transition"
          >
            <Languages className="w-4 h-4" />
            <span>{lang.toUpperCase()}</span>
          </button>
          <button
            onClick={toggle}
            className="p-2 rounded-md text-foreground/80 hover:text-primary hover:bg-muted transition"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-gradient-orange text-white font-semibold text-sm shadow-lg shadow-orange-500/30 hover:scale-105 transition-transform"
          >
            {t("cta_quote")}
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden glass border-t border-border"
          >
            <div className="container-x py-4 flex flex-col gap-1">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-md text-base font-medium ${
                      isActive ? "bg-muted text-primary" : "text-foreground/80"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <button
                onClick={() => setLang(lang === "en" ? "sw" : "en")}
                className="mt-2 px-4 py-3 rounded-md text-left text-base font-medium text-foreground/80 hover:bg-muted flex items-center gap-2"
              >
                <Languages className="w-4 h-4" /> Language: {lang.toUpperCase()}
              </button>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-md bg-gradient-orange text-white font-semibold"
              >
                {t("cta_quote")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}