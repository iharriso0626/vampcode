import { EXPERIENCE, PROJECTS } from "../data/resume";

type ReelItem = {
  title: string;
  detail: string;
};

type ReelGroup = {
  label: string;
  items: ReelItem[];
};

// Pulled straight from the resume data so the reel can't drift out of sync
// with the sections it's previewing. Contact is left out — it's a short,
// action-driven section that doesn't read well as a passing preview.
const GROUPS: ReelGroup[] = [
  {
    label: "Experience",
    items: EXPERIENCE.map((job) => ({
      title: job.title,
      detail: `${job.company} · ${job.start} — ${job.end}`,
    })),
  },
  {
    label: "Skills",
    items: [
      {
        title: "Security, cloud, and full-stack",
        detail:
          "GCP and AWS, incident response, compliance frameworks, and the languages behind all of it.",
      },
    ],
  },
  {
    label: "Projects",
    items: PROJECTS.map((project) => ({
      title: project.name,
      detail: project.summary,
    })),
  },
];

export default function Hero() {
  return (
    // Fixed to the panel's visible height rather than sized by content — the
    // reel loops inside it instead of growing the page. Doubled below and
    // animated exactly -50% so the loop point is invisible.
    <div className="relative h-[45vh] overflow-hidden xl:h-[calc(100dvh-8rem)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-ink to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-ink to-transparent"
      />

      {/* Decorative preview of what's on the other tabs — the real content is
          already reachable through the nav (and fully present for no-JS /
          crawlers via the noscript override in layout.tsx), so this list is
          hidden from assistive tech to avoid reading an endless duplicate. */}
      <div
        aria-hidden="true"
        className="animate-reel motion-reduce:animate-none flex flex-col"
      >
        {[...GROUPS, ...GROUPS].map((group, groupIndex) => (
          <section key={groupIndex} className="pb-10 pt-6">
            <h2 className="text-3xl font-semibold uppercase tracking-wide text-blood-light sm:text-4xl">
              {group.label}
            </h2>
            <div className="mt-5 flex flex-col gap-5">
              {group.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={
                    itemIndex > 0 ? "border-t border-white/10 pt-5" : ""
                  }
                >
                  <h3 className="text-lg font-medium sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-white/60">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 h-px w-full bg-blood" />
          </section>
        ))}
      </div>
    </div>
  );
}
