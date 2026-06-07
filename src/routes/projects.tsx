import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { useLanguage } from "@/i18n/LanguageContext";
import { projects, type Project } from "@/data/projects";
import { professors } from "@/data/professors";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — ACSL" },
      { name: "description", content: "Ongoing and completed research projects at ACSL." },
      { property: "og:title", content: "Projects — ACSL" },
      { property: "og:description", content: "Our research projects and collaborations." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader title={t("projects.title")} subtitle={t("projects.subtitle")} />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-8 pb-20 space-y-16">
        <ProjectGroup title={t("projects.ongoing")} items={projects.filter((p) => !p.done)} accent />
        <ProjectGroup title={t("projects.completed")} items={projects.filter((p) => p.done)} />
      </div>
    </>
  );
}

function ProjectGroup({ title, items, accent }: { title: string; items: Project[]; accent?: boolean }) {
  const { t } = useLanguage();
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8 flex items-center gap-3">
        {accent && <span className="inline-block w-2 h-2 rounded-full bg-accent" />}
        {title}
      </h2>
      <div className="grid md:grid-cols-2 gap-5">
        {items.map((p) => (
          <article
            key={p.title}
            className="bg-card border border-border rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5 transition"
          >
            <div className="flex items-start justify-between gap-8">
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-accent uppercase tracking-widest">{p.period}</p>
                <h3 className="mt-1.5 text-lg font-bold text-navy leading-snug">{p.title}</h3>
              </div>
              <dl className="text-sm space-y-1 text-right shrink-0">
                <div>
                  <dt className="text-foreground/60">{t("projects.funder")}</dt>
                  <dd className="text-foreground">{p.funder}</dd>
                </div>
                <div>
                  <dt className="text-foreground/60">{t("projects.pis")}</dt>
                  <dd className="text-foreground flex flex-wrap gap-x-2 gap-y-1 justify-end">
                    {p.pis.map((id, i) => {
                      const prof = professors.find((pr) => pr.id === id);
                      return prof ? (
                        <Link
                          key={id}
                          to="/people/$id"
                          params={{ id }}
                          className="hover:text-accent hover:underline transition"
                        >
                          {prof.name.ko}{i < p.pis.length - 1 ? "," : ""}
                        </Link>
                      ) : (
                        <span key={id}>{id}{i < p.pis.length - 1 ? "," : ""}</span>
                      );
                    })}
                  </dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
