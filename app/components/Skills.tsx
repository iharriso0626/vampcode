import { CERTIFICATIONS, SKILLS } from "../data/resume";
import { Pill, SectionHeading } from "./ui";

export default function Skills() {
  return (
    <div>
      <SectionHeading>Skills</SectionHeading>

      <div className="space-y-6">
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

      <div className="mt-12">
        <SectionHeading>Certifications</SectionHeading>

        <div className="grid gap-4 sm:grid-cols-2">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.name}
              className="border-l-2 border-blood bg-white/[0.03] p-4"
            >
              <h3 className="text-base font-bold sm:text-lg">{cert.name}</h3>
              <p className="mt-1 text-sm text-blood-light">{cert.issuer}</p>
              {cert.detail && (
                <p className="mt-2 text-xs text-white/50">{cert.detail}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
