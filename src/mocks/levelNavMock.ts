export type PillStyle =
  | "whiteLink"
  | "white"
  | "darkOutline"
  | "darkOutlineGreen"
  | "darkOutlineBlue"
  | "darkOutlineOrange"
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

export type DirectionGroup = "projectBureau" | "production" | "system";
export type Direction = {
  slug: string;
  navLabel: string;
  title: string;
  subtitle?: string;
  group: DirectionGroup;
  groupTitle?: string;
};
type L3Obj = { slug: string; label: string; type: "green" | "blue" | "orange"; directionSlug: string };
type L4Item = {
  slug: string;
  label: string;
  l3Slug: string;
  directionSlug: string;
  groupId: string;
  groupTitle: string;
};

const DIRECTIONS: Direction[] = [
  {
    slug: "system-create",
    navLabel: "система создания\nнаправлений\nдеятельности",
    title: "система создания направлений деятельности",
    group: "system",
    groupTitle: "система создания",
  },
  {
    slug: "predmety",
    navLabel: "направление\nПредметы",
    title: "направление Предметы",
    subtitle: "ОКБ",
    group: "projectBureau",
    groupTitle: "проектное бюро",
  },
  {
    slug: "sooruzheniya",
    navLabel: "направление\nСооружения",
    title: "направление Сооружения",
    subtitle: "архитектурное бюро",
    group: "projectBureau",
    groupTitle: "проектное бюро",
  },
  {
    slug: "gorod",
    navLabel: "направление\nГород",
    title: "направление Город",
    subtitle: "градостроительное бюро",
    group: "projectBureau",
    groupTitle: "проектное бюро",
  },
  {
    slug: "zavod",
    navLabel: "направление\nЗавод",
    title: "направление Завод",
    subtitle: "завод предметов быта",
    group: "production",
    groupTitle: "производство",
  },
  {
    slug: "zhilyo",
    navLabel: "направление\nЖильё",
    title: "направление Жильё",
    subtitle: "завод сооружений",
    group: "production",
    groupTitle: "производство",
  },
];

export function getDirection(slug: string) {
  return DIRECTIONS.find((d) => d.slug === slug);
}

export function listDirections() {
  return [...DIRECTIONS];
}

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
    slug: "edinaia-sistema-dizayn-proektov",
    label: "единая система\nдизайн-проектов",
    l3Slug: "proekty-predmetov",
    directionSlug: "predmety",
    groupId: "embodiments",
    groupTitle: "воплощения",
  },
  {
    slug: "lineika-predmetov",
    label: "линейка\nпредметов",
    l3Slug: "proekty-predmetov",
    directionSlug: "predmety",
    groupId: "embodiments",
    groupTitle: "воплощения",
  },
  {
    slug: "dizayn-proekty-predmetov-byta",
    label: "дизайн-проекты\nпредметов быта",
    l3Slug: "proekty-predmetov",
    directionSlug: "predmety",
    groupId: "embodiments",
    groupTitle: "воплощения",
  },
  {
    slug: "analiz-predmetov",
    label: "анализ\nпредметов",
    l3Slug: "proekty-predmetov",
    directionSlug: "predmety",
    groupId: "descriptions",
    groupTitle: "описания",
  },
  {
    slug: "desc-q",
    label: "?",
    l3Slug: "proekty-predmetov",
    directionSlug: "predmety",
    groupId: "descriptions",
    groupTitle: "описания",
  },
  {
    slug: "sostoyaniya-tselevoj-sistemy",
    label: "состояния\nцелевой системы",
    l3Slug: "proekty-predmetov",
    directionSlug: "predmety",
    groupId: "methods",
    groupTitle: "методы",
  },
  {
    slug: "sluzhenie-obrazcom",
    label: "служение образцом\nпромышленного производства",
    l3Slug: "proekty-predmetov",
    directionSlug: "predmety",
    groupId: "works",
    groupTitle: "работы",
  },

  // Level-04 (green) example from keyframes: "грант" inside "Инвесторы"
  {
    slug: "chastnyy-investor",
    label: "частный инвестор",
    l3Slug: "investory",
    directionSlug: "predmety",
    groupId: "roles",
    groupTitle: "роли",
  },
  {
    slug: "bank",
    label: "банк",
    l3Slug: "investory",
    directionSlug: "predmety",
    groupId: "roles",
    groupTitle: "роли",
  },
  {
    slug: "gosfond",
    label: "государственный\nфонд",
    l3Slug: "investory",
    directionSlug: "predmety",
    groupId: "roles",
    groupTitle: "роли",
  },
  {
    slug: "kredit",
    label: "кредит",
    l3Slug: "investory",
    directionSlug: "predmety",
    groupId: "opportunities",
    groupTitle: "возможности",
  },
  {
    slug: "grant",
    label: "грант",
    l3Slug: "investory",
    directionSlug: "predmety",
    groupId: "opportunities",
    groupTitle: "возможности",
  },
];

