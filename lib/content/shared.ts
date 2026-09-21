import type { Bilingual } from "./types";

/** 主题域 —— Work 页内的筛选维度 */
export type Topic = "ecosystem" | "talent";

/** public = 任何人可看；gated = 含真实人名/LinkedIn，需申请 */
export type Visibility = "public" | "gated";

/** live = 已可点开；draft = 先占位，页面显示「即将上线」 */
export type Status = "live" | "draft";

/**
 * artifact = 外链到 claude.ai 上已发布的 artifact（改起来快，零维护）
 * self     = 已拉到 public/works/<slug>/ 自己托管（链接永久归你、SEO 算你的）
 *
 * 两者切换只改 source + href，版式和路由不动。
 */
export type Source = "artifact" | "self";

/** 一个项目底下的子页面（如「竞赛人才洞察」下挂的各届数据） */
export type Part = {
  title: Bilingual;
  /** 子页的说明，一句话 */
  note: Bilingual;
  href: string;
};

/** Work 与 Tools 共用的条目形状 */
export type Entry = {
  slug: string;
  status: Status;
  visibility: Visibility;
  source: Source;
  title: Bilingual;
  /** 这个帮你回答什么问题 —— 写收益，不写做法 */
  summary: Bilingual;
  audience: Bilingual;
  href: string | null;
  /**
   * 若这一件是由多个子页面组成的项目，列在这里。
   * 有 parts 时详情页展示子页列表，href 可以为 null。
   */
  parts?: Part[];
  /**
   * 原作者。null = 你自己做的；有值 = 你推荐的别人的项目，
   * 页面上会单独分组并标注作者，避免让人误以为是你做的。
   */
  by?: { name: string; url: string } | null;
  /** YYYY-MM */
  date: string;
};

export type { Bilingual };
