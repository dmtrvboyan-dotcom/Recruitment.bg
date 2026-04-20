import { Code2, Server, Layers, Cloud, Rocket, TrendingUp, Building2 } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface ServiceItem {
  icon: LucideIcon
  title: string
  description: string
}

export interface HeroData {
  tagline: string
  title: string
  description: string
}

export interface SectionHeader {
  tagline: string
  title: string
}

export interface CtaData {
  title: string
  description: string
  primaryButton: {
    text: string
    href: string
  }
  secondaryButton: {
    text: string
    href: string
  }
}

export const HERO_DATA: HeroData = {
  tagline: "Build Your Team",
  title: "Hire Developers in Bulgaria and Build Your Team",
  description:
    "Expand your engineering team without increasing costs. Bulgaria is one of the smartest choices in Europe.",
}

export const WHAT_WE_COVER_HEADER: SectionHeader = {
  tagline: "Expertise Areas",
  title: "What We Cover",
}

export const WHAT_WE_COVER: ServiceItem[] = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "React, Vue, Angular, Next.js, TypeScript — we source developers fluent in modern frontend ecosystems.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Node.js, Python, Java, Go, .NET — find backend engineers who build scalable, secure systems.",
  },
  {
    icon: Layers,
    title: "Full-Stack Engineers",
    description:
      "Versatile developers comfortable across the entire stack, from database to deployment.",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description:
      "AWS, Azure, GCP, Kubernetes, CI/CD — infrastructure experts who keep your systems running smoothly.",
  },
]

export const PERFECT_FOR_HEADER: SectionHeader = {
  tagline: "Who We Help",
  title: "Perfect For",
}

export const PERFECT_FOR: ServiceItem[] = [
  {
    icon: Rocket,
    title: "Startups",
    description:
      "Move fast with senior developers who understand startup pace and can wear multiple hats.",
  },
  {
    icon: TrendingUp,
    title: "Scale-ups",
    description:
      "Expand your engineering capacity quickly without sacrificing code quality or team culture.",
  },
  {
    icon: Building2,
    title: "Product Companies",
    description:
      "Build dedicated teams that integrate seamlessly with your existing engineering organization.",
  },
]

export const CTA_DATA: CtaData = {
  title: "Ready to Build Your Development Team?",
  description:
    "Tell us about your hiring needs and we will match you with pre-vetted developers who fit your technical requirements and company culture.",
  primaryButton: {
    text: "Start Hiring",
    href: "/#contact",
  },
  secondaryButton: {
    text: "View Success Stories",
    href: "/#companies",
  },
}
