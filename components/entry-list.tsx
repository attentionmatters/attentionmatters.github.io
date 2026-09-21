import Link from "next/link";
import type { Entry } from "@/lib/content/shared";
import type { Locale } from "@/lib/site";

type Labels = {
  audience: string;
  open: string;
  gated: string;
  soon: string;
  /** 如「个子页」 */
  partCount?: string;
  byLabel?: string;
};

/**
 * Work 与 Tools 共用的条目卡片网格。
 *
 * 原来是一列细线横排，通篇看下来像数据表；改成卡片后每一件是独立的一块，
 * 和首页的作品卡用同一套样式。
 */
export function EntryList({
  entries,
  locale,
  basePath,
  labels,
}: {
  entries: Entry[];
  locale: Locale;
  /** 如 "work" | "tools" */
  basePath: string;
  labels: Labels;
}) {
  return (
    <div className="card-grid card-grid--2">
      {entries.map((e) => (
        <Link
          className="pcard"
          key={e.slug}
          href={`/${locale}/${basePath}/${e.slug}/`}
        >
          <span className="pcard__status">
            {e.parts && labels.partCount
              ? `${e.parts.length} ${labels.partCount}`
              : e.status === "live"
                ? labels.open
                : e.visibility === "gated"
                  ? labels.gated
                  : labels.soon}
          </span>

          <h3 className="pcard__title">{e.title[locale]}</h3>
          <p className="pcard__summary">{e.summary[locale]}</p>

          <span className="pcard__audience">
            <span className="pcard__audience-label">{labels.audience}</span>
            {e.audience[locale]}
          </span>

          {e.by && (
            <span className="pcard__by">
              {labels.byLabel} {e.by.name}
            </span>
          )}

          <span className="pcard__go" aria-hidden="true">
            →
          </span>
        </Link>
      ))}
    </div>
  );
}
