import type { Entry } from "./shared";

/** Tools = 你会回来用第二次的东西：拿来查、拿来核、持续更新。 */
export type ToolEntry = Entry;

export const tools: ToolEntry[] = [
  {
    slug: "ai-conference-calendar",
    status: "live",
    visibility: "public",
    source: "artifact",
    by: null,
    title: { en: "AI Conference Calendar", zh: "顶会日历" },
    summary: {
      en: "Deadlines, dates, and the one people actually miss — ticket release time.",
      zh: "截稿、会期，以及最容易错过的那个：开票时间。",
    },
    audience: {
      en: "Anyone who has found out a conference sold out the week they decided to go.",
      zh: "决定要去、结果发现票已经卖完了的人。",
    },
    href: "https://claude.ai/code/artifact/ff04c44a-efff-4271-aacd-584793b916c7",
    cover: null,
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
