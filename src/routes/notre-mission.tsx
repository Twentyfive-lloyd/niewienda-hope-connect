import { createFileRoute } from "@tanstack/react-router";
import { Heart, ShieldCheck, Sparkles, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { SmartImage } from "@/components/site/SmartImage";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/notre-mission")({
  head: () => ({
    meta: [
      { title: "Notre Mission — Niewienda Health e.V." },
      { name: "description", content: "L'histoire, la vision et les valeurs de Niewienda Health e.V." },
      { property: "og:title", content: "Notre Mission — Niewienda Health e.V." },
      { property: "og:description", content: "Une organisation guidée par la science et portée par l'humain." },
    ],
  }),
  component: MissionPage,
});

function MissionPage() {
  const { t, lang } = useI18n();

  const timeline = lang === "fr" ? [
    { year: "2024", title: "Naissance de l'idée", body: "Un collectif de soignants et de bénévoles se rassemble autour d'une conviction : agir contre le diabète en Afrique." },
    { year: "2025", title: "Un réseau qui grandit", body: "De nouveaux partenaires rejoignent notre mission dans plusieurs pays." },
    { year: "2026", title: "Création officielle", body: "Niewienda Health e.V. est fondée en Allemagne et déploie ses premières missions." },
    { year: "2026", title: "Les premières missions", body: "Premières campagnes de sensibilisation et de dépistage sur le terrain." },
  ] : [
    { year: "2024", title: "The idea is born", body: "A group of caregivers and volunteers unite around one belief: act against diabetes in Africa." },
    { year: "2025", title: "A growing network", body: "New partners join our mission across several countries." },
    { year: "2026", title: "Official creation", body: "Niewienda Health e.V. is founded in Germany and delivers its first missions." },
    { year: "2026", title: "First missions", body: "First awareness and screening campaigns on the ground." },
  ];

  const values = lang === "fr" ? [
    { icon: Heart, title: "Bienveillance", body: "Nous plaçons la dignité et l'écoute au cœur de chaque action." },
    { icon: ShieldCheck, title: "Rigueur", body: "Chaque programme repose sur les recommandations médicales actuelles." },
    { icon: Sparkles, title: "Transparence", body: "Nous rendons compte de nos actions et de nos ressources." },
    { icon: Users, title: "Engagement local", body: "Nous construisons avec les communautés, jamais à leur place." },
  ] : [
    { icon: Heart, title: "Compassion", body: "We put dignity and listening at the heart of every action." },
    { icon: ShieldCheck, title: "Rigor", body: "Each program relies on current medical guidelines." },
    { icon: Sparkles, title: "Transparency", body: "We are accountable for our actions and resources." },
    { icon: Users, title: "Local engagement", body: "We build with communities, never in their place." },
  ];

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative">
        <div className="container-site pt-16 md:pt-24 pb-16">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.22em] text-sage">{t("mission.hero.eyebrow")}</div>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] text-navy md:text-7xl">{t("mission.hero.title")}</h1>
            <p className="mt-6 max-w-2xl text-lg text-foreground/75">{t("mission.hero.subtitle")}</p>
          </div>
        </div>
        <div className="container-site">
          <SmartImage src="/images/img50.jpg" alt="Mission" ratio="aspect-[16/7]" className="rounded-3xl" label="img50" priority />
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32">
        <div className="container-site grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.22em] text-sage">01</div>
            <h2 className="mt-2 font-display text-4xl text-navy md:text-5xl">{t("mission.story.title")}</h2>
          </div>
          <div className="md:col-span-7 md:pt-6 text-lg leading-relaxed text-foreground/75">
            {t("mission.story.body")}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-site grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.22em] text-sage">02</div>
            <h2 className="mt-2 font-display text-4xl text-navy md:text-5xl">{t("mission.vision.title")}</h2>
          </div>
          <div className="md:col-span-7 md:pt-6 text-lg leading-relaxed text-foreground/75">
            {t("mission.vision.body")}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32">
        <div className="container-site">
          <div className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="text-xs uppercase tracking-[0.22em] text-sage">03</div>
              <h2 className="mt-2 font-display text-4xl text-navy md:text-5xl">{t("mission.timeline.title")}</h2>
              <div className="mt-8">
                <SmartImage src="/images/img5.jpg" alt="Histoire" ratio="aspect-[4/5]" className="rounded-2xl" label="img5" />
              </div>
            </div>
            <ol className="md:col-span-7 relative border-l border-border pl-8 space-y-12">
              {timeline.map((step, idx) => (
                <li key={`${step.year}-${idx}`} className="relative">
                  <span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-sage text-white text-[10px]">•</span>
                  <div className="text-xs uppercase tracking-[0.22em] text-sage">{step.year}</div>
                  <h3 className="mt-2 font-display text-2xl text-navy">{step.title}</h3>
                  <p className="mt-2 text-foreground/70 leading-relaxed">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-site grid gap-14 md:grid-cols-2 md:items-center">
          <SmartImage src="/images/img6.jpg" alt="Valeurs" ratio="aspect-[4/5]" className="rounded-3xl" label="img6" />
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-sage">04</div>
            <h2 className="mt-2 font-display text-4xl text-navy md:text-5xl">{t("mission.values.title")}</h2>
            <p className="mt-4 text-lg text-foreground/70">{t("mission.values.body")}</p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title} className="rounded-2xl border border-border bg-background p-6">
                  <v.icon className="h-5 w-5 text-sage" />
                  <div className="mt-4 font-display text-xl text-navy">{v.title}</div>
                  <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32">
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.22em] text-sage">05</div>
            <h2 className="mt-2 font-display text-4xl text-navy md:text-5xl">{t("mission.team.title")}</h2>
            <p className="mt-4 text-lg text-foreground/70">{t("mission.team.body")}</p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {[
              { fr: "Niewienda A.", en: "Niewienda A.", roleFr: "Présidente de l'association:", roleEn: "President of the association:" },
              { fr: "Erika Nouetagni", en: "Erika Nouetagni", roleFr: "Présidente par interim", roleEn: "Interim President" },
              { fr: "Zianie Ouethy", en: "Zianie Ouethy", roleFr: "Caissière", roleEn: "Treasurer" },
              { fr: "Kevin Njiokeng", en: "Kevin Njiokeng", roleFr: "Secrétaire", roleEn: "Secretary" },
              { fr: "Tchiencheu Manga Olivier", en: "Tchiencheu Manga Olivier", roleFr: "Chargé des partenariats", roleEn: "Partnership Manager" }
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-cream flex items-center justify-center p-6">
                  <img src="/images/logo.jpg" alt={member.fr} className="h-24 w-24 object-contain rounded-full" />
                </div>
                <div className="mt-4">
                  <div className="font-display text-xl text-navy">{lang === "fr" ? member.fr : member.en}</div>
                  <div className="text-sm text-foreground/60">{lang === "fr" ? member.roleFr : member.roleEn}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}