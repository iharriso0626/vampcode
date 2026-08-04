// Small shared building blocks used across the content panels.

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h2 className="text-3xl font-bold uppercase tracking-wide sm:text-4xl">
        {children}
      </h2>
      <div className="mt-3 h-0.5 w-20 bg-blood" />
    </div>
  );
}

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-blood/60 bg-blood/10 px-2.5 py-1 text-xs text-white/90 sm:text-sm">
      {children}
    </span>
  );
}
