import type { Bilingual } from "./types";
import type { Topic } from "./shared";

/**
 * Insights = 结论，不是材料。
 * kind 区分两类，页面上会标出来 ——
 *   data    有数据支撑（通常背后就是 Work 里的某件东西）
 *   opinion 个人判断，没有数据，只有十二年的经验
 */
export type InsightKind = "data" | "opinion";

export type InsightEntry = {
  slug: string;
  /** YYYY-MM-DD */
  date: string;
  readingMinutes: number;
  status: "live" | "draft";
  kind: InsightKind;
  topic: Topic;
  /** 若有数据支撑，指向 Work 里对应条目的 slug */
  basedOn: string | null;
  title: Bilingual;
  excerpt: Bilingual;
  body: Bilingual[];
};

/**
 * 待 Peter 提供真实题目。
 * 空数组时页面显示「待填写」占位，绝不拿编造的标题充数。
 *
 * 注意：文章详情页路由 app/[locale]/insights/[slug]/ 已暂时撤下 ——
 * 静态导出要求动态路由至少有一个参数，空列表会导致构建失败。
 * 往这个数组里加第一篇时，把 .insight-detail.tsx.bak 放回该路径即可。
 */
export const insights: InsightEntry[] = [];

export function findInsight(slug: string): InsightEntry | undefined {
  return insights.find((i) => i.slug === slug);
}
