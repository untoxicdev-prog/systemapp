import { notFound } from "next/navigation";

import { LevelNavPanel } from "@/components/LevelNavPanel";
import { getLevelNavModel } from "@/mocks/levelNavMock";

const KNOWN = new Set([
  "system-create",
  "predmety",
  "arhitektura",
  "gorod",
  "predmety-prod",
  "sooruzheniya",
]);

export default async function Level2Page({
  params,
}: {
  params: Promise<{ directionSlug: string }>;
}) {
  const { directionSlug } = await params;
  if (!KNOWN.has(directionSlug)) notFound();

  const navModel = getLevelNavModel({ currentLevel: 2, directionSlug });

  return (
    <>
      <LevelNavPanel model={navModel} />
      <main className="mx-auto w-full max-w-6xl px-6 pb-16 pt-8">
        <h1 className="text-3xl font-semibold tracking-tight">
          уровень 2: {directionSlug}
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-white/75">
          В прототипе здесь будет содержимое направления (подсистемы, цепочки и
          целевая система). Пока это мок‑страница.
        </p>
      </main>
    </>
  );
}

