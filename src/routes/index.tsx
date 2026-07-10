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
      <section className="relative -mt-20 h-[92vh] min-h-[680px] w-full overflow-hidden">
        <img src="/images/img1.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 flex h-full items-end pb-20 md:pb-28">
          <div className="w-full px-4 text-primary-foreground sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
              <div className="max-w-3xl fade-up">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.22em] backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5" />
                  {t("home.hero.eyebrow")}
                </div>
                <h1 className="font-display text-5xl leading-[1.05] md:text-7xl">{t("home.hero.title")}</h1>
                <p className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl">{t("home.hero.subtitle")}</p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link to="/notre-mission" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-navy transition-colors hover:bg-sage-soft">
                    {t("cta.discoverMission")} <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/nous-soutenir" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/15">
                    {t("cta.support")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <div className="eyebrow">{t("home.intro.eyebrow")}</div>
            <h2 className="max-w-2xl font-display text-4xl leading-tight text-navy md:text-5xl">{t("home.intro.title")}</h2>
            <p className="max-w-2xl text-lg leading-relaxed text-foreground/75">{t("home.intro.body")}</p>
            <div className="card-soft rounded-[1.75rem] p-6">
              <div className="font-display text-2xl text-navy">{t("home.valueCard.title")}</div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{t("home.valueCard.body")}</p>
            </div>
          </div>
          <div className="space-y-5">
            <SmartImage src="/images/img2.jpg" alt="Présentation" ratio="aspect-[4/5]" className="rounded-[2rem]" label="img2" />
            <div className="flex items-center gap-3 rounded-[1.5rem] border border-border bg-cream/80 p-4">
              <div className="rounded-full bg-sage-soft p-3 text-sage"><HeartHandshake className="h-5 w-5" /></div>
              <div>
                <div className="font-medium text-navy">{t("home.valueCard.secondaryTitle")}</div>
                <div className="text-sm text-foreground/60">{t("home.valueCard.secondaryBody")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24 md:py-32">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SmartImage src="/images/img3.jpg" alt="Notre impact" ratio="aspect-[5/4]" className="rounded-[2rem]" label="img3" />
          <div className="space-y-6">
            <div className="eyebrow">{t("home.impact.eyebrow")}</div>
            <h2 className="font-display text-4xl leading-tight text-navy md:text-5xl">{t("home.impact.title")}</h2>
            <p className="text-lg leading-relaxed text-foreground/75">{t("home.impact.body")}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Users, value: "10+", label: t("home.impact.beneficiaries") },
                { icon: Activity, value: "1+", label: t("home.impact.campaigns") },
                { icon: HeartHandshake, value: "5+", label: t("home.impact.partners") },
                { icon: Globe2, value: "3+", label: t("home.impact.countries") },
              ].map((s, i) => (
                <div key={i} className="card-elevated rounded-[1.5rem] p-6">
                  <s.icon className="h-5 w-5 text-sage" />
                  <div className="mt-4 font-display text-3xl text-navy">{s.value}</div>
                  <div className="mt-1 text-sm text-foreground/60">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="card-soft rounded-[1.75rem] p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-sage">{t("home.values.title")}</div>
              <div className="mt-3 text-lg text-navy">{t("home.values.body")}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="card-elevated relative overflow-hidden rounded-[2rem] bg-navy p-8 text-primary-foreground">
            <div className="absolute inset-0 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('/images/img51.jpg')" }} />
            <div className="absolute inset-0 rounded-[2rem] bg-navy/75" />
            <div className="relative">
              <div className="eyebrow text-sage-soft">Engagement</div>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">{t("home.finalCta.title")}</h2>
              <p className="mt-5 text-lg text-white/80">{t("home.finalCta.body")}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/nous-soutenir" className="inline-flex items-center gap-2 rounded-full bg-sage px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-sage/90">
                  {t("cta.support")} <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/nos-actions" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10">
                  {t("nav.actions")}
                </Link>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: t("home.cards.mission.title"), body: t("home.cards.mission.body") },
              { title: t("home.cards.vision.title"), body: t("home.cards.vision.body") },
              { title: t("home.cards.actions.title"), body: t("home.cards.actions.body") },
              { title: t("home.cards.network.title"), body: t("home.cards.network.body") },
            ].map((item) => (
              <div key={item.title} className="card-soft rounded-[1.5rem] p-6">
                <div className="font-display text-2xl text-navy">{item.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
