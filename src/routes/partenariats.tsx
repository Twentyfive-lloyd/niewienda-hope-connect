import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Stethoscope, Cpu, GraduationCap, HandHeart, HeartHandshake } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/partenariats")({
  component: PartenariatsPage,
  head: () => ({
    meta: [
      { title: "Partenariats — Niewienda Health e.V." },
      { name: "description", content: "Niewienda Health e.V. et OZISS Cooperation : un partenariat officiel au service de la santé, de la technologie et des communautés africaines." },
      { property: "og:title", content: "Partenariats — Niewienda Health e.V." },
      { property: "og:description", content: "Ensemble pour un avenir plus sain, plus innovant, plus inclusif." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function PartenariatsPage() {
  const { t } = useI18n();

  const pillars = [
    { icon: Stethoscope, title: t("partners.p1.title"), body: t("partners.p1.body") },
    { icon: Cpu, title: t("partners.p2.title"), body: t("partners.p2.body") },
    { icon: GraduationCap, title: t("partners.p3.title"), body: t("partners.p3.body") },
    { icon: HandHeart, title: t("partners.p4.title"), body: t("partners.p4.body") },
  ];

  return (
    <SiteLayout>
      <section className="relative -mt-20 bg-cream pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl text-center">
            <div className="eyebrow">{t("partners.page.eyebrow")}</div>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] text-navy md:text-6xl">{t("partners.page.title")}</h1>
            <p className="mt-6 text-lg text-foreground/75">{t("partners.page.subtitle")}</p>
          </div>

          <div className="mt-12 grid gap-4 rounded-[2rem] border border-border bg-white/80 p-8 shadow-sm md:grid-cols-[1fr_0.2fr_1fr_0.2fr_1fr_0.2fr_1fr] md:items-center">
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-border bg-background md:h-28 md:w-28">
                <img src="/images/logo.jpg" alt="Niewienda Health e.V." className="h-20 w-20 rounded-full object-cover md:h-24 md:w-24" />
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-navy/70">Niewienda Health e.V.</div>
            </div>
            <HeartHandshake className="hidden h-5 w-5 text-sage md:block" />
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-border bg-black md:h-28 md:w-28">
                <img src="/images/partner-oziss-logo.jpeg" alt="OZISS Cooperation" className="h-20 w-20 rounded-full object-contain md:h-24 md:w-24" />
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-navy/70">OZISS Cooperation</div>
            </div>
            <HeartHandshake className="hidden h-5 w-5 text-sage md:block" />
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-border bg-background md:h-28 md:w-28">
                <img src="/images/agro-millenium-logo.png" alt="Agro Millenium Group" className="h-20 w-20 rounded-full object-contain md:h-24 md:w-24" />
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-navy/70">Agro Millenium Group</div>
            </div>
            <HeartHandshake className="hidden h-5 w-5 text-sage md:block" />
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-border bg-background md:h-28 md:w-28">
                <img src="/images/partnership-mimi-logo.jpeg" alt="La Cuisine De Mimi" className="h-20 w-20 rounded-full object-contain md:h-24 md:w-24" />
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-navy/70">La Cuisine De Mimi</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-4">
            <div className="eyebrow">{t("partners.eyebrow")}</div>
            <h2 className="font-display text-4xl leading-tight text-navy md:text-5xl">{t("partners.title")}</h2>
            <p className="text-lg leading-relaxed text-foreground/75">{t("partners.page.intro")}</p>
            <p className="text-lg leading-relaxed text-foreground/75">{t("partners.tagline")}</p>
          </div>
          <div className="card-elevated rounded-[2rem] p-2">
            <img src="/images/partnership-oziss.jpeg" alt="Partenariat officiel Niewienda Health e.V. × OZISS Cooperation" className="h-full w-full rounded-[1.6rem] object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-cream py-24 md:py-32">
        <div className="section-shell">
          <div className="mx-auto max-w-2xl text-center">
            <div className="eyebrow">{t("partners.pillars.title")}</div>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.title} className="card-elevated rounded-[1.6rem] p-7 transition-colors hover:border-sage">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-soft">
                  <p.icon className="h-5 w-5 text-sage" />
                </div>
                <h3 className="mt-5 font-display text-xl text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell">
          <div className="card-elevated rounded-[2rem] bg-navy p-8 text-primary-foreground md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <p className="max-w-2xl font-display text-2xl leading-snug md:text-3xl">{t("partners.tagline")}</p>
              <Link to="/nous-soutenir" className="inline-flex items-center gap-2 rounded-full bg-sage px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-sage/90">
                {t("cta.support")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}