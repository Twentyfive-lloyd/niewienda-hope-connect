import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { HandCoins, Users, Handshake, Mail, ArrowRight, Heart, Facebook, Instagram, Linkedin } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { SmartImage } from "@/components/site/SmartImage";
import { useI18n } from "@/lib/i18n";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/nous-soutenir")({
  head: () => ({
    meta: [
      { title: "Nous Soutenir — Niewienda Health e.V." },
      { name: "description", content: "Don, bénévolat, partenariat — soutenez Niewienda Health e.V." },
      { property: "og:title", content: "Nous Soutenir — Niewienda Health e.V." },
      { property: "og:description", content: "Soutenez notre mission contre le diabète en Afrique." },
    ],
  }),
  component: SupportPage,
});

function SupportPage() {
  const { t, lang } = useI18n();
  const [sent, setSent] = useState(false);

  const ways = [
    { icon: HandCoins, title: t("cta.donate"), body: lang === "fr" ? "Chaque don finance directement nos campagnes de dépistage et notre suivi médical." : "Every donation directly funds our screening campaigns and medical follow-up.", link: "https://gofund.me/41a559981", linkLabel: lang === "fr" ? "Contribuer à la cagnotte" : "Contribute to the fundraiser" },
    { icon: Users, title: t("cta.volunteer"), body: lang === "fr" ? "Mettez vos compétences au service d'une mission qui a du sens." : "Bring your skills to a mission that matters." },
    { icon: Handshake, title: t("cta.partner"), body: lang === "fr" ? "Institutions, entreprises, associations : construisons ensemble des projets durables." : "Institutions, companies, associations: let's build lasting projects together." },
    { icon: Mail, title: t("cta.contact"), body: lang === "fr" ? "Une question, un projet : écrivez-nous, nous vous répondrons personnellement." : "A question, a project: write to us, we'll answer personally." },
  ];

  const faqs = lang === "fr" ? [
    { q: "Comment mon don est-il utilisé ?", a: "Nos ressources sont allouées en priorité aux programmes de terrain : dépistage, sensibilisation et accompagnement médical." },
    { q: "Peut-on devenir bénévole à distance ?", a: "Oui. Traduction, communication, gestion de projet : de nombreuses missions peuvent être menées à distance." },
    { q: "Proposez-vous des reçus fiscaux ?", a: "Selon le pays et le montant, un reçu peut être délivré. Contactez-nous pour plus d'informations." },
  ] : [
    { q: "How is my donation used?", a: "Our resources are directed first to field programs: screening, awareness and medical follow-up." },
    { q: "Can I volunteer remotely?", a: "Yes. Translation, communication, project management: many missions can be done remotely." },
    { q: "Do you issue tax receipts?", a: "Depending on your country and amount, a receipt may be issued. Please contact us for details." },
  ];

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") as string;
    const email = fd.get("email") as string;
    const subject = fd.get("subject") as string;
    const message = fd.get("message") as string;
    const body = `Nom: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:Niewienda.health@gmail.com?subject=${encodeURIComponent(subject || "Contact site")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <SiteLayout>
      <section className="relative -mt-20 h-[72vh] min-h-[540px] w-full overflow-hidden bg-navy">
        <img src="/images/img27.png" alt="" className="absolute inset-0 h-full w-full object-cover object-center" onError={(e) => (e.currentTarget.style.display = "none")} />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/70 to-sage/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
        <div className="relative z-10 flex h-full items-end pb-16 md:pb-24">
          <div className="w-full px-4 text-primary-foreground sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="max-w-3xl">
                <div className="text-xs uppercase tracking-[0.22em] text-white/80">{t("support.hero.eyebrow")}</div>
                <h1 className="mt-4 font-display text-5xl leading-[1.05] md:text-7xl">{t("support.hero.title")}</h1>
                <p className="mt-6 text-lg text-white/85">{t("support.hero.subtitle")}</p>
              </div>
              <div className="card-elevated rounded-[2rem] bg-white/90 p-6 text-navy">
                <div className="eyebrow">Pourquoi agir</div>
                <div className="mt-3 font-display text-2xl">Chaque forme de soutien apporte une réponse concrète et durable.</div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">Votre aide permet d’élargir l’accès à l’information, au dépistage et à l’accompagnement humain.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="section-shell">
          <div className="max-w-2xl">
            <div className="eyebrow">{t("support.ways.title")}</div>
            <h2 className="mt-3 font-display text-4xl text-navy md:text-5xl">Choisissez votre manière d’agir</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {ways.map((w) => {
              const isDonate = w.link != null;
              const Card = (
                <div className={`rounded-[1.6rem] border p-8 transition-colors ${isDonate ? 'border-sage bg-cream' : 'border-border bg-background hover:border-sage'}`}>
                  <w.icon className={`h-6 w-6 ${isDonate ? 'text-navy' : 'text-sage'}`} />
                  <h3 className="mt-5 font-display text-2xl text-navy">{w.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/65">{w.body}</p>
                  {w.link && (
                    <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-navy">
                      {w.linkLabel} <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </div>
              );
              return w.link ? (
                <a key={w.title} href={w.link} target="_blank" rel="noopener noreferrer">
                  {Card}
                </a>
              ) : (
                <div key={w.title}>{Card}</div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-cream py-24 md:py-32">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-4">
            <div className="eyebrow">Transparence</div>
            <h2 className="font-display text-4xl text-navy md:text-5xl">Des engagements clairs, un suivi rassurant</h2>
            <p className="text-lg leading-relaxed text-foreground/70">Nous nous efforçons d’offrir des parcours simples, des réponses honnêtes et un accompagnement humain à chaque étape.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Impact direct", body: "Votre aide finance des actions concrètes sur le terrain." },
                { title: "Écoute", body: "Un contact humain pour répondre à vos questions et projets." },
              ].map((item) => (
                <div key={item.title} className="card-elevated rounded-[1.4rem] p-5">
                  <div className="font-display text-xl text-navy">{item.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/65">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card-soft rounded-[2rem] p-8">
            <div className="eyebrow">Contact</div>
            <h3 className="mt-3 font-display text-3xl text-navy">{t("support.contact.title")}</h3>
            <p className="mt-4 text-lg text-foreground/70">{t("support.contact.body")}</p>
            <div className="mt-6 flex items-center gap-3 text-sm">
              <Mail className="h-4 w-4 text-sage" />
              <a href="mailto:Niewienda.health@gmail.com" className="break-all text-navy transition-colors hover:text-sage">Niewienda.health@gmail.com</a>
            </div>
            <div className="mt-6 flex items-center gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-navy transition-colors hover:bg-sage-soft">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="card-elevated rounded-[2rem] p-8">
            <h2 className="font-display text-3xl text-navy md:text-4xl">{t("support.form.send")}</h2>
            <form onSubmit={submit} className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.18em] text-navy/70">{t("support.form.name")}</span>
                  <input required name="name" type="text" className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-sage focus:ring-2 focus:ring-sage/20" />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.18em] text-navy/70">{t("support.form.email")}</span>
                  <input required name="email" type="email" className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-sage focus:ring-2 focus:ring-sage/20" />
                </label>
              </div>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.18em] text-navy/70">{t("support.form.subject")}</span>
                <input name="subject" type="text" className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-sage focus:ring-2 focus:ring-sage/20" />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.18em] text-navy/70">{t("support.form.message")}</span>
                <textarea required name="message" rows={5} className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-sage focus:ring-2 focus:ring-sage/20" />
              </label>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-navy-soft">
                {t("support.form.send")} <ArrowRight className="h-4 w-4" />
              </button>
              {sent && <div className="text-sm text-sage">{t("support.form.sent")}</div>}
            </form>
          </div>
          <div className="space-y-6">
            <div className="card-soft rounded-[2rem] p-8">
              <h3 className="font-display text-3xl text-navy">{t("support.faq.title")}</h3>
              <Accordion type="single" collapsible className="mt-6">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`f${i}`} className="border-border">
                    <AccordionTrigger className="text-left text-navy hover:no-underline">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-foreground/70 leading-relaxed">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="card-elevated rounded-[2rem] bg-navy p-8 text-primary-foreground">
              <div className="font-display text-3xl">Votre engagement compte</div>
              <p className="mt-3 text-white/80">Chaque message, don ou partenariat nous aide à aller plus loin avec plus de qualité.</p>
              <a href="https://gofund.me/41a559981" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-sage px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-sage/90">
                {t("cta.donate")} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}