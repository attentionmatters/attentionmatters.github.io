import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { getDictionary } from "@/lib/i18n";
import { LOCALES, isLocale } from "@/lib/site";
import { RESUME_URL, hasResume } from "@/lib/profile";
import { recent } from "@/lib/content/experience";
import { work } from "@/lib/content/work";
import { tools } from "@/lib/content/tools";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function Home({
  params,
}: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  // 首页只露少量，完整列表在各自栏目里
  const featuredWork = work.slice(0, 4);
  const featuredTools = tools.slice(0, 3);
  const recentTop = recent.slice(0, 3);

  return (
    <>
      {/* —— Hero —— */}
      <section className="section section--flush hero">
        <div className="wrap">
          <h1 className="hero-name">{t.hero.name}</h1>
          <p className="hero__tagline">
            {t.hero.tagline}
            <span className="caret" aria-hidden="true" />
          </p>
          <p className="hero__sub">{t.hero.sub}</p>
          <div className="hero__actions">
            {/* 有 PDF 就下载；没有就指向 LinkedIn，文案同步改掉，不骗点击 */}
            <a
              className="btn btn--primary"
              href={RESUME_URL}
              {...(hasResume
                ? { download: true }
                : { target: "_blank", rel: "noopener" })}
            >
              {hasResume ? t.hero.cta : t.hero.ctaLinkedIn}{" "}
              <span aria-hidden="true">{hasResume ? "→" : "↗"}</span>
            </a>
            <Link className="btn btn--ghost" href={`/${locale}/work/`}>
              {t.nav.work}
            </Link>
          </div>
        </div>
      </section>

      {/* —— 自述 —— */}
      <section className="section">
        <div className="wrap grid-asym">
          <div className="col-head">
            <span className="eyebrow">{t.intro.eyebrow}</span>
          </div>
          <Reveal className="col-body">
            <p className="lede">{t.intro.body}</p>
          </Reveal>
        </div>
      </section>

      {/* —— 四重身份（短版；长版在 About）—— */}
      <section className="section section--panel">
        <div className="wrap grid-asym">
          <div className="col-head">
            <span className="eyebrow">{t.identities.eyebrow}</span>
            <h2>{t.identities.title}</h2>
            <Link className="btn btn--ghost head-cta" href={`/${locale}/about/`}>
              {t.nav.about} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="col-body identity-grid">
            {t.identities.items.map((item, i) => (
              <Reveal key={item.no} as="article" delay={i * 60}>
                <article className="card identity">
                  <span className="identity__no num">{item.no}</span>
                  <h3 className="identity__label">{item.label}</h3>
                  <p className="identity__body">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* —— 数字 —— */}
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">{t.stats.eyebrow}</span>
          <dl className="stats">
            {t.stats.items.map((s) => (
              <div key={s.label} className="stat">
                <dt className="stat__value num">{s.value}</dt>
                <dd className="stat__label">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* —— 作品预览 —— */}
      <section className="section">
        <div className="wrap grid-asym">
          <div className="col-head">
            <span className="eyebrow">{t.work.eyebrow}</span>
            <h2>{t.work.title}</h2>
            <Link className="btn btn--ghost head-cta" href={`/${locale}/work/`}>
              {t.work.back} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="col-body">
            <div className="rows">
              {featuredWork.map((w) => (
                <Link className="row" key={w.slug} href={`/${locale}/work/${w.slug}/`}>
                  <span className="row__period">{w.date}</span>
                  <span>
                    <span className="row__title">{w.title[locale]}</span>
                    <span className="row__outcome">{w.summary[locale]}</span>
                  </span>
                  <span className="row__meta">{t.topics[w.topic]}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* —— 工具预览 —— */}
      <section className="section section--panel">
        <div className="wrap grid-asym">
          <div className="col-head">
            <span className="eyebrow">{t.tools.eyebrow}</span>
            <h2>{t.tools.title}</h2>
            <Link className="btn btn--ghost head-cta" href={`/${locale}/tools/`}>
              {t.tools.back} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="col-body">
            <div className="rows">
              {featuredTools.map((tool) => (
                <Link
                  className="row"
                  key={tool.slug}
                  href={`/${locale}/tools/${tool.slug}/`}
                >
                  <span className="row__period">{tool.date}</span>
                  <span>
                    <span className="row__title">{tool.title[locale]}</span>
                    <span className="row__outcome">{tool.summary[locale]}</span>
                  </span>
                  <span className="row__meta">
                    {tool.visibility === "gated" ? t.tools.gated : t.tools.soon}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* —— 近期经历（完整版在 About）—— */}
      <section className="section">
        <div className="wrap grid-asym">
          <div className="col-head">
            <span className="eyebrow">{t.experience.eyebrow}</span>
            <h2>{t.experience.title}</h2>
            <Link className="btn btn--ghost head-cta" href={`/${locale}/about/`}>
              {t.experience.earlier} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="col-body">
            <div className="rows">
              {recentTop.map((r, i) => (
                <div className="row" key={`${r.period}-${i}`}>
                  <span className="row__period">{r.period}</span>
                  <span>
                    <span className="row__title">{r.company[locale]}</span>
                    <span className="row__outcome">{r.outcome[locale]}</span>
                  </span>
                  <span className="row__meta">{r.title[locale]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* —— 联系 —— */}
      <section className="section">
        <div className="wrap grid-asym">
          <div className="col-head">
            <span className="eyebrow">{t.contact.eyebrow}</span>
            <h2>{t.contact.title}</h2>
          </div>
          <div className="col-body">
            <p className="lede">{t.contact.body}</p>
            <Link className="btn btn--primary" href={`/${locale}/contact/`}>
              {t.nav.cta} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
