import { notFound } from "next/navigation";

import { LevelNavPanel } from "@/components/LevelNavPanel";
import { getDirection, getLevelNavModel } from "@/mocks/levelNavMock";

export default async function Level2Page({
  params,
}: {
  params: Promise<{ directionSlug: string }>;
}) {
  const { directionSlug } = await params;
  const direction = getDirection(directionSlug);
  if (!direction) notFound();

  const navModel = getLevelNavModel({ currentLevel: 2, directionSlug });

  return (
    <>
      <LevelNavPanel model={navModel} />
      <div className="bg-white text-[#1F1F46]">
        <main className="mx-auto w-full max-w-6xl px-6 pb-16 pt-10">
          <div className="text-[11px] font-semibold uppercase tracking-widest text-black/50">
            {direction.groupTitle ?? ""}
          </div>
          <h1 className="mt-2 text-4xl font-medium tracking-tight">
            {direction.title}
          </h1>
          <div className="mt-1 text-[12px] text-black/60">
            {direction.subtitle ?? "-"}
          </div>

          <p className="mt-10 max-w-3xl text-sm text-black/60">
            В Iteration 2 здесь пока мок‑контент (в прототипе: диаграмма подсистем/шагов/целевой системы).
          </p>
        </main>
      </div>
    </>
  );
}

