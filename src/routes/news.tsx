import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "Board — ACSL" },
      { name: "description", content: "Latest news, awards, events, publications, and lab life at ACSL." },
      { property: "og:title", content: "Board — ACSL" },
      { property: "og:description", content: "Stay updated with the lab." },
    ],
  }),
  component: NewsPage,
});

type CatId = "all" | "lab" | "awards" | "events" | "publications" | "life";
const categories: { id: CatId; key: TranslationKey }[] = [
  { id: "all", key: "news.cat.all" },
  { id: "lab", key: "news.cat.lab" },
  { id: "awards", key: "news.cat.awards" },
  { id: "events", key: "news.cat.events" },
  { id: "publications", key: "news.cat.publications" },
  { id: "life", key: "news.cat.life" },
];

type NewsItem = {
  category: Exclude<CatId, "all">;
  title: string;
  date: string;
  description: string;
  image?: string;
};

const items: NewsItem[] = [
  {
    category: "awards",
    title: "AIAA SciTech 2026 최우수 학생 논문상 수상",
    date: "2026-01-15",
    description: "본 연구실 박사과정 학생이 강인 UAV 유도 연구로 최우수 학생 논문상을 수상했습니다.",
    image: "/images/research-guidance.jpg",
  },
  {
    category: "publications",
    title: "Journal of Guidance, Control, and Dynamics 논문 게재 확정",
    date: "2025-12-04",
    description: "모델 불확실성 하의 적응형 궤적 최적화에 대한 새로운 접근법.",
  },
  {
    category: "events",
    title: "2025 ACSL 오픈랩 데이",
    date: "2025-10-22",
    description: "지원 희망 학생들이 연구실을 방문해 비행 시뮬레이터를 체험했습니다.",
    image: "/images/research-simulation.jpg",
  },
  {
    category: "lab",
    title: "신규 대학원생 환영",
    date: "2025-09-01",
    description: "이번 학기 세 명의 신규 대학원생이 ACSL에 합류했습니다.",
  },
  {
    category: "life",
    title: "여름 워크숍 (해변)",
    date: "2025-07-18",
    description: "연례 연구실 워크숍에서 모두 모여 연구 토론과 휴식을 함께했습니다.",
  },
  {
    category: "publications",
    title: "Aerospace Science & Technology 표지 논문 게재",
    date: "2025-06-09",
    description: "차세대 궤적 기반 운용에 관한 표지 논문.",
    image: "/images/research-atm.jpg",
  },
];

const ITEMS_PER_PAGE = 6;

function NewsPage() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<CatId>("all");
  const [page, setPage] = useState(1);

  const filtered = filter === "all" ? items : items.filter((i) => i.category === filter);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const startIdx = (safePage - 1) * ITEMS_PER_PAGE;
  const pagedItems = filtered.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const handleFilter = (id: CatId) => {
    setFilter(id);
    setPage(1);
  };

  const catLabel = (id: CatId): string => {
    const c = categories.find((x) => x.id === id)!;
    return t(c.key);
  };

  return (
    <>
      <PageHeader title={t("news.title")} subtitle={t("news.subtitle")} />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-8 pb-20">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => handleFilter(c.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                filter === c.id ? "bg-navy text-white" : "bg-muted text-foreground hover:bg-border"
              }`}
            >
              {t(c.key)}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {pagedItems.map((n) => (
            <NewsCard key={n.title} item={n} catLabel={catLabel(n.category)} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-10">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={safePage === 1}
              className="px-3 py-1.5 rounded-md text-sm border border-border bg-card hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              ←
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`min-w-[2rem] px-2 py-1.5 rounded-md text-sm font-medium transition ${
                  safePage === p
                    ? "bg-navy text-white"
                    : "border border-border bg-card hover:bg-muted"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={safePage === totalPages}
              className="px-3 py-1.5 rounded-md text-sm border border-border bg-card hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              →
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function NewsCard({ item, catLabel }: { item: NewsItem; catLabel: string }) {
  return (
    <article className="bg-card border border-border rounded-xl overflow-hidden flex flex-row hover:shadow-md hover:-translate-y-0.5 transition">
      <div className="w-28 sm:w-36 md:w-44 shrink-0 bg-muted overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover aspect-square"
          />
        ) : (
          <div className="w-full h-full aspect-square" />
        )}
      </div>
      <div className="p-4 sm:p-5 flex-1 flex flex-col min-w-0">
        <div className="flex items-center gap-3 text-xs">
          <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full font-semibold">{catLabel}</span>
          <time className="text-muted-foreground">{item.date}</time>
        </div>
        <h3 className="mt-2 font-bold text-navy leading-snug text-base">{item.title}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground flex-1 line-clamp-2">{item.description}</p>
      </div>
    </article>
  );
}
