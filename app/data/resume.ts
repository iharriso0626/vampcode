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

export type Project = {
  name: string;
  summary: string;
  bullets: string[];
  tech: string[];
};

// Written for a public audience: no project identifiers, service names, flow
// IDs, internal paths, or operational figures.
export const PROJECTS: Project[] = [
  {
    name: "Automation Toolkit",
    summary:
      "A desktop automation hub for an insurance brokerage — a system-tray app paired with a browser extension, consolidating form autofill, macro recording, and AI assistance into a single tool.",
    bullets: [
      "Built the desktop application in Tauri with a Rust backend and a React + TypeScript frontend, paired with a Manifest V3 Chrome extension that bridges to the browser over a local WebSocket.",
      "Implemented Microsoft Entra sign-in using OAuth 2.0 with PKCE, storing tokens in the Windows Credential Manager rather than on disk, with silent refresh so users never re-authenticate.",
      "Shipped spreadsheet-driven form autofill, record/edit/replay browser macros, embedded AI chat, and a self-updating release channel.",
    ],
    tech: [
      "Rust",
      "Tauri",
      "React",
      "TypeScript",
      "Chrome MV3",
      "OAuth 2.0 PKCE",
      "Microsoft Entra",
      "WebSocket",
      "Cloud Run",
    ],
  },
  {
    name: "Natural-Language Data Lake Access",
    summary:
      "An MCP server letting non-technical staff query the company data warehouse in plain English — without ever holding database credentials.",
    bullets: [
      "Deployed a Model Context Protocol server on Cloud Run that translates natural-language questions into SQL against BigQuery and returns readable answers.",
      "Designed so no credentials live on user machines: authentication is centralized through a dedicated service account, keeping access auditable and revocable.",
      "Paired with a second MCP server providing read-only infrastructure visibility — service status, logs, and function inventory.",
    ],
    tech: ["BigQuery", "Cloud Run", "MCP", "Python", "Node.js", "GCP IAM"],
  },
  {
    name: "Producer Budget Application",
    summary:
      "A company-wide annual revenue-budgeting app that replaced a spreadsheet process with a guided form and validated submissions.",
    bullets: [
      "Built as a Power Apps canvas app on Dataverse, with Power Automate flows handling data hydration from BigQuery and submission processing.",
      "Live-calculated metrics — recurring versus non-recurring growth, projected new business, budgeted revenue — update as users type, with per-account completion tracking.",
      "Submissions export as structured payloads and return to the user as a downloadable record.",
    ],
    tech: [
      "Power Apps",
      "Dataverse",
      "Power Automate",
      "Power FX",
      "BigQuery",
    ],
  },
  {
    name: "Support Ticket Routing Analysis",
    summary:
      "An analysis of seven months of internal support tickets to determine how much of the triage queue could be automated — and where automation was not worth it.",
    bullets: [
      "Analyzed resolved tickets to derive deterministic routing rules mapping ticket category to the correct agent.",
      "Found that a simple lookup table covered the majority of tickets at high accuracy, with no AI required.",
      "Recommended against adding an AI layer: it would have touched only a small ambiguous slice at meaningfully higher cost and complexity. Surfaced the remaining unowned categories as a decision for leadership.",
    ],
    tech: [
      "Python",
      "Data Analysis",
      "Freshservice",
      "Workflow Automation",
    ],
  },
];

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
