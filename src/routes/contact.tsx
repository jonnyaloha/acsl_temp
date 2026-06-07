import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { useLanguage } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ACSL" },
      { name: "description", content: "Contact the Aerospace Control Systems Laboratory." },
      { property: "og:title", content: "Contact — ACSL" },
      { property: "og:description", content: "Reach out to ACSL." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader title={t("contact.title")} subtitle={t("contact.subtitle")} />
      <div className="mx-auto max-w-6xl px-6 lg:px-10 pt-8 pb-20 grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent">
                <MapPin size={18} />
              </span>
              <h2 className="text-xl font-bold text-navy">{t("contact.address.title")}</h2>
            </div>
            <address className="not-italic text-muted-foreground leading-relaxed whitespace-pre-line">
              {t("contact.address.body")}
            </address>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent">
                <Mail size={18} />
              </span>
              <h2 className="text-xl font-bold text-navy">{t("contact.general.title")}</h2>
            </div>
            <a href="mailto:contact@acsl.example.edu" className="text-accent hover:underline">
              contact@acsl.example.edu
            </a>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">{t("contact.faculty.title")}</h2>
            <ul className="divide-y divide-border bg-card border border-border rounded-2xl overflow-hidden">
              {["A", "B", "C", "D", "E"].map((p) => (
                <li key={p} className="px-5 py-3.5 flex justify-between items-center">
                  <span className="font-medium text-navy">Prof. {p}</span>
                  <a
                    href={`mailto:prof.${p.toLowerCase()}@acsl.example.edu`}
                    className="text-sm text-accent hover:underline"
                  >
                    prof.{p.toLowerCase()}@acsl.example.edu
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="aspect-[4/5] md:aspect-auto md:h-full min-h-[420px] rounded-2xl bg-muted border border-border overflow-hidden flex items-center justify-center text-muted-foreground">
            <div className="text-center px-6">
              <MapPin className="mx-auto mb-3 text-accent" size={28} />
              <p className="font-medium text-navy">{t("contact.map.title")}</p>
              <p className="text-sm mt-1">{t("contact.map.body")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
