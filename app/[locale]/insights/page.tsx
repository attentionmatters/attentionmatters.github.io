import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n";
import { LOCALES, SITE_URL, isLocale } from "@/lib/site";
import { insights } from "@/lib/content/insights";

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
    title: t.nav.insights,
    description: t.insights.intro,
    alternates: {
      canonical: `${SITE_URL}/${locale}/insights/`,
      languages: {
        en: `${SITE_URL}/en/insights/`,
        "zh-Hans": `${SITE_URL}/zh/insights/`,
        "x-default": `${SITE_URL}/en/insights/`,
      },
    },
  };
}

export default async function Insights({
  params,
}: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  const sorted = [...insights].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <section className="section section--flush page-head">
        <div className="wrap">
          <span className="eyebrow">{t.insights.eyebrow}</span>
          <h1>{t.insights.title}</h1>
          <p className="lede">{t.insights.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {/* 堆叠行，细线分隔，不用缩略图 */}
          <div className="rows">
            {sorted.map((post) => (
              <Link
                className="row"
                key={post.slug}
                href={`/${locale}/insights/${post.slug}/`}
              >
                <span className="row__period">{post.date}</span>
                <span>
                  <span className="row__title">{post.title[locale]}</span>
                  <span className="row__outcome">{post.excerpt[locale]}</span>
                  <span className="tags">
                    <span
                      className={`tag ${post.kind === "data" ? "tag--data" : ""}`}
                    >
                      {post.kind === "data"
                        ? t.insights.backedByData
                        : t.insights.opinion}
                    </span>
                    <span className="tag">{t.topics[post.topic]}</span>
                  </span>
                </span>
                <span className="row__meta num">
                  {post.readingMinutes} {t.insights.readingTime}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
