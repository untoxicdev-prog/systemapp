"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LEVELS = [1, 2, 3, 4] as const;

function isActive(pathname: string, level: number) {
  return pathname === `/level/${level}`;
}

export function TopNav() {
  const pathname = usePathname() ?? "/";

  return (
    <header className="bg-[#1F1F46] text-white">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-6 py-3">
        <Link
          href="/"
          className="rounded-md px-2 py-1 text-sm font-semibold tracking-tight text-white/90 hover:text-white"
        >
          направления деятельности
        </Link>

        <div className="mx-3 h-5 w-px bg-white/20" />

        <nav className="flex flex-wrap items-center gap-2">
          {LEVELS.map((lvl) => {
            const active = isActive(pathname, lvl);
            return (
              <Link
                key={lvl}
                href={`/level/${lvl}`}
                className={[
                  "inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-medium transition-colors",
                  active
                    ? "border-white/40 bg-white/10"
                    : "border-white/15 bg-transparent hover:bg-white/10",
                ].join(" ")}
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/10 text-[11px]">
                  {lvl}
                </span>
                <span>уровень</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

