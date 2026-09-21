import type { MetadataRoute } from "next";
import { LOCALES, SITE_URL } from "@/lib/site";
import { work } from "@/lib/content/work";
import { tools } from "@/lib/content/tools";

/**
 * sitemap.xml。静态导出时由 next build 生成一次，不是运行时接口。
 *
 * 只收录真正存在的路由：两种语言 × （固定页 + 每一件 work / tool 的详情页）。
 * Insights 目前是空的，但列表页本身存在，所以保留。
 * 每条都带 alternates，让搜索引擎知道中英是同一页的两个版本。
 */
const STATIC_PATHS = ["", "about/", "work/", "tools/", "insights/", "contact/"];

/** output: "export" 下这类路由必须显式声明为静态，否则 next build 会当成运行时接口而报错。 */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...STATIC_PATHS,
    ...work.map((w) => `work/${w.slug}/`),
    ...tools.map((t) => `tools/${t.slug}/`),
  ];

  return paths.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}/${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
      alternates: {
        languages: {
          en: `${SITE_URL}/en/${path}`,
          "zh-Hans": `${SITE_URL}/zh/${path}`,
        },
      },
    }))
  );
}
