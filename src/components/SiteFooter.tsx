import { useLanguage } from "@/i18n/LanguageContext";

export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <div className="text-white text-lg font-bold">ACSL</div>
          <p className="mt-2 text-sm">{t("footer.tagline")}</p>
        </div>
        <div className="text-sm space-y-1">
          <p>{t("footer.department")}</p>
          <p>PHONE : 032-874-2177 &nbsp; &nbsp; FAX : 032-874-5646</p>
          <p className="text-white/50 mt-3">© {new Date().getFullYear()} ACSL. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
