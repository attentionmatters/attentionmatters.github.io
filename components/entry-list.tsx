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
 * Work 与 Tools 共用的条目卡片。
 *
 * 层级：主题标签 → 标题 → 一句话 → 谁用得上 → 底部状态与箭头。
 * 左侧 4px 色条按类别区分（沿用既有 VI 的做法），让一屏七张卡不再是七块一样的白。
 */
export function EntryList({
  entries,
  locale,
  basePath,
  labels,
  topicLabel,
}: {
  entries: Entry[];
  locale: Locale;
  /** 如 "work" | "tools" */
  basePath: string;
  labels: Labels;
  /** Work 传主题名；Tools 不分主题就不传 */
  topicLabel?: (entry: Entry) => { text: string; tone: string } | null;
}) {
  return (
    <div className="card-grid card-grid--2">
      {entries.map((e) => {
        const topic = topicLabel?.(e) ?? null;
        const status =
          e.parts && labels.partCount
            ? `${e.parts.length} ${labels.partCount}`
            : e.status === "live"
              ? labels.open
              : e.visibility === "gated"
                ? labels.gated
                : labels.soon;

        return (
          <Link
            className="pcard pcard--lg"
            key={e.slug}
            href={`/${locale}/${basePath}/${e.slug}/`}
            data-tone={topic?.tone}
          >
            {e.cover && (
              <span className="pcard__cover">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={e.cover} alt="" loading="lazy" />
              </span>
            )}

            {topic && <span className="pcard__topic">{topic.text}</span>}

            <h3 className="pcard__title">{e.title[locale]}</h3>
            <p className="pcard__summary">{e.summary[locale]}</p>

            <span className="pcard__audience">
              <span className="pcard__audience-label">{labels.audience}</span>
              {e.audience[locale]}
            </span>

            <span className="pcard__foot">
              <span className="pcard__status">{status}</span>
              {e.by && (
                <span className="pcard__by">
                  {labels.byLabel} {e.by.name}
                </span>
              )}
              <span className="pcard__go" aria-hidden="true">
                →
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
