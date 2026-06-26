"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { siteNavLinks } from "@/data/site-nav";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isPortfolio = pathname.startsWith("/portfolio");

  const headerClass = isPortfolio
    ? "fixed top-0 z-50 w-full border-b border-white/10 bg-surface/10 shadow-none backdrop-blur-xl"
    : "glass-nav fixed top-0 z-50 w-full border-b border-white/10";

  const linkClass = (href: string) => {
    const isActive =
      href === "/" ? pathname === "/" : pathname.startsWith(href) && href !== "#";

    if (isActive) {
      return "border-b-2 border-primary pb-1 text-primary transition-colors";
    }

    return "text-on-surface-variant transition-colors hover:text-primary";
  };

  return (
    <header className={headerClass}>
      <nav className="flex w-full max-w-full items-center justify-between px-margin-edge py-4 md:px-margin-desktop">
        <Link
          href="/"
          className="font-display-lg text-headline-md font-extrabold tracking-tighter text-primary"
        >
          qiexuxing.top
        </Link>

        <div className="hidden items-center gap-unit-lg font-label-md text-label-md md:flex">
          {siteNavLinks.map((link) => (
            <Link key={link.label} className={linkClass(link.href)} href={link.href}>
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            className="rounded-lg bg-primary px-unit-md py-2 font-label-md text-on-primary transition-all hover:bg-primary/90 active:scale-95"
          >
            联系我
          </button>
        </div>

        <button
          type="button"
          className="p-2 text-primary md:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "关闭菜单" : "打开菜单"}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <MaterialIcon name={mobileMenuOpen ? "close" : "menu"} />
        </button>
      </nav>

      {mobileMenuOpen ? (
        <div className="border-t border-white/10 px-margin-edge py-unit-md md:hidden">
          <div className="flex flex-col gap-gutter font-label-md text-label-md">
            {siteNavLinks.map((link) => (
              <Link
                key={link.label}
                className={linkClass(link.href)}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              className="rounded-lg bg-primary px-6 py-2 text-left font-label-md text-on-primary transition-all hover:opacity-90 active:scale-95"
            >
              联系我
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
