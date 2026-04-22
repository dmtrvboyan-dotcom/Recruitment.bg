/**
 * Specialized recruitment section data
 */

export interface TechCategory {
  id: string
  icon: string // lucide icon name or emoji fallback
  categoryLabel: string
  title: string
  subtitle: string
  techs: string[]
  howWeSource: string[]
  whatYouGet: string[]
  stat1Value: string
  stat1Label: string
  stat2Value: string
  stat2Label: string
}

export const TECHNOLOGY_PILLS: string[] = [
  "Java",
  "JavaScript",
  "Python",
  ".NET",
  "C++",
  "Data",
  "PHP",
  "iOS",
  "Android",
  "Project",
  "Product",
  "Delivery Managers",
]

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "software-engineers",
    icon: "code-2",
    categoryLabel: "ENGINEERING",
    title: "Software Engineers & Developers",
    subtitle: "Hire React, Node.js, Java, .NET and full-stack developers",
    techs: ["React", "Node.js", "Java", ".NET", "Vue", "Angular", "TypeScript"],
    howWeSource: [
      "Pre-screened across frontend, backend & full-stack",
      "Matched to your tech stack and team culture",
      "Available for contract or permanent roles",
    ],
    whatYouGet: [
      "Pre-vetted software engineers",
      "Candidates ready to interview",
      "Fast delivery — CVs in 3–5 days",
      "Adaptable hiring models",
    ],
    stat1Value: "300+",
    stat1Label: "Engineers Placed",
    stat2Value: "3–5 days",
    stat2Label: "Avg. Time to First CV",
  },
  {
    id: "devops",
    icon: "cloud",
    categoryLabel: "INFRASTRUCTURE",
    title: "DevOps, Cloud & Platform Engineers",
    subtitle: "Hire AWS, Azure, Kubernetes and platform engineers",
    techs: ["AWS", "Azure", "Kubernetes", "Terraform", "CI/CD"],
    howWeSource: [
      "Screened across cloud platforms and tooling",
      "Hands-on with IaC and container orchestration",
      "Matched to your infrastructure and team needs",
      "Available for contract or permanent roles",
    ],
    whatYouGet: [
      "Pre-vetted DevOps engineers",
      "Candidates ready to interview",
      "Fast delivery — CVs in 3–5 days",
      "Adaptable hiring models",
    ],
    stat1Value: "100+",
    stat1Label: "Engineers Placed",
    stat2Value: "4–8 days",
    stat2Label: "Avg. Time to First CV",
  },
  {
    id: "qa-security",
    icon: "shield-check",
    categoryLabel: "QUALITY & SECURITY",
    title: "QA, Automation & Security",
    subtitle: "Hire Selenium, Cypress, and security professionals",
    techs: ["Selenium", "Cypress", "QA Automation", "DevSecOps", "Manual Testing"],
    howWeSource: [
      "Screened across manual and automation testing",
      "Assessed on test frameworks and security tooling",
      "Matched to your QA and security requirements",
      "Available for contract or permanent roles",
    ],
    whatYouGet: [
      "Pre-vetted QA and security engineers",
      "Candidates ready to interview",
      "Fast delivery — CVs in 3–5 days",
      "Adaptable hiring models",
    ],
    stat1Value: "100+",
    stat1Label: "Engineers Placed",
    stat2Value: "4–8 days",
    stat2Label: "Avg. Time to First CV",
  },
  {
    id: "data",
    icon: "database",
    categoryLabel: "DATA",
    title: "Data Engineering & BI",
    subtitle: "Hire SQL, Power BI, Tableau and data engineers",
    techs: ["SQL", "Power BI", "Tableau", "Snowflake", "Spark", "BigQuery", "Airflow", "Data Warehousing"],
    howWeSource: [
      "Screened across data engineering and analytics",
      "Assessed on SQL, ETL pipelines and BI tools",
      "Matched to your data stack and team culture",
      "Available for contract or permanent roles",
    ],
    whatYouGet: [
      "Pre-vetted data engineers and analysts",
      "Candidates ready to interview",
      "Fast delivery — CVs in 3–5 days",
      "Adaptable hiring models",
    ],
    stat1Value: "50+",
    stat1Label: "Engineers Placed",
    stat2Value: "5-9 days",
    stat2Label: "Avg. Time to First CV",
  },
  {
    id: "ai-ml",
    icon: "brain-circuit",
    categoryLabel: "AI / ML",
    title: "AI / ML Engineers",
    subtitle: "Hire Python, TensorFlow, PyTorch and ML engineers",
    techs: ["Python", "TensorFlow", "PyTorch", "Deep Learning", "LLMs"],
    howWeSource: [
      "Screened across ML frameworks and research",
      "Assessed on real-world model building experience",
      "Matched to your AI product and team",
      "Available for contract or permanent roles",
    ],
    whatYouGet: [
      "Pre-vetted AI and ML engineers",
      "Candidates ready to interview",
      "Fast delivery — CVs in 3–5 days",
      "Adaptable hiring models",
    ],
    stat1Value: "50+",
    stat1Label: "Engineers Placed",
    stat2Value: "5-10 days",
    stat2Label: "Avg. Time to First CV",
  },
  {
    id: "design",
    icon: "pen-tool",
    categoryLabel: "DESIGN",
    title: "UI/UX & Product Design",
    subtitle: "Hire Figma, Sketch, Adobe XD and product designers",
    techs: ["Figma", "Sketch", "Adobe XD", "InVision", "Prototyping"],
    howWeSource: [
      "Screened across product and interface design",
      "Assessed on portfolio and design thinking",
      "Matched to your product and brand",
      "Available for contract or permanent roles",
    ],
    whatYouGet: [
      "Pre-vetted product designers",
      "Candidates ready to interview",
      "Fast delivery — CVs in 3–5 days",
      "Adaptable hiring models",
    ],
    stat1Value: "30+",
    stat1Label: "Designers Placed",
    stat2Value: "3–7 days",
    stat2Label: "Avg. Time to First CV",
  },
  {
    id: "mobile",
    icon: "smartphone",
    categoryLabel: "MOBILE",
    title: "Mobile Development",
    subtitle: "Hire iOS, Android, Swift and React Native developers",
    techs: ["iOS", "Android", "React Native", "Kotlin", "Swift", "Flutter"],
    howWeSource: [
      "Screened across native and cross-platform mobile",
      "Assessed on app store delivery experience",
      "Matched to your mobile product and stack",
      "Available for contract or permanent roles",
    ],
    whatYouGet: [
      "Pre-vetted mobile developers",
      "Candidates ready to interview",
      "Fast delivery — CVs in 3–5 days",
      "Adaptable hiring models",
    ],
    stat1Value: "30+",
    stat1Label: "Developers Placed",
    stat2Value: "4-8 days",
    stat2Label: "Avg. Time to First CV",
  },
  {
    id: "leadership",
    icon: "crown",
    categoryLabel: "LEADERSHIP Management",
    title: "Engineering Leadership",
    subtitle: "Hire CTOs, VP Engineering, Tech Leads and Delivery Managers",
    techs: ["CTO", "VP Engineering", "Tech Lead", "Engineering Manager", ""],
    howWeSource: [
      "Screened across technical and people leadership",
      "Assessed on engineering org-building experience",
      "Matched to your company stage and culture",
      "Available for permanent and fractional roles",
    ],
    whatYouGet: [
      "Pre-vetted engineering leaders",
      "Candidates ready to interview",
      "Fast delivery — CVs in 3–5 days",
      "Adaptable hiring models",
    ],
    stat1Value: "25+",
    stat1Label: "Leaders Placed",
    stat2Value: "6-10 days",
    stat2Label: "Avg. Time to First CV",
  },
]
