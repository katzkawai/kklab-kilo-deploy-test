import Link from "next/link";
import ContactForm from "./contact-form";

export const metadata = {
  title: "お問い合わせ | 浜名湖うなぎの里（架空のデモサイト）",
  description:
    "※架空のデモサイト※ 架空のお問い合わせフォーム。店舗情報・連絡先はすべて架空のものです。",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-stone-900 text-white">
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <span className="inline-flex items-center rounded-full bg-amber-200/90 px-4 py-1 text-xs font-bold text-amber-900 ring-1 ring-amber-400/50">
            ※ 架空のデモサイト
          </span>
          <p className="mt-5 text-sm font-medium tracking-widest text-amber-200">
            お気軽にご連絡ください
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            お問い合わせ
          </h1>
          <p className="mt-6 max-w-2xl text-base text-amber-100 md:text-lg">
            ご予約・ご質問はお電話または下記フォームより承っております。
          </p>
        </div>
      </section>

      {/* Notice */}
      <div className="mx-auto max-w-6xl px-4 pt-10">
        <p className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-center text-sm font-medium text-amber-800">
          ※ 架空のデモサイトです。このフォームは送信されません。
        </p>
      </div>

      {/* Form + info */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-amber-900">お問い合わせフォーム</h2>
            <p className="mt-2 text-sm text-stone-500">
              以下の項目をご入力ください。
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          {/* Shop info */}
          <div>
            <h2 className="text-2xl font-bold text-amber-900">店舗情報</h2>
            <p className="mt-2 text-xs font-medium text-amber-700">
              ※ 以下の情報はすべて架空のものです。
            </p>
            <dl className="mt-6 space-y-5 rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <div>
                <dt className="text-sm font-semibold text-stone-500">店名</dt>
                <dd className="mt-1 text-lg font-bold text-amber-900">浜名湖うなぎの里</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-stone-500">住所（架空）</dt>
                <dd className="mt-1 text-stone-700">
                  〒431-1209<br />静岡県浜松市中央区舞阪町弁天島1234
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-stone-500">電話番号（架空）</dt>
                <dd className="mt-1 text-stone-700">053-XXX-XXXX</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-stone-500">メール（架空）</dt>
                <dd className="mt-1 text-stone-700">contact@hamanako-unagi.example.jp</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-stone-500">営業時間</dt>
                <dd className="mt-1 text-stone-700">
                  11:00 - 14:00 (L.O. 13:30)<br />17:00 - 20:30 (L.O. 20:00)<br />毎週水曜日定休
                </dd>
              </div>
            </dl>
          </div>
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
