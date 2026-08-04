import Link from "next/link";
import { PROFILE } from "./data/resume";

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-ink px-6 text-center text-white">
      <p className="text-[clamp(4rem,18vw,10rem)] font-light leading-none text-blood">
        404
      </p>

      <h1 className="mt-4 text-2xl font-semibold uppercase tracking-wider sm:text-3xl">
        Page Not Found
      </h1>

      <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
        That page does not exist. Everything on this site lives on the home
        page.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-lg border border-blood bg-blood px-5 py-2.5 text-sm transition-colors hover:bg-blood/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blood sm:text-base"
      >
        Back to {PROFILE.name}
      </Link>
    </div>
  );
}
