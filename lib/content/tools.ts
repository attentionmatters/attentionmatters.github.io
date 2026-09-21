import type { Entry } from "./shared";

/** Tools = 你会回来用第二次的东西：拿来查、拿来核、持续更新。 */
export type ToolEntry = Entry;

export const tools: ToolEntry[] = [
  {
    slug: "conference-calendar",
    status: "live",
    visibility: "public",
    source: "artifact",
    by: null,
    title: { en: "Top-Conference Calendar", zh: "顶会日历" },
    summary: {
      en: "Deadlines, dates, and the one people actually miss — ticket release time.",
      zh: "截稿、会期，以及最容易错过的那个：开票时间。",
    },
    audience: {
      en: "Anyone who has found out a conference sold out the week they decided to go.",
      zh: "决定要去、结果发现票已经卖完了的人。",
    },
    href: "https://claude.ai/code/artifact/ff04c44a-efff-4271-aacd-584793b916c7",
    date: "2026-09",
  },
  {
    slug: "ontario-hr-law-map",
    status: "live",
    visibility: "public",
    source: "artifact",
    by: null,
    title: { en: "Ontario HR Law Map", zh: "安大略 HR 法规地图" },
    summary: {
      en: "Employment standards, human rights and privacy, laid out so you can find the rule you need without hiring someone to explain it first.",
      zh: "雇佣标准、人权、隐私铺成一张能走的图，不用先请人解释一遍，要哪条找得到哪条。",
    },
    audience: {
      en: "Anyone running HR in Ontario at a company too small to have counsel.",
      zh: "在安省做 HR、公司还小没有法务的人。",
    },
    href: "https://claude.ai/code/artifact/d4f79620-3041-4500-92e9-ed278f3100b5",
    date: "2026-09",
  },
  {
    slug: "ai-paper-daily",
    status: "live",
    visibility: "public",
    source: "artifact",
    by: null,
    title: { en: "AI Paper Daily", zh: "AI 论文日读" },
    summary: {
      en: "The papers worth your time, with what each one actually changes — so you can keep up without opening arXiv every morning.",
      zh: "值得花时间的论文，以及每篇到底改变了什么 —— 不用每天早上刷 arXiv 也能跟上。",
    },
    audience: {
      en: "People who need to stay current on AI but do not read papers for a living.",
      zh: "需要跟上 AI 进展、但不是靠读论文吃饭的人。",
    },
    href: "https://claude.ai/code/artifact/1c1e1d73-ea0d-4dec-9156-836724ec7af1",
    date: "2026-09",
  },
];

/** 我做的 */
export const mine = tools.filter((t) => !t.by);

/** 我在用的 —— 别人的项目，页面上会标注原作者 */
export const recommended = tools.filter((t) => !!t.by);

export function findTool(slug: string): ToolEntry | undefined {
  return tools.find((t) => t.slug === slug);
}
