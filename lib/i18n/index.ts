import { en, type Dictionary } from "./en";
import { zh } from "./zh";
import type { Locale } from "../site";

const dictionaries: Record<Locale, Dictionary> = { en, zh };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
