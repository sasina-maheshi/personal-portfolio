// Add a new project by adding one object to this array — nothing else needs to change.
// n: small index number shown next to the title (e.g. "05")
// link/linkLabel: leave link "" and set linkLabel to something like "In development"
//   to render a non-clickable status instead of a link.
export const PROJECTS = [
  {
    n: "01",
    title: "Veyra",
    subtitle: "Task Management System",
    link: "https://veyratms.site",
    linkLabel: "veyratms.site",
    desc: "A full-stack monorepo task management system built with a small team. Handled the task-management and email-onboarding modules, wired up real-time updates, and fixed a string of tricky deployment issues — cross-domain cookies, CORS, and platform-specific build errors — before shipping.",
    stack: ["React", "TypeScript", "Node/Express", "PostgreSQL", "Socket.IO", "Docker", "GitHub Actions"],
  },
  {
    n: "02",
    title: "OffPath",
    subtitle: "Travel discovery app — Sri Lanka",
    link: "",
    linkLabel: "In development",
    desc: "A Flutter + Firebase mobile app connecting travelers with local hosts and guardians across Sri Lanka. Built out authentication flows, Firestore data modeling, and a multi-guardian location architecture, then pitched it at the IMSSA IdeaSprint competition with tourism-backed research.",
    stack: ["Flutter", "Firebase", "Firestore"],
  },
  {
    n: "03",
    title: "SafeFlame",
    subtitle: "Marketing site — smart IoT gas leak detector",
    link: "https://safeflame.site",
    linkLabel: "safeflame.site",
    desc: "The marketing site for an IoT LPG gas leak detector, built as a static, dependency-light frontend. Designed a full-viewport hero carousel and scroll-triggered navigation, and ran the project end to end — from an early Formspree prototype through pre-order integration to the current build.",
    stack: ["HTML", "Tailwind CSS", "JavaScript", "Vercel"],
  },
  {
    n: "04",
    title: "Vulnerability Scanner",
    subtitle: "AI-powered web security scanner",
    link: "",
    linkLabel: "In development",
    desc: "A web vulnerability scanner that pairs a Python backend with Claude for analysis. Paused mid-build to go back and properly learn the fundamentals underneath it — HTTPS/TLS, security headers, and how each scanner module actually works — before continuing.",
    stack: ["React", "FastAPI", "Claude API", "Docker"],
  },
];
