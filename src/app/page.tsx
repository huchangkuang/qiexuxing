import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-14 md:py-20">
      <section className="mt-14 md:mt-16">
        <div className="mb-6 flex items-center gap-3">
          <span className="section-divider flex-1" />
          <h2 className="text-sm font-medium text-muted">作品</h2>
          <span className="section-divider flex-1" />
        </div>
        <div className="flex flex-col gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
