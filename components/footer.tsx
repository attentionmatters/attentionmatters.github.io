import Link from "next/link";
import type { Locale } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n";
import { LanguageToggle } from "./language-toggle";
import { EMAIL, LINKEDIN } from "@/lib/profile";

export function Footer({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <footer className="foot">
      <div className="wrap foot__cols">
        <div>
          <span className="mark mark--static" aria-hidden="true">GM</span>
          <p className="foot__statement">{t.footer.statement}</p>
        </div>

        <div>
          <span className="eyebrow">{t.footer.nav}</span>
          <ul className="foot__list">
            <li><Link href={`/${locale}/`}>{t.nav.home}</Link></li>
            <li><Link href={`/${locale}/about/`}>{t.nav.about}</Link></li>
            <li><Link href={`/${locale}/work/`}>{t.nav.work}</Link></li>
            <li><Link href={`/${locale}/tools/`}>{t.nav.tools}</Link></li>
            <li><Link href={`/${locale}/insights/`}>{t.nav.insights}</Link></li>
            <li><Link href={`/${locale}/contact/`}>{t.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <span className="eyebrow">{t.footer.elsewhere}</span>
          <ul className="foot__list">
            <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><a href={LINKEDIN} rel="me noopener" target="_blank">LinkedIn</a></li>
          </ul>
          <div className="foot__lang">
            <LanguageToggle locale={locale} />
          </div>
        </div>
      </div>

      <div className="wrap foot__bar">
        <span className="num">{t.footer.rights}</span>
        <span>{t.footer.built}</span>
      </div>
    </footer>
  );
}
