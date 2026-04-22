/**
 * Jobs data - Currently static, will be replaced by API calls in the future
 * 
 * This file contains job listings that will eventually come from a backend API.
 * The data structure is designed to be easily replaceable with API responses.
 */

export interface JobDetails {
  overview: string
  responsibilities: string[]
  requirements: string[]
  niceToHave: string[]
  offers: string[]
}

export interface Job {
  id: number
  title: string
  seniority: string
  location: string
  type: string
  contract: string
  techStack: string[]
  posted: string
}

export const JOB_DETAILS: Record<number, JobDetails> = {
  1: {
    overview:
      "We're looking for a motivated Frontend Developer to join our growing product team in Sofia. You'll be building rich, interactive user interfaces on a platform used by enterprise clients across Europe and contributing to architecture decisions from day one.",
    responsibilities: [
      "Develop and maintain React/Next.js web applications",
      "Collaborate with designers to implement pixel-perfect UIs",
      "Write clean, well-tested, and maintainable code",
      "Integrate RESTful APIs and GraphQL endpoints",
      "Participate in code reviews and agile ceremonies",
    ],
    requirements: [
      "2–5 years of hands-on React & Next.js experience",
      "Solid understanding of TypeScript",
      "Familiarity with state management (Redux, Zustand, etc.)",
      "Knowledge of HTML5, CSS3 and responsive design",
      "Experience with Git and version control workflows",
    ],
    niceToHave: [
      "Experience with animation libraries (Framer Motion)",
      "Familiarity with testing libraries (Jest, RTL)",
      "Prior work on data visualization projects",
    ],
    offers: [
      "Competitive salary (negotiable)",
      "Flexible hybrid work schedule",
      "Health & dental insurance",
      "Annual learning budget (€1,000)",
      "Team events and company retreats",
    ],
  },
  2: {
    overview:
      "A senior full-stack position for a developer who wants to shape the architecture of a modern SaaS platform. You will lead feature development across the entire stack, mentor junior engineers, and work directly with product management.",
    responsibilities: [
      "Architect and lead full-stack feature delivery",
      "Build scalable Java Spring services and React frontends",
      "Define API contracts and data models",
      "Mentor and support junior developers",
      "Participate in technical planning and sprint ceremonies",
    ],
    requirements: [
      "5+ years of professional Java & Spring development",
      "Strong React skills and modern JavaScript knowledge",
      "Deep understanding of microservices architecture",
      "Experience with PostgreSQL or similar relational DBs",
      "Excellent communication skills in English",
    ],
    niceToHave: [
      "Experience with Kafka or RabbitMQ",
      "Familiarity with Kubernetes and container orchestration",
      "Domain knowledge in fintech or SaaS",
    ],
    offers: [
      "B2B contract with premium rates",
      "Remote flexibility",
      "Conference and certification budget",
      "Equity options after 1 year",
      "Top-tier hardware of your choice",
    ],
  },
  3: {
    overview:
      "A fully remote Senior Frontend Engineer role focused on building a next-generation component library and design system used across multiple product teams. You'll drive the frontend architecture and work closely with UX/product.",
    responsibilities: [
      "Build and maintain a shared Vue/Nuxt component library",
      "Define frontend architecture standards",
      "Collaborate with UX to create accessible, responsive UIs",
      "Review pull requests and mentor mid-level engineers",
      "Optimize performance and Core Web Vitals",
    ],
    requirements: [
      "2–5 years of Vue.js and Nuxt experience",
      "Strong TypeScript proficiency",
      "Solid knowledge of accessibility standards (WCAG)",
      "Experience with design systems and component APIs",
      "Excellent async communication skills",
    ],
    niceToHave: [
      "Experience maintaining open-source Vue libraries",
      "Knowledge of Storybook or similar tools",
      "Familiarity with visual regression testing",
    ],
    offers: [
      "Fully remote, async-first culture",
      "Competitive freelance or employment rate",
      "Co-working budget (€200/month)",
      "Dedicated learning time (Fridays)",
      "Annual team retreats in Europe",
    ],
  },
  4: {
    overview:
      "Join our creative technology team as a React Developer working on immersive 3D web experiences for high-profile brands. You'll blend frontend development with WebGL and Three.js to push the boundaries of what's possible in the browser.",
    responsibilities: [
      "Develop interactive 3D experiences with Three.js and React",
      "Collaborate with creative directors and motion designers",
      "Optimize WebGL scenes for performance across devices",
      "Integrate APIs and CMS data into immersive UIs",
      "Contribute to internal tooling and R&D",
    ],
    requirements: [
      "1–2 years of React experience",
      "Hands-on exposure to Three.js or WebGL",
      "Solid TypeScript fundamentals",
      "Understanding of the rendering pipeline and shader basics",
      "Portfolio demonstrating creative frontend work",
    ],
    niceToHave: [
      "Experience with GSAP or Framer Motion",
      "Familiarity with GLSL shaders",
      "Background in design, animation, or digital art",
    ],
    offers: [
      "Regular employment contract",
      "Hybrid schedule (Sofia office)",
      "Creative, non-corporate environment",
      "Access to licensed design/dev tools",
      "Hardware and home office budget",
    ],
  },
  5: {
    overview:
      "We need a Backend Java Developer to help scale our microservices infrastructure handling millions of daily transactions. You'll work in a cross-functional team delivering a high-throughput platform and help set technical direction for the backend chapter.",
    responsibilities: [
      "Design, develop and maintain Java microservices",
      "Build and optimize RESTful and event-driven APIs",
      "Ensure high availability and performance of services",
      "Write comprehensive unit and integration tests",
      "Participate in on-call rotation for production systems",
    ],
    requirements: [
      "2–5 years of professional Java & Spring Boot development",
      "Experience with PostgreSQL and query optimization",
      "Understanding of microservices and distributed systems",
      "Proficiency with Docker and CI/CD pipelines",
      "Strong problem-solving and analytical skills",
    ],
    niceToHave: [
      "Experience with Kafka or RabbitMQ",
      "Familiarity with Kubernetes",
      "Knowledge of DDD and Clean Architecture",
    ],
    offers: [
      "B2B contract with competitive rates",
      "100% remote flexibility available",
      "Premium health insurance package",
      "Conference and certification budget",
      "Top-tier hardware of your choice",
    ],
  },
  6: {
    overview:
      "A senior freelance engagement to lead the redesign of a legacy ERP platform. You'll work closely with the CTO to architect a modern .NET and React solution, guide a small team, and deliver a scalable system that will serve the business for years to come.",
    responsibilities: [
      "Lead full-stack development across .NET and React",
      "Architect scalable and maintainable system designs",
      "Refactor legacy codebase to modern patterns",
      "Mentor and guide junior and mid-level developers",
      "Communicate technical plans to non-technical stakeholders",
    ],
    requirements: [
      "5+ years of .NET and C# development",
      "Strong proficiency in React and modern JavaScript",
      "Experience designing and consuming REST APIs",
      "Knowledge of SQL Server and Entity Framework",
      "Proven track record of delivering large-scale projects",
    ],
    niceToHave: [
      "Experience with Azure cloud services",
      "ERP or logistics domain knowledge",
      "Familiarity with DevOps / GitHub Actions",
      "Prior team lead or architect role",
    ],
    offers: [
      "Competitive freelance day rate",
      "Flexible hours and hybrid schedule",
      "Long-term engagement (12+ months)",
      "Opportunity for permanent role",
      "Remote-first culture",
    ],
  },
  7: {
    overview:
      "We're growing our backend team in Varna and looking for a Senior Backend Engineer to own our Node.js API layer. You'll work on a consumer-facing platform with a rapidly expanding user base, ensuring reliability, scalability, and developer experience.",
    responsibilities: [
      "Design and maintain Node.js/Express microservices",
      "Own the API layer for our consumer-facing platform",
      "Work with MongoDB and Redis for data and caching",
      "Drive observability, logging, and alerting improvements",
      "Collaborate with frontend and mobile teams on API contracts",
    ],
    requirements: [
      "2–5 years of Node.js and Express experience",
      "Strong MongoDB skills and NoSQL data modeling",
      "Experience with REST API design best practices",
      "Proficiency with Docker and cloud infrastructure",
      "Commitment to code quality and test coverage",
    ],
    niceToHave: [
      "Experience with GraphQL APIs",
      "Familiarity with serverless (AWS Lambda / Vercel)",
      "Knowledge of message queues (Bull, SQS)",
    ],
    offers: [
      "Regular employment contract",
      "Hybrid schedule (Varna office)",
      "Health insurance and wellness budget",
      "Annual training allowance",
      "Modern office with great sea views",
    ],
  },
  8: {
    overview:
      "A hands-on React Developer role within our in-house product team in Varna. You'll work in a fast-paced environment building customer-facing features, collaborating daily with designers and backend engineers, and shipping real code to real users.",
    responsibilities: [
      "Build and ship product features with React and Next.js",
      "Implement responsive UI with Tailwind CSS",
      "Collaborate closely with backend and design teams",
      "Write and maintain component tests",
      "Participate in sprint planning and retrospectives",
    ],
    requirements: [
      "1–2 years of React development experience",
      "Familiarity with Next.js and the App Router",
      "Good understanding of Tailwind CSS",
      "Basic knowledge of RESTful API consumption",
      "Ability to work independently and take ownership",
    ],
    niceToHave: [
      "Experience with Storybook",
      "Prior work in a product startup environment",
      "Familiarity with A/B testing tools",
    ],
    offers: [
      "B2B contract",
      "Office-based in Varna",
      "Friendly and supportive team culture",
      "Flexible working hours",
      "Regular salary reviews",
    ],
  },
}

