import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, Activity, Users, Globe2, Sparkles, Stethoscope, Cpu, GraduationCap, HandHeart } from "lucide-react";
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

      {/* PARTNERS — sober section, placed before the final CTA (Nous soutenir) */}
      <section className="bg-background py-24 md:py-32">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs uppercase tracking-[0.22em] text-sage">{t("partners.eyebrow")}</div>
            <h2 className="mt-4 font-display text-4xl leading-tight text-navy md:text-5xl">{t("partners.title")}</h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70">{t("partners.body")}</p>
          </div>

          {/* Logos côte à côte, reliés par un trait fin + icône */}
          <div className="mt-14 flex flex-col items-center">
            <div className="flex w-full max-w-2xl items-center justify-center gap-6 md:gap-10">
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-border bg-background md:h-28 md:w-28">
                  <img src="/images/logo.jpg" alt="Niewienda Health e.V." className="h-20 w-20 rounded-full object-cover md:h-24 md:w-24" />
                </div>
                <div className="text-xs uppercase tracking-[0.18em] text-navy/70">Niewienda Health e.V.</div>
              </div>

              <div className="flex flex-1 items-center gap-3">
                <div className="h-px flex-1 bg-border" />
                <HeartHandshake className="h-5 w-5 text-sage" />
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-border bg-black md:h-28 md:w-28">
                  <img src="/images/partner-oziss-logo.jpeg" alt="OZISS Cooperation" className="h-20 w-20 rounded-full object-contain md:h-24 md:w-24" />
                </div>
                <div className="text-xs uppercase tracking-[0.18em] text-navy/70">OZISS Cooperation</div>
              </div>
            </div>

            <Link
              to="/partenariats"
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-navy/15 bg-background px-6 py-3 text-sm font-medium text-navy hover:border-navy/30 hover:bg-cream transition-colors"
            >
              {t("partners.cta")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Piliers de collaboration */}
          <div className="mt-20">
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-xs uppercase tracking-[0.22em] text-sage">{t("partners.pillars.title")}</div>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Stethoscope, title: t("partners.p1.title"), body: t("partners.p1.body") },
                { icon: Cpu, title: t("partners.p2.title"), body: t("partners.p2.body") },
                { icon: GraduationCap, title: t("partners.p3.title"), body: t("partners.p3.body") },
                { icon: HandHeart, title: t("partners.p4.title"), body: t("partners.p4.body") },
              ].map((p) => (
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
