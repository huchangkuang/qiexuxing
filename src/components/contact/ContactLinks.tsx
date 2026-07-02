"use client";

import { useState } from "react";
import { HiEnvelope } from "react-icons/hi2";
import { SiGithub, SiWechat } from "react-icons/si";

import { contactLinks } from "@/data/contact";

type ContactLinksProps = {
  className?: string;
};

const iconMap = {
  github: SiGithub,
  email: HiEnvelope,
  wechat: SiWechat,
} as const;

const buttonStyles = {
  github:
    "border-border bg-surface text-foreground hover:border-foreground hover:bg-foreground hover:text-white",
  email:
    "border-[#fed7aa] bg-accent-soft text-accent hover:bg-accent hover:text-white",
  wechat:
    "border-[#99f6e4] bg-teal-soft text-teal hover:bg-teal hover:text-white",
} as const;

export function ContactLinks({ className }: ContactLinksProps) {
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 3000);
  };

  const handleClick = async (link: (typeof contactLinks)[number]) => {
    if (link.id === "github" && link.href) {
      window.open(link.href, "_blank", "noopener,noreferrer");
      return;
    }

    try {
      await navigator.clipboard.writeText(link.value);
      showToast(
        link.id === "email" ? "邮箱已复制" : "微信号已复制",
      );
    } catch {
      showToast("复制失败，请手动复制");
    }
  };

  return (
    <div className={`relative flex items-center gap-2 ${className ?? ""}`}>
      {contactLinks.map((link) => {
        const Icon = iconMap[link.id];

        return (
          <button
            key={link.id}
            type="button"
            title={link.label}
            aria-label={link.label}
            onClick={() => handleClick(link)}
            className={`flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-lg border transition-all duration-200 ${buttonStyles[link.id]}`}
          >
            <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
          </button>
        );
      })}

      {toast ? (
        <span
          role="status"
          aria-live="polite"
          className="absolute top-full right-0 mt-2 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium text-foreground shadow-md"
        >
          {toast}
        </span>
      ) : null}
    </div>
  );
}
