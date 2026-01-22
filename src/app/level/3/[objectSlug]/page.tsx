import { notFound } from "next/navigation";

import { LevelNavPanel } from "@/components/LevelNavPanel";
import { getLevelNavModel } from "@/mocks/levelNavMock";

const KNOWN = new Set([
  "investory",
  "pomeshcheniya-i-zdaniya",
  "mebelnye-eksperty",
  "napravleniya-predsozdanie-komandy",
  "podgotovka-k-sozdaniyu-tselevoj-sistemy",
  "sozdanie-dizayn-proektov-predmetov",
  "proekty-predmetov",
]);

export default async function Level3Page({
  params,
}: {
  params: Promise<{ objectSlug: string }>;
}) {
  const { objectSlug } = await params;
  if (!KNOWN.has(objectSlug)) notFound();

  const navModel = getLevelNavModel({ currentLevel: 3, l3Slug: objectSlug });

  return (
    <>
      <LevelNavPanel model={navModel} />
      <main className="mx-auto w-full max-w-6xl px-6 pb-16 pt-8">
        <h1 className="text-3xl font-semibold tracking-tight">
          уровень 3: {objectSlug}
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-white/75">
          В прототипе здесь будет “проекты предметов” и колонки. Пока это
          мок‑страница, но навигация соответствует path‑роутингу.
        </p>
      </main>
    </>
  );
}

