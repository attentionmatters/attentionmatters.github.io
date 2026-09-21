import type { Bilingual } from "./types";

export type Value = {
  label: Bilingual;
  body: Bilingual;
};

/**
 * 我的工作方式 —— 待 Peter 提供。
 *
 * 空数组时页面显示「待填写」占位块，不编造任何内容。
 * 填好后首页与 About 页自动渲染，无需改动其他代码。
 */
export const values: Value[] = [];
