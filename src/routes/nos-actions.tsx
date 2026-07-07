import { createFileRoute, Link } from "@tanstack/react-router";
import { Megaphone, Stethoscope, HeartPulse, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { SmartImage } from "@/components/site/SmartImage";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/nos-actions")({
  head: () => ({
    meta: [
      { title: "Nos Actions — Niewienda Health e.V." },
      { name: "description", content: "Sensibilisation, dépistage et accompagnement : nos actions sur le terrain." },
      { property: "og:title", content: "Nos Actions — Niewienda Health e.V." },
      { property: "og:description", content: "Sensibilisation, dépistage et accompagnement sur le terrain." },
    ],
  }),
  component: ActionsPage,
});

function ActionsPage() {
  const { t } = useI18n();
  const cards = [
    { icon: Megaphone, title: t("actions.awareness.title"), body: t("actions.awareness.body"), img: "/images/img8.jpg", label: "img8" },
    { icon: Stethoscope, title: t("actions.screening.title"), body: t("actions.screening.body"), img: "/images/img9.jpg", label: "img9" },
    { icon: HeartPulse, title: t("actions.followup.title"), body: t("actions.followup.body"), img: "/images/img10.jpg", label: "img10" },
  ];

  return (
    <SiteLayout>
      {/* Hero banner */}
      <section className="relative -mt-20 h-[70vh] min-h-[500px] w-full overflow-hidden">
        <img src="/images/img11.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 flex h-full items-end pb-16 md:pb-24">
          <div className="container-site text-primary-foreground max-w-3xl">
            <div className="text-xs uppercase tracking-[0.22em] text-white/80">{t("actions.hero.eyebrow")}</div>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] md:text-7xl">{t("actions.hero.title")}</h1>
            <p className="mt-6 text-lg text-white/85">{t("actions.hero.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Action cards */}
      <section className="py-24 md:py-32">
        <div className="container-site grid gap-8 md:grid-cols-3">
          {cards.map((c) => (
            <article key={c.title} className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-background transition-shadow hover:shadow-xl">
              <SmartImage src={c.img} alt={c.title} ratio="aspect-[4/3]" label={c.label} />
              <div className="p-8">
                <c.icon className="h-6 w-6 text-sage" />
                <h3 className="mt-4 font-display text-2xl text-navy">{c.title}</h3>
                <p className="mt-3 text-foreground/70 leading-relaxed">{c.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy py-24 text-primary-foreground">
        <div className="container-site grid gap-10 md:grid-cols-4 text-center">
          {[
            { v: "10+", l: t("home.impact.beneficiaries") },
            { v: "1+", l: t("home.impact.campaigns") },
            { v: "5+", l: t("home.impact.partners") },
            { v: "3+", l: t("home.impact.countries") },
          ].map((s, i) => (
            <div key={i}>
              <div className="font-display text-5xl md:text-6xl text-sage-soft">{s.v}</div>
              <div className="mt-2 text-sm text-white/70">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 md:py-32">
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.22em] text-sage">{t("actions.gallery.title")}</div>
            <h2 className="mt-3 font-display text-4xl text-navy md:text-5xl">{t("actions.gallery.body")}</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <SmartImage src="/images/img11.jpg" alt="" ratio="aspect-[3/4]" className="col-span-2 md:col-span-2 row-span-2 rounded-2xl md:aspect-auto md:h-full" label="img11" />
            <SmartImage src="/images/img8.jpg" alt="" ratio="aspect-square" className="rounded-2xl" label="img8" />
            <SmartImage src="/images/img9.jpg" alt="" ratio="aspect-square" className="rounded-2xl" label="img9" />
            <SmartImage src="/images/img7.jpg" alt="" ratio="aspect-square" className="rounded-2xl" label="img7" />
            <SmartImage src="/images/img6.jpg" alt="" ratio="aspect-square" className="rounded-2xl" label="img6" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-site text-center">
          <Link to="/nous-soutenir" className="inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 text-sm font-medium text-primary-foreground hover:bg-navy-soft transition-colors">
            {t("cta.support")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}