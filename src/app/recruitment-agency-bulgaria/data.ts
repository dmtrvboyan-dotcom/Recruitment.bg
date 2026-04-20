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
  tagline: "Recruitment Agency",
  title: "Staffing Agency in Bulgaria",
  description:
    "We are a recruitment agency working with companies from Europe and the USA, providing end-to-end talent solutions.",
  marketInsight:
    "The market in Bulgaria is dynamic, with thousands of open positions and a serious shortage of qualified personnel.",
}

export const SERVICES_HEADER: SectionHeader = {
  tagline: "What We Offer",
  title: "Our Services",
}

export const SERVICES: ServiceItem[] = [
  {
    icon: RefreshCw,
    title: "Full-Cycle Recruitment",
    description:
      "Complete recruitment process from job profiling and sourcing to interviewing, offer management, and onboarding support.",
  },
  {
    icon: Target,
    title: "Headhunting",
    description:
      "Proactive identification and engagement of top talent, including passive candidates who are not actively job searching.",
  },
  {
    icon: Search,
    title: "Talent Sourcing",
    description:
      "Building qualified candidate pipelines through multiple channels — job boards, social networks, referrals, and direct outreach.",
  },
  {
    icon: Lightbulb,
    title: "Hiring Strategy",
    description:
      "Strategic consulting on employer branding, compensation benchmarking, and talent acquisition planning.",
  },
]

export const CTA_DATA: CtaData = {
  title: "Ready to Work With Us?",
  description:
    "Partner with a recruitment agency that understands the Bulgarian market and delivers results.",
  primaryButton: {
    text: "Work With Us",
    href: "/#contact",
  },
  secondaryButton: {
    text: "Find Talent Faster",
    href: "/#companies",
  },
}
