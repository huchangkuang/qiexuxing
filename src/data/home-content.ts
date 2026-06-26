export type Project = {
  id: string;
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tags: string[];
};

export type Insight = {
  id: string;
  meta: string;
  title: string;
  excerpt: string;
};

export const featuredProjects: Project[] = [
  {
    id: "systemic-calm",
    category: "数字策略",
    title: "系统性从容",
    description:
      "重构企业级架构，优先保障用户专注度，降低认知负荷。",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDj_GMHBUL0Z15fj56qDo7JwjnAn-X7eUaFbgsFReHZ92wEL9ma3T1LvPfcf7TtENdIjRHNGXIuErv19r8PweRV6ephiwAL3BCV56IBFSAvGvX56gBc5v6f93fsFBSm7ki0SOwts8eTE1eotnofafdxG7FSoyL0KzSnpt23Rsy4Z4px0t0Pio71ZNBQSa0-Q2p9tvQiEhkwqi8QalVKpc7HLYXNEnBKZWLhT9rtX_dL2UF2-yGIf7hyd-k3JcwFTfvVCAlsOzuHPQw",
    imageAlt: "简约工作区：笔记本电脑、茶杯与皮质笔记本。",
    tags: ["体验设计", "案例研究"],
  },
  {
    id: "editorial-authority",
    category: "学术出版",
    title: "编辑权威感",
    description:
      "为现代学术话语与长篇深度思考，打造专属数字栖居地。",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAk3cdQBGQDYPObd82Dp6vPY6M2mRDkbSm758YN3l-C4L96KF7jLTMlmTp_p1yRy20aHjaXho1Yb90eUMPyrMxXQu8Q1oKcMynOMVfJ7fBhXDyIWEIb54C_Fr9vm3cc1GPVRvq2RnD7StBVP9Wmh52G0oHTbSMN0oi8EFECbq_2XfYRIVE3AaZgOqrmMhxbgPfD1SVKtzh8KoboJ4X42UtuwSbpJ7uC2W1RluLXPC8u9PIDvK2IRfvR2lzH-NL5AqejgGH-BeTjTrk",
    imageAlt: "层叠半透明几何体的抽象三维渲染。",
    tags: ["设计系统", "字体排印"],
  },
  {
    id: "visual-semantics",
    category: "品牌识别",
    title: "视觉语义学",
    description:
      "为重视留白、沉静与存在感的品牌，构建非言语视觉语言。",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADz4Bz1wG-pNjt7pV8696BQEdsMLuA7zvaMfMh6W8iePTgikuP5-8z27RIs4c9JzQ-CZ6AjZ8oe9k2awkIYChVk8L5_Z5uF3ivSJoTGyQ55MRcaX2_48EQVqSYvUx2_z__eTDdWT-nvjx98zqbZGB5_O_bngD75udop5FKEevIhLAO-axvvPV5EIufSabMiNTXmP-CUQR9SnhyE7FYU0WZ05B6C5FrjWaAGbf5P4Jmm4A_9Wxq7dAuNrJEJQuXz0-JpsA-p08Y4v4",
    imageAlt: "墨滴在清水中扩散的微距摄影。",
    tags: ["品牌设计", "标志设计"],
  },
];

export const latestInsights: Insight[] = [
  {
    id: "aesthetic-of-absence",
    meta: "2024 年 3 月 12 日 · 阅读约 4 分钟",
    title: "缺席的美学：留白为何是功能性资产",
    excerpt:
      "探讨数字界面中宽裕边距的心理影响，以及它如何提升用户的专注与留存……",
  },
  {
    id: "digital-serenity",
    meta: "2024 年 2 月 28 日 · 阅读约 7 分钟",
    title: "超连接时代的数字宁静",
    excerpt:
      "我们如何构建尊重用户注意力的工具，而不是在每个触点与之争夺注意力……",
  },
  {
    id: "intellectual-modernism",
    meta: "2024 年 2 月 15 日 · 阅读约 3 分钟",
    title: "走向知识现代主义",
    excerpt:
      "定义下一代网页设计中权威感与信任感的视觉语言……",
  },
];
