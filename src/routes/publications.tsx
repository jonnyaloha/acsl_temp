import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ExternalLink, Search } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { useLanguage } from "@/i18n/LanguageContext";
import { professors } from "@/data/professors";
import { publications, groupByKindThenYear, PUBLICATION_KIND_ORDER, PUBLICATION_KIND_LABEL } from "@/data/publications";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — ACSL" },
      { name: "description", content: "Selected publications from ACSL faculty." },
      { property: "og:title", content: "Publications — ACSL" },
      { property: "og:description", content: "Journal and conference publications from ACSL." },
    ],
  }),
  component: PublicationsPage,
});

function PublicationsPage() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<string>("all");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const filtered = publications
    .filter((p) => filter === "all" || p.authorIds.includes(filter))
    .filter((p) =>
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.authors.toLowerCase().includes(q) ||
      p.venue.toLowerCase().includes(q)
    );
  const grouped = groupByKindThenYear(filtered);

  return (
    <>
      <PageHeader title={t("publications.title")} subtitle={t("publications.subtitle")} />
      <div className="mx-auto max-w-5xl px-6 lg:px-10 py-16">
        <div className="relative mb-6">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            placeholder="제목, 저자, 학술지 검색..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-navy/30"
          />
        </div>
        <div className="flex flex-wrap gap-2 mb-10">
          <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>
            {t("publications.all")}
          </FilterChip>
          {professors.map((p) => (
            <FilterChip key={p.id} active={filter === p.id} onClick={() => setFilter(p.id)}>
              {p.name.ko}
            </FilterChip>
          ))}
        </div>

        <div className="space-y-16">
          {PUBLICATION_KIND_ORDER.map((kind) => {
            const byYear = grouped[kind];
            const years = Object.keys(byYear).map(Number).sort((a, b) => b - a);
            if (years.length === 0) return null;
            return (
              <section key={kind}>
                <h2 className="text-2xl font-bold text-navy mb-6 pb-2 border-b border-border">
                  {PUBLICATION_KIND_LABEL[kind]}
                </h2>
                <div className="space-y-10">
                  {years.map((year) => (
                    <div key={year}>
                      <h3 className="text-lg font-semibold text-navy/80 mb-4">{year}</h3>
                      <ul className="space-y-5">
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
        </div>
      </div>
    </>
  );
}

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition ${
        active
          ? "bg-navy text-white border-navy"
          : "bg-card text-foreground border-border hover:border-navy"
      }`}
    >
      {children}
    </button>
  );
}
