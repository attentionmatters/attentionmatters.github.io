export const EMAIL = "mgjn8968@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/petermugao/";

/**
 * 简历 PDF。
 *
 * 现在没有，所以设为 null —— 此时全站的「简历」按钮会自动改指 LinkedIn，
 * 文案也跟着变成「简历在 LinkedIn」，不会出现点了下载却跳外链的情况。
 *
 * 将来要放真简历：把 PDF 放进 public/，这里改成 "/resume.pdf"，
 * 按钮会自动变回「下载简历」并指向 PDF。其余代码无需改动。
 */
export const RESUME_PATH: string | null = null;

export const hasResume = RESUME_PATH !== null;

/** 按钮实际的目标地址 */
export const RESUME_URL = RESUME_PATH ?? LINKEDIN;
