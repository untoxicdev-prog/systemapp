"use client";

import Link from "next/link";

import type { DashedGroup, LevelNavModel, Pill, PillStyle } from "@/mocks/levelNavMock";

const COLORS = {
  dark: "#1F1F46",
  white: "#ffffff",
  green: "#3AB700",
  blue: "#0023CF",
  orange: "#F95E25",
};

function pillClasses(style: PillStyle) {
  const base =
    "inline-flex items-center whitespace-pre-line rounded-xl px-4 py-3 text-sm leading-[1.05] transition-colors";

  switch (style) {
    case "whiteLink":
      return [
        base,
        "bg-white text-[#1F1F46] border border-white/20 hover:bg-white/95",
      ].join(" ");
    case "darkSelected":
      return [base, "bg-[#1F1F46] text-white border border-[#1F1F46]"].join(" ");
    case "white":
      return [base, "bg-white text-[#1F1F46] border border-black/15"].join(" ");
    case "greenOutline":
      return [
        base,
        "bg-transparent text-white border",
      ].join(" ");
    case "blueOutline":
      return [base, "bg-transparent text-white border"].join(" ");
    case "orangeOutline":
      return [base, "bg-white text-[#1F1F46] border-2"].join(" ");
    case "orangeFill":
      return [base, "bg-[#F95E25] text-white border border-[#F95E25]"].join(" ");
    default:
      return base;
  }
}

function pillStyleInline(style: PillStyle): React.CSSProperties | undefined {
  switch (style) {
    case "greenOutline":
      return { borderColor: COLORS.green };
    case "blueOutline":
      return { borderColor: COLORS.blue };
    case "orangeOutline":
      return { borderColor: COLORS.orange };
    default:
      return undefined;
  }
}

function LevelNum({ n }: { n: 1 | 2 | 3 | 4 }) {
  return (
    <div className="flex h-full items-start justify-center pt-8 text-3xl font-semibold text-white/90">
      {n}
    </div>
  );
}

function DashedFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-dashed border-white/40 p-3">
      {children}
    </div>
  );
}

function GroupTitle({ title }: { title: string }) {
  return (
    <div className="absolute -top-2 left-3 bg-white px-2 text-[10px] font-semibold uppercase tracking-widest text-black/50">
      {title}
    </div>
  );
}

function DashedGroupBox({ group }: { group: DashedGroup }) {
  return (
    <div className="relative rounded-2xl border border-dashed border-black/25 p-3">
      {group.title ? <GroupTitle title={group.title} /> : null}
      <div className="flex flex-wrap items-stretch gap-3">
        {group.pills.map((p) => (
          <PillLink key={p.id} pill={p} />
        ))}
      </div>
    </div>
  );
}

function PillLink({ pill }: { pill: Pill }) {
  return (
    <Link
      href={pill.href}
      className={pillClasses(pill.style)}
      style={pillStyleInline(pill.style)}
    >
      {pill.label}
    </Link>
  );
}

function RowContent({ row }: { row: LevelNavModel["rows"][number] }) {
  if (row.dashedParentPill) {
    return (
      <div className="py-5">
        <DashedFrame>
          <PillLink pill={row.dashedParentPill} />
        </DashedFrame>
      </div>
    );
  }

  if (!row.tray) return <div className="h-[88px]" />;

  return (
    <div className="py-5">
      <div className="rounded-2xl bg-white p-4 text-[#1F1F46]">
        <div className="flex flex-wrap items-start gap-4">
          {row.tray.groups.map((g) => (
            <DashedGroupBox key={g.id} group={g} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function LevelNavPanel({ model }: { model: LevelNavModel }) {
  return (
    <div className="bg-[#1F1F46]">
      <div className="mx-auto w-full max-w-[1400px] px-6">
        <div className="grid grid-cols-[56px_1fr] gap-6">
          {model.rows.map((row) => (
            <div key={row.level} className="contents">
              <LevelNum n={row.level} />
              <RowContent row={row} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

