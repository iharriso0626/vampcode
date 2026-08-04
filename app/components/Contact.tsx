import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { CONTACT, PROFILE } from "../data/resume";
import { SectionHeading } from "./ui";

const LINKS = [
  {
    label: "GitHub",
    value: CONTACT.githubHandle,
    href: CONTACT.github,
    Icon: FaGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    value: CONTACT.linkedinHandle,
    href: CONTACT.linkedin,
    Icon: FaLinkedin,
    external: true,
  },
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    Icon: FaEnvelope,
    external: false,
  },
];

export default function Contact() {
  return (
    <div>
      <SectionHeading>Contact</SectionHeading>

      <p className="mb-8 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
        Please reach out with any questions about my work, or to discuss
        potential opportunities. Based in {PROFILE.location}.
      </p>

      <div className="space-y-4">
        {LINKS.map(({ label, value, href, Icon, external }) => (
          <a
            key={label}
            href={href}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="group flex items-center gap-4 border-l-2 border-blood bg-white/[0.03] p-4 transition-colors hover:bg-blood/20 focus-visible:bg-blood/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blood sm:gap-5 sm:p-5"
          >
            <Icon
              className="shrink-0 text-white/80 transition-colors group-hover:text-white"
              size={32}
              aria-hidden="true"
            />
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-widest text-white/50">
                {label}
              </p>
              <p className="truncate text-base sm:text-lg">{value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
