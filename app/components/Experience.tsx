import { EDUCATION, EXPERIENCE, PROFILE } from "../data/resume";
import { SectionHeading } from "./ui";

export default function Experience() {
  return (
    <div>
      <SectionHeading>Experience</SectionHeading>

      <p className="mb-8 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
        {PROFILE.summary}
      </p>

      <div className="space-y-6">
        {EXPERIENCE.map((job) => (
          <article
            key={job.company}
            className="border-l-2 border-blood bg-white/[0.03] p-4 sm:p-6"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="text-lg font-bold sm:text-xl">{job.title}</h3>
              <span className="shrink-0 text-xs uppercase tracking-wider text-white/50 sm:text-sm">
                {job.start} — {job.end}
              </span>
            </div>
            <p className="mt-1 text-sm text-blood-light sm:text-base">
              {job.company} · {job.location}
            </p>

            <ul className="mt-4 space-y-2">
              {job.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="relative pl-5 text-sm leading-relaxed text-white/80 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:bg-blood sm:text-base"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-12">
        <SectionHeading>Education</SectionHeading>

        <div className="space-y-6">
          {EDUCATION.map((school) => (
            <article
              key={school.school}
              className="border-l-2 border-blood bg-white/[0.03] p-4 sm:p-6"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="text-lg font-bold sm:text-xl">
                  {school.school}
                </h3>
                <span className="shrink-0 text-xs uppercase tracking-wider text-white/50 sm:text-sm">
                  {school.date}
                </span>
              </div>
              <p className="mt-1 text-sm text-blood-light sm:text-base">
                {school.location}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                {school.credential}
              </p>
              {school.detail && (
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {school.detail}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
