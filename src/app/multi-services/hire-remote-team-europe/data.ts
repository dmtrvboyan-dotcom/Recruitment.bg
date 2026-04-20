import { Globe, Clock, BadgeCheck, Briefcase, Users, Handshake } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface HighlightItem {
  icon: LucideIcon
  title: string
  description: string
}

export interface ProcessStep {
  step: string
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
  tagline: "Remote Teams in Europe",
  title: "Build Your Remote Team in Europe",
  description:
    "Access top-tier European talent without the hassle of complex processes or legal risks.",
}

export const BULGARIA_DELIVERS_HEADER: SectionHeader = {
  tagline: "The Advantage",
  title: "Bulgaria Delivers",
}

export const BULGARIA_DELIVERS: HighlightItem[] = [
  {
    icon: Globe,
    title: "EU Legal Framework",
    description:
      "Full compliance with European employment law, GDPR, and IP protection standards.",
  },
  {
    icon: Clock,
    title: "Timezone Alignment",
    description:
      "Convenient overlap with European business hours, easy collaboration with teams in the UK, Germany, and beyond.",
  },
  {
    icon: BadgeCheck,
    title: "Top-Tier Talent",
    description:
      "Access to a deep pool of experienced developers, engineers, and technical specialists.",
  },
]

export const HOW_WE_HELP_HEADER: SectionHeader = {
  tagline: "Our Process",
  title: "How We Help",
}

export const HOW_WE_HELP: ProcessStep[] = [
  {
    step: "01",
    icon: Briefcase,
    title: "Define Requirements",
    description:
      "We work with you to understand your technical needs, team culture, and hiring timeline.",
  },
  {
    step: "02",
    icon: Users,
    title: "Source & Vet Candidates",
    description:
      "Our team identifies and pre-screens candidates, presenting only those who meet your standards.",
  },
  {
    step: "03",
    icon: Handshake,
    title: "Seamless Onboarding",
    description:
      "We support the hiring process through offer negotiation, contracts, and onboarding.",
  },
]

export const CTA_DATA: CtaData = {
  title: "Ready to Build Your European Team?",
  description:
    "Start building your remote team with top Bulgarian talent today. No complicated processes, no legal risks — just great developers ready to join your team.",
  primaryButton: {
    text: "Get Started",
    href: "/#contact",
  },
  secondaryButton: {
    text: "Learn About Our Process",
    href: "/#companies",
  },
}
