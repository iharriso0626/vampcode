// Single source of truth for every piece of resume content on the site.
// Update this file, not the components, when the resume changes.

export const PROFILE = {
  name: "Ian Harrison",
  role: "Security Analyst & Developer",
  location: "Atlanta, Georgia",
  tagline:
    "Creating, monitoring, testing, and securing software in Atlanta, Georgia.",
  summary:
    "I work in information security and compliance, focused on the rapid implementation, monitoring, and documentation of full-stack applications and programs. I continue to build my education through certifications in security and AI.",
};

export const CONTACT = {
  email: "iharrison0626@gmail.com",
  github: "https://github.com/iharriso0626",
  githubHandle: "iharriso0626",
  linkedin: "https://www.linkedin.com/in/ian-harrison-3774ab224/",
  linkedinHandle: "ian-harrison",
};

// Lives in public/. Generated from the content in this file, deliberately
// without a phone number — the site is public and the PDF is downloadable.
export const RESUME_PDF = "/Ian_Harrison_Resume.pdf";

export type Job = {
  company: string;
  location: string;
  title: string;
  start: string;
  end: string;
  bullets: string[];
};

export const EXPERIENCE: Job[] = [
  {
    company: "Sterling Seacrest Pritchard",
    location: "Atlanta, GA",
    title: "Systems Analyst",
    start: "June 2025",
    end: "Present",
    bullets: [
      "Lead and assist security response for company security events, including phishing investigation and remediation.",
      "Own the management and security of all information in the company data lake, deployment of Cloud Run services, and integration with third-party applications.",
      "Head of AI integration — lead bi-weekly best-practice sessions for 100 users and serve in an advisory role for Executive Committee meetings.",
      "Advise on and implement modifications to the company website, ensuring compliance standards are maintained.",
      "Developed internal systems for company-wide budget calculation, information collection, and process automation.",
    ],
  },
  {
    company: "Health Industries LLC",
    location: "Birmingham, AL",
    title: "Front-End Developer & Cyber Analyst",
    start: "November 2023",
    end: "April 2024",
    bullets: [
      "Authored documentation and testing procedures for security protocols and application security.",
      "Drafted and revised all company security policies, including those used by company counsel through development and production.",
      "Responsible for enforcement of policy and compliance standards applicable to the business.",
      "Front-end development of production code and dynamic AI feature development.",
      "Built with React / React Native, Java, Python, Node, and Flask, with extensive use of Linux.",
    ],
  },
];

export type School = {
  school: string;
  location: string;
  credential: string;
  date: string;
  detail?: string;
};

export const EDUCATION: School[] = [
  {
    school: "Samford University",
    location: "Birmingham, AL",
    credential:
      "Bachelor of Science, Computer Science — Cybersecurity Concentration, Minor in Psychology",
    date: "May 2025",
  },
  {
    school: "Universidad de Málaga",
    location: "Málaga, Spain",
    credential: "Study Abroad",
    date: "Summer 2022",
    detail:
      "All coursework taught in Spanish while living with a native host family.",
  },
];

export type SkillGroup = {
  title: string;
  items: string[];
};

export const SKILLS: SkillGroup[] = [
  {
    title: "Google Cloud",
    items: [
      "Cloud Run / Functions",
      "Cloud Storage",
      "BigQuery",
      "Scheduler",
      "Monitoring",
    ],
  },
  {
    title: "Amazon AWS",
    items: [
      "EC2",
      "S3",
      "CloudTrail",
      "CloudWatch",
      "GuardDuty",
      "Polly",
      "Transcribe",
    ],
  },
  {
    title: "Security & Incident Response",
    items: [
      "Phishing Response",
      "Data Exfiltration",
      "Stolen Device Response",
    ],
  },
  {
    title: "Compliance",
    items: [
      "HIPAA",
      "ISO-27001",
      "ISO-9001",
      "PCI-DSS",
      "CA Consumer Privacy Act",
      "FDA-21",
      "GDPR",
    ],
  },
  {
    title: "Languages & Frameworks",
    items: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "Rust",
      "C++",
      "Swift",
      "Ruby",
      "Ruby on Rails",
      "React",
      "React Native",
      "SQL",
      "HTML5",
      "Power FX",
      "Arduino",
      "LegV8",
    ],
  },
  {
    title: "Operating Systems",
    items: [
      "Kali",
      "Custom Linux (built from kernel)",
      "Fedora",
      "Arch",
      "Ubuntu",
      "Windows",
      "macOS",
      "Android (via ADB)",
    ],
  },
  {
    title: "Microsoft",
    items: [
      "Defender",
      "Entra",
      "365",
      "Copilot",
      "Teams",
      "Excel",
      "Word",
      "PowerPoint",
      "OneNote",
      "OneDrive",
    ],
  },
  {
    title: "Other",
    items: [
      "Database Management & Design",
      "Geospatial Processing & Map Design",
      "3D Modeling",
      "TinkerCad",
    ],
  },
  {
    title: "Foreign Language",
    items: [
      "Spanish (elementary, 1 year)",
      "Chinese (2 years)",
      "Latin (2 years)",
    ],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  detail?: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Security+",
    issuer: "CompTIA",
    detail: "Career ID: COMP001022536415",
  },
  {
    name: "AWS Cloud Foundations",
    issuer: "Amazon AWS — Official Course",
  },
  {
    name: "AWS Security",
    issuer: "Amazon AWS — Official Course",
  },
];
