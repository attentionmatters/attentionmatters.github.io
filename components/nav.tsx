"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n";
import { LanguageToggle } from "./language-toggle";

export function Nav({ locale, t }: { locale: Locale; t: Dictionary }) {
  const pathname = usePathname() || "";
  const [open, setOpen] = useState(false);

  const items = [
    { href: `/${locale}/`, label: t.nav.home },
    { href: `/${locale}/about/`, label: t.nav.about },
    { href: `/${locale}/work/`, label: t.nav.work },
    { href: `/${locale}/tools/`, label: t.nav.tools },
    { href: `/${locale}/insights/`, label: t.nav.insights },
  ];

  // 汉堡菜单是打开状态时按浏览器返回键，路由变了但菜单还盖在上面 ——
  // 盯住 pathname，一变就收起来。
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Esc 关闭：菜单展开时它是页面上最上层的东西，键盘用户需要一个退出键
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) =>
    href === `/${locale}/`
      ? pathname === href || pathname === `/${locale}`
      : pathname.startsWith(href);

  return (
    <header className="nav">
      <div className="wrap nav__inner">
        <Link href={`/${locale}/`} className="mark" aria-label={t.nav.home}>
          PM
        </Link>

        <nav className={`nav__links ${open ? "is-open" : ""}`} aria-label="Main">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              data-active={isActive(it.href) ? "" : undefined}
              aria-current={isActive(it.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {it.label}
            </Link>
          ))}
        </nav>

        <div className="nav__right">
          <Link href={`/${locale}/contact/`} className="btn btn--primary nav__cta">
            {t.nav.cta}
          </Link>
          <span className="nav__rule" aria-hidden="true" />
          {/* 移动端折叠时语言切换仍然留在顶栏，不藏进汉堡菜单 */}
          <LanguageToggle locale={locale} />
          <button
            type="button"
            className="nav__burger"
            aria-expanded={open}
            aria-label={open ? t.nav.close : t.nav.menu}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
