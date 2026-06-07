import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, ArrowLeft, ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { getProfessor } from "@/data/professors";
import { students as allStudents } from "@/data/students";
import { publicationsByProfessor, groupByKindThenYear, PUBLICATION_KIND_ORDER, PUBLICATION_KIND_LABEL } from "@/data/publications";
import { projectsByProfessor } from "@/data/projects";
import { personPhoto } from "@/data/personPhotos";

export const Route = createFileRoute("/people/$id")({
  loader: ({ params }) => {
    const prof = getProfessor(params.id);
    if (!prof) throw notFound();
    return { prof };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.prof.name.ko ?? "Faculty";
    return {
      meta: [
        { title: `${name} — ACSL` },
        { name: "description", content: loaderData?.prof.bio ?? "ACSL faculty profile." },
        { property: "og:title", content: `${name} — ACSL` },
        { property: "og:description", content: loaderData?.prof.bio ?? "ACSL faculty profile." },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="pt-32 pb-20 text-center">
      <p className="text-muted-foreground">Not found.</p>
      <Link to="/people" className="text-accent hover:underline">Back to People</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="pt-32 pb-20 text-center">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ProfessorDetailPage,
});

type TabKey = "bio" | "projects" | "students" | "books" | "publications" | "patent";

function ProfessorDetailPage() {
  const { prof } = Route.useLoaderData();
  const { t } = useLanguage();
  const [imgFailed, setImgFailed] = useState(false);
  const [tab, setTab] = useState<TabKey>("bio");
  const initials = prof.name.ko.replace(/교수님/, "").trim().charAt(0);
  const students = allStudents.filter((s) => s.advisorId === prof.id && s.degree !== "alumni");
  const pubs = publicationsByProfessor(prof.id);
  const pubsGrouped = groupByKindThenYear(pubs);
  const { ongoing: ongoingProjs, completed: completedProjs } = projectsByProfessor(prof.id);

  const tabs: { key: TabKey; label: string }[] = [
    { key: "bio", label: t("people.detail.bio") },
    { key: "projects", label: t("people.detail.projects") },
    { key: "students", label: t("people.detail.students") },
    { key: "books", label: t("people.detail.books") },
    { key: "publications", label: t("people.detail.publications") },
    { key: "patent", label: t("people.detail.patent") },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Link
          to="/people"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy mb-8"
        >
          <ArrowLeft size={14} /> {t("people.back")}
        </Link>

        <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
          <div className="flex flex-col items-center md:items-start">
            <div className="w-48 h-48 rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              {imgFailed ? (
                <span className="text-5xl font-bold text-navy">{initials}</span>
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
            <div className="mt-5 space-y-2 text-sm w-full">
              <a href={`mailto:${prof.email}`} className="flex items-center gap-2 text-navy hover:underline">
                <Mail size={14} /> {prof.email}
              </a>
              <p className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={14} /> {prof.office}
              </p>
            </div>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-navy">{prof.name.ko}</h1>
            <p className="text-lg text-muted-foreground">{prof.name.en}</p>
            <p className="mt-1 text-sm text-muted-foreground">{prof.title}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {prof.keywords.map((k) => (
                <span key={k} className="text-xs bg-muted text-foreground/80 border border-border px-3 py-1 rounded-full">
                  {k}
                </span>
              ))}
            </div>

            <div className="mt-8 flex gap-1 border-b border-border">
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

            <div className="mt-6">
              {tab === "bio" && (
                <p className="text-foreground/80 leading-relaxed">{prof.bio}</p>
              )}

              {tab === "projects" && (
                <div className="space-y-10">
                  {ongoingProjs.length === 0 && completedProjs.length === 0 && (
                    <p className="text-sm text-muted-foreground">—</p>
                  )}
                  {ongoingProjs.length > 0 && (
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">진행 중인 과제</h3>
                      <ul className="space-y-4">
                        {ongoingProjs.map((p) => (
                          <li key={p.title} className="border-l-2 border-accent pl-4 py-1">
                            <p className="text-xs font-semibold text-accent">{p.period}</p>
                            <div className="flex items-baseline gap-2 mt-0.5 flex-wrap">
                              <p className="font-semibold text-navy leading-snug">{p.title}</p>
                              <span className="text-sm text-muted-foreground shrink-0">{p.funder}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {completedProjs.length > 0 && (
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">완료된 과제</h3>
                      <ul className="space-y-4">
                        {completedProjs.map((p) => (
                          <li key={p.title} className="border-l-2 border-border pl-4 py-1">
                            <p className="text-xs font-semibold text-muted-foreground">{p.period}</p>
                            <div className="flex items-baseline gap-2 mt-0.5 flex-wrap">
                              <p className="font-semibold text-navy leading-snug">{p.title}</p>
                              <span className="text-sm text-muted-foreground shrink-0">{p.funder}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {tab === "books" && (
                <p className="text-sm text-muted-foreground">{t("people.detail.noBooks")}</p>
              )}

              {tab === "patent" && (
                <p className="text-sm text-muted-foreground">{t("people.detail.noPatents")}</p>
              )}

              {tab === "students" && (
                <div className="space-y-8">
                  {(["phd_s", "ms_s", "ug"] as const).map((deg) => {
                    const list = students.filter((s) => s.degree === deg);
                    if (list.length === 0) return null;
                    const label =
                      deg === "phd_s"
                        ? t("people.group.phd")
                        : deg === "ms_s"
                        ? t("people.group.ms")
                        : t("people.group.undergrad");
                    return (
                      <div key={deg}>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-3">{label}</h3>
                        <ul className="divide-y divide-border">
                          {list.map((s) => (
                            <li key={s.id} className="py-3 flex flex-wrap items-center justify-between gap-3">
                              <Link
                                to="/students/$id"
                                params={{ id: s.id }}
                                className="group flex items-center gap-3 min-w-0"
                              >
                                <img
                                  src={personPhoto(s.id)}
                                  alt={s.name.ko}
                                  loading="lazy"
                                  width={40}
                                  height={40}
                                  className="w-10 h-10 rounded-full object-cover border border-border bg-muted shrink-0"
                                  style={{ objectPosition: "center 0%" }}
                                />
                                <div className="min-w-0">
                                  <div className="flex flex-wrap items-center gap-2">
                                    <p className="font-semibold text-navy group-hover:text-accent transition">{s.name.ko}</p>
                                    <p className="text-xs text-muted-foreground">{s.name.en}</p>
                                    {s.keywords.map((k) => (
                                      <span key={k} className="text-[11px] bg-muted text-foreground/80 border border-border px-2 py-0.5 rounded-full">
                                        {k}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </Link>
                              {s.email && (
                                <a href={`mailto:${s.email}`} className="text-xs text-accent hover:underline">
                                  {s.email}
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                  {students.length === 0 && (
                    <p className="text-sm text-muted-foreground">—</p>
                  )}
                </div>
              )}

              {tab === "publications" && (
                <div className="space-y-12">
                  {PUBLICATION_KIND_ORDER.map((kind) => {
                    const byYear = pubsGrouped[kind];
                    const years = Object.keys(byYear).map(Number).sort((a, b) => b - a);
                    if (years.length === 0) return null;
                    return (
                      <section key={kind}>
                        <h3 className="text-lg font-bold text-navy mb-4 pb-2 border-b border-border">
                          {PUBLICATION_KIND_LABEL[kind]}
                        </h3>
                        <div className="space-y-6">
                          {years.map((year) => (
                            <div key={year}>
                              <h4 className="text-sm font-semibold text-navy/70 mb-3">{year}</h4>
                              <ul className="space-y-4">
                                {byYear[year].map((p, i) => (
                                  <li key={i} className="flex items-start gap-4 border-l-2 border-accent pl-4 py-2">
                                    <div className="flex-1 min-w-0">
                                      <p className="font-semibold text-navy leading-snug">{p.title}</p>
                                      <p className="text-sm text-muted-foreground mt-1">
                                        {p.authors} · <span className="italic">{p.venue}, {p.year}</span>
                                      </p>
                                    </div>
                                    {(p.doi || p.link) && (
                                      <div className="shrink-0 self-center">
                                        <a
                                          href={p.doi ? `https://doi.org/${p.doi}` : p.link!}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="inline-flex items-center gap-1 text-xs bg-muted hover:bg-border px-3 py-1.5 rounded-full"
                                        >
                                          <ExternalLink size={12} /> {p.doi ? "DOI" : "Link"}
                                        </a>
                                      </div>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </section>
                    );
                  })}
                  {pubs.length === 0 && <p className="text-sm text-muted-foreground">—</p>}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
