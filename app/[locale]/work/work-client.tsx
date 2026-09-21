"use client";

import { useState } from "react";
import { EntryList } from "@/components/entry-list";
import { TopicFilter, type FilterValue } from "@/components/topic-filter";
import type { WorkEntry } from "@/lib/content/work";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/site";

export function WorkClient({
  entries,
  locale,
  t,
}: {
  entries: WorkEntry[];
  locale: Locale;
  t: Dictionary;
}) {
  const [topic, setTopic] = useState<FilterValue>("all");
  const shown = topic === "all" ? entries : entries.filter((e) => e.topic === topic);

  return (
    <>
      <TopicFilter t={t} value={topic} onChange={setTopic} />
      <EntryList
        entries={shown}
        locale={locale}
        basePath="work"
        labels={{
          audience: t.work.audience,
          open: t.work.open,
          gated: t.work.gated,
          soon: t.work.soon,
          partCount: t.work.partCount,
        }}
        topicLabel={(e) => {
          const topic = (e as WorkEntry).topic;
          return { text: t.topics[topic], tone: topic };
        }}
      />
    </>
  );
}
