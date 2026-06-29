"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-amber-300 bg-amber-50 p-8 text-center">
        <div className="text-4xl">✉️</div>
        <h3 className="mt-4 text-xl font-bold text-amber-900">
          ご入力ありがとうございます（デモ）
        </h3>
        <p className="mt-3 text-sm text-amber-800">
          このフォームは架空のデモサイトのもので、実際には送信されません。<br />
          入力いただいた内容はどこにも保存されません。
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-full border border-amber-400 px-6 py-2 text-sm font-bold text-amber-800 transition hover:bg-amber-100"
        >
          入力しなおす
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-amber-900">
          お名前 <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-800 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
          placeholder="浜名　鰻太郎"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-amber-900">
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-800 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
          placeholder="demo@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-amber-900">
          電話番号
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-800 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
          placeholder="090-XXXX-XXXX"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-amber-900">
          お問い合わせ内容 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-800 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
          placeholder="ご予約内容やお問い合わせをお気軽にどうぞ。"
        />
      </div>

      <div className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-xs text-amber-800">
        ※ このフォームは架空のデモサイトです。送信ボタンを押しても実際には送信されず、入力内容は保存されません。
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-amber-900 px-8 py-3 font-bold text-white transition hover:bg-amber-800"
      >
        送信する（デモ）
      </button>
    </form>
  );
}
