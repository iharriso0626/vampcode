import { PROJECTS } from "../data/resume";
import { Pill, SectionHeading } from "./ui";

export default function Projects() {
  return (
    <div>
      <SectionHeading>Projects</SectionHeading>

      <p className="mb-8 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
        Selected work. Details are kept general where the underlying systems are
        internal.
      </p>

      <div className="space-y-6">
        {PROJECTS.map((project) => (
          <article
            key={project.name}
            className="border-l-2 border-blood bg-white/[0.03] p-4 sm:p-6"
          >
            <h3 className="text-lg font-bold sm:text-xl">{project.name}</h3>

            <p className="mt-2 text-sm leading-relaxed text-blood-light sm:text-base">
              {project.summary}
            </p>

            <ul className="mt-4 space-y-2">
              {project.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="relative pl-5 text-sm leading-relaxed text-white/80 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:bg-blood sm:text-base"
                >
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
