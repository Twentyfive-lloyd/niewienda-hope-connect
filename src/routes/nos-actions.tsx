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
      <section className="relative -mt-20 h-[72vh] min-h-[540px] w-full overflow-hidden">
        <img src="/images/img11.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 flex h-full items-end pb-16 md:pb-24">
          <div className="w-full px-4 text-primary-foreground sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="max-w-3xl">
                <div className="text-xs uppercase tracking-[0.22em] text-white/80">{t("actions.hero.eyebrow")}</div>
                <h1 className="mt-4 font-display text-5xl leading-[1.05] md:text-7xl">{t("actions.hero.title")}</h1>
                <p className="mt-6 text-lg text-white/85">{t("actions.hero.subtitle")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="space-y-4">
            <div className="eyebrow">Programs</div>
            <h2 className="font-display text-4xl text-navy md:text-5xl">Practical and tailored interventions</h2>
            <p className="text-lg text-foreground/70">We work at every level, from awareness to support, with a clear and human approach.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {cards.map((c) => (
              <article key={c.title} className="card-elevated flex flex-col overflow-hidden rounded-[1.6rem] transition-shadow hover:shadow-xl">
                <SmartImage src={c.img} alt={c.title} ratio="aspect-[4/3]" label={c.label} />
                <div className="p-6">
                  <c.icon className="h-6 w-6 text-sage" />
                  <h3 className="mt-4 font-display text-2xl text-navy">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">{c.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-24 text-primary-foreground">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-4">
            <div className="eyebrow text-sage-soft">Impact</div>
            <h2 className="font-display text-4xl md:text-5xl">Measurable results and visible impact</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { v: "10+", l: t("home.impact.beneficiaries") },
              { v: "1+", l: t("home.impact.campaigns") },
              { v: "5+", l: t("home.impact.partners") },
              { v: "3+", l: t("home.impact.countries") },
            ].map((s, i) => (
              <div key={i} className="rounded-[1.4rem] border border-white/15 bg-white/8 p-6">
                <div className="font-display text-4xl text-sage-soft">{s.v}</div>
                <div className="mt-2 text-sm text-white/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="card-soft rounded-[2rem] p-8">
            <div className="eyebrow">Methods</div>
            <h2 className="mt-3 font-display text-4xl text-navy md:text-5xl">A clear pathway for every beneficiary</h2>
            <div className="mt-8 space-y-5">
              {[
                { title: "Awareness", body: "Simple, relevant and credible messages to inform communities." },
                { title: "Screening", body: "Local campaigns that make access to care and information easier." },
                { title: "Support", body: "Human follow-up that makes the process more accessible." },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.3rem] border border-border bg-background p-4">
                  <div className="font-display text-xl text-navy">{item.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <div className="card-elevated rounded-[2rem] p-8">
              <div className="text-sm uppercase tracking-[0.2em] text-sage">Benefits</div>
              <div className="mt-3 text-lg leading-relaxed text-foreground/75">We put people at the center to reduce barriers and make care pathways safer and easier.</div>
            </div>
            <SmartImage src="/images/img8.jpg" alt="" ratio="aspect-[4/3]" className="rounded-[1.75rem]" label="img8" />
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="section-shell">
          <div className="mb-8 max-w-2xl">
            <div className="eyebrow">{t("actions.gallery.title")}</div>
            <h2 className="mt-3 font-display text-4xl text-navy md:text-5xl">{t("actions.gallery.body")}</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            <SmartImage src="/images/img11.jpg" alt="" ratio="aspect-[3/4]" className="col-span-2 row-span-2 rounded-[1.75rem] md:aspect-auto md:h-full" label="img11" />
            <SmartImage src="/images/img8.jpg" alt="" ratio="aspect-square" className="rounded-[1.4rem]" label="img8" />
            <SmartImage src="/images/img9.jpg" alt="" ratio="aspect-square" className="rounded-[1.4rem]" label="img9" />
            <SmartImage src="/images/img7.jpg" alt="" ratio="aspect-square" className="rounded-[1.4rem]" label="img7" />
            <SmartImage src="/images/img6.jpg" alt="" ratio="aspect-square" className="rounded-[1.4rem]" label="img6" />
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell">
          <div className="card-elevated rounded-[2rem] bg-navy p-8 text-center text-primary-foreground md:p-12">
            <h2 className="font-display text-4xl md:text-5xl">Votre soutien donne vie à ces actions</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">Chaque contribution aide à mieux informer, accompagner et protéger les communautés touchées.</p>
            <Link to="/nous-soutenir" className="mt-8 inline-flex items-center gap-2 rounded-full bg-sage px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-sage/90">
              {t("cta.support")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}