import Link from "next/link";

import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { theme } = project;

  return (
    <Link
      href={`/works/${project.slug}`}
      className="group relative block cursor-pointer overflow-hidden rounded-2xl border-2 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md md:p-7"
      style={{
        backgroundColor: theme.surface,
        borderColor: theme.border,
        boxShadow: `0 4px 16px ${theme.glow}`,
      }}
    >
      <div
        className="pointer-events-none absolute -top-16 -right-10 h-36 w-36 rounded-full opacity-60 blur-3xl transition-opacity group-hover:opacity-90"
        style={{ backgroundColor: theme.accentSoft }}
        aria-hidden="true"
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <span
            className="rounded-full px-3 py-1 text-xs font-semibold"
            style={{ color: theme.text, backgroundColor: theme.tagBg }}
          >
            {theme.tag}
          </span>
          <span
            className="font-display text-xs font-bold tracking-wider uppercase opacity-0 transition-opacity group-hover:opacity-100"
            style={{ color: theme.accentDeep }}
          >
            查看
          </span>
        </div>

        <h2
          className="font-display mt-4 text-xl font-bold tracking-tight"
          style={{ color: theme.accentDeep }}
        >
          {project.title}
        </h2>
        <p className="mt-1 text-sm font-medium" style={{ color: theme.text }}>
          {project.subtitle}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {project.summary}
        </p>

        <span
          className="mt-5 inline-flex min-h-11 items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-all group-hover:gap-2.5"
          style={{ backgroundColor: theme.accent }}
        >
          查看说明
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
