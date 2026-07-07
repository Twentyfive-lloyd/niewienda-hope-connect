import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { SmartImage } from "@/components/site/SmartImage";
import { useI18n } from "@/lib/i18n";
import { topics } from "@/lib/diabetes-topics";

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
      {/* Hero */}
      <section className="relative -mt-20 h-[65vh] min-h-[460px] w-full overflow-hidden">
        <img src="/images/img20.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 flex h-full items-end pb-16">
          <div className="container-site text-primary-foreground max-w-3xl">
            <div className="text-xs uppercase tracking-[0.22em] text-white/80">{t("understand.hero.eyebrow")}</div>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] md:text-7xl">{t("understand.hero.title")}</h1>
            <p className="mt-6 text-lg text-white/85">{t("understand.hero.subtitle")}</p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.22em] text-sage">
              <BookOpen className="mr-2 inline h-3.5 w-3.5" /> {t("understand.topics.title")}
            </div>
            <h2 className="mt-3 font-display text-4xl text-navy md:text-5xl">
              {lang === "fr" ? "7 ressources pour mieux comprendre." : "7 resources to understand better."}
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic, idx) => (
              <Link
                key={topic.slug}
                to="/comprendre-le-diabete/$topic"
                params={{ topic: topic.slug }}
                className="group flex flex-col rounded-3xl border border-border bg-background overflow-hidden hover:shadow-xl transition-shadow"
              >
                <SmartImage
                  src={`/images/img${12 + idx}.jpg`}
                  alt={topic.title[lang]}
                  ratio="aspect-[16/10]"
                  label={`img${12 + idx}`}
                />
                <div className="p-7 flex-1 flex flex-col">
                  <div className="text-xs uppercase tracking-[0.22em] text-sage">0{idx + 1}</div>
                  <h3 className="mt-2 font-display text-2xl text-navy leading-tight">{topic.title[lang]}</h3>
                  <p className="mt-3 text-sm text-foreground/65 leading-relaxed flex-1">{topic.excerpt[lang]}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy group-hover:text-sage transition-colors">
                    {t("common.readMore")} <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}