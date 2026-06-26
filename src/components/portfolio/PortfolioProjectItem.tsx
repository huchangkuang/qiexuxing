import Image from "next/image";
import Link from "next/link";

import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { PortfolioProject } from "@/data/portfolio-content";

type PortfolioProjectItemProps = {
  project: PortfolioProject;
  isLast: boolean;
};

export function PortfolioProjectItem({
  project,
  isLast,
}: PortfolioProjectItemProps) {
  const borderClass = isLast
    ? "border-b border-outline-variant/30 pb-unit-xl md:border-none"
    : "border-b border-outline-variant/30 pb-unit-xl";

  return (
    <article
      className={`project-card group relative flex flex-col items-center gap-unit-xl overflow-hidden ${borderClass} ${
        project.reversed ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/5 bg-surface-container-high md:w-3/5">
        <Image
          src={project.imageSrc}
          alt={project.imageAlt}
          fill
          className="project-image object-cover grayscale group-hover:grayscale-0"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
        <div className="absolute inset-0 bg-secondary/10 transition-colors group-hover:bg-transparent" />
      </div>

      <div className="flex w-full flex-col gap-unit-md md:w-2/5">
        <div className="flex gap-unit-xs">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg bg-secondary px-3 py-1 font-label-md text-caption tracking-wider text-white"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="font-headline-lg text-headline-lg text-primary">
          {project.title}
        </h2>
        <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
          {project.description}
        </p>
        <div className="pt-unit-sm">
          <Link
            href="#"
            className="inline-flex items-center gap-2 font-label-md text-primary transition-all group-hover:text-tertiary hover:gap-4"
          >
            阅读案例
            <MaterialIcon name="arrow_forward" />
          </Link>
        </div>
      </div>
    </article>
  );
}
