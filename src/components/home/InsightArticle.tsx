import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { Insight } from "@/data/home-content";

type InsightArticleProps = {
  insight: Insight;
};

export function InsightArticle({ insight }: InsightArticleProps) {
  return (
    <article className="group cursor-pointer rounded-lg border-b border-outline-variant p-unit-lg transition-colors last:border-b-0 hover:bg-surface-container-high">
      <div className="mb-unit-xs flex items-start justify-between">
        <span className="font-label-md text-caption text-secondary">
          {insight.meta}
        </span>
        <MaterialIcon
          name="north_east"
          className="text-primary opacity-0 transition-opacity group-hover:opacity-100"
        />
      </div>
      <h4 className="font-headline-md text-headline-md text-on-surface mb-unit-sm transition-colors group-hover:text-primary">
        {insight.title}
      </h4>
      <p className="font-body-md text-on-surface-variant line-clamp-2">
        {insight.excerpt}
      </p>
    </article>
  );
}
