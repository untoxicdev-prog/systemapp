import { notFound } from "next/navigation";

import { LevelNavPanel } from "@/components/LevelNavPanel";
import { getLevelNavModel } from "@/mocks/levelNavMock";

const LEVELS = new Set(["1", "2", "3", "4"]);

function titleForLevel(level: string) {
  switch (level) {
    case "1":
      return "направления деятельности";
    case "2":
      return "направление: Предметы";
    case "3":
      return "проекты предметов";
    case "4":
      return "дизайн-проекты предметов быта";
    default:
      return "уровень";
  }
}

export default async function LevelPage({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const { level } = await params;
  if (!LEVELS.has(level)) notFound();

  const navModel = getLevelNavModel(Number(level));

  return (
    <>
      <LevelNavPanel model={navModel} />
      <main className="mx-auto w-full max-w-6xl px-6 pb-16 pt-8">
        <h1 className="text-3xl font-semibold tracking-tight">{titleForLevel(level)}</h1>
        <p className="mt-2 max-w-3xl text-sm text-white/75">
          Iteration 1: панель уровней (always‑4‑rows + all‑sibling на уровнях выше текущего). Данные пока моковые.
        </p>
      </main>
    </>
  );
}

