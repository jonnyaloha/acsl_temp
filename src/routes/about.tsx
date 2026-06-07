import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { useLanguage } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ACSL" },
      { name: "description", content: "ACSL 연구실 소개 및 비전, 시설, 위치 안내." },
      { property: "og:title", content: "About — ACSL" },
      { property: "og:description", content: "ACSL 연구실 소개 및 비전, 시설, 위치 안내." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader title={t("about.title")} subtitle={t("about.subtitle")} />

      <section id="intro" className="scroll-mt-24 pt-8 pb-20 border-b border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 space-y-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
              {t("about.tab.intro")}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">{t("about.mission.title")}</h2>
            <p className="text-foreground/80 leading-relaxed whitespace-pre-line">{t("about.mission.body")}</p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">{t("about.overview.title")}</h2>
            <p className="text-foreground/80 leading-relaxed whitespace-pre-line">{t("about.overview.body")}</p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">{t("about.collaborators.title")}</h2>
            <p className="text-foreground/80 leading-relaxed whitespace-pre-line">{t("about.collaborators.body")}</p>
          </div>
        </div>
      </section>

      <section id="facilities" className="scroll-mt-24 py-20 bg-muted/30 border-b border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
            {t("about.tab.facilities")}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">{t("about.facilities.title")}</h2>
          <p className="text-foreground/80 leading-relaxed whitespace-pre-line">{t("about.facilities.body")}</p>
        </div>
      </section>

      <section id="location" className="scroll-mt-24 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 space-y-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
              {t("about.tab.location")}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">{t("about.location.title")}</h2>
            <p className="text-foreground/80 leading-relaxed whitespace-pre-line">{t("about.location.body")}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-navy mb-3">{t("contact.map.title")}</h3>
            <div className="rounded-2xl border border-border bg-muted aspect-video flex items-center justify-center">
              <p className="text-muted-foreground text-sm">{t("contact.map.body")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
