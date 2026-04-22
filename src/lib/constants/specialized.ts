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
      "Sourced via cloud & DevOps communities",
      "Screened on IaC, CI/CD & platform skills",
      "Validated on multi-cloud hands-on experience",
      "Available for contract or permanent hire",
    ],
    whatYouGet: [
      "Pre-vetted cloud & platform engineers",
      "AWS, Azure & Kubernetes specialists",
      "CVs delivered in 4–8 business days",
      "Flexible contract & permanent models",
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
      "Sourced from specialist QA & AppSec communities",
      "Assessed on Cypress, Selenium & OWASP knowledge",
      "Validated through real test suite walkthroughs",
      "Matched to your release cadence & risk appetite",
    ],
    whatYouGet: [
      "Testers covering manual, auto & security layers",
      "Engineers fluent in shift-left & DevSecOps",
      "CVs delivered in 4–8 business days",
      "Hire for sprints, projects or long-term roles",
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
      "Tapped from data engineering & analytics networks",
      "Assessed on pipeline design & warehouse modelling",
      "Validated on Snowflake, BigQuery & Spark delivery",
      "Matched to your data maturity & team structure",
    ],
    whatYouGet: [
      "Engineers who build reliable, scalable pipelines",
      "BI talent fluent in Power BI, Tableau & SQL",
      "CVs delivered in 5–9 business days",
      "Placed across startups to enterprise data teams",
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
      "Sourced from research labs, Kaggle & ML forums",
      "Assessed on model architecture & training experience",
      "Validated on LLM fine-tuning & MLOps in production",
      "Matched to your AI product stage & team needs",
    ],
    whatYouGet: [
      "Engineers with real shipped ML product experience",
      "Coverage across NLP, vision, LLMs & classical ML",
      "CVs delivered in 5–10 business days",
      "Ideal for AI-first teams & R&D-heavy environments",
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
      "Discovered via Dribbble, Behance & design meetups",
      "Portfolio reviewed for UX thinking & visual craft",
      "Assessed on end-to-end product design process",
      "Matched to your brand, product stage & team style",
    ],
    whatYouGet: [
      "Designers who balance aesthetics with usability",
      "Figma-first talent across web, app & systems design",
      "CVs delivered in 3–7 business days",
      "From early-stage discovery to design system scale",
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
      "Sourced from iOS, Android communities",
      "Assessed on app store submission & release experience",
      "Validated on performance, offline & native API work",
      "Matched to your platform priorities & product roadmap",
    ],
    whatYouGet: [
      "Native & cross-platform mobile specialists",
      "Swift, Kotlin, Flutter & React Native coverage",
      "CVs delivered in 4–8 business days",
      "Built for consumer apps & enterprise mobile alike",
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
      "Identified through exec networks & trusted referrals",
      "Assessed on team-building & engineering org design",
      "Validated on delivery track record & culture impact",
      "Matched to your company stage, size & growth phase",
    ],
    whatYouGet: [
      "Leaders who can hire, mentor & ship at pace",
      "CTOs, VPs, Tech Leads & Delivery Managers covered",
      "CVs delivered in 6–10 business days",
      "Permanent placements & fractional engagements available",
    ],
    stat1Value: "25+",
    stat1Label: "Leaders Placed",
    stat2Value: "6-10 days",
    stat2Label: "Avg. Time to First CV",
  },
]
