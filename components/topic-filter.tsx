"use client";

import { useState } from "react";
import type { Topic } from "@/lib/content/shared";
import type { Dictionary } from "@/lib/i18n";

export type FilterValue = Topic | "all";

/**
 * Work 页顶的主题筛选。纯客户端过滤 —— 静态导出下不额外生成路由，
 * 也不改 URL，返回时不会丢失位置。
 */
export function TopicFilter({
  t,
  onChange,
  value,
}: {
  t: Dictionary;
  value: FilterValue;
  onChange: (v: FilterValue) => void;
}) {
  const options: { key: FilterValue; label: string }[] = [
    { key: "all", label: t.topics.all },
    { key: "ecosystem", label: t.topics.ecosystem },
    { key: "talent", label: t.topics.talent },
  ];

  return (
    <div className="chips" role="group" aria-label={t.topics.filterLabel}>
      {options.map((o) => (
        <button
          key={o.key}
          type="button"
          className="chip"
          data-active={value === o.key ? "" : undefined}
          aria-pressed={value === o.key}
          onClick={() => onChange(o.key)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function useTopicFilter() {
  return useState<FilterValue>("all");
}
