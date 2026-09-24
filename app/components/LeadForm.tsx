"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "../i18n/dictionaries";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/towanoukarel/30min";

export default function LeadForm({ dict }: { dict: Dictionary["form"] }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error ?? dict.errorGeneric);
      }

      window.location.href = CALENDLY_URL;
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : dict.errorGeneric);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-col gap-2 text-left">
        <label htmlFor="email" className="text-sm text-zinc-400">
          {dict.emailLabel}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 outline-none focus:border-emerald-400"
          placeholder={dict.emailPlaceholder}
        />
      </div>
      {status === "error" && <p className="text-sm text-red-400">{errorMessage}</p>}
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-emerald-500 px-6 py-3 font-medium text-black transition-colors hover:bg-emerald-400 disabled:opacity-60"
      >
        {status === "loading" ? dict.loading : dict.submit}
      </button>
    </form>
  );
}
