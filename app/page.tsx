import type { Metadata } from "next";
import { DEFAULT_LOCALE } from "@/lib/site";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

/**
 * 站点根路径。按要求：默认进英文，不按浏览器语言猜。
 * 只有用户此前主动切换过语言（localStorage 里有记录）才会带去中文。
 * 静态导出没有服务端重定向，因此用 noscript meta refresh + 内联脚本双保险。
 */
export default function RootRedirect() {
  const script = `
    (function () {
      try {
        var stored = localStorage.getItem('locale');
        var target = (stored === 'zh' || stored === 'en') ? stored : '${DEFAULT_LOCALE}';
        location.replace('/' + target + '/');
      } catch (e) {
        location.replace('/${DEFAULT_LOCALE}/');
      }
    })();
  `;
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <noscript>
        <meta httpEquiv="refresh" content={`0; url=/${DEFAULT_LOCALE}/`} />
        <p style={{ padding: 24 }}>
          <a href={`/${DEFAULT_LOCALE}/`}>Continue to the site →</a>
        </p>
      </noscript>
    </>
  );
}
