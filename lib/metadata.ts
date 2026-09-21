import type { Metadata } from "next";
import { SITE_URL, type Locale } from "./site";

/**
 * 详情页的 metadata。
 *
 * 为什么要专门给一个：Next 的 metadata 是逐字段合并的。[locale]/layout 里写了
 * openGraph（因为要挂 og:image），于是详情页只给 title / description 时，
 * og:title 与 og:url 仍然是首页那一套 —— 把一件作品的链接贴到 LinkedIn，
 * 卡片上显示的会是站点首页的标题。这里把两处一起给全。
 */
export function detailMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  /** 不含语言段的站内路径，例如 "work/ai-talent-ecosystem/" */
  path: string;
  title: string;
  description: string;
}): Metadata {
  const url = `${SITE_URL}/${locale}/${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/en/${path}`,
        "zh-Hans": `${SITE_URL}/zh/${path}`,
        "x-default": `${SITE_URL}/en/${path}`,
      },
    },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      locale: locale === "zh" ? "zh_CN" : "en_US",
      images: [{ url: `${SITE_URL}/og.png`, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
