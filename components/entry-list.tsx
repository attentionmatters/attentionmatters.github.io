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

/** Work 与 Tools 共用的条目列表：标题 + 帮你做什么 + 谁用得上 + 状态 */
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
    <ul className="project-list">
      {entries.map((e) => (
        <li key={e.slug}>
          <Link className="project" href={`/${locale}/${basePath}/${e.slug}/`}>
            <span className="project__head">
              <h2 className="project__title">{e.title[locale]}</h2>
              <span className="project__status">
                {e.parts && labels.partCount
                  ? `${e.parts.length} ${labels.partCount}`
                  : e.status === "live"
                    ? labels.open
                    : e.visibility === "gated"
                      ? labels.gated
                      : labels.soon}
              </span>
            </span>

            <p className="project__summary">{e.summary[locale]}</p>

            <span className="project__audience">
              <span className="project__audience-label">{labels.audience}</span>
              {e.audience[locale]}
            </span>

            {e.by && (
              <span className="project__by">
                {labels.byLabel} {e.by.name}
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
