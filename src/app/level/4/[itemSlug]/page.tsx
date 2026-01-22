import { notFound } from "next/navigation";

import { LevelNavPanel } from "@/components/LevelNavPanel";
import { getLevelNavModel } from "@/mocks/levelNavMock";

const KNOWN = new Set(["dizayn-proekty-predmetov-byta"]);

export default async function Level4Page({
  params,
}: {
  params: Promise<{ itemSlug: string }>;
}) {
  const { itemSlug } = await params;
  if (!KNOWN.has(itemSlug)) notFound();

  const navModel = getLevelNavModel({ currentLevel: 4, l4Slug: itemSlug });

  return (
    <>
      <LevelNavPanel model={navModel} />
      <main className="mx-auto w-full max-w-6xl px-6 pb-16 pt-8">
        <h1 className="text-3xl font-semibold tracking-tight">
          уровень 4: {itemSlug}
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-white/75">
          В прототипе здесь вкладки “описание/спецификация материалов/…” и
          структурные блоки. Пока мок‑страница.
        </p>
      </main>
    </>
  );
}

