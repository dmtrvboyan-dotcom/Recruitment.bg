/**
 * Specialized recruitment section data
 */

export interface TechCategory {
  title: string
  techs: string[]
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
    title: "Software Engineers & Developers",
    techs: [
      "React",
      "Angular",
      "Vue",
      ".Node.js",
      "Express",
      "Spring Boot",
      ".NET Core",
      "Django",
      "Ruby on Rails",
      "Laravel",
    ],
  },
  {
    title: "Devops, cloud & platform engineers.",
    techs: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Azure",
      "CI/CD",
      "Terraform",
      "GitHub Actions",
      "Platform Engineering",
      "Monitoring & Logging",
    ],
  },
  {
    title: "QA, Automation & Security",
    techs: [
      "Test Automation",
      "Manual Testing",
      "Docker",
      "Security Engineers",
      "Security Analysts",
      "DevSecOps",
    ],
  },
  {
    title: "Data Engineering & BI",
    techs: [
      "Hadoop",
      "Spark",
      "Tableau",
      "Power BI",
      "SQL",
      "ETL Pipelines",
      "Snowflake",
      "ETL / ELT",
      "CI/CD Pipelines",
      "SQL & Data Warehousing",
    ],
  },
  {
    title: "AI / ML",
    techs: [
      "AI Engineers",
      "Machine Learning Engineers",
      "Data Scientists",
      "Python",
      "TensorFlow",
      "PyTorch",
      "Deep Learning",
    ],
  },
  {
    title: "UI/UX & Product Design",
    techs: [
      "Figma",
      "Sketch",
      "Adobe XD",
      "InVision",
      "Design Systems",
      "Prototyping",
      "User Research & Testing",
      "Interaction Design",
    ],
  },
  {
    title: "Mobile Development",
    techs: [
      "IOS",
      "Android",
      "Swift",
      "Kotlin",
      "React Native",
      "Flutter",
      "API Integration",
      "Mobile UI/UX",
      "App Performance Optimization",
    ],
  },
  {
    title: "Engineering Leadership & Management Roles",
    techs: ["CTO", "VP of Engineering", "Engineering Managers", "Tech Leads", "Delivery Managers"],
  },
]
