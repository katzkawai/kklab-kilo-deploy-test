import Link from "next/link";

export const metadata = {
  title: "こだわり | 浜名湖うなぎの里（架空のデモサイト）",
  description:
    "※架空のデモサイト※ 創業明治23年、三代続く職人の鰻へのこだわりを紹介する架空のデモページです。",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-stone-900 text-white">
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <span className="inline-flex items-center rounded-full bg-amber-200/90 px-4 py-1 text-xs font-bold text-amber-900 ring-1 ring-amber-400/50">
            ※ 架空のデモサイト
          </span>
          <p className="mt-5 text-sm font-medium tracking-widest text-amber-200">
            明治23年創業　三代続く職人の技
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            鰻一筋、百四十年
          </h1>
          <p className="mt-6 max-w-2xl text-base text-amber-100 md:text-lg">
            浜名湖の豊かな自然に恵まれ、三代にわたり鰻の味わいを追求し続けてまいりました。当店のこだわりをご紹介いたします。
          </p>
        </div>
      </section>

      {/* Notice */}
      <div className="mx-auto max-w-6xl px-4 pt-10">
        <p className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-center text-sm font-medium text-amber-800">
          ※ このページは架空のデモサイトです。
        </p>
      </div>

      {/* Commitment sections */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8">
          <Commitment
            icon="📜"
            title="創業明治23年の歩み"
            text="明治23年、浜名湖のほとりで初代が小さな屋台を開いたのが始まりです。以来三代にわたり、地域の方々に愛される鰻の味わいを守り続けてまいりました。戦災も乗り越え、今も同じ地で炭火の煙を立てています。"
          />
          <Commitment
            icon="🌊"
            title="浜名湖の水"
            text="浜名湖沿岸の養鰻場から毎朝直送される活鰻。澄んだ汽水域で育った鰻は身が引き締まり、脂の乗りも格別です。仕入れの際は職人が自ら目利きを行い、その日のうちに活かしたまま店内の生簀へ。"
          />
          <Commitment
            icon="🔥"
            title="炭火・職人手焼き"
            text="備長炭の強い遠赤外線で、外は香ばしく中はふんわりと焼き上げます。蒸し・焼きの工程を経てこそ、鰻本来の旨味が引き立ちます。串打ちから焼き上げまで、一切の妥協はありません。"
          />
          <Commitment
            icon="🍶"
            title="秘伝のたれ"
            text="創業以来、継ぎ足してきたかえし。三代の職人の手により、今も甕（かめ）でじっくり熟成されています。使う醤油、味醂、砂糖の配合は門外不出。白焼きにも蒲焼きにも、このたれがなければ始まりません。"
          />
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

function Commitment({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
      <div className="flex items-start gap-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-100 text-2xl">
          {icon}
        </div>
        <div>
          <h2 className="text-xl font-bold text-amber-900">{title}</h2>
          <p className="mt-3 leading-relaxed text-stone-600">{text}</p>
        </div>
      </div>
    </div>
  );
}
