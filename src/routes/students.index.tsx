import { createFileRoute, Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { useLanguage } from "@/i18n/LanguageContext";
import { students, type Degree, type Student } from "@/data/students";
import { professors } from "@/data/professors";
import { personPhoto } from "@/data/personPhotos";

export const Route = createFileRoute("/students/")({
  head: () => ({
    meta: [
      { title: "Students — ACSL" },
      { name: "description", content: "Doctoral, master's, undergraduate researchers, and alumni of ACSL." },
      { property: "og:title", content: "Students — ACSL" },
      { property: "og:description", content: "Meet the students and alumni of ACSL." },
    ],
  }),
  component: StudentsPage,
});

function advisorNameFor(id: string) {
  return professors.find((p) => p.id === id)?.name.ko ?? "";
}

function StudentsPage() {
  const { t } = useLanguage();
  const hash = useRouterState({ select: (s) => s.location.hash });
  const [tab, setTab] = useState<Degree>("phd_s");

  useEffect(() => {
    if ((["phd_s", "ms_s", "ug", "alumni"] as const).includes(hash as Degree)) {
      setTab(hash as Degree);
    }
  }, [hash]);

  const tabs: { key: Degree; label: string }[] = [
    { key: "phd_s", label: t("students.tab.phd_s") },
    { key: "ms_s", label: t("students.tab.ms_s") },
    { key: "ug", label: t("students.tab.ug") },
    { key: "alumni", label: t("students.tab.alumni") },
  ];

  const rawList = students.filter((s) => s.degree === tab);
  const list =
    tab === "alumni"
      ? rawList
      : [...rawList].sort((a, b) =>
          (a.enrollmentDate ?? "9999-99").localeCompare(b.enrollmentDate ?? "9999-99")
        );

  return (
    <>
      <PageHeader title={t("students.title")} subtitle={t("students.subtitle")} />
      <div className="mx-auto max-w-5xl px-6 lg:px-10 py-16">
        <div className="flex flex-wrap gap-1 border-b border-border mb-8">
          {tabs.map((tb) => (
            <button
              key={tb.key}
              onClick={() => setTab(tb.key)}
              className={`px-4 py-3 text-sm font-semibold border-b-2 -mb-px transition ${
                tab === tb.key
                  ? "border-accent text-navy"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tb.label}
            </button>
          ))}
        </div>

        {list.length === 0 ? (
          <p className="text-sm text-muted-foreground">{t("students.empty")}</p>
        ) : tab === "alumni" ? (
          <AlumniList list={list} />
        ) : (
          <CurrentList list={list} />
        )}
      </div>
    </>
  );
}

function CurrentList({ list }: { list: Student[] }) {
  const { t } = useLanguage();
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {list.map((s) => (
        <li key={s.id}>
          <Link
            to="/students/$id"
            params={{ id: s.id }}
            className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:shadow-md hover:-translate-y-0.5 transition group"
          >
            <img
              src={personPhoto(s.id)}
              alt={s.name.ko}
              loading="lazy"
              width={56}
              height={56}
              className="w-14 h-14 rounded-full object-cover border border-border bg-muted shrink-0"
              style={{ objectPosition: "center 0%" }}
            />
            <div className="min-w-0">
              <p className="font-semibold text-navy group-hover:text-accent transition truncate">
                {s.name.ko}
                <span className="ml-1.5 text-xs font-normal text-muted-foreground">{s.name.en}</span>
              </p>
              <p className="text-xs text-foreground/60 mt-0.5 truncate">
                {t("students.advisor")}: {advisorNameFor(s.advisorId)}
              </p>
              {s.email && (
                <a
                  href={`mailto:${s.email}`}
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 text-xs text-accent hover:underline mt-0.5"
                >
                  <Mail size={11} /> {s.email}
                </a>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function AlumniList({ list }: { list: Student[] }) {
  const { t } = useLanguage();
  const byYear = list.reduce<Record<number, Student[]>>((acc, s) => {
    const y = s.graduationDate ? parseInt(s.graduationDate.slice(0, 4)) : 0;
    (acc[y] ??= []).push(s);
    return acc;
  }, {});
  const years = Object.keys(byYear).map(Number).sort((a, b) => b - a);
  for (const y of years) {
    byYear[y].sort((a, b) =>
      (b.graduationDate ?? "0000-00").localeCompare(a.graduationDate ?? "0000-00")
    );
  }

  return (
    <div className="space-y-10">
      {years.map((year) => (
        <section key={year}>
          <h2 className="text-xl font-bold text-navy mb-4">{year}</h2>
          <ul className="divide-y divide-border">
            {byYear[year].map((s) => (
              <li key={s.id} className="py-4">
                <Link to="/students/$id" params={{ id: s.id }} className="flex items-center gap-4 group">
                  <img
                    src={personPhoto(s.id)}
                    alt={s.name.ko}
                    loading="lazy"
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full object-cover border border-border bg-muted shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="font-semibold text-navy group-hover:text-accent transition">
                      {s.name.ko}
                      <span className="ml-1.5 text-xs font-normal text-muted-foreground">{s.name.en}</span>
                    </p>
                    {s.currentPosition && (
                      <p className="text-sm text-foreground/80 mt-0.5">{s.currentPosition}</p>
                    )}
                    <p className="text-xs text-foreground/60 mt-1">
                      {t("students.advisor")}: {advisorNameFor(s.advisorId)}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
