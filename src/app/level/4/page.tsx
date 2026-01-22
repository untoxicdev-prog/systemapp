import { redirect } from "next/navigation";

import { getDefaultL4Slug } from "@/mocks/levelNavMock";

export default function Level4IndexPage() {
  redirect(`/level/4/${getDefaultL4Slug()}`);
}

