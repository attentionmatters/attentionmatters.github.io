/**
 * 英文页纯度检查。
 *
 * 规则（Peter 定的）：英文页面必须是纯英文，一个汉字都不能出现 ——
 * 会有母语者来看，夹中文就是读不懂。中文页面反过来不受限制，
 * 可以保留英文原文，不必翻译。
 *
 * 只看 <body> 里渲染出来的可见文本：Next 会把两种语言的字典都打进
 * RSC payload，那部分不算数，所以 script 标签整块剥掉。
 *
 * 唯一豁免：带 data-allow-cjk 的元素（语言切换器必须写「中文」，
 * 否则中文读者在英文页上找不到入口）。
 *
 * 构建后自动跑：npm run build
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = "out/en";
const CJK = /[一-鿿㐀-䶿　-〿＀-￯]/;

/** 递归找出所有 index.html */
function pages(dir) {
  const found = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) found.push(...pages(full));
    else if (name === "index.html") found.push(full);
  }
  return found;
}

/** 取出 body 里的可见文本 */
function visibleText(html) {
  const body = html.slice(html.indexOf("<body"));
  return body
    .replace(/<div[^>]*data-allow-cjk[^>]*>[\s\S]*?<\/div>/gi, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<[^>]+>/g, " ");
}

const all = pages(ROOT);
let failures = 0;

for (const file of all) {
  const text = visibleText(readFileSync(file, "utf8"));
  if (!CJK.test(text)) continue;

  const hits = [
    ...new Set(
      text
        .split(/\s+/)
        .filter((w) => CJK.test(w))
        .slice(0, 8)
    ),
  ];
  console.error(`x ${file}`);
  console.error(`  contains Chinese: ${hits.join("  ")}`);
  failures++;
}

if (failures > 0) {
  console.error(
    `\nEnglish-purity check failed: ${failures} page(s) contain Chinese.\n` +
      `English pages must be pure English - supply the missing English copy.`
  );
  process.exit(1);
}

console.log(`OK english-purity: ${all.length} pages, no Chinese.`);
