"use client";

import Link from "next/link";

import type { DashedGroup, LevelNavModel, Pill, PillStyle, RowModel } from "@/mocks/levelNavMock";

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
    case "darkOutline":
      return [
        base,
        "bg-transparent text-white border border-white/40 hover:bg-white/10",
      ].join(" ");
    case "darkSelected":
      return [base, "bg-[#1F1F46] text-white border border-[#1F1F46]"].join(" ");
    case "white":
      return [base, "bg-white text-[#1F1F46] border border-black/15"].join(" ");
    case "outlineGreen":
      return [base, "bg-white text-[#1F1F46] border-2"].join(" ");
    case "outlineBlue":
      return [base, "bg-white text-[#1F1F46] border-2"].join(" ");
    case "outlineOrange":
      return [base, "bg-white text-[#1F1F46] border-2"].join(" ");
    case "fillGreen":
      return [base, "text-white border"].join(" ");
    case "fillBlue":
      return [base, "text-white border"].join(" ");
    case "fillOrange":
      return [base, "bg-[#F95E25] text-white border border-[#F95E25]"].join(" ");
    default:
      return base;
  }
}

function pillStyleInline(style: PillStyle): React.CSSProperties | undefined {
  switch (style) {
    case "outlineGreen":
      return { borderColor: COLORS.green };
    case "outlineBlue":
      return { borderColor: COLORS.blue };
    case "outlineOrange":
      return { borderColor: COLORS.orange };
    case "fillGreen":
      return { background: COLORS.green, borderColor: COLORS.green };
    case "fillBlue":
      return { background: COLORS.blue, borderColor: COLORS.blue };
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

function GroupTitle({ title, onDark }: { title: string; onDark: boolean }) {
  return (
    <div
      className={[
        "absolute -top-2 left-3 px-2 text-[10px] font-semibold uppercase tracking-widest",
        onDark ? "bg-[#1F1F46] text-white/60" : "bg-white text-black/50",
      ].join(" ")}
    >
      {title}
    </div>
  );
}

function DashedGroupBox({ group, onDark }: { group: DashedGroup; onDark: boolean }) {
  return (
    <div
      className={[
        "relative rounded-2xl border border-dashed p-3",
        onDark ? "border-white/40" : "border-black/25",
      ].join(" ")}
    >
      {group.title ? <GroupTitle title={group.title} onDark={onDark} /> : null}
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

function RowContent({ row }: { row: RowModel }) {
  const onDark = !row.active;

  // Row 1: dashed single pill
  if (row.dashedSingle) {
    const inner = (
      <DashedFrame>
        <PillLink pill={row.dashedSingle} />
      </DashedFrame>
    );

    return (
      <div className="py-5">
        {row.active ? (
          <div className="rounded-2xl bg-white p-4 text-[#1F1F46]">{inner}</div>
        ) : (
          inner
        )}
      </div>
    );
  }

  if (!row.groups) return <div className="h-[88px]" />;

  const groups = (
    <div className="flex flex-wrap items-start gap-4">
      {row.groups.map((g) => (
        <DashedGroupBox key={g.id} group={g} onDark={onDark} />
      ))}
    </div>
  );

  return (
    <div className="py-5">
      {row.active ? (
        <div className="rounded-2xl bg-white p-4 text-[#1F1F46]">{groups}</div>
      ) : (
        groups
      )}
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

