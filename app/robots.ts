import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * robots.txt。
 *
 * 站点根路径 "/" 只是一段跳转脚本，没有内容，已在该页 metadata 里标了
 * noindex；这里不再 Disallow —— 一旦 Disallow，爬虫连页面都不会读，
 * 也就看不到那条 noindex，反而更容易把空壳页留在索引里。
 */
/** output: "export" 下这类路由必须显式声明为静态，否则 next build 会当成运行时接口而报错。 */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
