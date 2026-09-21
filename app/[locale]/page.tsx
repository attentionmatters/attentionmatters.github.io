import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { Placeholder } from "@/components/placeholder";
import { getDictionary } from "@/lib/i18n";
import { LOCALES, isLocale } from "@/lib/site";
import { RESUME_URL, hasResume, PORTRAIT_PATH, hasPortrait, EMAIL } from "@/lib/profile";
import { recent } from "@/lib/content/experience";
import { work } from "@/lib/content/work";
import { tools } from "@/lib/content/tools";
import { values } from "@/lib/content/values";
import { testimonials } from "@/lib/content/testimonials";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  const featuredWork = work.slice(0, 3);
  const featuredTools = tools.slice(0, 3);
  const recentTop = recent.slice(0, 3);

  return (
    <>
      {/* ——— Hero：左字右像 ——— */}
      <section className="hero">
        <div className="wrap hero__inner">
          <div className="hero__text">
            <h1 className="hero-name">{t.hero.name}</h1>
            <p className="hero__tagline">{t.hero.sub}</p>
            <p className="hero__roles">{t.hero.tagline}</p>
            <div className="hero__actions">
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
                {t.nav.work} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* 照片放进 public/ 并在 lib/profile.ts 填上路径后自动出现 */}
          <div className="hero__portrait">
            {hasPortrait ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={PORTRAIT_PATH as string} alt={t.hero.name} />
            ) : (
              <Placeholder
                locale={locale}
                what={locale === "zh" ? "你的照片" : "your portrait"}
              />
            )}
            {/* 压在照片右下角 —— 整站唯一一处俏皮 */}
            <div className="hello-chip">
              <b>{t.intro.sayHello}</b>
              <span>
                {t.intro.emailMe} <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ——— 自述 ——— */}
      <section className="section section--tight">
        <div className="wrap statement-wrap">
          <p className="statement">
            {t.intro.greeting}
            <span className="dash" aria-hidden="true" />
            {t.hero.tagline}
          </p>
          <p className="statement__sub">{t.intro.body}</p>
          <p className="center-cta">
            <Link className="btn btn--primary" href={`/${locale}/about/`}>
              {t.intro.more} <span aria-hidden="true">→</span>
            </Link>
          </p>
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
              {values.map((v, i) => (
                <Reveal key={v.label.en} delay={i * 70}>
                  <div className="value">
                    <h3 className="value__label">{v.label[locale]}</h3>
                    <p className="value__body">{v.body[locale]}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <Placeholder locale={locale} what={t.values.placeholder} block />
          )}
        </div>
      </section>

      {/* ——— 数字 ——— */}
      <section className="section section--tight">
        <div className="wrap">
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

      {/* ——— 近期经历 ——— */}
      <section className="section">
        <div className="wrap">
          <div className="head-center">
            <span className="eyebrow">{t.experience.eyebrow}</span>
            <h2>{t.experience.recent}</h2>
          </div>
          <div className="timeline">
            {recentTop.map((r, i) => (
              <div className="tl-item" key={`${r.period}-${i}`}>
                <span className="tl-when">
                  <span className="tl-org">{r.company[locale]}</span>
                  <span className="tl-date">{r.period}</span>
                </span>
                <span className="tl-rail" aria-hidden="true">
                  <span className="tl-dot" />
                </span>
                <span>
                  <span className="tl-role">{r.title[locale]}</span>
                  <span className="tl-what">{r.outcome[locale]}</span>
                </span>
              </div>
            ))}
          </div>
          <p className="center-cta">
            <Link className="btn btn--ghost" href={`/${locale}/about/`}>
              {t.experience.earlier} <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      </section>

      {/* ——— 作品 ——— */}
      <section className="section section--panel">
        <div className="wrap">
          <div className="head-center">
            <span className="eyebrow">{t.work.eyebrow}</span>
            <h2>{t.work.title}</h2>
          </div>
          <div className="card-grid">
            {featuredWork.map((w, i) => (
              <Reveal key={w.slug} delay={i * 70}>
                <Link className="pcard" href={`/${locale}/work/${w.slug}/`}>
                  <span className="pcard__topic">{t.topics[w.topic]}</span>
                  <h3 className="pcard__title">{w.title[locale]}</h3>
                  <p className="pcard__summary">{w.summary[locale]}</p>
                  <span className="pcard__go" aria-hidden="true">→</span>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="center-cta">
            <Link className="btn btn--ghost" href={`/${locale}/work/`}>
              {t.work.back} <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      </section>

      {/* ——— 工具 ——— */}
      <section className="section">
        <div className="wrap">
          <div className="head-center">
            <span className="eyebrow">{t.tools.eyebrow}</span>
            <h2>{t.tools.title}</h2>
          </div>
          <div className="card-grid">
            {featuredTools.map((tool, i) => (
              <Reveal key={tool.slug} delay={i * 70}>
                <Link className="pcard" href={`/${locale}/tools/${tool.slug}/`}>
                  <h3 className="pcard__title">{tool.title[locale]}</h3>
                  <p className="pcard__summary">{tool.summary[locale]}</p>
                  <span className="pcard__go" aria-hidden="true">→</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ——— 他人评价 ——— */}
      <section className="section section--panel">
        <div className="wrap">
          <div className="head-center">
            <span className="eyebrow">{t.testimonials.eyebrow}</span>
            <h2>{t.testimonials.title}</h2>
          </div>
          {testimonials.length > 0 ? (
            <div className="card-grid">
              {testimonials.map((q, i) => (
                <Reveal key={q.name} delay={i * 70}>
                  <figure className="quote">
                    <blockquote>{q.quote[locale]}</blockquote>
                    <figcaption className="quote__who">
                      {q.avatar && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img className="quote__avatar" src={q.avatar} alt="" />
                      )}
                      <span>
                        <b>{q.name}</b>
                        <em>{q.role[locale]}</em>
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          ) : (
            <Placeholder locale={locale} what={t.testimonials.placeholder} block />
          )}
        </div>
      </section>

      {/* ——— say hello ——— */}
      <section className="section hello">
        <div className="wrap head-center">
          <span className="eyebrow">{t.contact.eyebrow}</span>
          <h2>{t.contact.title}</h2>
          <p className="lede">{t.contact.body}</p>
          <p className="center-cta">
            <Link className="btn btn--primary" href={`/${locale}/contact/`}>
              {t.nav.cta} <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
