import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, Info } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { SmartImage } from "@/components/site/SmartImage";
import { useI18n } from "@/lib/i18n";
import { topics, imageForTopic } from "@/lib/diabetes-topics";

export const Route = createFileRoute("/comprendre-le-diabete/$topic")({
  loader: ({ params }) => {
    const topic = topics.find((x) => x.slug === params.topic);
    if (!topic) throw notFound();
    return { slug: topic.slug };
  },
  head: ({ params }) => {
    const topic = topics.find((x) => x.slug === params.topic);
    if (!topic) return { meta: [{ title: "Ressource — Niewienda Health e.V." }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${topic.title.fr} — Niewienda Health e.V.` },
        { name: "description", content: topic.excerpt.fr },
        { property: "og:title", content: topic.title.fr },
        { property: "og:description", content: topic.excerpt.fr },
      ],
    };
  },
  errorComponent: ({ error }) => (
    <SiteLayout>
      <div className="container-site py-24 text-center">
        <h1 className="font-display text-4xl text-navy">Erreur</h1>
        <p className="mt-4 text-foreground/70">{error.message}</p>
      </div>
    </SiteLayout>
  ),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-site py-24 text-center">
        <h1 className="font-display text-4xl text-navy">Ressource introuvable</h1>
        <Link to="/comprendre-le-diabete" className="mt-6 inline-flex items-center gap-2 text-sage">
          <ArrowLeft className="h-4 w-4" /> Retour aux ressources
        </Link>
      </div>
    </SiteLayout>
  ),
  component: TopicPage,
});

function TopicPage() {
  const { slug } = Route.useLoaderData();
  const { lang, t } = useI18n();
  const currentIdx = topics.findIndex((x) => x.slug === slug);
  const topic = topics[currentIdx];
  const banner = imageForTopic(topic.slug, currentIdx);
  const sections = topic.sections[lang];
  const prev = topics[currentIdx - 1];
  const next = topics[currentIdx + 1];

  return (
    <SiteLayout>
      <section className="relative -mt-20 h-[52vh] min-h-[400px] w-full overflow-hidden">
        <img src={banner.src} alt="" className="absolute inset-0 h-full w-full object-cover" onError={(e) => (e.currentTarget.style.display = "none")} />
        <div className="absolute inset-0 bg-gradient-to-br from-sage-soft to-cream" />
        <div className="absolute inset-0 hero-overlay opacity-70" />
        <div className="relative z-10 flex h-full items-end pb-14">
          <div className="w-full px-4 text-primary-foreground sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <Link to="/comprendre-le-diabete" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/80 hover:text-white">
              <ArrowLeft className="h-3.5 w-3.5" /> {t("nav.understand")}
            </Link>
              <h1 className="mt-5 font-display text-5xl leading-[1.05] md:text-6xl">{topic.title[lang]}</h1>
            </div>
          </div>
        </div>
      </section>

      <article className="py-20 md:py-28">
        <div className="section-shell">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <p className="font-display text-2xl leading-relaxed text-navy md:text-3xl">{topic.intro[lang]}</p>
              <div className="card-elevated rounded-[1.75rem] p-6">
                <div className="eyebrow">À retenir</div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">Chaque ressource est pensée pour offrir un contenu clair, utile et facile à parcourir.</p>
              </div>
            </div>

            <div className="mt-16 space-y-8">
              {sections.map((s, i) => (
                <section key={i} className="card-soft rounded-[2rem] p-8 md:p-10">
                  <h2 className="font-display text-3xl text-navy md:text-4xl">{s.heading}</h2>
                  {s.paragraphs?.map((p, j) => (
                    <p key={j} className="mt-5 text-lg leading-relaxed text-foreground/80">{p}</p>
                  ))}
                  {s.bullets && (
                    <ul className="mt-6 space-y-3">
                      {s.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-3 text-lg text-foreground/80">
                          <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-sage" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.callout && (
                    <aside className="mt-8 rounded-[1.5rem] border border-sage/30 bg-sage-soft/40 p-6">
                      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-navy">
                        <Info className="h-4 w-4" /> {s.callout.title}
                      </div>
                      <p className="mt-3 text-base leading-relaxed text-navy/90">{s.callout.body}</p>
                    </aside>
                  )}
                </section>
              ))}
            </div>

            <div className="mt-20 grid gap-4 border-t border-border pt-10 sm:grid-cols-2">
              {prev ? (
                <Link to="/comprendre-le-diabete/$topic" params={{ topic: prev.slug }} className="group rounded-[1.5rem] border border-border bg-background p-6 hover:border-sage">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-sage"><ArrowLeft className="h-3.5 w-3.5" /> {lang === "fr" ? "Précédent" : "Previous"}</div>
                  <div className="mt-2 font-display text-xl text-navy">{prev.title[lang]}</div>
                </Link>
              ) : <div />}
              {next && (
                <Link to="/comprendre-le-diabete/$topic" params={{ topic: next.slug }} className="group rounded-[1.5rem] border border-border bg-background p-6 text-right hover:border-sage sm:col-start-2">
                  <div className="flex items-center justify-end gap-2 text-xs uppercase tracking-[0.22em] text-sage">{lang === "fr" ? "Suivant" : "Next"} <ArrowRight className="h-3.5 w-3.5" /></div>
                  <div className="mt-2 font-display text-xl text-navy">{next.title[lang]}</div>
                </Link>
              )}
            </div>

            <div className="mt-16 rounded-[2rem] bg-navy p-10 text-center text-primary-foreground md:p-12">
              <h3 className="font-display text-3xl">{lang === "fr" ? "Passez à l'action" : "Take action"}</h3>
              <p className="mt-3 text-white/80">{lang === "fr" ? "Découvrez nos actions ou soutenez notre mission." : "Discover our actions or support our mission."}</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link to="/nos-actions" className="rounded-full bg-sage px-6 py-3 text-sm font-medium">{t("nav.actions")}</Link>
                <Link to="/nous-soutenir" className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium hover:bg-white/10">{t("cta.support")}</Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}