import Link from "next/link";

import type { Project } from "@/data/projects";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  const { theme } = project;

  return (
    <article>
      <Link
        href="/"
        className="cursor-pointer text-sm font-medium text-muted transition-colors hover:text-accent"
      >
        ← 返回
      </Link>

      <div
        className="mt-8 rounded-2xl border-2 p-8 md:p-10"
        style={{
          backgroundColor: theme.surface,
          borderColor: theme.border,
          boxShadow: `0 8px 24px ${theme.glow}`,
        }}
      >
        <span
          className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
          style={{ color: theme.text, backgroundColor: theme.tagBg }}
        >
          {theme.tag}
        </span>

        <h1
          className="font-display mt-5 text-3xl font-bold tracking-tight"
          style={{ color: theme.accentDeep }}
        >
          {project.title}
        </h1>
        <p className="mt-2 text-base font-medium" style={{ color: theme.text }}>
          {project.subtitle}
        </p>

        <p className="mt-8 text-base leading-relaxed text-foreground">
          {project.description}
        </p>

        <ul className="mt-8 flex flex-col gap-2.5">
          {project.highlights.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2.5 text-sm text-muted"
            >
              <span
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: theme.accent }}
              />
              {item}
            </li>
          ))}
        </ul>

        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{
            backgroundColor: theme.accent,
            boxShadow: `0 4px 14px ${theme.glow}`,
          }}
        >
          访问网站
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
