import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, ArrowLeft, ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { students } from "@/data/students";
import { getProfessor } from "@/data/professors";
import { personPhoto } from "@/data/personPhotos";
import { publicationsByAuthorId } from "@/data/publications";

export const Route = createFileRoute("/students/$id")({
  loader: ({ params }) => {
    const student = students.find((s) => s.id === params.id);
    if (!student) throw notFound();
    const advisor = getProfessor(student.advisorId);
    return { student, advisor };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.student.name.ko ?? "Student";
    return {
      meta: [
        { title: `${name} — ACSL` },
        { property: "og:title", content: `${name} — ACSL` },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="pt-32 pb-20 text-center">
      <p className="text-muted-foreground">Not found.</p>
      <Link to="/students" className="text-accent hover:underline">Back to Students</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="pt-32 pb-20 text-center">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: StudentDetailPage,
});

function StudentDetailPage() {
  const { student, advisor } = Route.useLoaderData();
  const { t } = useLanguage();
  const [imgFailed, setImgFailed] = useState(false);
  const [tab, setTab] = useState<"publications" | "patent">("publications");
  const initials = student.name.ko.trim().charAt(0);
  const pubs = publicationsByAuthorId(student.id);

  const degreeLabel =
    student.degree === "phd_s"
      ? t("students.tab.phd_s")
      : student.degree === "ms_s"
      ? t("students.tab.ms_s")
      : student.degree === "ug"
      ? t("students.tab.ug")
      : t("students.tab.alumni");

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Link
          to="/students"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy mb-8"
        >
          <ArrowLeft size={14} /> {t("students.back")}
        </Link>

        <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
          <div className="flex flex-col items-center md:items-start">
            <div className="w-48 h-48 rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              {imgFailed ? (
                <span className="text-5xl font-bold text-navy">{initials}</span>
              ) : (
                <img
                  src={personPhoto(student.id)}
                  alt={student.name.ko}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 0%" }}
                  onError={() => setImgFailed(true)}
                />
              )}
            </div>
            <div className="mt-5 space-y-2 text-sm w-full">
              {student.email && (
                <a href={`mailto:${student.email}`} className="flex items-center gap-2 text-navy hover:underline">
                  <Mail size={14} /> {student.email}
                </a>
              )}
              {student.enrollmentDate && (
                <div className="pt-3 mt-3 border-t border-border">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{t("students.detail.enrolled")}</p>
                  <p className="mt-1 font-semibold text-navy">{student.enrollmentDate}</p>
                </div>
              )}
              {student.graduationDate && (
                <div className="pt-3 mt-3 border-t border-border">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{t("students.detail.graduated")}</p>
                  <p className="mt-1 font-semibold text-navy">{student.graduationDate}</p>
                </div>
              )}
              {advisor && (
                <Link
                  to="/people/$id"
                  params={{ id: advisor.id }}
                  className="block pt-3 mt-3 border-t border-border"
                >
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{t("students.detail.advisor")}</p>
                  <p className="mt-1 font-semibold text-navy hover:text-accent transition">{advisor.name.ko}</p>
                </Link>
              )}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">{degreeLabel}</p>
            <h1 className="mt-2 text-3xl md:text-4xl font-bold text-navy">{student.name.ko}</h1>
            <p className="text-lg text-muted-foreground">{student.name.en}</p>

            {student.degree === "alumni" && student.currentPosition && (
              <p className="mt-4 text-sm text-foreground/80">
                {t("students.detail.currentPosition")}: {student.currentPosition}
                {student.graduationDate && ` · ${t("students.detail.graduated")} ${student.graduationDate}`}
              </p>
            )}

            <div className="mt-8 flex gap-1 border-b border-border">
              {([
                { key: "publications" as const, label: t("students.detail.publications") },
                { key: "patent" as const, label: t("students.detail.patent") },
              ]).map((tb) => (
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
              {tab === "patent" ? (
                <p className="text-sm text-muted-foreground">{t("students.detail.noPatents")}</p>
              ) : pubs.length === 0 ? (
                <p className="text-sm text-muted-foreground">{t("students.detail.noPubs")}</p>
              ) : (
                <ul className="space-y-5">
                  {pubs.map((p, i) => (
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
