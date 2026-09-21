import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n";
import { LOCALES, SITE_URL, isLocale } from "@/lib/site";
import { EMAIL, LINKEDIN, RESUME_URL, hasResume } from "@/lib/profile";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  return {
    title: t.contact.title,
    alternates: {
      canonical: `${SITE_URL}/${locale}/contact/`,
      languages: {
        en: `${SITE_URL}/en/contact/`,
        "zh-Hans": `${SITE_URL}/zh/contact/`,
        "x-default": `${SITE_URL}/en/contact/`,
      },
    },
  };
}

export default async function Contact({
  params,
}: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <section className="section section--flush page-head">
      <div className="wrap grid-asym">
        <div className="col-head">
          <span className="eyebrow">{t.contact.eyebrow}</span>
          <h1>{t.contact.title}</h1>
        </div>
        <div className="col-body">
          <p className="lede">{t.contact.body}</p>
          <div className="rows contact-rows">
            <a className="row" href={`mailto:${EMAIL}`}>
              <span className="row__period">{t.contact.email}</span>
              <span className="row__title">{EMAIL}</span>
              <span className="row__meta" aria-hidden="true">→</span>
            </a>
            <a className="row" href={LINKEDIN} target="_blank" rel="me noopener">
              <span className="row__period">{t.contact.linkedin}</span>
              <span className="row__title">LinkedIn</span>
              <span className="row__meta" aria-hidden="true">→</span>
            </a>
            <a
              className="row"
              href={RESUME_URL}
              {...(hasResume
                ? { download: true }
                : { target: "_blank", rel: "noopener" })}
            >
              <span className="row__period">CV</span>
              <span className="row__title">
                {hasResume ? t.contact.resume : t.contact.resumeLinkedIn}
              </span>
              <span className="row__meta" aria-hidden="true">
                {hasResume ? "↓" : "↗"}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
