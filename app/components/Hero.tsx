import { EXPERIENCE, PROJECTS, SKILLS } from "../data/resume";
import { Pill } from "./ui";

type ReelItem = {
  title: string;
  detail: string;
};

const EXPERIENCE_ITEMS: ReelItem[] = EXPERIENCE.map((job) => ({
  title: job.title,
  detail: `${job.company} · ${job.start} — ${job.end}`,
}));

const PROJECT_ITEMS: ReelItem[] = PROJECTS.map((project) => ({
  title: project.name,
  detail: project.summary,
}));

const GROUP_HEADING =
  "text-3xl font-bold uppercase tracking-wide text-blood-light sm:text-4xl";

function ReelList({ items }: { items: ReelItem[] }) {
  return (
    <div className="mt-5 flex flex-col gap-5">
      {items.map((item, i) => (
        <div key={i} className={i > 0 ? "border-t border-white/10 pt-5" : ""}>
          <h3 className="text-lg font-medium sm:text-xl">{item.title}</h3>
          <p className="mt-1 max-w-xl text-sm leading-relaxed text-white/60">
            {item.detail}
          </p>
        </div>
      ))}
    </div>
  );
}

// One full pass through Experience, Skills, and Projects. Rendered twice
// below so the loop point is invisible. Skills mirrors Skills.tsx exactly —
// same category heading classes, same Pill component — rather than a
// summarized blurb, since the ask here is the full skill list.
function ReelPass() {
  return (
    <>
      <section className="pb-10 pt-6">
        <h2 className={GROUP_HEADING}>Experience</h2>
        <ReelList items={EXPERIENCE_ITEMS} />
        <div className="mt-10 h-px w-full bg-blood" />
      </section>

      <section className="pb-10 pt-6">
        <h2 className={GROUP_HEADING}>Skills</h2>
        <div className="mt-5 space-y-6">
          {SKILLS.map((group) => (
            <div key={group.title}>
              <h3 className="mb-3 text-base font-bold uppercase tracking-wider text-white/90 sm:text-lg">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 h-px w-full bg-blood" />
      </section>

      <section className="pb-10 pt-6">
        <h2 className={GROUP_HEADING}>Projects</h2>
        <ReelList items={PROJECT_ITEMS} />
        <div className="mt-10 h-px w-full bg-blood" />
      </section>
    </>
  );
}

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
        <ReelPass />
        <ReelPass />
      </div>
    </div>
  );
}
