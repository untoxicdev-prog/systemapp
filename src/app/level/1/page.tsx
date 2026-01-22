import Link from "next/link";

import { LevelNavPanel } from "@/components/LevelNavPanel";
import { getDefaultL2Slug, getLevelNavModel } from "@/mocks/levelNavMock";

export default function Level1Page() {
  const navModel = getLevelNavModel({ currentLevel: 1 });

  return (
    <>
      <LevelNavPanel model={navModel} />
      <main className="mx-auto w-full max-w-6xl px-6 pb-16 pt-8">
        <h1 className="text-3xl font-semibold tracking-tight">направления деятельности</h1>
        <p className="mt-2 max-w-3xl text-sm text-white/75">
          На 1‑м уровне панель показывает только корневой объект. Ссылки на объекты 2‑го уровня — в содержимом страницы.
        </p>

        <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-6">
          <h2 className="text-base font-semibold text-white">Объекты 2‑го уровня (mock)</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              className="rounded-xl bg-white px-4 py-3 text-sm font-medium text-[#1F1F46]"
              href={`/level/2/${getDefaultL2Slug()}`}
            >
              направление Предметы
            </Link>
            <Link
              className="rounded-xl border border-white/30 px-4 py-3 text-sm font-medium text-white hover:bg-white/10"
              href="/level/2/arhitektura"
            >
              направление Архитектура
            </Link>
            <Link
              className="rounded-xl border border-white/30 px-4 py-3 text-sm font-medium text-white hover:bg-white/10"
              href="/level/2/gorod"
            >
              направление Город
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

