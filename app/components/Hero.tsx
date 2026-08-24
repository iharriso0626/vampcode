import { PROFILE } from "../data/resume";

export default function Hero() {
  return (
    // Centred against the panel's visible height. A percentage height would
    // resolve to auto here, since every ancestor is only min-height constrained.
    // Name, role, and tagline already live in the identity rail (page.tsx),
    // so this panel expands on them instead of repeating them.
    <div className="flex min-h-[45vh] flex-col justify-center gap-4 xl:min-h-[calc(100dvh-8rem)]">
      <p className="text-xs uppercase tracking-[0.2em] text-white/50">
        {PROFILE.location}
      </p>
      <h1 className="max-w-2xl text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-tight">
        Security that holds up,{" "}
        <span className="text-blood-light">software that ships.</span>
      </h1>
      <p className="max-w-md text-base leading-relaxed text-white/70">
        I spend most days closing the gap between security policy and the
        tools teams actually use — audits, automation, and the occasional
        full-stack build.
      </p>
    </div>
  );
}
