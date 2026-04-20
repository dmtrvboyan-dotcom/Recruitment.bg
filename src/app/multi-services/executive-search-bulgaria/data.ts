import { Monitor, Box, Users, Globe } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface HeroData {
  tagline: string
  title: string
  description: string
}

export interface SectionHeader {
  tagline: string
  title: string
}

export interface RoleItem {
  icon: LucideIcon
  title: string
  description: string
}

export interface MethodItem {
  title: string
  description: string
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
  tagline: "Executive Search",
  title: "Executive Search & Leadership Recruitment",
  description:
    "Hiring for senior and C-level positions requires a different approach. We specialize in finding leaders who drive real business impact.",
}

export const ROLES_HEADER: SectionHeader = {
  tagline: "Leadership Roles",
  title: "We Work With",
}

export const ROLES: RoleItem[] = [
  {
    icon: Monitor,
    title: "CTO / VP Engineering",
    description:
      "Technical leaders who can build and scale engineering organizations while driving technical strategy.",
  },
  {
    icon: Box,
    title: "Product Manager",
    description:
      "Senior product leaders who translate business vision into successful products and features.",
  },
  {
    icon: Users,
    title: "Directors",
    description:
      "Department heads and directors across engineering, product, operations, and other key functions.",
  },
  {
    icon: Globe,
    title: "Country Managers",
    description:
      "Regional leaders who can establish and grow your presence in new markets effectively.",
  },
]

export const METHOD_HEADER: SectionHeader = {
  tagline: "How We Work",
  title: "Our Method",
}

export const METHOD: MethodItem[] = [
  {
    title: "Direct Headhunting",
    description:
      "We proactively identify and approach top executives who match your requirements, even if they are not actively looking.",
  },
  {
    title: "Market Mapping",
    description:
      "Comprehensive analysis of the talent landscape to identify the best candidates and understand compensation benchmarks.",
  },
  {
    title: "Confidential Search",
    description:
      "Discreet recruitment process that protects both your company's interests and the candidate's current position.",
  },
]

export const CTA_DATA: CtaData = {
  title: "Ready to Find Your Next Leader?",
  description:
    "Let us help you identify and attract the executive talent that will drive your company's success.",
  primaryButton: {
    text: "Start Executive Search",
    href: "/#contact",
  },
  secondaryButton: {
    text: "Discuss Your Hiring Needs",
    href: "/#companies",
  },
}
