import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/notre-mission", label: t("nav.mission") },
    { to: "/nos-actions", label: t("nav.actions") },
    { to: "/comprendre-le-diabete", label: t("nav.understand") },
    { to: "/nous-soutenir", label: t("nav.support") },
  ] as const;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-background/95 backdrop-blur border-b border-border shadow-[0_1px_0_rgba(0,0,0,0.02)]"
          : "bg-transparent"
      )}
    >
      <div className="container-site flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/images/logo.jpg" alt="Niewienda Health" className="h-11 w-11 rounded-full object-cover ring-1 ring-border" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-xl text-navy">Niewienda</div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-sage">health e.V.</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm text-navy/80 hover:text-navy transition-colors data-[status=active]:text-navy data-[status=active]:font-medium"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1 rounded-full border border-border bg-background/70 px-1 py-1 text-xs">
            <Globe className="ml-1.5 h-3.5 w-3.5 text-navy/60" />
            {(["fr", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  "rounded-full px-2.5 py-1 uppercase tracking-wider transition-colors",
                  lang === l ? "bg-navy text-primary-foreground" : "text-navy/70 hover:text-navy"
                )}
                aria-pressed={lang === l}
              >
                {l}
              </button>
            ))}
          </div>

          <Link
            to="/nous-soutenir"
            className="hidden md:inline-flex items-center rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-navy-soft transition-colors"
          >
            {t("cta.support")}
          </Link>

          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-navy"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-site py-6 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                className="rounded-lg px-3 py-3 text-navy/85 hover:bg-muted data-[status=active]:bg-muted data-[status=active]:text-navy"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2 rounded-full border border-border p-1 text-xs">
                {(["fr", "en"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={cn(
                      "rounded-full px-3 py-1 uppercase tracking-wider transition-colors",
                      lang === l ? "bg-navy text-primary-foreground" : "text-navy/70"
                    )}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <Link
                to="/nous-soutenir"
                onClick={() => setOpen(false)}
                className="inline-flex items-center rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-primary-foreground"
              >
                {t("cta.support")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}