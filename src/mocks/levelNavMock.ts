export type PillStyle =
  | "whiteLink"
  | "white"
  | "darkOutline"
  | "darkSelected"
  | "outlineGreen"
  | "outlineBlue"
  | "outlineOrange"
  | "fillGreen"
  | "fillBlue"
  | "fillOrange";

export type Pill = {
  id: string;
  label: string;
  href: string;
  style: PillStyle;
};

export type DashedGroup = {
  id: string;
  title?: string;
  pills: Pill[];
};

export type RowModel = {
  level: 1 | 2 | 3 | 4;
  active: boolean;
  // If defined — render a dashed frame with a single pill (row 1).
  dashedSingle?: Pill;
  // If defined — render groups (for rows 2–4). Empty when level is below current.
  groups?: DashedGroup[];
};

export type LevelNavModel = {
  currentLevel: 1 | 2 | 3 | 4;
  rows: RowModel[];
};

type Direction = { slug: string; label: string; group: "projectBureau" | "production" | "system" };
type L3Obj = { slug: string; label: string; type: "green" | "blue" | "orange"; directionSlug: string };
type L4Item = { slug: string; label: string; l3Slug: string; directionSlug: string };

const DIRECTIONS: Direction[] = [
  { slug: "system-create", label: "система создания\nнаправлений\nдеятельности", group: "system" },
  { slug: "predmety", label: "направление\nПредметы", group: "projectBureau" },
  { slug: "arhitektura", label: "направление\nАрхитектура", group: "projectBureau" },
  { slug: "gorod", label: "направление\nГород", group: "projectBureau" },
  { slug: "predmety-prod", label: "направления\nПредметы", group: "production" },
  { slug: "sooruzheniya", label: "направления\nСооружения", group: "production" },
];

const L3_OBJECTS: L3Obj[] = [
  { slug: "investory", label: "инвесторы", type: "green", directionSlug: "predmety" },
  { slug: "pomeshcheniya-i-zdaniya", label: "помещения и\nздания", type: "green", directionSlug: "predmety" },
  { slug: "mebelnye-eksperty", label: "мебельные\nэксперты", type: "green", directionSlug: "predmety" },

  { slug: "napravleniya-predsozdanie-komandy", label: "направления\nПредсоздание\nкоманды", type: "blue", directionSlug: "predmety" },
  { slug: "podgotovka-k-sozdaniyu-tselevoj-sistemy", label: "подготовка к\nсозданию\nцелевой системы", type: "blue", directionSlug: "predmety" },
  { slug: "sozdanie-dizayn-proektov-predmetov", label: "создание дизайн-\nпроектов\nпредметов", type: "blue", directionSlug: "predmety" },

  { slug: "proekty-predmetov", label: "проекты\nпредметов", type: "orange", directionSlug: "predmety" },
];

const L4_ITEMS: L4Item[] = [
  {
    slug: "dizayn-proekty-predmetov-byta",
    label: "дизайн-проекты\nпредметов быта",
    l3Slug: "proekty-predmetov",
    directionSlug: "predmety",
  },
];

function clampLevel(level: number): 1 | 2 | 3 | 4 {
  if (level === 1 || level === 2 || level === 3 || level === 4) return level;
  return 1;
}

function findDirection(slug?: string) {
  return slug ? DIRECTIONS.find((d) => d.slug === slug) : undefined;
}

function findL3(slug?: string) {
  return slug ? L3_OBJECTS.find((o) => o.slug === slug) : undefined;
}

function findL4(slug?: string) {
  return slug ? L4_ITEMS.find((i) => i.slug === slug) : undefined;
}

export function getDefaultL2Slug() {
  return "predmety";
}

export function getDefaultL3Slug() {
  return "proekty-predmetov";
}

export function getDefaultL4Slug() {
  return "dizayn-proekty-predmetov-byta";
}

