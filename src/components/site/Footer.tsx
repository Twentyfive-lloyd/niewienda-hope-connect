import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border/70 bg-navy text-primary-foreground">
      <div className="section-shell grid gap-12 py-16 md:grid-cols-4">
        <div className="max-w-md md:col-span-2">
          <div className="flex items-center gap-3">
            <img src="/images/logo.jpg" alt="" className="h-12 w-12 rounded-full object-cover" />
            <div>
              <div className="font-display text-2xl">Niewienda</div>
              <div className="text-xs uppercase tracking-[0.22em] text-sage-soft/90">health e.V.</div>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-primary-foreground/80">{t("footer.tagline")}</p>
          <div className="mt-6 flex items-center gap-3">
            <a href="https://www.instagram.com/niewienda.health.ev" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/company/niewienda-health-e-v" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-sage-soft/80">{t("footer.explore")}</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="transition-colors hover:text-sage-soft">{t("nav.home")}</Link></li>
            <li><Link to="/notre-mission" className="transition-colors hover:text-sage-soft">{t("nav.mission")}</Link></li>
            <li><Link to="/nos-actions" className="transition-colors hover:text-sage-soft">{t("nav.actions")}</Link></li>
            <li><Link to="/comprendre-le-diabete" className="transition-colors hover:text-sage-soft">{t("nav.understand")}</Link></li>
            <li><Link to="/nous-soutenir" className="transition-colors hover:text-sage-soft">{t("nav.support")}</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-sage-soft/80">{t("footer.contact")}</div>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/85">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:Niewienda.health@gmail.com" className="break-all transition-colors hover:text-sage-soft">Niewienda.health@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col items-center justify-between gap-4 py-6 text-xs text-primary-foreground/70 md:flex-row">
          <div>© {year} Niewienda Health e.V. — {t("footer.rights")}</div>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-sage-soft">{t("footer.legal")}</a>
            <a href="#" className="transition-colors hover:text-sage-soft">{t("footer.privacy")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}