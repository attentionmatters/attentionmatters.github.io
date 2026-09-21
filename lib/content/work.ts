import type { Entry, Topic } from "./shared";

/** Work = 看一次，得一个结论。材料本身，不是结论文章（那是 Insights）。 */
export type WorkEntry = Entry & { topic: Topic };

/**
 * href 已填入对应 artifact 链接，但 artifact 默认私有 ——
 * 需要在 Claude 里逐个设为公开，别人才打得开。
 * 未确认公开的一律保持 status: "live"，页面显示「即将上线」。
 */
export const work: WorkEntry[] = [
  // ————————————— AI 生态 —————————————
  {
    slug: "ai-ecosystem",
    topic: "ecosystem",
    status: "live",
    visibility: "public",
    source: "artifact",
    title: { en: "AI Ecosystem", zh: "AI 生态全景" },
    summary: {
      en: "How the field is actually put together — the layers, and who occupies each one.",
      zh: "这个领域到底是怎么搭起来的 —— 有哪几层，每层站着谁。",
    },
    audience: {
      en: "Anyone getting oriented in AI without reading a year of news first.",
      zh: "想快速摸清 AI 全貌、又不想先读一年新闻的人。",
    },
    href: "https://claude.ai/code/artifact/8338a457-e3fd-4cd5-97d1-7bd33bb0f5bf",
    date: "2026-09",
  },
  {
    slug: "ai-data-industry-map",
    topic: "ecosystem",
    status: "live",
    visibility: "public",
    source: "artifact",
    title: { en: "AI Data Industry Map", zh: "AI 数据产业地图" },
    summary: {
      en: "Where the money and the work sit in the data layer underneath every model.",
      zh: "每个模型底下那层数据产业里，钱和活儿分别在哪儿。",
    },
    audience: {
      en: "People evaluating the data side of AI — investing, partnering, or job hunting.",
      zh: "在看 AI 数据这一侧的人：投资、找合作、或者找工作。",
    },
    href: "https://claude.ai/code/artifact/02a6db65-418b-4826-bd93-2d0140f7a474",
    date: "2026-09",
  },
  {
    slug: "tech-profile",
    topic: "ecosystem",
    status: "live",
    visibility: "public",
    source: "artifact",
    title: { en: "Technology Profile", zh: "技术剖面图" },
    summary: {
      en: "A cross-section of a technology stack, so you can see what sits on top of what.",
      zh: "把一个技术栈切开看断面，谁架在谁之上一目了然。",
    },
    audience: {
      en: "Non-engineers who have to reason about technical choices.",
      zh: "非工程背景、但要对技术选择做判断的人。",
    },
    href: "https://claude.ai/code/artifact/770228b5-613d-42af-9d7b-c9caf1c114bc",
    date: "2026-08",
  },
  {
    slug: "computing-layers",
    topic: "ecosystem",
    status: "live",
    visibility: "public",
    source: "artifact",
    title: { en: "Layers of the Computing World", zh: "计算世界层级图" },
    summary: {
      en: "From silicon to the thing you click — the whole stack on one page.",
      zh: "从硅片到你点的那个按钮，整条栈铺在一页里。",
    },
    audience: {
      en: "Anyone who wants the big picture of how computing is layered.",
      zh: "想搞清楚计算世界是怎么分层的人。",
    },
    href: "https://claude.ai/code/artifact/9081db3e-b55c-4260-97a8-bc4567d8c3a4",
    date: "2026-08",
  },
  {
    slug: "abstraction-stack-atlas",
    topic: "ecosystem",
    status: "live",
    visibility: "public",
    source: "artifact",
    title: { en: "Abstraction Stack Atlas", zh: "抽象层级图谱" },
    summary: {
      en: "Where each abstraction begins and ends, and what it buys you.",
      zh: "每一层抽象从哪儿开始、到哪儿结束，以及它替你省了什么。",
    },
    audience: {
      en: "People building on top of AI who want to know which layer to work at.",
      zh: "在 AI 之上做东西、想知道该在哪一层下手的人。",
    },
    href: "https://claude.ai/code/artifact/515497cd-3e4e-4f69-ae4a-951d969d9ac3",
    date: "2026-08",
  },

  // ————————————— AI 人才 —————————————
  {
    slug: "ai-talent-map",
    topic: "talent",
    status: "live",
    visibility: "public",
    source: "artifact",
    title: { en: "AI Talent Map", zh: "AI 人才地图" },
    summary: {
      en: "Where the field's people come from, and which groups actually produce them.",
      zh: "这个领域的人从哪儿来，以及真正在产出人才的是哪些地方。",
    },
    audience: {
      en: "Anyone planning an AI hiring push who needs a map before a shortlist.",
      zh: "要做 AI 招聘规划、需要先有地图再有名单的人。",
    },
    href: "https://claude.ai/code/artifact/b554038f-d5e5-4474-b0fd-497656f372da",
    date: "2026-09",
  },
  {
    slug: "competition-talent",
    topic: "talent",
    status: "live",
    visibility: "public",
    source: "artifact",
    title: { en: "Competition Talent", zh: "竞赛人才洞察" },
    summary: {
      en: "Where olympiad medalists actually end up, fifteen years on — and whether the signal is worth chasing when you hire.",
      zh: "奥赛奖牌得主十五年后到底去了哪儿 —— 以及招人时，这个信号究竟值不值得追。",
    },
    audience: {
      en: "Recruiters and founders wondering whether competition background predicts anything at all.",
      zh: "在想「竞赛背景到底预测什么」的招聘者和创始人。",
    },
    href: null,
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
