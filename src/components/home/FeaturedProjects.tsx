import Link from "next/link";

import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { ProjectCard } from "@/components/home/ProjectCard";
import { featuredProjects } from "@/data/home-content";

export function FeaturedProjects() {
  return (
    <section className="bg-surface-container-lowest py-unit-xl">
      <div className="mx-auto max-w-container-max px-margin-edge">
        <div className="mb-unit-xl flex flex-col justify-between md:flex-row md:items-end">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-unit-sm">
              精选项目
            </h2>
            <p className="max-w-xl font-body-md text-on-surface-variant">
              技术精度与智识好奇交汇的精选作品。
            </p>
          </div>
          <Link
            href="/portfolio"
            className="group mt-unit-md flex items-center font-label-md text-primary hover:underline md:mt-0"
          >
            查看全部作品
            <MaterialIcon
              name="east"
              className="ml-unit-xs text-sm transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
