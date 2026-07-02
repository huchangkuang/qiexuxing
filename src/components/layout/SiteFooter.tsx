import { icpRecord, psbRecord } from "@/data/site-meta";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="mx-auto max-w-3xl px-6 py-8">
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm font-medium text-muted">
            © {new Date().getFullYear()} qiexuxing
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted">
            <a
              href={icpRecord.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer transition-colors hover:text-accent"
            >
              {icpRecord.label}
            </a>
            <a
              href={psbRecord.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-1 transition-colors hover:text-teal"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={psbRecord.iconSrc}
                alt=""
                width={16}
                height={16}
                className="h-4 w-4"
              />
              {psbRecord.label}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
