import { RefreshCw, Target, Search, Lightbulb } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface HeroData {
  tagline: string
  title: string
  description: string
  marketInsight: string
}

export interface SectionHeader {
  tagline: string
  title: string
}

export interface ServiceItem {
  icon: LucideIcon
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
  tagline: "Cybersecurity Recruitment",
  title: "Hire Cybersecurity & Information Security Talent",
  description:
    "We help companies hire top cybersecurity professionals, including security engineers, SOC analysts, penetration testers, and cloud security experts.",
  marketInsight:
    "Cybersecurity talent is in high demand globally, with a growing shortage of skilled professionals in areas like cloud security, DevSecOps, and threat detection.",
}

export const SERVICES_HEADER: SectionHeader = {
  tagline: "What We Offer",
  title: "Cybersecurity Recruitment Services",
}

export const SERVICES: ServiceItem[] = [
  {
    icon: RefreshCw,
    title: "Full-Cycle Cybersecurity Recruitment",
    description:
      "End-to-end hiring for cybersecurity roles, from defining requirements to sourcing, interviewing, and onboarding security professionals.",
  },
  {
    icon: Target,
    title: "Cybersecurity Headhunting",
    description:
      "Targeted headhunting of top security talent, including passive candidates in information security, ethical hacking, and risk management.",
  },
  {
    icon: Search,
    title: "Security Talent Sourcing",
    description:
      "Building pipelines of qualified cybersecurity candidates across SOC, cloud security, DevSecOps, and penetration testing.",
  },
  {
    icon: Lightbulb,
    title: "Security Hiring Strategy",
    description:
      "Advisory on cybersecurity hiring, including compensation benchmarks, team structure, and talent acquisition strategy.",
  },
]

export const CTA_DATA: CtaData = {
  title: "Looking to Hire Cybersecurity Talent?",
  description:
    "Partner with a cybersecurity recruitment agency that understands information security, cloud security, and threat detection. Hire faster and build secure teams.",
  primaryButton: {
    text: "Start Hiring",
    href: "/#contact",
  },
  secondaryButton: {
    text: "Talk to an Expert",
    href: "/#companies",
  },
}