import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — ACSL" },
      { name: "description", content: "Research areas at ACSL: aerospace systems, guidance & control, modeling & simulation, and air traffic management." },
      { property: "og:title", content: "Research — ACSL" },
      { property: "og:description", content: "Our four research pillars." },
    ],
  }),
  component: ResearchPage,
});

const areas: {
  id: string;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  image: string;
  professors: string[];
}[] = [
  { id: "aerospace", titleKey: "area.aerospace.title", descKey: "area.aerospace.full", image: "/images/research-aerospace.jpg", professors: ["Prof. A", "Prof. C"] },
  { id: "guidance", titleKey: "area.guidance.title", descKey: "area.guidance.full", image: "/images/research-guidance.jpg", professors: ["Prof. B", "Prof. D"] },
  { id: "simulation", titleKey: "area.simulation.title", descKey: "area.simulation.full", image: "/images/research-simulation.jpg", professors: ["Prof. C", "Prof. E"] },
  { id: "atm", titleKey: "area.atm.title", descKey: "area.atm.full", image: "/images/research-atm.jpg", professors: ["Prof. A", "Prof. E"] },
];

function ResearchPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader title={t("research.title")} subtitle={t("research.subtitle")} />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-8 pb-20 space-y-24">
        {areas.map((a, i) => (
          <Reveal key={a.id}>
            <section
              id={a.id}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                i % 2 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="overflow-hidden rounded-2xl aspect-[4/3]">
                <img src={a.image} alt={t(a.titleKey)} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-accent font-semibold text-sm tracking-widest uppercase">0{i + 1}</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold text-navy tracking-tight">{t(a.titleKey)}</h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">{t(a.descKey)}</p>
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-foreground/60">
                    {t("research.relatedFaculty")}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {a.professors.map((p) => (
                      <span
                        key={p}
                        className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm text-navy border border-border"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </Reveal>
        ))}
      </div>
    </>
  );
}
