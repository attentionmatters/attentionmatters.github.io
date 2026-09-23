import type { Entry, Topic } from "./shared";

/** Work = 看一次，得一个结论。材料本身，不是结论文章（那是 Insights）。 */
export type WorkEntry = Entry & { topic: Topic };

/**
 * 只收 Peter 确认要的几件。
 *
 * 双语规则：
 *  - 英文页必须纯英文，一个汉字都不能有（有母语者会看）
 *  - 中文页可以留英文原文，不必翻译
 */
export const work: WorkEntry[] = [
  {
    slug: "ai-talent-ecosystem",
    topic: "talent",
    status: "live",
    visibility: "public",
    source: "artifact",
    title: { en: "AI Talent Ecosystem", zh: "AI 人才地图" },
    summary: {
      en: "Where the field's people come from, and which groups actually produce them.",
      zh: "这个领域的人从哪儿来，以及真正在产出人才的是哪些地方。",
    },
    audience: {
      en: "Anyone planning an AI hiring push who needs a map before a shortlist.",
      zh: "要做 AI 招聘规划、需要先有地图再有名单的人。",
    },
    href: "https://claude.ai/code/artifact/b554038f-d5e5-4474-b0fd-497656f372da",
    cover: null,
    date: "2026-09",
  },
  {
    slug: "ai-info-ecosystem",
    topic: "ecosystem",
    status: "live",
    visibility: "public",
    source: "artifact",
    title: { en: "AI Info Ecosystem", zh: "AI 生态全景" },
    summary: {
      en: "How the field is actually put together — the layers, and who occupies each one.",
      zh: "这个领域到底是怎么搭起来的 —— 有哪几层，每层站着谁。",
    },
    audience: {
      en: "Anyone getting oriented in AI without reading a year of news first.",
      zh: "想快速摸清 AI 全貌、又不想先读一年新闻的人。",
    },
    href: "https://claude.ai/code/artifact/8338a457-e3fd-4cd5-97d1-7bd33bb0f5bf",
    cover: null,
    date: "2026-09",
  },
  {
    slug: "imo-talent-insight",
    topic: "talent",
    status: "live",
    visibility: "public",
    source: "artifact",
    title: { en: "IMO Talent Insight", zh: "IMO 竞赛人才洞察" },
    summary: {
      en: "Eighteen editions of the International Mathematical Olympiad, and where its contestants actually ended up.",
      zh: "国际数学奥林匹克十八届全量成绩，以及这些选手后来到底去了哪儿。",
    },
    audience: {
      en: "Recruiters and founders wondering whether competition background predicts anything at all.",
      zh: "在想「竞赛背景到底预测什么」的招聘者和创始人。",
    },
    href: "https://claude.ai/code/artifact/d660b74b-f496-43f8-853f-147a8346ceb1",
    cover: null,
    parts: [
      {
        title: { en: "Results", zh: "赛事全貌" },
        note: {
          en: "All 10,634 entries, 2009-2026 - award structure, teams, year-by-year.",
          zh: "10,634 条参赛记录，2009–2026 —— 奖项构成、代表队战绩、逐年趋势。",
        },
        href: "https://claude.ai/code/artifact/d660b74b-f496-43f8-853f-147a8346ceb1#results",
      },
      {
        title: { en: "The Candidate List", zh: "候选人名单" },
        note: {
          en: "542 contestants of Chinese heritage, searchable, with contact channels.",
          zh: "542 名华人选手，可搜可筛，带建联渠道。",
        },
        href: "https://claude.ai/code/artifact/d660b74b-f496-43f8-853f-147a8346ceb1#people",
      },
      {
        title: { en: "Where the Medalists Went", zh: "奖牌得主去向" },
        note: {
          en: "All medalists regardless of heritage - MIT dominates, quant finance competes hardest.",
          zh: "全体奖牌得主，不限族裔 —— MIT 一家独大，量化金融抢人最凶。",
        },
        href: "https://claude.ai/code/artifact/d660b74b-f496-43f8-853f-147a8346ceb1#medal",
      },
      {
        title: { en: "2017 in Depth", zh: "2017 深挖" },
        note: {
          en: "One edition taken apart, contestant by contestant.",
          zh: "单独一届的完整拆解。",
        },
        href: "https://claude.ai/code/artifact/d660b74b-f496-43f8-853f-147a8346ceb1#y2017",
      },
      {
        title: { en: "How It Was Built", zh: "方法论" },
        note: {
          en: "Where the data comes from, and where it cannot be trusted.",
          zh: "数据怎么来的，哪里不可信。",
        },
        href: "https://claude.ai/code/artifact/d660b74b-f496-43f8-853f-147a8346ceb1#method",
      },
    ],
    date: "2026-09",
  },
  {
    slug: "ioi-talent-insight",
    topic: "talent",
    status: "live",
    visibility: "public",
    source: "artifact",
    title: { en: "IOI Talent Insight", zh: "IOI 竞赛人才洞察" },
    summary: {
      en: "The informatics olympiad, same eighteen-year window - a markedly more AI-facing pool than the maths side.",
      zh: "信息学奥林匹克，同样十八届窗口 —— 比数学那侧明显更靠近 AI 的一批人。",
    },
    audience: {
      en: "Recruiters and founders wondering whether competition background predicts anything at all.",
      zh: "在想「竞赛背景到底预测什么」的招聘者和创始人。",
    },
    href: "https://claude.ai/code/artifact/05c8db85-4c60-4ccc-8dbb-29ff1b31600a",
    cover: null,
    parts: [
      {
        title: { en: "Results", zh: "赛事全貌" },
        note: {
          en: "All 5,948 entries, 2009-2026, on the same terms as the IMO page.",
          zh: "5,948 条参赛记录，2009–2026，与 IMO 页同一套口径。",
        },
        href: "https://claude.ai/code/artifact/05c8db85-4c60-4ccc-8dbb-29ff1b31600a#results",
      },
      {
        title: { en: "The Candidate List", zh: "候选人名单" },
        note: {
          en: "352 contestants of Chinese heritage - half the headcount of the IMO list, more people in AI.",
          zh: "352 名华人选手 —— 人数只有 IMO 一半，做 AI 的反而更多。",
        },
        href: "https://claude.ai/code/artifact/05c8db85-4c60-4ccc-8dbb-29ff1b31600a#people",
      },
      {
        title: { en: "How It Was Built", zh: "方法论" },
        note: {
          en: "Where the data comes from, and where it cannot be trusted.",
          zh: "数据怎么来的，哪里不可信。",
        },
        href: "https://claude.ai/code/artifact/05c8db85-4c60-4ccc-8dbb-29ff1b31600a#method",
      },
    ],
    date: "2026-09",
  },
];

export function findWork(slug: string): WorkEntry | undefined {
  return work.find((w) => w.slug === slug);
}
