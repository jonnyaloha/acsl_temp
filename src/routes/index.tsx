import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, FlaskConical, BookOpen } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { publications } from "@/data/publications";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ACSL — Aerospace Control Systems Laboratory" },
      {
        name: "description",
        content: "ACSL explores aerospace systems, guidance & control, modeling & simulation, and air traffic management.",
      },
      { property: "og:title", content: "ACSL — Aerospace Control Systems Laboratory" },
      { property: "og:description", content: "Aerospace research lab — systems, control, simulation, ATM." },
      { property: "og:image", content: "/images/hero-poster.jpg" },
    ],
  }),
  component: Index,
});

const slides = [
  "/images/hero-poster.jpg",
  "/images/research-aerospace.jpg",
  "/images/research-guidance.jpg",
  "/images/research-simulation.jpg",
  "/images/research-atm.jpg",
];

type FeedItem = { tag: string; title: string; meta: string; to: "/publications" | "/projects" | "/news" };

const feed: FeedItem[] = [
  ...publications
    .slice()
    .sort((a, b) => b.year - a.year)
    .slice(0, 6)
    .map((p) => ({ tag: "Publication", title: p.title, meta: `${p.venue} · ${p.year}`, to: "/publications" as const })),
  ...projects
    .filter((p) => !p.done)
    .slice(0, 4)
    .map((p) => ({ tag: "Project", title: p.title, meta: p.funder, to: "/projects" as const })),
  { tag: "Board", title: "AIAA SciTech 2026 최우수 학생 논문상 수상", meta: "2026.01.15", to: "/news" as const },
  { tag: "Board", title: "Journal of Guidance, Control, and Dynamics 논문 게재 확정", meta: "2025.12.04", to: "/news" as const },
  { tag: "Board", title: "2025 ACSL 오픈랩 데이", meta: "2025.10.22", to: "/news" as const },
];

function WhatsNewTicker() {
  const [idx, setIdx] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % feed.length);
      setKey((k) => k + 1);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const item = feed[idx];
  const tagColor =
    item.tag === "Publication"
      ? "bg-sky-500/20 text-sky-200"
      : item.tag === "Project"
      ? "bg-emerald-500/20 text-emerald-200"
      : "bg-amber-500/20 text-amber-200";

  return (
    <div className="overflow-hidden h-6 flex-1 min-w-0">
      <Link key={key} to={item.to} className="animate-slide-up-in flex items-center gap-3 min-w-0 group cursor-pointer">
        <span className={`shrink-0 text-[0.65rem] font-bold px-2 py-0.5 rounded uppercase tracking-wide ${tagColor}`}>
          {item.tag}
        </span>
        <span className="text-white/85 text-sm truncate flex-1 group-hover:underline group-hover:text-white transition-colors">{item.title}</span>
        <span className="text-white/40 text-xs shrink-0 hidden sm:block">{item.meta}</span>
      </Link>
    </div>
  );
}

function Index() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slideshow */}
      {slides.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/65 via-navy/50 to-navy/85" />

      {/* Left: title + what's new */}
      <div className="relative z-10 h-full flex flex-col px-12 md:px-20 pt-24 pb-10">
        <div className="flex-1 flex items-center animate-fade-in">
          <div>
            <p className="text-white/60 text-xs tracking-[0.4em] uppercase mb-4">
              {t("home.kicker")}
            </p>
            <h1
              className="text-white font-extrabold tracking-tight leading-tight"
              style={{ fontSize: "clamp(2rem, 4.8vw, 3.8rem)" }}
            >
              AEROSPACE CONTROL<br />&amp; SYSTEMS LABORATORY
            </h1>
          </div>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="flex items-center gap-2 mb-5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? "bg-white w-6 h-2" : "bg-white/40 w-2 h-2 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-5 border-t border-white/20 pt-5 w-full">
            <span className="text-white font-bold text-sm tracking-[0.2em] uppercase shrink-0">
              What's New
            </span>
            <div className="w-px h-4 bg-white/25 shrink-0" />
            <WhatsNewTicker />
          </div>
        </div>
      </div>

      {/* Right: Research + Publications cards (overlaid) */}
      <div className="hidden md:flex absolute right-16 top-1/2 -translate-y-1/2 flex-col gap-4 z-10 w-72">
        <Link
          to="/research"
          className="group flex flex-col justify-between p-7 h-52 bg-[#0099CC] hover:bg-[#007BB5] transition-colors duration-300"
        >
          <div className="flex items-start justify-between">
            <h2 className="text-white font-bold text-2xl leading-tight">Research</h2>
            <FlaskConical size={26} className="text-white/70 group-hover:text-white transition-colors shrink-0" />
          </div>
          <div>
            <p className="text-white/80 text-sm leading-relaxed">
              항공우주 제어·유도·시뮬레이션·ATM 분야의 최신 연구
            </p>
            <div className="mt-4 inline-flex items-center justify-center w-8 h-8 rounded-full border-2 border-white/60 group-hover:border-white group-hover:bg-white/10 transition-all">
              <ArrowRight size={14} className="text-white group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </Link>

        <Link
          to="/publications"
          className="group flex flex-col justify-between p-7 h-52 bg-[#1B3D6E] hover:bg-[#153260] transition-colors duration-300"
        >
          <div className="flex items-start justify-between">
            <h2 className="text-white font-bold text-2xl leading-tight">Publications</h2>
            <BookOpen size={26} className="text-white/70 group-hover:text-white transition-colors shrink-0" />
          </div>
          <div>
            <p className="text-white/80 text-sm leading-relaxed">
              저널·국제·국내 학술대회 게재 논문 목록
            </p>
            <div className="mt-4 inline-flex items-center justify-center w-8 h-8 rounded-full border-2 border-white/60 group-hover:border-white group-hover:bg-white/10 transition-all">
              <ArrowRight size={14} className="text-white group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
