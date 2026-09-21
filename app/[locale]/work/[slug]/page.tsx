import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EntryDetail } from "@/components/entry-detail";
import { getDictionary } from "@/lib/i18n";
import { LOCALES, SITE_URL, isLocale } from "@/lib/site";
import { findWork, work } from "@/lib/content/work";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => work.map((w) => ({ locale, slug: w.slug })));
}

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const entry = findWork(slug);
  if (!entry) return {};
  return {
    title: entry.title[locale],
    description: entry.summary[locale],
    alternates: {
      canonical: `${SITE_URL}/${locale}/work/${slug}/`,
      languages: {
        en: `${SITE_URL}/en/work/${slug}/`,
        "zh-Hans": `${SITE_URL}/zh/work/${slug}/`,
        "x-default": `${SITE_URL}/en/work/${slug}/`,
      },
    },
  };
}

export default async function WorkDetail({
  params,
}: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const entry = findWork(slug);
  if (!entry) notFound();
  const t = getDictionary(locale);

  return (
    <EntryDetail
      entry={entry}
      locale={locale}
      basePath="work"
      labels={{
        back: t.work.back,
        audience: t.work.audience,
        open: t.work.open,
        gated: t.work.gated,
        parts: t.work.parts,
      }}
      extra={<span className="tag">{t.topics[entry.topic]}</span>}
    />
  );
}
