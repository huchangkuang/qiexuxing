"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteFooter() {
  const pathname = usePathname();
  const showCopyright = pathname.startsWith("/portfolio");

  return (
    <footer className="w-full border-t border-outline-variant/30 bg-surface-container-lowest py-unit-xl">
      <div className="mx-auto flex w-full max-w-container-max flex-col items-center justify-between gap-unit-md px-margin-edge md:flex-row md:px-margin-desktop">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-display-lg text-headline-md font-bold text-primary">
            qiexuxing.top
          </span>
          {showCopyright ? (
            <p className="mt-2 font-body-md text-caption text-on-surface-variant">
              © 2024 qiexuxing.top 保留所有权利。
            </p>
          ) : null}
        </div>
        <div className="flex gap-unit-lg font-label-md text-label-md">
          <Link
            href="#"
            className="text-on-surface-variant transition-colors hover:text-primary"
          >
            隐私政策
          </Link>
        </div>
      </div>
    </footer>
  );
}
