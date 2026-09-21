import type { Locale } from "@/lib/site";

/**
 * 「待填写」占位块。
 *
 * 凡是 Peter 还没确认过的内容，一律显示这个，绝不用编造的内容顶上。
 * 虚线 + 灰字，一眼能看出是未完成，不会被误当成正式内容。
 */
export function Placeholder({
  locale,
  what,
  block = false,
}: {
  locale: Locale;
  what: string;
  block?: boolean;
}) {
  const prefix = locale === "zh" ? "待填写" : "To fill in";
  return (
    <div className={`ph ${block ? "ph--block" : ""}`} role="note">
      <span className="ph__tag">{prefix}</span>
      <span className="ph__what">{what}</span>
    </div>
  );
}
