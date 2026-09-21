import type { Dictionary } from "./en";

/**
 * 类型标注为 Dictionary —— 少写任何一个 key 都会在 `next build` 时直接报错。
 * 这是「不允许任何中英混杂 fallback」的强制手段。
 */
export const zh: Dictionary = {
  meta: {
    title: "穆高建楠 (Peter)",
    tagline: "AI 人才与跨境团队搭建 · 多伦多",
    description:
      "穆高建楠（Peter Mu）—— 从 HR 高管到 AI 人才实践者。专注 AI 人才、跨境团队搭建，以及用十二年经验做出来的工具。",
  },

  nav: {
    home: "首页",
    about: "关于",
    work: "作品",
    tools: "工具",
    insights: "洞察",
    contact: "联系",
    cta: "打个招呼",
    menu: "菜单",
    close: "关闭",
  },

  hero: {
    name: "穆高建楠 (Peter)",
    tagline: "父亲。丈夫。HR 专家与实践者。中年叛逆者。",
    sub: "AI 人才与跨境团队搭建 · 多伦多",
    cta: "下载简历",
    ctaLinkedIn: "简历在 LinkedIn",
    scroll: "向下",
  },

  intro: {
    eyebrow: "自述",
    greeting: "你好，我是 Peter ——",
    body:
      "我是 Gaojiannan（Peter）Mu。现阶段，我会用「中年叛逆者」来形容自己。过去十二年，我一直在高速发展、充满雄心的企业里工作，努力超越同龄人，不断竞争、证明自己。现在，我开始重新思考，什么值得我的时间和关注。",
    more: "更多关于我",
  },

  identities: {
    eyebrow: "我是谁",
    title: "四重身份，一个人",
    items: [
      {
        no: "01",
        label: "父亲",
        body:
          "我的女儿八岁，读三年级。她敏感、敏锐，热爱数学、规律和井井有条的世界，也需要更多理解与支持。为了保护她的好奇心，给她更多成长空间，我们举家从深圳搬到了多伦多。我也在学习放慢脚步，陪她按自己的节奏成长。",
      },
      {
        no: "02",
        label: "丈夫",
        body:
          "我的太太是我见过最聪明、最勇敢的人之一。她在大疆工作十几年，经历过北美销售与市场营销、全球零售体系搭建，以及机器人与教育业务的发展。如今，她是一家 Physical AI 公司的联合创始人，负责全球商业化。我欣赏她的追求，也在学习怎样更好地支持她。",
      },
      {
        no: "03",
        label: "HR 专家与实践者",
        body:
          "从跨国企业、英国猎头公司到高科技行业，我做过高管招聘、招聘与人才管理负责人，以及集团事业群 HRD，也曾分管财务、法务、审计和行政，主导过百亿美元资产集团的一号位继任计划。现在，我专注于 AI 人才与跨境团队搭建，每天通过 vibe coding 把经验变成工具，帮助团队，也让日常生活更高效。",
      },
      {
        no: "04",
        label: "中年叛逆者",
        body:
          "离开熟悉的高管办公室，搬到从未踏足的国家，尝试有意义、甚至有点疯狂的事。我跑过多场马拉松和越野赛，半马最好成绩是 1 小时 34 分，也喜欢骑行和攀岩。身处 AI 变革之中，我感到幸运。我想继续探索和创造，也为女儿、爱人和自己的好奇心留出更多空间。",
      },
    ],
  },

  stats: {
    eyebrow: "数字",
    items: [
      { value: "12+", label: "年 HR 与人才管理经验" },
      { value: "US$10B", label: "资产集团，主导一号位继任" },
      { value: "1,000+", label: "年招聘量，从 0 搭建招聘体系" },
      { value: "1:34", label: "半程马拉松最好成绩" },
    ],
  },

  experience: {
    eyebrow: "经历",
    title: "我工作过的地方",
    recent: "近期经历",
    earlier: "早期经历",
  },

  work: {
    eyebrow: "作品",
    title: "我挖过的那些事",
    intro:
      "地图、数据集、拆解。每一个都是因为我自己要这个答案、又到处找不到才做的。看完一件，你应该能带走一个可以自己复核的结论。",
    audience: "谁用得上",
    open: "打开",
    gated: "需要授权访问",
    soon: "即将上线",
    empty: "更多内容正在迁移过来。",
    back: "全部作品",
    parts: "里面有什么",
    partCount: "个子页",
  },

  tools: {
    eyebrow: "工具",
    title: "你会回来用第二次的东西",
    intro:
      "和上面的作品不一样，这些是给你反复用的 —— 拿来查、拿来核、拿来重跑。会持续更新。",
    audience: "谁用得上",
    open: "打开",
    gated: "需要授权访问",
    soon: "即将上线",
    empty: "更多内容正在迁移过来。",
    back: "全部工具",
    groupMine: "我做的",
    groupRecommended: "我在用的",
    byLabel: "作者",
    emptyRecommended: "还没有。",
  },

  insights: {
    eyebrow: "洞察",
    title: "我从中看到了什么",
    intro:
      "作品是材料，这里是结论。有些背后就是隔壁那批数据，有些只是我干了十二年之后的判断。两种我都会标出来。",
    readingTime: "分钟阅读",
    empty: "头几篇正在写。",
    back: "全部洞察",
    backedByData: "有数据支撑",
    opinion: "个人判断",
  },

  topics: {
    all: "全部",
    ecosystem: "AI 生态",
    talent: "AI 人才",
    filterLabel: "按主题筛选",
  },

  values: {
    eyebrow: "我的工作方式",
    title: "我的工作方式",
    placeholder: "待填写：工作方式，四条 —— 你不让步的那几件事。",
  },

  testimonials: {
    eyebrow: "他人评价",
    title: "和我共事过的人",
    placeholder: "待填写：他人评价，三条 —— 每条一句话，附姓名、职务、头像。",
  },

  about: {
    eyebrow: "关于",
    title: "完整版本",
    howIWork: "我的工作方式",
  },

  contact: {
    eyebrow: "联系",
    title: "打个招呼",
    body:
      "在招 AI 岗位、想搭一支跨境团队，或者只是想交流想法 —— 我都会认真看。",
    email: "邮箱",
    linkedin: "领英",
    resume: "下载简历",
    resumeLinkedIn: "简历在 LinkedIn",
  },

  footer: {
    statement: "AI 人才，跨境搭建。",
    nav: "导航",
    elsewhere: "其他平台",
    rights: "© 2026 穆高建楠",
    built: "由 Claude Code 构建",
  },
};
