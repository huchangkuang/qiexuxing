"use client";

import type { PortfolioFilterId } from "@/data/portfolio-content";
import { portfolioFilters } from "@/data/portfolio-content";

type PortfolioFiltersProps = {
  activeFilter: PortfolioFilterId;
  onFilterChange: (filter: PortfolioFilterId) => void;
};

export function PortfolioFilters({
  activeFilter,
  onFilterChange,
}: PortfolioFiltersProps) {
  return (
    <div className="mb-unit-xl flex flex-wrap gap-unit-sm">
      {portfolioFilters.map((filter) => {
        const isActive = activeFilter === filter.id;

        return (
          <button
            key={filter.id}
            type="button"
            onClick={() => onFilterChange(filter.id)}
            className={
              isActive
                ? "rounded-lg bg-primary px-unit-md py-2 font-label-md text-label-md text-on-primary"
                : "rounded-lg bg-surface-container px-unit-md py-2 font-label-md text-label-md text-on-surface-variant transition-all hover:bg-secondary hover:text-white"
            }
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
