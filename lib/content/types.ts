import type { Locale } from "../site";

/** 所有对外文案都是双值，取值时按当前 locale 选 */
export type Bilingual = Record<Locale, string>;

export function pick(value: Bilingual, locale: Locale): string {
  return value[locale];
}
