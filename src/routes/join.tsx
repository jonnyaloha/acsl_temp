import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, Sparkles, Send, Mail } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join — ACSL" },
      { name: "description", content: "Join ACSL as a graduate student or undergraduate intern." },
      { property: "og:title", content: "Join — ACSL" },
      { property: "og:description", content: "Information for prospective students." },
    ],
  }),
  component: JoinPage,
});

const researchAreaKeys: TranslationKey[] = [
  "area.aerospace.title",
  "area.guidance.title",
  "area.simulation.title",
  "area.atm.title",
];

function JoinPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader title={t("join.title")} subtitle={t("join.subtitle")} />
      <div className="mx-auto max-w-5xl px-6 lg:px-10 pt-8 pb-20 space-y-16">
        <Section icon={<Users size={20} />} title={t("join.who.title")}>
          <p>{t("join.who.body")}</p>
        </Section>

        <Section icon={<Sparkles size={20} />} title={t("join.areas.title")}>
          <ul className="grid sm:grid-cols-2 gap-3 not-prose">
            {researchAreaKeys.map((k) => (
              <li key={k} className="bg-muted border border-border rounded-xl px-4 py-3 text-navy font-medium">
                {t(k)}
              </li>
            ))}
          </ul>
        </Section>

        <Section icon={<Send size={20} />} title={t("join.apply.title")}>
          <ol className="list-decimal pl-5 space-y-2">
            <li>{t("join.apply.step1")}</li>
            <li>{t("join.apply.step2")}</li>
            <li>{t("join.apply.step3")}</li>
            <li>{t("join.apply.step4")}</li>
          </ol>
        </Section>

        <Section icon={<Mail size={20} />} title={t("join.contactByProf")}>
          <ul className="divide-y divide-border not-prose">
            {["A", "B", "C", "D", "E"].map((p) => (
              <li key={p} className="py-3 flex justify-between items-center">
                <span className="font-medium text-navy">Prof. {p}</span>
                <a
                  href={`mailto:prof.${p.toLowerCase()}@acsl.example.edu`}
                  className="text-accent hover:underline text-sm"
                >
                  prof.{p.toLowerCase()}@acsl.example.edu
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <div className="bg-navy text-white rounded-2xl p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">{t("join.cta.title")}</h2>
          <p className="mt-3 text-white/75 max-w-xl mx-auto">{t("join.cta.body")}</p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 bg-white text-navy rounded-full px-7 py-3.5 font-semibold hover:bg-white/90 transition-all hover:gap-3"
          >
            {t("join.cta.button")} <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </>
  );
}

function Section({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent">
          {icon}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-navy">{title}</h2>
      </div>
      <div className="text-muted-foreground leading-relaxed text-base md:text-lg">{children}</div>
    </section>
  );
}
