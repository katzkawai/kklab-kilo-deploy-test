import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const notoJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "浜名湖うなぎ専門店 浜名湖うなぎの里",
  description:
    "※架空のデモサイト※ Next.js 15 で作成された架空のデモサイトです。記載の店舗名・住所・電話番号・メールアドレス等はすべて架空の情報であり、実在するものではありません。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoJP.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-800">
        <FictionalBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function FictionalBanner() {
  return (
    <div className="bg-stone-900 px-4 py-2 text-center text-xs font-medium text-amber-200 md:text-sm">
      ⚠️ このサイトは 架空のデモサイト です。実在する店舗・人物・連絡先ではありません。
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-amber-900/10 bg-stone-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-3xl">🌊</span>
          <div>
            <p className="text-lg font-bold leading-tight text-amber-900">
              浜名湖うなぎの里
            </p>
            <p className="text-xs text-stone-500">HAMANAKO UNAGI NO SATO</p>
          </div>
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-stone-600 md:flex">
          <Link href="/" className="hover:text-amber-800">ホーム</Link>
          <Link href="/about" className="hover:text-amber-800">こだわり</Link>
          <Link href="/products" className="hover:text-amber-800">商品一覧</Link>
          <Link href="/contact" className="hover:text-amber-800">お問い合わせ</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-amber-900/10 bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-amber-400">浜名湖うなぎの里</p>
            <p className="mt-1 text-xs text-stone-400">（架空の店舗・デモサイト）</p>
            <p className="mt-2 text-sm text-stone-400">
              〒431-1209<br />静岡県浜松市中央区舞阪町弁天島1234
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-stone-200">営業時間</p>
            <p className="mt-2 text-stone-400">
              11:00 - 14:00 (L.O. 13:30)<br />17:00 - 20:30 (L.O. 20:00)<br />毎週水曜日定休
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-stone-200">ご予約・お問い合わせ</p>
            <p className="mt-2 text-stone-400">
              TEL: 053-XXX-XXXX<br />contact@hamanako-unagi.example.jp
            </p>
          </div>
        </div>
        <div className="mt-8 rounded-lg border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-center text-xs leading-relaxed text-amber-200">
          ※ 本ウェブサイトは Next.js 15 を用いた架空のデモサイトです。記載の店舗名・住所・電話番号・メールアドレス等はすべて架空であり、実在するものではありません。
        </div>
        <p className="mt-6 border-t border-stone-700 pt-6 text-center text-xs text-stone-500">
          © 2026 浜名湖うなぎの里（架空のデモサイト）. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
