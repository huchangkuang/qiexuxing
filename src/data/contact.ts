export type ContactLink = {
  id: "github" | "email" | "wechat";
  label: string;
  value: string;
  href?: string;
};

export const contactLinks: ContactLink[] = [
  {
    id: "github",
    label: "GitHub",
    value: "huchangkuang",
    href: "https://github.com/huchangkuang",
  },
  {
    id: "email",
    label: "邮箱",
    value: "603021137@qq.com",
  },
  {
    id: "wechat",
    label: "微信",
    value: "HCY603021137",
  },
];
