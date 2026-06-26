"use client";

import { useState } from "react";

import { PortfolioFilters } from "@/components/portfolio/PortfolioFilters";
import { PortfolioProjectItem } from "@/components/portfolio/PortfolioProjectItem";
import type { PortfolioFilterId } from "@/data/portfolio-content";
import { portfolioProjects } from "@/data/portfolio-content";

export function PortfolioProjectList() {
  const [activeFilter, setActiveFilter] = useState<PortfolioFilterId>("all");

  const filteredProjects =
    activeFilter === "all"
      ? portfolioProjects
      : portfolioProjects.filter((project) =>
          project.categories.includes(activeFilter),
        );

  return (
    <>
      <PortfolioFilters
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <div className="flex flex-col gap-unit-xl">
        {filteredProjects.map((project, index) => (
          <PortfolioProjectItem
            key={project.id}
            project={project}
            isLast={index === filteredProjects.length - 1}
          />
        ))}
      </div>
    </>
  );
}
