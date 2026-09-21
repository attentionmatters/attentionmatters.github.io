import Link from "next/link";
import type { Metadata } from "next";
import { DEFAULT_LOCALE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

/**
 * 404。
 *
 * GitHub Pages 对任何不存在的路径都返回同一个 /404.html，所以这一页拿不到
 * locale —— 它在路由树之外，没有 [locale] 段。做法是两种语言都渲染出来，
 * 再用一小段脚本按 URL 里的语言段（退而用 localStorage）把另一种隐藏掉。
 * 脚本失效时两段都在，读者仍然看得懂、点得动，不会撞到空白页。
 */
const SCRIPT = `
(function () {
  try {
    var m = location.pathname.match(/^\\/(en|zh)(?=\\/|$)/);
    var loc = m ? m[1] : (localStorage.getItem('locale') || '${DEFAULT_LOCALE}');
    if (loc !== 'zh' && loc !== 'en') loc = '${DEFAULT_LOCALE}';
    document.documentElement.lang = loc === 'zh' ? 'zh-Hans' : 'en';
    document.documentElement.dataset.locale = loc;
    document.documentElement.dataset.nf = loc;
  } catch (e) {}
})();
`;

export default function NotFound() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />
      <header className="nf__bar">
        <div className="wrap">
          <Link href="/" className="mark" aria-label="Peter M.">
            PM
          </Link>
        </div>
      </header>

      <main id="main" className="section section--flush nf">
        <div className="wrap nf__inner">
          <span className="eyebrow num">404</span>

          <div className="nf__pane" data-nf-lang="en">
            <h1>This page isn’t here.</h1>
            <p className="lede">
              The link may be old, or the piece may have moved. The four places
              worth trying are below.
            </p>
            <nav className="nf__links" aria-label="Main">
              <Link className="btn btn--primary" href="/en/">
                Home
              </Link>
              <Link className="btn" href="/en/work/">
                Work
              </Link>
              <Link className="btn" href="/en/tools/">
                Tools
              </Link>
              <Link className="btn" href="/en/about/">
                About
              </Link>
            </nav>
          </div>

          <div className="nf__pane" data-nf-lang="zh">
            <h1>这个页面不在了。</h1>
            <p className="lede">
              可能是旧链接，也可能是内容挪了位置。下面四个地方值得先看看。
            </p>
            <nav className="nf__links" aria-label="Main">
              <Link className="btn btn--primary" href="/zh/">
                首页
              </Link>
              <Link className="btn" href="/zh/work/">
                作品
              </Link>
              <Link className="btn" href="/zh/tools/">
                工具
              </Link>
              <Link className="btn" href="/zh/about/">
                关于
              </Link>
            </nav>
          </div>
        </div>
      </main>
    </>
  );
}
