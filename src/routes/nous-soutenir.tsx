import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { HandCoins, Users, Handshake, Mail, ArrowRight, Facebook, Instagram, Linkedin } from "lucide-react";
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
    { icon: HandCoins, title: t("cta.donate"), body: lang === "fr" ? "Chaque don finance directement nos campagnes de dépistage et notre suivi médical." : "Every donation directly funds our screening campaigns and medical follow-up." },
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
      {/* Hero */}
      <section className="relative -mt-20 h-[70vh] min-h-[500px] w-full overflow-hidden">
        <img src="/images/img21.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" onError={(e) => (e.currentTarget.style.display = "none")} />
        <div className="absolute inset-0 bg-gradient-to-br from-navy to-sage" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 flex h-full items-end pb-16 md:pb-24">
          <div className="container-site text-primary-foreground max-w-3xl">
            <div className="text-xs uppercase tracking-[0.22em] text-white/80">{t("support.hero.eyebrow")}</div>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] md:text-7xl">{t("support.hero.title")}</h1>
            <p className="mt-6 text-lg text-white/85">{t("support.hero.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Ways */}
      <section className="py-24 md:py-32">
        <div className="container-site">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl text-navy md:text-5xl">{t("support.ways.title")}</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ways.map((w) => (
              <div key={w.title} className="rounded-3xl border border-border bg-background p-8 hover:border-sage transition-colors">
                <w.icon className="h-6 w-6 text-sage" />
                <h3 className="mt-5 font-display text-2xl text-navy">{w.title}</h3>
                <p className="mt-3 text-sm text-foreground/65 leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact + FAQ */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-site grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl text-navy md:text-5xl">{t("support.contact.title")}</h2>
            <p className="mt-4 text-lg text-foreground/70">{t("support.contact.body")}</p>

            <div className="mt-6 flex items-center gap-3 text-sm">
              <Mail className="h-4 w-4 text-sage" />
              <a href="mailto:Niewienda.health@gmail.com" className="text-navy hover:text-sage break-all">Niewienda.health@gmail.com</a>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background border border-border text-navy hover:bg-sage-soft transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <form onSubmit={submit} className="mt-10 space-y-4">
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
                <textarea required name="message" rows={5} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-sage focus:ring-2 focus:ring-sage/20 resize-none" />
              </label>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-navy-soft transition-colors">
                {t("support.form.send")} <ArrowRight className="h-4 w-4" />
              </button>
              {sent && <div className="text-sm text-sage">{t("support.form.sent")}</div>}
            </form>
          </div>

          <div>
            <h3 className="font-display text-3xl text-navy md:text-4xl">{t("support.faq.title")}</h3>
            <Accordion type="single" collapsible className="mt-6">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`f${i}`} className="border-border">
                  <AccordionTrigger className="text-left text-navy hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-foreground/70 leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final Banner */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <img src="/images/img16.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" onError={(e) => (e.currentTarget.style.display = "none")} />
        <div className="absolute inset-0 bg-gradient-to-br from-navy to-sage" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 flex h-full items-center">
          <div className="container-site text-primary-foreground text-center">
            <h2 className="font-display text-4xl md:text-6xl max-w-4xl mx-auto">{t("support.final.title")}</h2>
            <p className="mt-5 text-lg text-white/85 max-w-2xl mx-auto">{t("support.final.body")}</p>
            <a href="mailto:Niewienda.health@gmail.com" className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-navy hover:bg-sage-soft transition-colors">
              {t("cta.donate")} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}