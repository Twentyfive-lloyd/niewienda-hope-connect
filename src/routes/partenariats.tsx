import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Stethoscope, Cpu, GraduationCap, HandHeart, HeartHandshake } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { useI18n } from "@/lib/i18n";
import agroMilleniumLogo from "@/assets/agro-millenium-logo.png.asset.json";

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
      {/* Hero */}
      <section className="relative -mt-20 pt-32 pb-16 md:pt-40 md:pb-24 bg-cream">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs uppercase tracking-[0.22em] text-sage">{t("partners.page.eyebrow")}</div>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] text-navy md:text-6xl xl:text-7xl">{t("partners.page.title")}</h1>
            <p className="mt-6 text-lg xl:text-xl text-foreground/75">{t("partners.page.subtitle")}</p>
          </div>

          <div className="mt-12 flex flex-wrap w-full max-w-3xl mx-auto items-center justify-center gap-6 md:gap-8">
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-border bg-background md:h-28 md:w-28">
                <img src="/images/logo.jpg" alt="Niewienda Health e.V." className="h-20 w-20 rounded-full object-cover md:h-24 md:w-24" />
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-navy/70">Niewienda Health e.V.</div>
            </div>
            <HeartHandshake className="h-5 w-5 text-sage" />
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-border bg-black md:h-28 md:w-28">
                <img src="/images/partner-oziss-logo.jpeg" alt="OZISS Cooperation" className="h-20 w-20 rounded-full object-contain md:h-24 md:w-24" />
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-navy/70">OZISS Cooperation</div>
            </div>
            <HeartHandshake className="h-5 w-5 text-sage" />
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-border bg-background md:h-28 md:w-28">
                <img src={agroMilleniumLogo.url} alt="Agro Millenium Group" className="h-20 w-20 rounded-full object-contain md:h-24 md:w-24" />
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-navy/70">Agro Millenium Group</div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + affiche officielle */}
      <section className="py-24 md:py-32">
        <div className="container-site grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-sage">{t("partners.eyebrow")}</div>
            <h2 className="mt-4 font-display text-4xl leading-tight text-navy md:text-5xl">{t("partners.title")}</h2>
            <p className="mt-6 text-lg xl:text-xl leading-relaxed text-foreground/75">{t("partners.page.intro")}</p>
            <p className="mt-4 text-lg xl:text-xl leading-relaxed text-foreground/75">{t("partners.tagline")}</p>
          </div>
          <div>
            <img
              src="/images/partnership-oziss.jpeg"
              alt="Partenariat officiel Niewienda Health e.V. × OZISS Cooperation"
              className="w-full h-auto rounded-3xl shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Piliers */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs uppercase tracking-[0.22em] text-sage">{t("partners.pillars.title")}</div>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-3xl border border-border bg-background p-7 hover:border-sage transition-colors">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-soft">
                  <p.icon className="h-5 w-5 text-sage" />
                </div>
                <h3 className="mt-5 font-display text-xl text-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-site">
          <div className="rounded-3xl bg-navy px-8 py-14 md:px-14 md:py-16 text-primary-foreground flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="font-display text-2xl md:text-3xl leading-snug max-w-2xl">{t("partners.tagline")}</p>
            <Link
              to="/nous-soutenir"
              className="inline-flex items-center gap-2 rounded-full bg-sage px-7 py-3.5 text-sm font-medium text-white hover:bg-sage/90 transition-colors"
            >
              {t("cta.support")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}