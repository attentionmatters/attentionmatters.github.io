/**
 * 全站唯一的绝对地址来源。
 *
 * 将来要换成自有域名（如 https://gaojiannanmu.com）时，
 * 只改这一行，然后重新部署即可 —— 站内所有链接都是相对路径，无需改动。
 * GitHub Pages 绑定自定义域名后会自动把 *.github.io 301 跳转到新域名，
 * 旧链接和 SEO 权重都会被继承。
 */
export const SITE_URL = "https://attentionmatters.github.io";

export const LOCALES = ["en", "zh"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

/** <html lang> 的取值 */
export const HTML_LANG: Record<Locale, string> = {
  en: "en",
  zh: "zh-Hans",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** 把一个站内路径换到另一种语言，保持路径不变 */
export function localizePath(path: string, locale: Locale): string {
  const rest = path.replace(/^\/(en|zh)(?=\/|$)/, "");
  return `/${locale}${rest || "/"}`.replace(/\/{2,}/g, "/");
}
