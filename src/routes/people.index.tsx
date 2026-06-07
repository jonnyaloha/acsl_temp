import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { useLanguage } from "@/i18n/LanguageContext";
import { professors, type Professor } from "@/data/professors";

export const Route = createFileRoute("/people/")({
  head: () => ({
    meta: [
      { title: "People — ACSL" },
      { name: "description", content: "Faculty at ACSL." },
      { property: "og:title", content: "People — ACSL" },
      { property: "og:description", content: "Meet our faculty members." },
    ],
  }),
  component: PeoplePage,
});

function PeoplePage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader title={t("people.title")} subtitle={t("people.subtitle")} />
      <div className="mx-auto max-w-6xl px-6 lg:px-10 py-16">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {professors.map((prof) => (
            <ProfessorItem key={prof.id} prof={prof} />
          ))}
        </ul>
      </div>
    </>
  );
}

function ProfessorItem({ prof }: { prof: Professor }) {
  const [imgFailed, setImgFailed] = useState(false);
  const initials = prof.name.ko.replace(/교수님/, "").trim().charAt(0);

  return (
    <li>
      <Link
        to="/people/$id"
        params={{ id: prof.id }}
        className="block bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
      >
        <div className="w-32 h-32 rounded-full overflow-hidden bg-muted border border-border flex items-center justify-center">
          {imgFailed ? (
            <span className="text-3xl font-bold text-navy">{initials}</span>
          ) : (
            <img
              src={prof.photo}
              alt={prof.name.ko}
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 10%" }}
              onError={() => setImgFailed(true)}
            />
          )}
        </div>
        <h3 className="mt-4 text-lg font-bold text-navy">{prof.name.ko}</h3>
        <p className="text-xs text-muted-foreground">{prof.name.en}</p>
        <div className="mt-3 flex flex-wrap gap-1.5 justify-center">
          {prof.keywords.map((k) => (
            <span
              key={k}
              className="text-[11px] bg-muted text-foreground/80 border border-border px-2 py-0.5 rounded-full"
            >
              {k}
            </span>
          ))}
        </div>
      </Link>
    </li>
  );
}
