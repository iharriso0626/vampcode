import {
  CERTIFICATIONS,
  CONTACT,
  EDUCATION,
  EXPERIENCE,
  PROFILE,
  PROJECTS,
  SKILLS,
} from "../data/resume";
import { SITE_URL } from "../data/site";

/**
 * schema.org Person graph describing the resume.
 *
 * This is the machine-readable copy of the page: AI crawlers, search engines,
 * and automated recruiting systems can parse the full work history, skills,
 * and credentials from here without interpreting the rendered layout.
 */
const PERSON_ID = `${SITE_URL}/#person`;

export default function StructuredData() {
  const person = {
    "@type": "Person",
    "@id": PERSON_ID,
    name: PROFILE.name,
    url: SITE_URL,
    jobTitle: PROFILE.role,
    description: PROFILE.summary,
    email: `mailto:${CONTACT.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Atlanta",
      addressRegion: "GA",
      addressCountry: "US",
    },
    sameAs: [CONTACT.github, CONTACT.linkedin],
    knowsAbout: SKILLS.flatMap((group) => group.items),
    knowsLanguage: [
      { "@type": "Language", name: "English" },
      { "@type": "Language", name: "Spanish" },
      { "@type": "Language", name: "Chinese" },
      { "@type": "Language", name: "Latin" },
    ],
    worksFor: {
      "@type": "Organization",
      name: EXPERIENCE[0].company,
    },
    hasOccupation: EXPERIENCE.map((job) => ({
      "@type": "Occupation",
      name: job.title,
      occupationLocation: {
        "@type": "Place",
        name: `${job.company} — ${job.location}`,
      },
      description: job.bullets.join(" "),
    })),
    alumniOf: EDUCATION.map((school) => ({
      "@type": "EducationalOrganization",
      name: school.school,
      description: `${school.credential} (${school.date})`,
    })),
    hasCredential: CERTIFICATIONS.map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      name: cert.name,
      credentialCategory: "certificate",
      recognizedBy: {
        "@type": "Organization",
        name: cert.issuer,
      },
    })),
  };

  // Projects are separate CreativeWork nodes attributed back to the Person,
  // rather than prose buried in the Person node, so a parser can enumerate
  // them and read the tech stack off each one.
  const projects = PROJECTS.map((project) => ({
    "@type": "CreativeWork",
    name: project.name,
    abstract: project.summary,
    description: project.bullets.join(" "),
    keywords: project.tech.join(", "),
    author: { "@id": PERSON_ID },
  }));

  const data = {
    "@context": "https://schema.org",
    "@graph": [person, ...projects],
  };

  return (
    <script
      type="application/ld+json"
      // Content is authored in this repo, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
