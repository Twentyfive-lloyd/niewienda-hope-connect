import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { SmartImage } from "@/components/site/SmartImage";
import { useI18n } from "@/lib/i18n";
import { topics, imageForTopic } from "@/lib/diabetes-topics";

export const Route = createFileRoute("/comprendre-le-diabete/")({
  head: () => ({
    meta: [
      { title: "Comprendre le diabète — Niewienda Health e.V." },
      { name: "description", content: "Un centre de ressources pédagogique pour mieux comprendre, prévenir et vivre avec le diabète." },
      { property: "og:title", content: "Comprendre le diabète" },
      { property: "og:description", content: "Ressources pédagogiques sur le diabète." },
    ],
  }),
  component: UnderstandHub,
});

function UnderstandHub() {
  const { t, lang } = useI18n();
  return (
    <SiteLayout>
      <section className="relative -mt-20 h-[68vh] min-h-[500px] w-full overflow-hidden">
        <img src="/images/img20.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 flex h-full items-end pb-16">
          <div className="section-shell text-primary-foreground">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="max-w-3xl">
                <div className="text-xs uppercase tracking-[0.22em] text-white/80">{t("understand.hero.eyebrow")}</div>
                <h1 className="mt-4 font-display text-5xl leading-[1.05] md:text-7xl">{t("understand.hero.title")}</h1>
                <p className="mt-6 text-lg text-white/85">{t("understand.hero.subtitle")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="space-y-4">
              <div className="eyebrow">
                <BookOpen className="h-3.5 w-3.5" /> {t("understand.topics.title")}
              </div>
              <h2 className="font-display text-4xl text-navy md:text-5xl">
                {lang === "fr" ? "7 ressources pour mieux comprendre." : "7 resources to understand better."}
              </h2>
              <p className="text-lg leading-relaxed text-foreground/70">Chaque article propose un éclairage pratique, clair et adapté à la compréhension du diabète et de ses enjeux.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {topics.map((topic, idx) => (
                <Link
                  key={topic.slug}
                  to="/comprendre-le-diabete/$topic"
                  params={{ topic: topic.slug }}
                  className="group flex flex-col overflow-hidden rounded-[1.6rem] border border-border bg-background transition-shadow hover:shadow-xl"
                >
                  <SmartImage
                    src={imageForTopic(topic.slug, idx, lang).src}
                    alt={topic.title[lang]}
                    ratio="aspect-[16/10]"
                    label={imageForTopic(topic.slug, idx, lang).label}
                    previewable={false}
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="text-xs uppercase tracking-[0.22em] text-sage">0{idx + 1}</div>
                    <h3 className="mt-2 font-display text-2xl text-navy leading-tight">{topic.title[lang]}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/65">{topic.excerpt[lang]}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy transition-colors group-hover:text-sage">
                      {t("common.readMore")} <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}