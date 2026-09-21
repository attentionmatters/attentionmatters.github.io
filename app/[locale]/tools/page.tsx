import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EntryList } from "@/components/entry-list";
import { getDictionary } from "@/lib/i18n";
import { LOCALES, SITE_URL, isLocale } from "@/lib/site";
import { mine, recommended } from "@/lib/content/tools";

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
    title: t.nav.tools,
    description: t.tools.intro,
    alternates: {
      canonical: `${SITE_URL}/${locale}/tools/`,
      languages: {
        en: `${SITE_URL}/en/tools/`,
        "zh-Hans": `${SITE_URL}/zh/tools/`,
        "x-default": `${SITE_URL}/en/tools/`,
      },
    },
  };
}

export default async function Tools({
  params,
}: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <>
      <section className="section section--flush page-head">
        <div className="wrap head-center">
          <span className="eyebrow">{t.tools.eyebrow}</span>
          <h1>{t.tools.title}</h1>
          <p className="lede">{t.tools.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {/* 分两组：自己做的 vs 推荐别人的。
              混在一起会让人默认都是你做的，既不诚实也稀释你自己那几件。 */}
          <h2 className="group-head">{t.tools.groupMine}</h2>
          <EntryList
            entries={mine}
            locale={locale}
            basePath="tools"
            labels={{
              audience: t.tools.audience,
              open: t.tools.open,
              gated: t.tools.gated,
              soon: t.tools.soon,
            }}
          />

          <h2 className="group-head group-head--gap">
            {t.tools.groupRecommended}
          </h2>
          {recommended.length > 0 ? (
            <EntryList
              entries={recommended}
              locale={locale}
              basePath="tools"
              labels={{
                audience: t.tools.audience,
                open: t.tools.open,
                gated: t.tools.gated,
                soon: t.tools.soon,
                byLabel: t.tools.byLabel,
              }}
            />
          ) : (
            <p className="muted-note bar">{t.tools.emptyRecommended}</p>
          )}
        </div>
      </section>
    </>
  );
}
