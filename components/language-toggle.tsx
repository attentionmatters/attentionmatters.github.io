"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES, localizePath, type Locale } from "@/lib/site";

const LABEL: Record<Locale, string> = { en: "EN", zh: "中文" };

/**
 * 紧凑的分段控件，不是下拉菜单。
 * 切换时保持当前路径（/en/about ↔ /zh/about），并把选择存进 localStorage。
 */
export function LanguageToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}/`;

  return (
    <div
      className="lang"
      role="group"
      aria-label={locale === "zh" ? "语言" : "Language"}
    >
      {LOCALES.map((l) => {
        const active = l === locale;
        return (
          <Link
            key={l}
            href={localizePath(pathname, l)}
            hrefLang={l === "zh" ? "zh-Hans" : "en"}
            aria-current={active ? "true" : undefined}
            data-active={active ? "" : undefined}
            onClick={() => {
              try {
                localStorage.setItem("locale", l);
              } catch {
                /* 隐私模式下 localStorage 可能不可用，忽略 */
              }
            }}
          >
            {LABEL[l]}
          </Link>
        );
      })}
    </div>
  );
}
