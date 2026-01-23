import { notFound } from "next/navigation";

import { LevelNavPanel } from "@/components/LevelNavPanel";
import { getL4Item, getLevelNavModel } from "@/mocks/levelNavMock";

export default async function Level4Page({
  params,
}: {
  params: Promise<{ itemSlug: string }>;
}) {
  const { itemSlug } = await params;
  const item = getL4Item(itemSlug);
  if (!item) notFound();

  const navModel = getLevelNavModel({ currentLevel: 4, l4Slug: itemSlug });
  const title = item.label.replaceAll("\n", " ");

  return (
    <>
      <LevelNavPanel model={navModel} />
      <div className="bg-white text-[#1F1F46]">
        <main className="mx-auto w-full max-w-6xl px-6 pb-16 pt-10">
          <div className="text-[11px] font-semibold uppercase tracking-widest text-black/50">
            воплощение
          </div>
          <h1 className="mt-2 text-4xl font-medium tracking-tight">{title}</h1>
          <div className="mt-1 text-[12px] text-black/60">-</div>

          <p className="mt-10 max-w-3xl text-sm text-black/60">
            В Iteration 2 здесь пока мок‑контент (в прототипе: вкладки и таблицы/изображения).
          </p>
        </main>
      </div>
    </>
  );
}

