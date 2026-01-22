import { notFound } from "next/navigation";

import { TopNav } from "@/components/TopNav";

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

  return (
    <>
      <TopNav />
      <main className="mx-auto w-full max-w-6xl px-6 py-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-black/50">
              MVP mock
            </div>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight">
              {titleForLevel(level)}
            </h1>
            <p className="mt-2 max-w-3xl text-sm text-black/60">
              Iteration 0: скелет страниц и навигации. Данные пока моковые (без
              БД).
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button className="h-10 w-10 rounded-xl bg-[#1F1F46] text-lg font-semibold text-white">
              +
            </button>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-black/10 p-6">
          <h2 className="text-base font-semibold">Что будет дальше</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-black/70">
            <li>Iteration 1: карточки и DnD на Level‑01 (локально).</li>
            <li>Iteration 2: переходы по верхней панели как в прототипе.</li>
            <li>Iteration 3: workspace‑lock + “fake realtime” на моках.</li>
          </ul>
        </div>
      </main>
    </>
  );
}

