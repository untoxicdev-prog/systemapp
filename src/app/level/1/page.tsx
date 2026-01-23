import Link from "next/link";

import { LevelNavPanel } from "@/components/LevelNavPanel";
import { getLevelNavModel } from "@/mocks/levelNavMock";

export default function Level1Page() {
  const navModel = getLevelNavModel({ currentLevel: 1 });

  return (
    <>
      <LevelNavPanel model={navModel} />
      <div className="bg-white text-[#1F1F46]">
        <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-12">
          <h1 className="text-4xl font-medium tracking-tight">
            направления деятельности
          </h1>

          <div className="mt-10 space-y-10">
            <GroupSection
              title={null}
              cards={[
                {
                  slug: "system-create",
                  groupLabel: null,
                  title: "система создания направлений деятельности",
                  subtitle: null,
                  chips: ["созданное направление деятельности"],
                },
              ]}
            />

            <GroupSection
              title="проектные бюро"
              cards={[
                {
                  slug: "predmety",
                  groupLabel: "проектное бюро",
                  title: "направление Предметы",
                  subtitle: "ОКБ",
                  chips: [
                    "единая система дизайн‑проектов предметов",
                    "линейка предметов",
                    "дизайн‑проекты предметов быта",
                  ],
                },
                {
                  slug: "sooruzheniya",
                  groupLabel: "проектное бюро",
                  title: "направление Сооружения",
                  subtitle: "архитектурное бюро",
                  chips: ["единая система дизайн‑проектов жилья", "дизайн‑проекты жилья"],
                },
                {
                  slug: "gorod",
                  groupLabel: "проектное бюро",
                  title: "направление Город",
                  subtitle: "градостроительное бюро",
                  chips: ["дизайн‑проект города"],
                },
              ]}
            />

            <GroupSection
              title="производства"
              cards={[
                {
                  slug: "zavod",
                  groupLabel: "производство",
                  title: "направление Завод",
                  subtitle: "завод предметов быта",
                  chips: ["предметы быта"],
                },
                {
                  slug: "zhilyo",
                  groupLabel: "производство",
                  title: "направление Жильё",
                  subtitle: "завод сооружений",
                  chips: ["жилые помещения"],
                },
              ]}
            />
          </div>
        </main>
      </div>
    </>
  );
}

function PlusButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-xl bg-[#1F1F46] text-xl font-medium text-white"
    >
      +
    </button>
  );
}

type CardModel = {
  slug: string;
  groupLabel: string | null;
  title: string;
  subtitle: string | null;
  chips: string[];
};

function GroupSection({ title, cards }: { title: string | null; cards: CardModel[] }) {
  return (
    <section>
      {title ? (
        <h2 className="mb-4 text-lg font-medium text-black/60">{title}</h2>
      ) : null}

      <div className="relative rounded-[32px] border border-dashed border-black/25 p-8">
        <div className="flex flex-wrap gap-6">
          {cards.map((c) => (
            <DirectionCard key={c.slug} card={c} />
          ))}
        </div>

        <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2">
          <div className="pointer-events-auto">
            <PlusButton label={title ? `Добавить в группу: ${title}` : "Добавить направление"} />
          </div>
        </div>
      </div>
    </section>
  );
}

function DirectionCard({ card }: { card: CardModel }) {
  return (
    <Link
      href={`/level/2/${card.slug}`}
      className="group flex h-[260px] w-[240px] flex-col rounded-2xl border border-black/25 bg-white p-4 transition-shadow hover:shadow-md"
    >
      <div className="text-[10px] font-semibold uppercase tracking-widest text-black/40">
        {card.groupLabel ?? ""}
      </div>
      <div className="mt-2 text-[16px] font-semibold leading-[1.15]">
        {card.title}
      </div>
      <div className="mt-1 text-[12px] text-black/60">{card.subtitle ?? "-"}</div>

      <div className="mt-auto flex flex-col gap-2 pt-5">
        {card.chips.map((chip) => (
          <div
            key={chip}
            className="rounded-lg border border-black/15 bg-white px-3 py-2 text-[10px] leading-[1.1] text-black/60"
          >
            {chip}
          </div>
        ))}
      </div>
    </Link>
  );
}

