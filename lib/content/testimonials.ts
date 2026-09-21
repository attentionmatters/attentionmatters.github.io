import type { Bilingual } from "./types";

export type Testimonial = {
  name: string;
  role: Bilingual;
  quote: Bilingual;
  /** 头像放进 public/ 后填路径，如 "/faces/xxx.jpg"；没有就留 null */
  avatar: string | null;
};

/**
 * 他人评价 —— 必须是真实的人说过的真实的话，待 Peter 提供。
 *
 * 空数组时页面显示「待填写」占位块。绝不编造署名引语。
 */
export const testimonials: Testimonial[] = [];
