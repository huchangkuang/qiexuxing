import type { Metadata } from "next";

import { PortfolioPageHeader } from "@/components/portfolio/PortfolioPageHeader";
import { PortfolioProjectList } from "@/components/portfolio/PortfolioProjectList";

export const metadata: Metadata = {
  title: "作品集 | qiexuxing.top",
  description: "精选智识设计挑战与数字生态案例。",
};

export default function PortfolioPage() {
  return (
    <>
      <div className="wild-texture pointer-events-none fixed inset-0 z-0" />
      <main className="relative z-10 pt-32 pb-unit-xl">
        <div className="mx-auto max-w-container-max px-margin-edge">
          <PortfolioPageHeader />
          <PortfolioProjectList />
        </div>
      </main>
    </>
  );
}
