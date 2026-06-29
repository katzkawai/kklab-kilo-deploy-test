import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-stone-900 text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2), transparent 40%)" }} />
        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
          <span className="inline-flex items-center rounded-full bg-amber-200/90 px-4 py-1 text-xs font-bold text-amber-900 ring-1 ring-amber-400/50">
            ※ 架空のデモサイト
          </span>
          <p className="mt-5 text-sm font-medium tracking-widest text-amber-200">
            明治23年創業　浜名湖の味わい
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            創業140年、
            <br className="md:hidden" />
            受け継がれる鰻の技
          </h1>
          <p className="mt-6 max-w-xl text-base text-amber-100 md:text-lg">
            浜名湖の豊かな水系で育った活鰻を、職人が一尾ずつ手作業で捌き、炭火で香ばしく焼き上げます。秘伝のたれと出会うその味わいを、どうぞご堪能ください。
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="rounded-full bg-amber-400 px-8 py-3 font-bold text-amber-950 transition hover:bg-amber-300"
            >
              商品一覧を見る
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-amber-200 px-8 py-3 font-bold text-white transition hover:bg-white/10"
            >
              こだわりについて
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          <Feature
            icon="🐟"
            title="浜名湖の活鰻"
            text="浜名湖沿岸の養鰻場から毎朝直送。澄んだ水で育った活きの良い鰻だけを使用します。"
          />
          <Feature
            icon="🔥"
            title="炭火・職人手焼き"
            text="備長炭の遠赤外線で外は香ばしく、中はふんわりと。300番以上の串打ちを覚えた職人が一つずつ焼き上げます。"
          />
          <Feature
            icon="🍶"
            title="秘伝のたれ"
            text="創業以来継ぎ足してきたかえし。三代にわたる職人の手により、今も甕（かめ）で熟成されています。"
          />
        </div>
      </section>

      {/* Signature dish */}
      <section className="bg-stone-900 py-20 text-stone-100">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-medium tracking-widest text-amber-400">
              SIGNATURE
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">特上鰻重</h2>
            <p className="mt-6 leading-relaxed text-stone-300">
              創業以来愛されてきた当店の看板メニュー。特製の炭火で香ばしく焼き上げた鰻を、秘伝のたれにくぐらせ、湯気立つ真っ白なご飯の上に重ねました。
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-stone-400">価格</dt>
                <dd className="mt-1 text-2xl font-bold text-amber-400">¥4,800</dd>
              </div>
              <div>
                <dt className="text-stone-400">提供時間</dt>
                <dd className="mt-1 text-2xl font-bold text-amber-400">約15分</dd>
              </div>
            </dl>
          </div>
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-700 to-stone-800 p-8">
            <div className="flex h-full flex-col items-center justify-center text-center">
              <span className="text-8xl">🍱</span>
              <p className="mt-6 text-lg font-semibold text-amber-100">
                一口食べれば、
                <br />
                浜名湖の風が吹く
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-2xl font-bold text-amber-900 md:text-3xl">お知らせ</h2>
        <ul className="mt-8 divide-y divide-stone-200 border-y border-stone-200">
          <NewsItem date="2026.06.20" tag="お知らせ" text="土用丑の日前予約受付を開始いたしました。" />
          <NewsItem date="2026.06.10" tag="メニュー" text="夏季限定「ひつまぶし」の提供を開始しました。" />
          <NewsItem date="2026.05.30" tag="イベント" text="舞阪漁港まつりに出店いたします（7/13・14）。" />
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-amber-50 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-amber-900 md:text-3xl">
            ご来店を心よりお待ちしております
          </h2>
          <p className="mt-4 text-stone-600">
            ご予約・お問い合わせはお電話またはフォームより承っております。
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-amber-900 px-8 py-3 font-bold text-white transition hover:bg-amber-800"
          >
            お問い合わせ
          </Link>
        </div>
      </section>
    </>
  );
}

function Feature({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm transition hover:shadow-md">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-2xl">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-bold text-amber-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-stone-600">{text}</p>
    </div>
  );
}

function NewsItem({ date, tag, text }: { date: string; tag: string; text: string }) {
  return (
    <li className="flex flex-col gap-2 py-5 md:flex-row md:items-center md:gap-6">
      <span className="text-sm font-medium text-stone-400">{date}</span>
      <span className="inline-flex w-fit items-center rounded bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
        {tag}
      </span>
      <span className="text-stone-700">{text}</span>
    </li>
  );
}
