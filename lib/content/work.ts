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
    slug: "olympiad-talent-map",
    topic: "talent",
    status: "live",
    visibility: "public",
    source: "artifact",
    title: { en: "Olympiad Talent Map", zh: "竞赛人才洞察" },
    summary: {
      en: "Where olympiad medalists actually end up, fifteen years on — and whether the signal is worth chasing when you hire.",
      zh: "奥赛奖牌得主十五年后到底去了哪儿 —— 以及招人时，这个信号究竟值不值得追。",
    },
    audience: {
      en: "Recruiters and founders wondering whether competition background predicts anything at all.",
      zh: "在想「竞赛背景到底预测什么」的招聘者和创始人。",
    },
    href: null,
    cover: null,
    parts: [
      {
        title: { en: "The Overview", zh: "总览" },
        note: {
          en: "The conclusion, and how it was reached.",
          zh: "结论，以及它是怎么得出来的。",
        },
        href: "https://claude.ai/code/artifact/0a9806fc-f265-4fe6-8680-40c186490988",
      },
      {
        title: { en: "Where IMO's Chinese Contestants Went", zh: "IMO 华人选手去向" },
        note: {
          en: "Fifteen years of contestants, tracked to today.",
          zh: "十五年的选手，一路追到今天。",
        },
        href: "https://claude.ai/code/artifact/81d68bd8-a50a-4b4b-86e3-62aa78f2ecce",
      },
      {
        title: { en: "Where IOI's Chinese Contestants Went", zh: "IOI 华人选手去向" },
        note: {
          en: "The same question, on the informatics side.",
          zh: "同一个问题，信息学这一侧。",
        },
        href: "https://claude.ai/code/artifact/bb28032f-80e9-447e-b39d-f845d8342889",
      },
      {
        title: { en: "IMO: Fifteen Years in Full", zh: "IMO 十五届全景" },
        note: {
          en: "The raw dataset — every contestant, every year.",
          zh: "原始数据集 —— 每一届、每一位选手。",
        },
        href: "https://claude.ai/code/artifact/2f349471-8f3b-4956-b8b5-a64b38ba7319",
      },
      {
        title: { en: "IOI: Ten Years in Full", zh: "IOI 十届全景" },
        note: {
          en: "The informatics counterpart, complete.",
          zh: "信息学这一侧的完整版。",
        },
        href: "https://claude.ai/code/artifact/ece49eca-a58e-4d93-a502-6bdeacb53b26",
      },
      {
        title: { en: "Where the Medalists Went", zh: "IMO 奖牌得主去向" },
        note: {
          en: "The same tracking, narrowed to medalists only.",
          zh: "同一套追踪，只看奖牌得主这一层。",
        },
        href: "https://claude.ai/code/artifact/97e69471-c186-4ea5-97aa-c84a48a5f486",
      },
      {
        title: { en: "IMO 2017: The Full Board", zh: "IMO 2017 获奖版图" },
        note: {
          en: "One year in complete detail.",
          zh: "单独一届的完整获奖版图。",
        },
        href: "https://claude.ai/code/artifact/56b0cf46-3df9-4070-9ee8-256f41330c76",
      },
    ],
    date: "2026-09",
  },
];

export function findWork(slug: string): WorkEntry | undefined {
  return work.find((w) => w.slug === slug);
}
