import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { InsightArticle } from "@/components/home/InsightArticle";
import { latestInsights } from "@/data/home-content";

export function LatestInsights() {
  return (
    <section className="bg-surface py-unit-xl">
      <div className="mx-auto max-w-container-max px-margin-edge">
        <div className="grid grid-cols-1 gap-unit-xl lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-unit-md leading-tight">
              最新思考与随笔
            </h2>
            <p className="font-body-md text-on-surface-variant mb-unit-lg">
              关于设计、技术，以及对有意义工作的缓慢追寻。
            </p>
            <button
              type="button"
              className="group flex items-center gap-unit-xs font-label-md text-primary transition-opacity hover:opacity-80"
            >
              订阅简报
              <MaterialIcon
                name="mail"
                className="text-sm transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-col gap-gutter">
              {latestInsights.map((insight) => (
                <InsightArticle key={insight.id} insight={insight} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
