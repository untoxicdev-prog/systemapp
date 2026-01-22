import { redirect } from "next/navigation";

import { getDefaultL3Slug } from "@/mocks/levelNavMock";

export default function Level3IndexPage() {
  redirect(`/level/3/${getDefaultL3Slug()}`);
}

