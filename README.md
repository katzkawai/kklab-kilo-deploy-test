# 浜名湖うなぎの里（架空のデモサイト）

Next.js 16 で構築した浜名湖うなぎ専門店を題材にした**架空のデモサイト**です。
店舗名・住所・電話番号・メールアドレス・商品・価格はすべて架空であり、実在するものではありません。

> ⚠️ このリポジトリはデモ・学習目的の架空サイトです。実際の店舗・サービスではありません。

🔗 **公開デモ**: [katzkawai.org/kklab-kilo-deploy-test](http://katzkawai.org/kklab-kilo-deploy-test/)
（`main` への push で GitHub Actions により自動デプロイ）

## レポジトリ概要

| 項目 | 内容 |
| --- | --- |
| フレームワーク | Next.js 16 (App Router, Turbopack) |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS v4 |
| フォント | システムフォント（日本語対応） |
| デプロイ | GitHub Pages（GitHub Actions による静的書き出し自動デプロイ） |

### ページ構成

| パス | ページ | 内容 |
| --- | --- | --- |
| `/` | ホーム | ヒーロー・こだわり3点・看板メニュー・お知らせ・CTA |
| `/about` | こだわり | 創業明治23年・浜名湖の水・炭火・秘伝のたれ |
| `/products` | 商品一覧 | うな重・特上うな重・うな丼・う巻き・ひつまぶし・うなぎパイ |
| `/contact` | お問い合わせ | 架空の問い合わせフォーム（送信不可・保存されない） |

### 架空サイトである旨の明示箇所

- 全ページ最上部の固定バナー
- 各ページヒーロー内の「※ 架空のデモサイト」バッジ
- フッターの注意書きボックス
- 各ページの `metadata.description`
- お問い合わせフォーム（送信不可である旨を明記）

## セットアップ

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) を開いてください。

### ビルド

```bash
npm run build
npm run start
```

## デプロイ

`main` ブランチへ push すると、[GitHub Actions](.github/workflows/deploy.yml) が静的書き出し（`output: "export"`）でビルドし、**GitHub Pages** へ自動デプロイします。

- **公開 URL**: [http://katzkawai.org/kklab-kilo-deploy-test/](http://katzkawai.org/kklab-kilo-deploy-test/)
- プロジェクトサイトはサブパス配信のため、`next.config.ts` が CI から渡される `PAGES_BASE_PATH`（`configure-pages` の `base_path`）を `basePath` に適用します。ローカルの `next dev` はルート（`/`）のまま動作します。
- 手動デプロイは GitHub の **Actions タブ → Deploy to GitHub Pages → Run workflow** から実行できます。
- 設定: リポジトリの **Settings → Pages → Source = GitHub Actions**（ワークフローが `enablement: true` で初回自動有効化）。

> このサイトは API ルート・Server Actions・middleware を持たないため完全に静的化でき、サーバー不要で配信できます。

## 更新履歴

| 日付 | 内容 |
| --- | --- |
| 2026-06-29 | 初回リリース。Next.js 15 アプリを scaffold、ホーム・こだわり・商品一覧・お問い合わせの4ページを作成。架空サイトである旨を全ページに明示 |
| 2026-06-29 | Next.js 16.2.9 へアップデート。Turbopack デフォルト化に対応、next/font/google をシステムフォントへ移行 |
| 2026-06-29 | GitHub Actions による GitHub Pages 自動デプロイを構成（静的書き出し / `basePath` 自動注入）。独自ドメイン katzkawai.org で公開 |
