import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n";
import { LOCALES, SITE_URL, isLocale } from "@/lib/site";
import { work } from "@/lib/content/work";
import { WorkClient } from "./work-client";

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
    title: t.nav.work,
    description: t.work.intro,
    alternates: {
      canonical: `${SITE_URL}/${locale}/work/`,
      languages: {
        en: `${SITE_URL}/en/work/`,
        "zh-Hans": `${SITE_URL}/zh/work/`,
        "x-default": `${SITE_URL}/en/work/`,
      },
    },
  };
}

export default async function Work({
  params,
}: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <>
      <section className="section section--flush page-head">
        <div className="wrap head-center">
          <span className="eyebrow">{t.work.eyebrow}</span>
          <h1>{t.work.title}</h1>
          <p className="lede">{t.work.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <WorkClient entries={work} locale={locale} t={t} />
        </div>
      </section>
    </>
  );
}
