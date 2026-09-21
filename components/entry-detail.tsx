import Link from "next/link";
import type { Entry } from "@/lib/content/shared";
import type { Locale } from "@/lib/site";

type Labels = {
  back: string;
  audience: string;
  open: string;
  gated: string;
  /** 有子页时的小标题，如「里面有什么」 */
  parts?: string;
  byLabel?: string;
};

/** Work 与 Tools 共用的详情页版式 */
export function EntryDetail({
  entry,
  locale,
  basePath,
  labels,
  extra,
}: {
  entry: Entry;
  locale: Locale;
  basePath: string;
  labels: Labels;
  /** 额外的标签（如 Work 的主题标签） */
  extra?: React.ReactNode;
}) {
  return (
    <article className="section section--flush page-head">
      <div className="wrap">
        <Link className="back" href={`/${locale}/${basePath}/`}>
          <span aria-hidden="true">←</span> {labels.back}
        </Link>

        <span className="eyebrow num">{entry.date}</span>
        <h1>{entry.title[locale]}</h1>
        <p className="lede">{entry.summary[locale]}</p>

        <p className="audience-block bar">
          <span className="project__audience-label">{labels.audience}</span>
          {entry.audience[locale]}
        </p>

        {(extra || entry.visibility === "gated") && (
          <div className="tags tags--lg">
            {extra}
            {entry.visibility === "gated" && (
              <span className="tag tag--gated">{labels.gated}</span>
            )}
          </div>
        )}

        {/* 由多个子页组成的项目 —— 列出每一个，而不是只给一个入口 */}
        {entry.parts && entry.parts.length > 0 && (
          <div className="parts">
            {labels.parts && <h2 className="sub-head">{labels.parts}</h2>}
            <div className="rows">
              {entry.parts.map((part) => (
                <a
                  className="row"
                  key={part.href}
                  href={part.href}
                  target="_blank"
                  rel="noopener"
                >
                  <span className="row__period" aria-hidden="true" />
                  <span>
                    <span className="row__title">{part.title[locale]}</span>
                    <span className="row__outcome">{part.note[locale]}</span>
                  </span>
                  <span className="row__meta" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {entry.by && (
          <p className="by-line bar">
            {labels.byLabel}{" "}
            <a href={entry.by.url} target="_blank" rel="noopener">
              {entry.by.name} <span aria-hidden="true">↗</span>
            </a>
          </p>
        )}

        {entry.parts ? null : entry.status === "live" && entry.href ? (
          <p className="detail-actions">
            <a
              className="btn btn--primary"
              href={entry.href}
              {...(entry.source === "artifact"
                ? { target: "_blank", rel: "noopener" }
                : {})}
            >
              {labels.open} <span aria-hidden="true">→</span>
            </a>
          </p>
        ) : (
          <p className="muted-note detail-actions bar">
            {locale === "zh"
              ? "这一件的完整内容正在迁移过来。"
              : "The full piece is being moved over here."}
          </p>
        )}
      </div>
    </article>
  );
}
