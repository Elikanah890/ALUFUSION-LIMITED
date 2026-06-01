import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Lang } from "@/lib/translations";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string };
const LanguageContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (k) => k });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    return (localStorage.getItem("lang") as Lang) || "en";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string): string => {
    const dict = translations[lang] as Record<string, string>;
    return dict[key] ?? translations.en[key as keyof typeof translations.en] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: setLangState, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
