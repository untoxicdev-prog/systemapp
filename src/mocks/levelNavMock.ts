export type PillStyle =
  | "whiteLink"
  | "darkSelected"
  | "white"
  | "greenOutline"
  | "blueOutline"
  | "orangeOutline"
  | "orangeFill";

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

export type Tray = {
  groups: DashedGroup[];
};

export type LevelRowModel = {
  level: 1 | 2 | 3 | 4;
  // Optional: a dashed frame with a single “parent link” pill (row 1 in prototypes)
  dashedParentPill?: Pill;
  // Optional: a white tray container with dashed groups inside (rows 2–4 in prototypes)
  tray?: Tray;
};

export type LevelNavModel = {
  currentLevel: 1 | 2 | 3 | 4;
  rows: LevelRowModel[];
};

function lvl(level: number): 1 | 2 | 3 | 4 {
  if (level === 1 || level === 2 || level === 3 || level === 4) return level;
  return 1;
}

export function getLevelNavModel(currentLevel: number): LevelNavModel {
  const cur = lvl(currentLevel);

  const row1: LevelRowModel = {
    level: 1,
    dashedParentPill: {
      id: "root",
      label: "направления\nдеятельности",
      href: "/level/1",
      style: "whiteLink",
    },
  };

  const row2: LevelRowModel = {
    level: 2,
    tray:
      cur >= 2
        ? {
            groups: [
              {
                id: "parentLinkL2",
                pills: [
                  {
                    id: "l2-parent",
                    label: "система создания\nнаправлений\nдеятельности",
                    href: "/level/1",
                    style: "white",
                  },
                ],
              },
              {
                id: "projectBureau",
                title: "проектные бюро",
                pills: [
                  {
                    id: "dir-items",
                    label: "направление\nПредметы",
                    href: "/level/2",
                    style: cur === 2 ? "darkSelected" : "white",
                  },
                  {
                    id: "dir-arch",
                    label: "направление\nАрхитектура",
                    href: "/level/2",
                    style: "white",
                  },
                  {
                    id: "dir-city",
                    label: "направление\nГород",
                    href: "/level/2",
                    style: "white",
                  },
                ],
              },
              {
                id: "production",
                title: "производства",
                pills: [
                  {
                    id: "prod-items",
                    label: "направления\nПредметы",
                    href: "/level/2",
                    style: "white",
                  },
                  {
                    id: "prod-struct",
                    label: "направления\nСооружения",
                    href: "/level/2",
                    style: "white",
                  },
                ],
              },
            ],
          }
        : undefined,
  };

  const row3: LevelRowModel = {
    level: 3,
    tray:
      cur >= 3
        ? {
            groups: [
              {
                id: "supersystems",
                title: "надсистемы",
                pills: [
                  {
                    id: "investors",
                    label: "инвесторы",
                    href: "/level/3",
                    style: "greenOutline",
                  },
                  {
                    id: "buildings",
                    label: "помещения и\nздания",
                    href: "/level/3",
                    style: "greenOutline",
                  },
                  {
                    id: "experts",
                    label: "мебельные\nэксперты",
                    href: "/level/3",
                    style: "greenOutline",
                  },
                ],
              },
              {
                id: "creationSystems",
                title: "системы создания",
                pills: [
                  {
                    id: "prep",
                    label: "подготовка к\nсозданию\nцелевой системы",
                    href: "/level/3",
                    style: "blueOutline",
                  },
                  {
                    id: "design",
                    label: "создание дизайн-\nпроектов\nпредметов",
                    href: "/level/3",
                    style: "blueOutline",
                  },
                  {
                    id: "more",
                    label: "направления\nПредсоздание\nкоманды",
                    href: "/level/3",
                    style: "blueOutline",
                  },
                ],
              },
              {
                id: "target",
                title: "целевая система",
                pills: [
                  {
                    id: "targetItems",
                    label: "проекты\nпредметов",
                    href: "/level/3",
                    style: "orangeFill",
                  },
                ],
              },
            ],
          }
        : undefined,
  };

  const row4: LevelRowModel = {
    level: 4,
    tray:
      cur >= 4
        ? {
            groups: [
              {
                id: "embodiments",
                title: "воплощения",
                pills: [
                  {
                    id: "sys",
                    label: "единая система\nдизайн-проектов",
                    href: "/level/4",
                    style: "orangeOutline",
                  },
                  {
                    id: "line",
                    label: "линейка\nпредметов",
                    href: "/level/4",
                    style: "orangeOutline",
                  },
                  {
                    id: "homeDesign",
                    label: "дизайн-проекты\nпредметов быта",
                    href: "/level/4",
                    style: "orangeFill",
                  },
                ],
              },
            ],
          }
        : undefined,
  };

  return {
    currentLevel: cur,
    rows: [row1, row2, row3, row4],
  };
}

