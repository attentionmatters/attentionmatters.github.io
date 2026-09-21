import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n";
import { LOCALES, SITE_URL, isLocale } from "@/lib/site";
import { findInsight, insights } from "@/lib/content/insights";
import { findWork } from "@/lib/content/work";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    insights.map((i) => ({ locale, slug: i.slug }))
  );
}

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const post = findInsight(slug);
  if (!post) return {};
  return {
    title: post.title[locale],
    description: post.excerpt[locale],
    alternates: {
      canonical: `${SITE_URL}/${locale}/insights/${slug}/`,
      languages: {
        en: `${SITE_URL}/en/insights/${slug}/`,
        "zh-Hans": `${SITE_URL}/zh/insights/${slug}/`,
        "x-default": `${SITE_URL}/en/insights/${slug}/`,
      },
    },
    openGraph: {
      type: "article",
      publishedTime: post.date,
      title: post.title[locale],
      description: post.excerpt[locale],
    },
  };
}

export default async function InsightDetail({
  params,
}: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const post = findInsight(slug);
  if (!post) notFound();
  const t = getDictionary(locale);
  const source = post.basedOn ? findWork(post.basedOn) : undefined;

  return (
    <article className="section section--flush page-head">
      <div className="wrap prose">
        <Link className="back" href={`/${locale}/insights/`}>
          <span aria-hidden="true">←</span> {t.insights.back}
        </Link>

        <span className="eyebrow num">
          {post.date} · {post.readingMinutes} {t.insights.readingTime}
        </span>
        <h1>{post.title[locale]}</h1>

        <div className="tags">
          <span className={`tag ${post.kind === "data" ? "tag--data" : ""}`}>
            {post.kind === "data" ? t.insights.backedByData : t.insights.opinion}
          </span>
          <span className="tag">{t.topics[post.topic]}</span>
        </div>

        <p className="lede">{post.excerpt[locale]}</p>

        {/* 有数据支撑的，直接链回材料本身 —— 这是 Work 与 Insights 的接缝 */}
        {source && (
          <p className="source-link bar">
            <Link href={`/${locale}/work/${source.slug}/`}>
              {locale === "zh" ? "背后的数据：" : "The data behind this: "}
              {source.title[locale]} <span aria-hidden="true">→</span>
            </Link>
          </p>
        )}

        {post.body.length > 0 ? (
          post.body.map((para, i) => <p key={i}>{para[locale]}</p>)
        ) : (
          <p className="muted-note bar">
            {locale === "zh" ? "这篇还在写。" : "This one is still being written."}
          </p>
        )}
      </div>
    </article>
  );
}
