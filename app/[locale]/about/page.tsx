import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { getDictionary } from "@/lib/i18n";
import { LOCALES, SITE_URL, isLocale } from "@/lib/site";
import { recent, earlier } from "@/lib/content/experience";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  return {
    title: t.nav.about,
    alternates: {
      canonical: `${SITE_URL}/${locale}/about/`,
      languages: {
        en: `${SITE_URL}/en/about/`,
        "zh-Hans": `${SITE_URL}/zh/about/`,
        "x-default": `${SITE_URL}/en/about/`,
      },
    },
  };
}

export default async function About({
  params,
}: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <>
      <section className="section section--flush page-head">
        <div className="wrap">
          <span className="eyebrow">{t.about.eyebrow}</span>
          <h1>{t.about.title}</h1>
          <p className="lede">{t.intro.body}</p>
        </div>
      </section>

      {/* 四重身份的长版本：每一重一节，而不是首页的四卡片 */}
      {t.identities.items.map((item) => (
        <section className="section" key={item.no}>
          <div className="wrap grid-asym">
            <div className="col-head">
              <span className="eyebrow num">{item.no}</span>
              <h2>{item.label}</h2>
            </div>
            <Reveal className="col-body">
              <p className="lede">{item.body}</p>
            </Reveal>
          </div>
        </section>
      ))}

      {/* —— 完整经历（首页只放近期三条）—— */}
      <section className="section">
        <div className="wrap grid-asym">
          <div className="col-head">
            <span className="eyebrow">{t.experience.eyebrow}</span>
            <h2>{t.experience.title}</h2>
          </div>
          <div className="col-body">
            <h3 className="sub-head">{t.experience.recent}</h3>
            <div className="rows">
              {recent.map((r, i) => (
                <div className="row" key={`r${i}`}>
                  <span className="row__period">{r.period}</span>
                  <span>
                    <span className="row__title">{r.company[locale]}</span>
                    <span className="row__outcome">{r.outcome[locale]}</span>
                  </span>
                  <span className="row__meta">{r.title[locale]}</span>
                </div>
              ))}
            </div>

            <h3 className="sub-head sub-head--gap">{t.experience.earlier}</h3>
            <div className="rows">
              {earlier.map((r, i) => (
                <div className="row" key={`e${i}`}>
                  <span className="row__period">{r.period}</span>
                  <span className="row__title">{r.company[locale]}</span>
                  <span className="row__meta">{r.title[locale]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TODO: confirm with Peter —— 工作方式的内容待补 */}
      <section className="section section--panel">
        <div className="wrap grid-asym">
          <div className="col-head">
            <span className="eyebrow">{t.about.howIWork}</span>
          </div>
          <div className="col-body">
            <p className="muted-note">
              {locale === "zh"
                ? "这一节待补 —— 等你确认要写哪几条工作原则。"
                : "This section is pending — waiting on which working principles to include."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
