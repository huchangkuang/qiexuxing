import Link from "next/link";

import { ContactLinks } from "@/components/contact/ContactLinks";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-2.5 font-display text-sm font-bold tracking-tight text-foreground"
        >
          <span
            className="h-2.5 w-2.5 rounded-full bg-accent"
            aria-hidden="true"
          />
          qiexuxing.top
        </Link>
        <ContactLinks />
      </div>
    </header>
  );
}