export const SAMPLE_JOBS: Job[] = [
  {
    id: 1,
    title: "Frontend Web Developers with React & Next.js",
    seniority: "2-5 years",
    location: "Sofia",
    type: "Hybrid",
    contract: "regular",
    techStack: ["React", "Next.js", "TypeScript"],
    posted: "15 april.",
  },
  {
    id: 2,
    title: "Principal Developer Full Stack",
    seniority: "5+ years",
    location: "Sofia",
    type: "Hybrid",
    contract: "b2b",
    techStack: ["Java", "Spring", "React"],
    posted: "15 april.",
  },
  {
    id: 3,
    title: "Senior Frontend Engineer",
    seniority: "2-5 years",
    location: "Plovdiv",
    type: "Remote",
    contract: "freelance",
    techStack: ["Vue", "Nuxt", "TypeScript"],
    posted: "15 april.",
  },
  {
    id: 4,
    title: "React Developer",
    seniority: "1-2 years",
    location: "Sofia",
    type: "Hybrid",
    contract: "regular",
    techStack: ["React", "Three.js", "TypeScript"],
    posted: "15 april.",
  },
  {
    id: 5,
    title: "Backend Java Developer",
    seniority: "2-5 years",
    location: "Sofia",
    type: "Hybrid",
    contract: "b2b",
    techStack: ["Java", "Spring Boot", "PostgreSQL"],
    posted: "15 april.",
  },
  {
    id: 6,
    title: "Full Stack .NET Developer",
    seniority: "5+ years",
    location: "Plovdiv",
    type: "Hybrid",
    contract: "freelance",
    techStack: ["C#", ".NET", "React"],
    posted: "15 april.",
  },
  {
    id: 7,
    title: "Senior Backend Engineer",
    seniority: "2-5 years",
    location: "Varna",
    type: "Hybrid",
    contract: "regular",
    techStack: ["Node.js", "Express", "MongoDB"],
    posted: "15 april.",
  },
  {
    id: 8,
    title: "Frontend React Developer",
    seniority: "1-2 years",
    location: "Varna",
    type: "Office",
    contract: "b2b",
    techStack: ["React", "Next.js", "Tailwind"],
    posted: "15 april.",
  },
  {
    id: 9,
    title: "asd",
    seniority: "1-2 years",
    location: "Varna",
    type: "Office",
    contract: "b2b",
    techStack: ["React", "Next.js", "Tailwind"],
    posted: "15 april.",
  },
  {
    id: 10,
    title: "asd",
    seniority: "1-2 years",
    location: "Varna",
    type: "Office",
    contract: "b2b",
    techStack: ["React", "Next.js", "Tailwind"],
    posted: "15 april.",
  },
  {
    id: 11,
    title: "asd",
    seniority: "1-2 years",
    location: "Varna",
    type: "Office",
    contract: "b2b",
    techStack: ["React", "Next.js", "Tailwind"],
    posted: "15 april.",
  },





]

export const JOB_LOCATIONS = ["Sofia", "Plovdiv", "Varna", "Fully Remote"]

export const SENIORITY_OPTIONS = ["1-2 years", "2-5 years", "5+ years"]

export const CONTRACT_OPTIONS = [
  { value: "regular", label: "Regular" },
  { value: "b2b", label: "B2B" },
  { value: "freelance", label: "Freelance" },
]

export const TECH_OPTIONS = [
  { value: "all", label: "All" },
  { value: "React", label: "React" },
  { value: "Next.js", label: "Next.js" },
  { value: "Java", label: "Java" },
  { value: "Vue", label: "Vue" },
  { value: "Node.js", label: "Node.js" },
  { value: ".NET", label: ".NET" },
  { value: "TypeScript", label: "TypeScript" },
]

export const WORK_MODEL_OPTIONS = [
  { value: "all", label: "All" },
  { value: "hybrid", label: "Hybrid" },
  { value: "remote", label: "Fully Remote" },
  { value: "office", label: "Office" },
]
