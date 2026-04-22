/**
 * Services section data and configuration
 */

import { Users, Briefcase, Clock, Globe, Search, UserCheck, type LucideIcon } from "lucide-react"

export interface ServiceSection {
  heading: string
  points: string[]
}

export interface Service {
  icon: LucideIcon
  title: string
  subtitle: string
  intro: string
  sections: ServiceSection[]
}

export const SERVICES: Service[] = [
  {
    icon: Users,
    title: "Permanent IT Recruitment",
    subtitle: "",
    intro: "",
    sections: [
      {
        heading: "Hire with Confidence",
        points: [
          "Clear understanding of your hiring needs and expectations",
          "Deep dive into your company culture and team dynamics",
          "Careful selection of candidates who match both skills and mindset",
          "Focus on long-term retention, not short-term placement",
        ],
      },
      {
        heading: "What You Get",
        points: [
          "Stronger, more stable teams",
          "Better cultural alignment",
          "Reduced hiring risk",
          "Professionals who grow with your business",
        ],
      },
    ],
  },
  {
    icon: Briefcase,
    title: "Hire Contract or Freelance Developers",
    subtitle: "",
    intro: "",
    sections: [
      {
        heading: "Improve How You Hire",
        points: [
          "Developers ready to start in days, not months",
          "Immediate impact on ongoing projects",
          "Ability to scale your team up or down anytime",
          "No long-term commitments or hiring risks",
        ],
      },
      {
        heading: "What Changes",
        points: [
          "Start in 3–10 days",
          "Pre-vetted candidates only",
          "Flexible contracts",
          "No hire, no long-term commitment",
        ],
      },
    ],
  },
  {
    icon: Clock,
    title: "Project-Based IT Recruitment",
    subtitle: "Flexible Hiring for Immediate Needs",
    intro: "",
    sections: [
      {
        heading: "Move Fast, Stay Effective",
        points: [
          "Quick understanding of project scope and requirements",
          "Access to professionals available for contract or part-time work",
          "Fast shortlisting and streamlined selection",
          "Focus on candidates who can adapt and deliver immediately",
        ],
      },
      {
        heading: "What You Get",
        points: [
          "Reduced downtime",
          "On-demand expertise",
          "Efficient project delivery",
          "Flexible hiring without long-term commitment",
        ],
      },
    ],
  },
  {
    icon: Globe,
    title: "Remote IT Hiring & Global Talent",
    subtitle: "Build Strong Teams Without Location Limits",
    intro: "",
    sections: [
      {
        heading: "Hire Beyond Borders",
        points: [
          "Access to a wider pool of tech talent",
          "Focus on communication, ownership, and reliability",
          "Support in building remote-ready teams",
          "Guidance on remote hiring best practices",
        ],
      },
      {
        heading: "What You Get",
        points: [
          "Stronger distributed teams",
          "Improved collaboration across locations",
          "Access to talent you can't reach locally",
          "Scalable hiring model",
        ],
      },
    ],
  },
  {
    icon: Search,
    title: "Executive Search & Headhunting",
    subtitle: "",
    intro: "",
    sections: [
      {
        heading: "Targeted Search Approach",
        points: [
          "Identification of proven leaders in the market",
          "Direct outreach to passive candidates",
          "Discreet and structured hiring process",
          "Focus on leadership, vision, and long-term impact",
        ],
      },
      {
        heading: "What You Get",
        points: [
          "High-quality leadership candidates",
          "Faster access to decision-makers",
          "Confidential and professional process",
          "Leaders aligned with your business goals",
        ],
      },
    ],
  },
  // {
  //   icon: UserCheck,
  //   title: "For Candidates",
  //   subtitle: "Find a Role That Actually Fits",
  //   intro: "",
  //   sections: [
  //     {
  //       heading: "Your Goals Come First",
  //       points: [
  //         "Clear conversation about your skills and direction",
  //         "Honest feedback and realistic opportunities",
  //         "Roles aligned with your expectations and lifestyle",
  //         "Support throughout the entire hiring process",
  //       ],
  //     },
  //     {
  //       heading: "What You Get",
  //       points: [
  //         "Relevant job opportunities",
  //         "Transparent communication",
  //         "Faster feedback",
  //         "Long-term career support",
  //       ],
  //     },
  //   ],
  // },
   {
    icon: UserCheck,
    title: "IT Salary Benchmarking & Hiring Insights",
    subtitle: "",
    intro: "",
    sections: [
      {
        heading: "Your Goals Come First",
        points: [
          "Real salary data based on current market demand",
          "Benchmarks by role, seniority, and tech stack",
          "Insights into candidate expectations",
          "Guidance on competitive offers",
        ],
      },
      {
        heading: "Real Impact",
        points: [
          "Turn insights into hiring results",
          "Avoid overpaying or underpaying",
          "Speed up hiring decisions",
          "Improve hiring success rate",
        ],
      },
    ],
  },
]

export const EXECUTIVE_STATS = [
  { value: "25", label: "Senior Roles" },
  { value: "85%", label: "Offer Acceptance Rate" },
  { value: "6-15", label: "Days to Present Candidates" },
]

export const HIRE_STATS = [
  { value: "100+", label: "Vetted Contractors"}
]

export const REMOTE_STATS = [
  { value: "65%+", label: "Wider Pool of Professionals"},
  { value: "4-6", label: "Candidates Per Role"},
  { value: "2-6", label: "Days to Present Candidates"},
]