import { notFound } from "next/navigation";

import { LevelNavPanel } from "@/components/LevelNavPanel";
import { getL3Object, getLevelNavModel } from "@/mocks/levelNavMock";

export default async function Level3Page({
  params,
}: {
  params: Promise<{ objectSlug: string }>;
}) {
  const { objectSlug } = await params;
  const obj = getL3Object(objectSlug);
  if (!obj) notFound();

  const navModel = getLevelNavModel({ currentLevel: 3, l3Slug: objectSlug });
  const title = obj.label.replaceAll("\n", " ");
  const overline =
    obj.type === "orange"
      ? "целевая система"
      : obj.type === "blue"
        ? "системы создания"
        : "надсистемы";

  return (
    <>
      <LevelNavPanel model={navModel} />
      <div className="bg-white text-[#1F1F46]">
        <main className="mx-auto w-full max-w-6xl px-6 pb-16 pt-10">
          <div className="text-[11px] font-semibold uppercase tracking-widest text-black/50">
            {overline}
          </div>
          <h1 className="mt-2 text-4xl font-medium tracking-tight">{title}</h1>
          <div className="mt-1 text-[12px] text-black/60">-</div>

          <p className="mt-10 max-w-3xl text-sm text-black/60">
            В Iteration 2 здесь пока мок‑контент (в прототипе: колонки/таблицы по типу системы).
          </p>
        </main>
      </div>
    </>
  );
}