export function getLevelNavModel(args: {
  currentLevel: number;
  directionSlug?: string;
  l3Slug?: string;
  l4Slug?: string;
}): LevelNavModel {
  const currentLevel = clampLevel(args.currentLevel);

  const l4 = findL4(args.l4Slug);
  const l3 = findL3(args.l3Slug) ?? (l4 ? findL3(l4.l3Slug) : undefined);

  const directionSlug =
    args.directionSlug ?? l3?.directionSlug ?? l4?.directionSlug ?? getDefaultL2Slug();

  const row1Active = currentLevel === 1;
  const row2Active = currentLevel === 2;
  const row3Active = currentLevel === 3;
  const row4Active = currentLevel === 4;

  // Row 1: single root link inside dashed frame
  const row1: RowModel = {
    level: 1,
    active: row1Active,
    dashedSingle: {
      id: "root",
      label: "направления\nдеятельности",
      href: "/level/1",
      style: row1Active ? "white" : "whiteLink",
    },
  };

  // Row 2: all siblings (directions), grouped
  const systemPills = DIRECTIONS.filter((d) => d.group === "system").map((d) => ({
    id: d.slug,
    label: d.label,
    href: `/level/2/${d.slug}`,
    style: row2Active ? (d.slug === directionSlug ? "darkSelected" : "white") : d.slug === directionSlug ? "whiteLink" : "darkOutline",
  })) satisfies Pill[];

  const pbPills = DIRECTIONS.filter((d) => d.group === "projectBureau").map((d) => ({
    id: d.slug,
    label: d.label,
    href: `/level/2/${d.slug}`,
    style: row2Active ? (d.slug === directionSlug ? "darkSelected" : "white") : d.slug === directionSlug ? "whiteLink" : "darkOutline",
  })) satisfies Pill[];

  const prodPills = DIRECTIONS.filter((d) => d.group === "production").map((d) => ({
    id: d.slug,
    label: d.label,
    href: `/level/2/${d.slug}`,
    style: row2Active ? (d.slug === directionSlug ? "darkSelected" : "white") : d.slug === directionSlug ? "whiteLink" : "darkOutline",
  })) satisfies Pill[];

  const row2: RowModel = {
    level: 2,
    active: row2Active,
    groups:
      currentLevel >= 2
        ? [
            { id: "system", pills: systemPills },
            { id: "projectBureau", title: "проектные бюро", pills: pbPills },
            { id: "production", title: "производства", pills: prodPills },
          ]
        : undefined,
  };

  // Row 3: all siblings (green/blue/orange) for selected direction
  const selectedL3Slug = args.l3Slug ?? l4?.l3Slug ?? getDefaultL3Slug();
  const row3Groups: DashedGroup[] | undefined =
    currentLevel >= 3
      ? [
          {
            id: "supersystems",
            title: "надсистемы",
            pills: L3_OBJECTS.filter((o) => o.directionSlug === directionSlug && o.type === "green").map((o) => ({
              id: o.slug,
              label: o.label,
              href: `/level/3/${o.slug}`,
              style: row3Active
                ? o.slug === selectedL3Slug
                  ? "fillGreen"
                  : "outlineGreen"
                : o.slug === selectedL3Slug
                  ? "whiteLink"
                  : "darkOutline",
            })),
          },
          {
            id: "creationSystems",
            title: "системы создания",
            pills: L3_OBJECTS.filter((o) => o.directionSlug === directionSlug && o.type === "blue").map((o) => ({
              id: o.slug,
              label: o.label,
              href: `/level/3/${o.slug}`,
              style: row3Active
                ? o.slug === selectedL3Slug
                  ? "fillBlue"
                  : "outlineBlue"
                : o.slug === selectedL3Slug
                  ? "whiteLink"
                  : "darkOutline",
            })),
          },
          {
            id: "targetSystem",
            title: "целевая система",
            pills: L3_OBJECTS.filter((o) => o.directionSlug === directionSlug && o.type === "orange").map((o) => ({
              id: o.slug,
              label: o.label,
              href: `/level/3/${o.slug}`,
              style: row3Active
                ? o.slug === selectedL3Slug
                  ? "fillOrange"
                  : "outlineOrange"
                : o.slug === selectedL3Slug
                  ? "whiteLink"
                  : "darkOutline",
            })),
          },
        ]
      : undefined;

  const row3: RowModel = {
    level: 3,
    active: row3Active,
    groups: row3Groups,
  };

  // Row 4: all siblings for selected level-4 item (mock)
  const selectedL4Slug = args.l4Slug ?? getDefaultL4Slug();
  const row4: RowModel = {
    level: 4,
    active: row4Active,
    groups:
      currentLevel >= 4
        ? [
            {
              id: "embodiments",
              title: "воплощения",
              pills: [
                {
                  id: "emb-sys",
                  label: "единая система\nдизайн-проектов",
                  href: `/level/4/${selectedL4Slug}`,
                  style: "outlineOrange",
                },
                {
                  id: "emb-line",
                  label: "линейка\nпредметов",
                  href: `/level/4/${selectedL4Slug}`,
                  style: "outlineOrange",
                },
                {
                  id: "emb-home",
                  label: "дизайн-проекты\nпредметов быта",
                  href: `/level/4/${selectedL4Slug}`,
                  style: "fillOrange",
                },
              ],
            },
            {
              id: "descriptions",
              title: "описания",
              pills: [
                {
                  id: "desc-q",
                  label: "?",
                  href: `/level/4/${selectedL4Slug}`,
                  style: "outlineOrange",
                },
              ],
            },
            {
              id: "methods",
              title: "методы",
              pills: [
                {
                  id: "m-states",
                  label: "состояния\nцелевой системы",
                  href: `/level/4/${selectedL4Slug}`,
                  style: "outlineOrange",
                },
              ],
            },
            {
              id: "target",
              title: "целевая система",
              pills: [
                {
                  id: "t-sys",
                  label: "единая система\nдизайн-проектов",
                  href: `/level/4/${selectedL4Slug}`,
                  style: "outlineOrange",
                },
                {
                  id: "t-line",
                  label: "линейка\nпредметов",
                  href: `/level/4/${selectedL4Slug}`,
                  style: "outlineOrange",
                },
                {
                  id: "t-home",
                  label: "дизайн-проекты\nпредметов быта",
                  href: `/level/4/${selectedL4Slug}`,
                  style: "fillOrange",
                },
              ],
            },
          ]
        : undefined,
  };

  // Hide below-current levels (always render row numbers, but no content).
  if (currentLevel < 2) row2.groups = undefined;
  if (currentLevel < 3) row3.groups = undefined;
  if (currentLevel < 4) row4.groups = undefined;

  return { currentLevel, rows: [row1, row2, row3, row4] };
}

