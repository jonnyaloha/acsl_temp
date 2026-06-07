import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";
import { professors } from "@/data/professors";

const links: { to: string; key: TranslationKey }[] = [
  { to: "/about", key: "nav.about" },
  { to: "/research", key: "nav.research" },
  { to: "/people", key: "nav.professor" },
  { to: "/students", key: "nav.students" },
  { to: "/projects", key: "nav.projects" },
  { to: "/publications", key: "nav.publications" },
  { to: "/news", key: "nav.news" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { location } = useRouterState();
  const { t } = useLanguage();
  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent ? "bg-transparent" : "bg-background/85 backdrop-blur-md border-b border-border"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="ACSL"
            className={`h-9 w-auto object-contain transition ${transparent ? "brightness-0 invert" : ""}`}
            onError={(e) => {
              e.currentTarget.style.display = "none";
              const fallback = e.currentTarget.parentElement?.querySelector(".logo-fallback") as HTMLElement | null;
              if (fallback) fallback.style.display = "block";
            }}
          />
          <span
            className={`logo-fallback hidden text-xl font-bold tracking-tight transition-colors ${
              transparent ? "text-white" : "text-navy"
            }`}
          >
            ACSL
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {links.map((l) => {
            if (l.to === "/people") {
              return (
                <DropdownLink
                  key={l.to}
                  to={l.to}
                  label={t(l.key)}
                  transparent={transparent}
                  items={professors.map((p) => ({
                    key: p.id,
                    label: p.name.ko,
                    to: "/people/$id" as const,
                    params: { id: p.id },
                  }))}
                />
              );
            }
            if (l.to === "/students") {
              return (
                <DropdownLink
                  key={l.to}
                  to={l.to}
                  label={t(l.key)}
                  transparent={transparent}
                  items={[
                    { key: "phd_s", label: t("students.tab.phd_s"), to: "/students" as const, hash: "phd_s" },
                    { key: "ms_s", label: t("students.tab.ms_s"), to: "/students" as const, hash: "ms_s" },
                    { key: "ug", label: t("students.tab.ug"), to: "/students" as const, hash: "ug" },
                    { key: "alumni", label: t("students.tab.alumni"), to: "/students" as const, hash: "alumni" },
                  ]}
                />
              );
            }
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`text-lg font-medium whitespace-nowrap transition-colors hover:opacity-70 ${
                  transparent ? "text-white/90" : "text-foreground"
                }`}
                activeProps={{ className: "underline underline-offset-8" }}
              >
                {t(l.key)}
              </Link>
            );
          })}
        </nav>


        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/join"
            className={`inline-flex items-center rounded-full px-5 py-2 text-base font-semibold transition-all ${
              transparent ? "bg-white text-navy hover:bg-white/90" : "bg-navy text-white hover:bg-navy-light"
            }`}
          >
            {t("nav.join")}
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setOpen((v) => !v)}
            className={`p-2 ${transparent ? "text-white" : "text-foreground"}`}
            aria-label={t("nav.menu")}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) =>
              l.to === "/people" ? (
                <div key={l.to} className="flex flex-col">
                  <Link to={l.to} className="py-2 text-foreground font-medium text-base">
                    {t(l.key)}
                  </Link>
                  <ul className="pl-4 border-l border-border ml-1 mb-1">
                    {professors.map((p) => (
                      <li key={p.id}>
                        <Link
                          to="/people/$id"
                          params={{ id: p.id }}
                          className="block py-1.5 text-sm text-muted-foreground hover:text-navy"
                        >
                          {p.name.ko}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link key={l.to} to={l.to} className="py-2 text-foreground font-medium">
                  {t(l.key)}
                </Link>
              )
            )}
            <Link
              to="/join"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-navy text-white px-5 py-2.5 font-semibold"
            >
              {t("nav.join")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

type DropdownItem = {
  key: string;
  label: string;
  to: "/people/$id" | "/students";
  params?: { id: string };
  hash?: string;
};

function DropdownLink({
  to,
  label,
  transparent,
  items,
}: {
  to: string;
  label: string;
  transparent: boolean;
  items: DropdownItem[];
}) {
  return (
    <div className="relative group">
      <Link
        to={to}
        className={`inline-flex items-center gap-1 text-base font-medium whitespace-nowrap transition-colors hover:opacity-70 ${
          transparent ? "text-white/90" : "text-foreground"
        }`}
        activeProps={{ className: "underline underline-offset-8" }}
      >
        {label}
        <ChevronDown size={16} />
      </Link>
      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity z-50">
        <ul className="min-w-[200px] bg-background border border-border rounded-lg shadow-lg py-2">
          {items.map((it) =>
            it.to === "/people/$id" && it.params ? (
              <li key={it.key}>
                <Link
                  to="/people/$id"
                  params={it.params}
                  className="block px-4 py-2 text-sm whitespace-nowrap text-foreground hover:bg-muted hover:text-navy"
                >
                  {it.label}
                </Link>
              </li>
            ) : (
              <li key={it.key}>
                <Link
                  to="/students"
                  hash={it.hash}
                  className="block px-4 py-2 text-sm whitespace-nowrap text-foreground hover:bg-muted hover:text-navy"
                >
                  {it.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

