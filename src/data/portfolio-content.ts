export type PortfolioFilterId =
  | "all"
  | "editorial"
  | "digital"
  | "systems"
  | "brand";

export type PortfolioFilter = {
  id: PortfolioFilterId;
  label: string;
};

export type PortfolioProject = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tags: string[];
  categories: Exclude<PortfolioFilterId, "all">[];
  reversed: boolean;
};

export const portfolioFilters: PortfolioFilter[] = [
  { id: "all", label: "全部作品" },
  { id: "editorial", label: "编辑设计" },
  { id: "digital", label: "数字产品" },
  { id: "systems", label: "系统架构" },
  { id: "brand", label: "品牌策略" },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "archival-mind",
    title: "归档之心",
    description:
      "为全球学术研究库重塑数字交互体验，打造无干扰的阅读环境，尊重高密度信息架构。",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdWMjw1j1X73s39rpaxVv5XGJRi-0KkQxv2AGVaqMULXhyolHOD3mt5OBpSYHorOQ5ZmRE580bn43Y5Dm7VgyIqOPDv9CCJ77yvnZyQobGx9mV1NMLqvpeU7RvweuukbTGFXUM5Cot5SwIeZ3KhLOEIgoRC7rOHMQABlEugBy-5X1gRAgQLrdzpdyKts3z_1P2kMazTzMzKmR4wkQv1PMMWRj14oHS-xydi23ZjNG6U_jx9KBn5BoLE5NXlI3nXlu79FIIPGx0SGg",
    imageAlt: "数字学术期刊的编辑版式，大标题叠于现代主义建筑黑白摄影之上。",
    tags: ["编辑设计", "用户研究"],
    categories: ["editorial", "systems"],
    reversed: false,
  },
  {
    id: "azure-wealth",
    title: "蔚蓝财富界面",
    description:
      "为精品投资公司构建完整设计系统，以低对比层次与韵律排版传递信任感与权威感。",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBgKT40JH_MuM2l6-Ft3gUE4b8qLETkShc1RMjXbexqIwbloCnWsvcYbQ5GbxmiKnUTpjz6i659dsBZ_5PdANG5LdYnhPK6HjcxrdVqNMs4YlF2xABuvLHN9GWzpHReSc-V7nlcNL6jRKL80my_d7PrWA6txHqkAdB4srmZuOqD986kvlw6JIheDII2xxUclIA2ZFNXlCboVioQCL3EaU6GtjqvXKRg5x9nd2yKP7jOSwU3fCZDhHnTe9foDS4gW5PqMNphydxNDzQ",
    imageAlt: "投资平台移动端仪表盘，深炭灰与蓝色渐变的数据可视化界面。",
    tags: ["金融科技", "界面系统"],
    categories: ["digital", "systems"],
    reversed: true,
  },
  {
    id: "mura-studio",
    title: "Mura 工作室品牌",
    description:
      "将极简建筑的物理原则转译为数字优先的品牌识别，以固定网格哲学映射结构严谨性。",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBD-5iV_-a_xPGUyitgJA4dAPo9f6FffA7tDJv_cKWADSoDYaoHJCUpsL07u7fmjdNi96IpC_Jbqbj-NXlZGalsvA_mF1i4Fz74-J_B9FxVy3kpC38TU0Ip3eN9TW1V-hxoR63fQzasBRzjR_FcJs-rIyBfbrnnaPbHNOJjcpnUTYqOHtFvJ0k2EJvwju7l3gQu_e6M-zkRinEVXY2IGJN9ONBZdMNxFM4rmAe19Zck4VSRcwfv2Mm58wb_k_Klsv5nsL7TqmlY908",
    imageAlt: "建筑工作室品牌识别样机：名片、作品集与落地页陈列于浅灰台面。",
    tags: ["品牌识别", "策略"],
    categories: ["brand"],
    reversed: false,
  },
];
