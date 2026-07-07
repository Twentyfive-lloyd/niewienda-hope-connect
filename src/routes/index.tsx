import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, Activity, Users, Globe2, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { SmartImage } from "@/components/site/SmartImage";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { t } = useI18n();
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative -mt-20 h-[92vh] min-h-[620px] w-full overflow-hidden">
        <img src="/images/img1.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 flex h-full items-end pb-20 md:pb-28">
          <div className="container-site text-primary-foreground">
            <div className="max-w-3xl fade-up">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.22em] backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                {t("home.hero.eyebrow")}
              </div>
              <h1 className="font-display text-5xl leading-[1.05] md:text-7xl">{t("home.hero.title")}</h1>
              <p className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl">{t("home.hero.subtitle")}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/notre-mission" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-navy hover:bg-sage-soft transition-colors">
                  {t("cta.discoverMission")} <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/nous-soutenir" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-medium text-white hover:bg-white/15 transition-colors backdrop-blur">
                  {t("cta.support")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 md:py-32">
        <div className="container-site grid gap-14 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-sage">{t("home.intro.eyebrow")}</div>
            <h2 className="mt-4 font-display text-4xl leading-tight text-navy md:text-5xl">{t("home.intro.title")}</h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/75">{t("home.intro.body")}</p>
            <Link to="/notre-mission" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-sage transition-colors">
              {t("cta.learnMore")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <SmartImage src="/images/img2.jpg" alt="Présentation" ratio="aspect-[4/5]" className="rounded-2xl" label="img2" />
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-site grid gap-14 md:grid-cols-2 md:items-center">
          <SmartImage src="/images/img3.jpg" alt="Notre impact" ratio="aspect-[5/4]" className="rounded-2xl md:order-1 order-2" label="img3" />
          <div className="md:order-2 order-1">
            <div className="text-xs uppercase tracking-[0.22em] text-sage">{t("home.impact.eyebrow")}</div>
            <h2 className="mt-4 font-display text-4xl leading-tight text-navy md:text-5xl">{t("home.impact.title")}</h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/75">{t("home.impact.body")}</p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { icon: Users, value: "12 000+", label: t("home.impact.beneficiaries") },
                { icon: Activity, value: "80+", label: t("home.impact.campaigns") },
                { icon: HeartHandshake, value: "35", label: t("home.impact.partners") },
                { icon: Globe2, value: "6", label: t("home.impact.countries") },
              ].map((s, i) => (
                <div key={i} className="rounded-2xl border border-border bg-background p-6">
                  <s.icon className="h-5 w-5 text-sage" />
                  <div className="mt-4 font-display text-3xl text-navy">{s.value}</div>
                  <div className="mt-1 text-sm text-foreground/60">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-24 md:py-32">
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.22em] text-sage">{t("partners.eyebrow")}</div>
            <h2 className="mt-4 font-display text-4xl leading-tight text-navy md:text-5xl">{t("partners.title")}</h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/75">{t("partners.body")}</p>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:items-center">
            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-border bg-cream p-10 flex flex-col items-center text-center">
                <div className="flex items-center gap-8">
                  <img src="/images/logo.jpg" alt="Niewienda Health e.V." className="h-20 w-20 rounded-full object-cover" />
                  <HeartHandshake className="h-6 w-6 text-sage shrink-0" />
                  <img src="/images/partner-oziss-logo.jpeg" alt="OZISS Cooperation" className="h-20 w-20 rounded-full object-contain bg-black p-2" />
                </div>
                <div className="mt-6 font-display text-xl text-navy">Niewienda Health e.V. × {t("partners.oziss.name")}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-foreground/55">{t("partners.oziss.role")}</div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <SmartImage src="/images/partnership-oziss.jpeg" alt="Partenariat officiel Niewienda Health e.V. × OZISS Cooperation" ratio="aspect-[4/5] md:aspect-[5/6]" className="rounded-3xl" label="partnership" />
            </div>
          </div>

          <div className="mt-12 rounded-3xl bg-navy px-8 py-10 md:px-14 md:py-12 text-primary-foreground">
            <p className="font-display text-2xl md:text-3xl leading-snug">{t("partners.tagline")}</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24">
        <div className="container-site">
          <div className="rounded-3xl bg-navy px-8 py-16 md:px-16 md:py-24 text-primary-foreground overflow-hidden relative">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl md:text-5xl">{t("home.finalCta.title")}</h2>
              <p className="mt-5 text-lg text-white/80">{t("home.finalCta.body")}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/nous-soutenir" className="inline-flex items-center gap-2 rounded-full bg-sage px-7 py-3.5 text-sm font-medium text-white hover:bg-sage/90 transition-colors">
                  {t("cta.support")} <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/nos-actions" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium hover:bg-white/10 transition-colors">
                  {t("nav.actions")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
