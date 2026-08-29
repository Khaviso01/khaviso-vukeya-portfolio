export const profile = {
  name: "Khaviso Vukeya",
  initials: "K.",
  role: "Data Analyst & Developer",
  location: "South Africa",
  focus: "Data · Dev · Tech",
  status: "Open to work",
  tagline: "Turning data, design, and technology into meaningful solutions.",
  intro:
    "I'm Khaviso Vukeya — I love crafting dynamic websites with clean UI/UX, turning raw data into decisions, and turning ideas into reality.",
  about:
    "I enjoy building digital experiences and data-driven solutions that are clean, reliable, and designed to solve real-world problems.",
  aboutLong: [
    "I work with Python, SQL, and Power BI to transform raw data into insights, and HTML, CSS, and JavaScript to craft responsive web applications with clean UI/UX design.",
    "My background includes IT support — everything from troubleshooting hardware and software issues, to configuring networks, to providing user support across Microsoft 365 environments.",
  ],
  email: "khavisovukeya3@gmail.com",
  phone: "067 993 3441",
  github: "@Khaviso01",
  githubUrl: "https://github.com/Khaviso01",
  linkedin: "khaviso-vukeya",
  linkedinUrl: "https://www.linkedin.com/in/khaviso-vukeya",
};

export const values = [
  {
    title: "Clean development",
    body: "I focus on writing structured, readable, and maintainable code across projects.",
  },
  {
    title: "Data-driven thinking",
    body: "I turn data into insights and actionable decisions that drive businesses.",
  },
  {
    title: "Continuous learning",
    body: "Constantly improving my skills across software development, data science, and analysis.",
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  { label: "Programming & Querying", items: ["Python", "SQL"] },
  {
    label: "Web Development",
    items: ["HTML5", "CSS3", "JavaScript", "UX/UI Design", "Front-End Logic"],
  },
  { label: "Databases", items: ["MySQL", "Oracle SQL", "DBMS"] },
  {
    label: "Tools & Technologies",
    items: ["VS Code", "Git & GitHub", "Power BI", "Tableau", "Excel", "Jupyter"],
  },
  {
    label: "Data Skills",
    items: [
      "Data Cleaning",
      "Machine Learning",
      "Data Transformation",
      "DAX",
      "Dashboard Development",
      "KPI Reporting",
    ],
  },
  {
    label: "Other Technical Skills",
    items: [
      "IT Support",
      "Hardware Maintenance",
      "System Administration",
      "Configuration Management",
      "Documentation",
    ],
  },
];

export type Project = {
  index: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  linkLabel: string;
  href: string;
};

export const projects: Project[] = [
  {
    index: "01",
    category: "Power BI",
    title: "Business KPI Analysis",
    description:
      "Business analytics dashboard comparing 2023 vs 2024 sales performance, highlighting KPIs, trends, and operational insights.",
    tags: ["Power BI", "DAX", "Visualization"],
    linkLabel: "View project",
    href: "#",
  },
  {
    index: "02",
    category: "Excel",
    title: "Bike Sales",
    description:
      "Excel dashboard that visualizes bike sales data, highlighting customer demographics, income, commute distances, and age groups.",
    tags: ["Excel", "Data Cleaning", "Visualization"],
    linkLabel: "View project",
    href: "#",
  },
  {
    index: "03",
    category: "MySQL",
    title: "World Layoffs",
    description:
      "SQL project focused on cleaning and transforming a dataset of global layoffs to extract insights about workforce trends.",
    tags: ["MySQL", "Data Cleaning", "Documentation"],
    linkLabel: "View project",
    href: "#",
  },
  {
    index: "04",
    category: "Python",
    title: "Earnalytics AI",
    description:
      "Machine learning platform designed to analyze payroll structures and predict fair salary allocations using employee and employer data.",
    tags: ["Python", "Pandas", "Scikit-learn"],
    linkLabel: "View project",
    href: "#",
  },
  {
    index: "05",
    category: "Web Application",
    title: "VUT Cafe",
    description:
      "Cafeteria web application allowing students and staff to browse menus, place orders, and access specials online.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    linkLabel: "Live demo",
    href: "#",
  },
  {
    index: "06",
    category: "Web Application",
    title: "Green Campus Initiative",
    description:
      "Web platform designed to promote environmental awareness and sustainable practices within a university community.",
    tags: ["HTML", "CSS"],
    linkLabel: "Live demo",
    href: "#",
  },
];

export type TimelineEntry = {
  period: string;
  title: string;
  place: string;
  points: string[];
};

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
