import { CONTACT, EXPERIENCE, PROJECTS } from "../data/resume";

type ReelItem = {
  eyebrow: string;
  title: string;
  detail: string;
};

// Pulled straight from the resume data so the reel can't drift out of sync
// with the sections it's previewing. Order matches the nav: experience,
// skills, projects, contact.
const REEL: ReelItem[] = [
  ...EXPERIENCE.map((job) => ({
    eyebrow: "Experience",
    title: job.title,
    detail: `${job.company} · ${job.start} — ${job.end}`,
  })),
  {
    eyebrow: "Skills",
    title: "Security, cloud, and full-stack",
    detail:
      "GCP and AWS, incident response, compliance frameworks, and the languages behind all of it.",
  },
  ...PROJECTS.map((project) => ({
    eyebrow: "Projects",
    title: project.name,
    detail: project.summary,
  })),
  {
    eyebrow: "Contact",
    title: "Get in touch",
    detail: `${CONTACT.githubHandle} on GitHub, ${CONTACT.linkedinHandle} on LinkedIn.`,
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
        {[...REEL, ...REEL].map((item, i) => (
          <div key={i} className="border-b border-white/10 py-6">
            <p className="text-xs uppercase tracking-[0.2em] text-blood-light">
              {item.eyebrow}
            </p>
            <h2 className="mt-1 text-lg font-medium sm:text-xl">
              {item.title}
            </h2>
            <p className="mt-1 max-w-xl text-sm leading-relaxed text-white/60">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
