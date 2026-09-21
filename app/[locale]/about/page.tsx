import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Placeholder } from "@/components/placeholder";
import { getDictionary } from "@/lib/i18n";
import { LOCALES, SITE_URL, isLocale } from "@/lib/site";
import { recent, earlier } from "@/lib/content/experience";
import { values } from "@/lib/content/values";

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
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <>
      <section className="section section--flush page-head">
        <div className="wrap about-prose">
          <span className="eyebrow">{t.about.eyebrow}</span>
          <h1>{t.about.title}</h1>

          <p className="intro__body">{t.intro.body}</p>

          {/* 四重身份连排成段落，每段开头的词加粗 ——
              不再各占一个大标题小节，读起来是一个人在说话，不是目录。 */}
          {t.identities.items.map((item) => (
            <p key={item.no} className="run-in">
              <b>{item.label}{locale === "zh" ? "。" : "."}</b>{" "}
              {item.body}
            </p>
          ))}
        </div>
      </section>

      {/* ——— 我的工作方式 ——— */}
      <section className="section section--panel">
        <div className="wrap">
          <div className="head-center">
            <span className="eyebrow">{t.values.eyebrow}</span>
            <h2>{t.values.title}</h2>
          </div>
          {values.length > 0 ? (
            <div className="value-grid">
              {values.map((v) => (
                <div className="value" key={v.label.en}>
                  <h3 className="value__label">{v.label[locale]}</h3>
                  <p className="value__body">{v.body[locale]}</p>
                </div>
              ))}
            </div>
          ) : (
            <Placeholder locale={locale} what={t.values.placeholder} block />
          )}
        </div>
      </section>

      {/* ——— 完整经历 ——— */}
      <section className="section">
        <div className="wrap">
          <div className="head-center">
            <span className="eyebrow">{t.experience.eyebrow}</span>
            <h2>{t.experience.title}</h2>
          </div>

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
      </section>
    </>
  );
}
