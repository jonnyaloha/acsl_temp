import { createContext, useContext, useEffect, type ReactNode } from "react";
import { translations, type TranslationKey } from "./translations";

type Ctx = {
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = "ko";
  }, []);

  const t = (key: TranslationKey): string => {
    return translations[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ t }}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
