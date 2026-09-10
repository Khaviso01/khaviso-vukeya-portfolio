export const profile = {
  name: "Khaviso Vukeya",
  initials: "K",
  role: "Data Analyst & Developer",
  intro:
    "I'm Khaviso Vukeya, I turn user needs into flows that reduce friction and guesswork, so your product just makes sense.",
  about:
    "I enjoy building digital experiences and solutions that are clean, reliable, and designed to solve real-world problems.",
  email: "khavisovukeya3@gmail.com",
  phone: "067 993 3441",
  github: "@Khaviso01",
  githubUrl: "https://github.com/Khaviso01",
  linkedin: "khaviso-vukeya",
  linkedinUrl: "https://www.linkedin.com/in/khaviso-vukeya",
};

export type Project = {
  index: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  linkLabel: string;
  href: string;
};

export type TimelineEntry = {
  period: string;
  title: string;
  place: string;
  points: string[];
};

export const work: TimelineEntry[] = [
  {
    period: "2026 – Present",
    title: "Software Developer Trainee",
    place: "mLab CodeTribe Academy (Southern Africa)",
    points: [
      "Developed responsive interfaces using React, TypeScript, Responsive CSS, and modern UI/UX practices",
      "Architected  and deployed responsive, component-based web applications",
      "Managed API intergrations for real-time data updates and handled complex state logic",
    ],
  },
];

export const education: TimelineEntry[] = [
  {
    period: "2023 – 2025",
    title: "Information Technology Diploma",
    place: "Vaal University of Technology",
    points: [
      "Information Systems, Software Development, Web Development, Business Analysis",
      "Front-end and full-stack university projects across web apps and AI models",
      "Foundational databases, systems analysis & design, and business processes",
    ],
  },
];

export const experience: TimelineEntry[] = [
  {
    period: "Nov 2024 – Nov 2025",
    title: "Front-End Web Developer",
    place: "VUT Green Campus Initiative",
    points: [
      "Built, maintained, and enhanced a web-based application using HTML, CSS, and JavaScript",
      "Designed and implemented user-friendly control-system interfaces, improving usability for end users",
      "Managed version control via Git and GitHub, tracking issues and coordinating code reviews across the project lifecycle",
    ],
  },
];

export type Certification = {
  issuer: string;
  title: string;
  program: string;
  category: string;
};

export const certifications: Certification[] = [
  {
    issuer: "Udemy",
    title: "Data Analysis, Data Science, Machine Learning — All in 1",
    program: "Udemy",
    category: "AI / Data",
  },
  {
    issuer: "Cisco",
    title: "Data Analytics Essentials",
    program: "Cisco Networking Academy",
    category: "Data",
  },
  {
    issuer: "Cisco",
    title: "CCNA: Switching, Routing and Wireless Essentials",
    program: "Cisco Networking Academy",
    category: "Networking",
  },
  {
    issuer: "Cisco",
    title: "Introduction to Cybersecurity",
    program: "Cisco Networking Academy",
    category: "Cybersecurity",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
