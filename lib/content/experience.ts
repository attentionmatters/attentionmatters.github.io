import type { Bilingual } from "./types";

export type ExperienceRow = {
  /** 显示用日期区间，如 "2021 — 2024"；保持等宽数字对齐 */
  period: string;
  company: Bilingual;
  title: Bilingual;
  /** 一句话结果 */
  outcome: Bilingual;
};

/**
 * TODO: confirm with Peter —— 以下为占位结构，数值与公司名待你确认后替换。
 * 结构保持不变：每行 [日期] | 公司 | 职位 | 一句话结果。
 */
export const recent: ExperienceRow[] = [
  {
    period: "2024 — Present",
    company: { en: "Independent", zh: "独立实践" },
    title: { en: "AI Talent & Team Building", zh: "AI 人才与团队搭建" },
    outcome: {
      en: "TODO: confirm with Peter — one-line outcome.",
      zh: "TODO: 待确认 —— 一句话结果。",
    },
  },
  {
    period: "TODO — TODO",
    company: { en: "TODO: company", zh: "TODO：公司" },
    title: { en: "HR Director, Business Group", zh: "集团事业群 HRD" },
    outcome: {
      en: "Led CEO succession planning for a group with US$10 billion in assets.",
      zh: "主导百亿美元资产集团的一号位继任计划。",
    },
  },
  {
    period: "TODO — TODO",
    company: { en: "TODO: company", zh: "TODO：公司" },
    title: { en: "Head of Recruitment & Talent Management", zh: "招聘与人才管理负责人" },
    outcome: {
      en: "Built the talent acquisition function from zero to 1,000+ annual hires.",
      zh: "从 0 搭建招聘体系，做到年招聘量 1,000+。",
    },
  },
];

export const earlier: ExperienceRow[] = [
  {
    period: "TODO — TODO",
    company: { en: "British recruitment firm", zh: "英国猎头公司" },
    title: { en: "Executive Recruiting", zh: "高管招聘" },
    outcome: {
      en: "TODO: confirm with Peter.",
      zh: "TODO: 待确认。",
    },
  },
  {
    period: "TODO — TODO",
    company: { en: "Multinationals", zh: "跨国企业" },
    title: { en: "HR", zh: "人力资源" },
    outcome: {
      en: "TODO: confirm with Peter.",
      zh: "TODO: 待确认。",
    },
  },
];
