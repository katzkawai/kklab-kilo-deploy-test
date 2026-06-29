import Link from "next/link";

export const metadata = {
  title: "商品一覧 | 浜名湖うなぎの里（架空のデモサイト）",
  description:
    "※架空のデモサイト※ 架空の鰻メニュー一覧。商品・価格は実在しません。",
};

type Product = {
  emoji: string;
  name: string;
  price: string;
  description: string;
};

const products: Product[] = [
  {
    emoji: "🍱",
    name: "うな重",
    price: "¥2,800",
    description: "備長炭で香ばしく焼き上げた鰻を、秘伝のたれでご飯の上に。定番の鰻重です。",
  },
  {
    emoji: "🍱",
    name: "特上うな重",
    price: "¥4,800",
    description: "特大の鰻をたっぷりと。当店の看板メニュー。特製たれと共にどうぞ。",
  },
  {
    emoji: "🍚",
    name: "うな丼",
    price: "¥1,800",
    description: "手軽に鰻を味わいたい方に。香り高い蒲焼きをどんぶりで。",
  },
  {
    emoji: "🍣",
    name: "う巻き",
    price: "¥900",
    description: "ふんわり玉子で巻いた鰻の太巻き。一品のおつまみにも。",
  },
  {
    emoji: "🥢",
    name: "ひつまぶし",
    price: "¥2,400",
    description: "きざみ鰻を丼で。薬味や出汁を注いで三通りに楽しめる夏季限定メニュー。",
  },
  {
    emoji: "🍱",
    name: "うなぎパイ（お土産）",
    price: "¥1,200",
    description: "鰻の旨味を練り込んだ架空のお土産用パイ。お持ち帰りに。",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-stone-900 text-white">
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <span className="inline-flex items-center rounded-full bg-amber-200/90 px-4 py-1 text-xs font-bold text-amber-900 ring-1 ring-amber-400/50">
            ※ 架空のデモサイト
          </span>
          <p className="mt-5 text-sm font-medium tracking-widest text-amber-200">
            職人が一尾ずつ手焼きで
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            商品一覧
          </h1>
          <p className="mt-6 max-w-2xl text-base text-amber-100 md:text-lg">
            浜名湖の活鰻を炭火で焼き上げた自慢の品々。※ 以下の商品・価格はすべて架空のものであり、実在しません。
          </p>
        </div>
      </section>

      {/* Notice */}
      <div className="mx-auto max-w-6xl px-4 pt-10">
        <p className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-center text-sm font-medium text-amber-800">
          ※ 架空のデモサイトです。商品・価格は実在しません。
        </p>
      </div>

      {/* Products grid */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.name}
              className="flex flex-col rounded-2xl border border-stone-200 bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-amber-100 text-5xl">
                {p.emoji}
              </div>
              <h2 className="mt-5 text-xl font-bold text-amber-900">{p.name}</h2>
              <p className="mt-2 text-2xl font-black text-amber-700">{p.price}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Back link */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <Link
          href="/"
          className="inline-block rounded-full bg-amber-900 px-8 py-3 font-bold text-white transition hover:bg-amber-800"
        >
          ← ホームへ戻る
        </Link>
      </section>
    </>
  );
}
