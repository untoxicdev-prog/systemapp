import { redirect } from "next/navigation";

import { getDefaultL2Slug } from "@/mocks/levelNavMock";

export default function Level2IndexPage() {
  redirect(`/level/2/${getDefaultL2Slug()}`);
}

