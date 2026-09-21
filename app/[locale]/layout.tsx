import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { getDictionary } from "@/lib/i18n";
import { HTML_LANG, LOCALES, SITE_URL, isLocale } from "@/lib/site";

/** 分享缩略图上的文字是英文，两种语言共用同一张 */
const OG_ALT = "Peter M. — AI talent, mapped.";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  return {
    title: { default: t.meta.title, template: `%s · ${t.meta.title}` },
    description: t.meta.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/`,
      languages: {
        en: `${SITE_URL}/en/`,
        "zh-Hans": `${SITE_URL}/zh/`,
        "x-default": `${SITE_URL}/en/`,
      },
    },
    openGraph: {
      type: "website",
      siteName: t.meta.title,
      title: t.meta.title,
      description: t.meta.description,
      url: `${SITE_URL}/${locale}/`,
      locale: locale === "zh" ? "zh_CN" : "en_US",
      // 这里手写了 openGraph，就会盖掉 Next 的文件约定 —— images 必须一起给出，
      // 否则贴链接时是一张没有图的空卡片。用静态 PNG 而不是构建期生成的
      // 图片路由：GitHub Pages 按扩展名决定 Content-Type，无扩展名的文件
      // 会以 octet-stream 发出去，抓取器不收。
      images: [{ url: `${SITE_URL}/og.png`, width: 1200, height: 630, alt: OG_ALT }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
      images: [`${SITE_URL}/og.png`],
    },
    icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }] },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  // 根布局无法拿到 locale，因此在这里同步修正 <html lang> 与 data-locale。
  // 脚本在内容绘制前执行，不会闪烁；hreflang / canonical 是静态的，SEO 以那组为准。
  const setLang = `document.documentElement.lang=${JSON.stringify(
    HTML_LANG[locale]
  )};document.documentElement.dataset.locale=${JSON.stringify(locale)};`;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: setLang }} />
      <a className="skip" href="#main">
        {locale === "zh" ? "跳到主内容" : "Skip to content"}
      </a>
      <Nav locale={locale} t={t} />
      <main id="main">{children}</main>
      <Footer locale={locale} t={t} />
    </>
  );
}
