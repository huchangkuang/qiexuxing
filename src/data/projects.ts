export type ProjectTheme = {
  accent: string;
  accentDeep: string;
  accentSoft: string;
  surface: string;
  border: string;
  glow: string;
  tag: string;
  tagBg: string;
  text: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  description: string;
  highlights: string[];
  href: string;
  theme: ProjectTheme;
};

export const projects: Project[] = [
  {
    slug: "mind-mirror",
    title: "Mind Mirror",
    subtitle: "趣味心理测试合集",
    summary: "轻量、好玩的心理测试体验，适合碎片时间探索自我。",
    description:
      "Mind Mirror 是一个面向普通用户的趣味心理测试合集。通过简短有趣的互动题目，帮助用户在轻松氛围里获得一点关于自己的启发。产品侧重流畅的答题体验与清晰的结果呈现。",
    highlights: ["多主题心理测试", "移动端友好", "轻量快速上手"],
    href: "https://mmirror.qiexuxing.top/",
    theme: {
      accent: "#ea580c",
      accentDeep: "#c2410c",
      accentSoft: "#ffedd5",
      surface: "#fffaf3",
      border: "#fed7aa",
      glow: "rgba(234, 88, 12, 0.12)",
      tag: "消费向",
      tagBg: "#ffedd5",
      text: "#9a3412",
    },
  },
  {
    slug: "aigc",
    title: "AIGC 工作台",
    subtitle: "AI 素材工作台",
    summary: "面向创作者与 Prompt 工程师的 AI 素材管理与创作工具。",
    description:
      "AIGC 工作台为专业创作者和 Prompt 工程师提供 AI 素材的组织、管理与使用能力。聚焦工作流效率，让提示词、素材与产出在同一套界面里连贯完成。",
    highlights: ["创作者工作流", "Prompt 工程支持", "素材统一管理"],
    href: "https://aigc.qiexuxing.top/",
    theme: {
      accent: "#0d9488",
      accentDeep: "#0f766e",
      accentSoft: "#ccfbf1",
      surface: "#f0fdfa",
      border: "#99f6e4",
      glow: "rgba(13, 148, 136, 0.12)",
      tag: "工具向",
      tagBg: "#ccfbf1",
      text: "#115e59",
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