function clampLevel(level: number): 1 | 2 | 3 | 4 {
  if (level === 1 || level === 2 || level === 3 || level === 4) return level;
  return 1;
}

function findL3(slug?: string) {
  return slug ? L3_OBJECTS.find((o) => o.slug === slug) : undefined;
}

function findL4(slug?: string) {
  return slug ? L4_ITEMS.find((i) => i.slug === slug) : undefined;
}

export function getL3Object(slug: string) {
  return findL3(slug);
}

export function getL4Item(slug: string) {
  return findL4(slug);
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
    label: d.navLabel,
    href: `/level/2/${d.slug}`,
    style: d.slug === directionSlug ? "fillBlue" : row2Active ? "white" : "darkOutline",
  })) satisfies Pill[];

  const pbPills = DIRECTIONS.filter((d) => d.group === "projectBureau").map((d) => ({
    id: d.slug,
    label: d.navLabel,
    href: `/level/2/${d.slug}`,
    style: d.slug === directionSlug ? "fillBlue" : row2Active ? "white" : "darkOutline",
  })) satisfies Pill[];

  const prodPills = DIRECTIONS.filter((d) => d.group === "production").map((d) => ({
    id: d.slug,
    label: d.navLabel,
    href: `/level/2/${d.slug}`,
    style: d.slug === directionSlug ? "fillBlue" : row2Active ? "white" : "darkOutline",
  })) satisfies Pill[];

  const row2: RowModel = {
    level: 2,
    active: row2Active,
    groups:
      currentLevel >= 2
        ? [
            { id: "system", title: "система создания", pills: systemPills },
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
                  ? "fillGreen"
                  : "darkOutlineGreen",
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
                  ? "fillBlue"
                  : "darkOutlineBlue",
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
                  ? "fillOrange"
                  : "darkOutlineOrange",
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
  const selectedL4 = findL4(selectedL4Slug);
  const row4L3 = selectedL4 ? findL3(selectedL4.l3Slug) : l3;
  const row4Type = row4L3?.type ?? "orange";

  function row4PillStyle(isSelected: boolean): PillStyle {
    if (isSelected) {
      if (row4Type === "green") return "fillGreen";
      if (row4Type === "blue") return "fillBlue";
      return "fillOrange";
    }

    if (row4Type === "green") return "outlineGreen";
    if (row4Type === "blue") return "outlineBlue";
    return "outlineOrange";
  }

  const row4Groups: DashedGroup[] | undefined =
    currentLevel >= 4
      ? (() => {
          const l3Slug = row4L3?.slug ?? getDefaultL3Slug();
          const items = L4_ITEMS.filter((i) => i.directionSlug === directionSlug && i.l3Slug === l3Slug);

          const groups = new Map<string, DashedGroup>();
          for (const i of items) {
            const existing = groups.get(i.groupId);
            const pill: Pill = {
              id: i.slug,
              label: i.label,
              href: `/level/4/${i.slug}`,
              style: row4PillStyle(i.slug === selectedL4Slug),
            };

            if (existing) {
              existing.pills.push(pill);
            } else {
              groups.set(i.groupId, { id: i.groupId, title: i.groupTitle, pills: [pill] });
            }
          }

          return [...groups.values()];
        })()
      : undefined;

  const row4: RowModel = {
    level: 4,
    active: row4Active,
    groups: row4Groups,
  };

  // Hide below-current levels (always render row numbers, but no content).
  if (currentLevel < 2) row2.groups = undefined;
  if (currentLevel < 3) row3.groups = undefined;
  if (currentLevel < 4) row4.groups = undefined;

  return { currentLevel, rows: [row1, row2, row3, row4] };
}

