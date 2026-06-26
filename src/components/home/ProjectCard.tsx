import Image from "next/image";

import type { Project } from "@/data/home-content";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group card-hover flex h-full flex-col overflow-hidden rounded-xl border border-outline-variant bg-surface-container">
      <div className="relative aspect-video overflow-hidden bg-surface-container-high">
        <Image
          src={project.imageSrc}
          alt={project.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-primary/20 opacity-0 transition-opacity group-hover:opacity-100">
          <span className="rounded-full bg-primary px-unit-md py-2 font-label-md text-on-primary shadow-lg">
            查看详情
          </span>
        </div>
      </div>

      <div className="flex flex-grow flex-col p-unit-lg">
        <span className="mb-unit-xs font-label-md text-caption tracking-widest text-secondary">
          {project.category}
        </span>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-unit-sm">
          {project.title}
        </h3>
        <p className="font-body-md text-on-surface-variant mb-unit-md line-clamp-2">
          {project.description}
        </p>
        <div className="mt-auto flex gap-unit-xs border-t border-outline-variant pt-unit-md">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-surface-container-high px-2 py-1 font-label-md text-caption text-on-surface-variant"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
