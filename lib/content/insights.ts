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
  /** 正文段落；draft 状态下可以为空数组 */
  body: Bilingual[];
};

/** 先占位，把索引页和文章页的版式与路由跑通。 */
export const insights: InsightEntry[] = [
  {
    slug: "does-olympiad-background-predict-anything",
    date: "2026-09-18",
    readingMinutes: 7,
    status: "draft",
    kind: "data",
    topic: "talent",
    basedOn: "imo-chinese-contestants",
    title: {
      en: "Does an olympiad medal predict anything fifteen years later?",
      zh: "一块奥赛奖牌，十五年后还预测得了什么吗？",
    },
    excerpt: {
      en: "I tracked every Chinese IMO contestant for fifteen years to find out. The answer is yes, but not in the way most recruiters assume.",
      zh: "我把十五年的 IMO 华人选手全追了一遍。答案是「有」，但不是大多数招聘者以为的那种有。",
    },
    body: [],
  },
  {
    slug: "what-ai-talent-actually-means",
    date: "2026-09-01",
    readingMinutes: 6,
    status: "draft",
    kind: "opinion",
    topic: "talent",
    basedOn: null,
    title: {
      en: 'What "AI talent" actually means when you\'re the one hiring',
      zh: "当你是那个招人的人，「AI 人才」到底指什么",
    },
    excerpt: {
      en: "The phrase covers at least four different people. Confusing them is why most AI searches stall.",
      zh: "这个词至少盖着四类完全不同的人。把他们混为一谈，是大多数 AI 岗位招不动的原因。",
    },
    body: [],
  },
  {
    slug: "where-the-data-layer-value-sits",
    date: "2026-08-20",
    readingMinutes: 8,
    status: "draft",
    kind: "data",
    topic: "ecosystem",
    basedOn: "ai-data-industry-map",
    title: {
      en: "The data layer is where the margin went",
      zh: "利润跑到数据层去了",
    },
    excerpt: {
      en: "Mapping the data industry underneath the models turned up something I didn't expect about where the durable businesses are.",
      zh: "把模型底下那层数据产业铺开之后，我对「哪些生意撑得住」的判断被改了。",
    },
    body: [],
  },
];

export function findInsight(slug: string): InsightEntry | undefined {
  return insights.find((i) => i.slug === slug);
}
