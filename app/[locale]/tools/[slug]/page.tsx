import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EntryDetail } from "@/components/entry-detail";
import { getDictionary } from "@/lib/i18n";
import { detailMetadata } from "@/lib/metadata";
import { LOCALES, isLocale } from "@/lib/site";
import { findTool, tools } from "@/lib/content/tools";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => tools.map((t) => ({ locale, slug: t.slug })));
}

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const entry = findTool(slug);
  if (!entry) return {};
  return detailMetadata({
    locale,
    path: `tools/${slug}/`,
    title: entry.title[locale],
    description: entry.summary[locale],
  });
}

export default async function ToolDetail({
  params,
}: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const entry = findTool(slug);
  if (!entry) notFound();
  const t = getDictionary(locale);

  return (
    <EntryDetail
      entry={entry}
      locale={locale}
      basePath="tools"
      labels={{
        back: t.tools.back,
        audience: t.tools.audience,
        open: t.tools.open,
        gated: t.tools.gated,
        byLabel: t.tools.byLabel,
      }}
    />
  );
}
