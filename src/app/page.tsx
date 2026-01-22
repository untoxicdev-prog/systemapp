import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-10">
      <div className="rounded-2xl border border-black/10 p-6">
        <h1 className="text-3xl font-semibold tracking-tight">SystemApp</h1>
        <p className="mt-2 max-w-2xl text-sm text-black/60">
          MVP: навигация по уровням (1–4) и мок‑страницы под прототип.
        </p>
      </div>

      <div className="rounded-2xl border border-black/10 p-6">
        <h2 className="text-base font-semibold">Быстрые ссылки</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            className="rounded-lg bg-[#1F1F46] px-3 py-2 text-sm font-medium text-white"
            href="/level/1"
          >
            Открыть уровень 1
          </Link>
          <Link className="rounded-lg border border-black/10 px-3 py-2 text-sm" href="/level/2">
            Уровень 2
          </Link>
          <Link className="rounded-lg border border-black/10 px-3 py-2 text-sm" href="/level/3">
            Уровень 3
          </Link>
          <Link className="rounded-lg border border-black/10 px-3 py-2 text-sm" href="/level/4">
            Уровень 4
          </Link>
        </div>
      </div>
    </main>
  );
}
