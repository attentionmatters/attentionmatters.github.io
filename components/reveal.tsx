"use client";

import { useEffect, useRef, useState } from "react";

/**
 * 入场动效：淡入 + 12px 上移，400ms。
 *
 * 渐进增强，不会藏内容：
 *  - 服务端输出和无 JS 环境下，元素一律可见（CSS 默认 opacity: 1）
 *  - 挂载后只有「当前在首屏之外」的元素才被 arm，此时才转为隐藏并等待进入视口
 *  - 首屏之内的元素直接标记为已显示，不闪
 *
 * 之前的写法默认 opacity: 0，一旦 IntersectionObserver 没触发，
 * 整块内容对用户和爬虫都是空白 —— 已修。
 *
 * prefers-reduced-motion 由 CSS 兜底。
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const belowFold = node.getBoundingClientRect().top > window.innerHeight * 0.9;
    if (!belowFold) {
      setShown(true);
      return;
    }

    setArmed(true);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(node);

    // 兜底：万一观察器因任何原因没回调，1.2 秒后照常显示
    const timer = window.setTimeout(() => setShown(true), 1200);

    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`reveal ${shown ? "is-in" : ""} ${className}`.trim()}
      data-armed={armed ? "" : undefined}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
