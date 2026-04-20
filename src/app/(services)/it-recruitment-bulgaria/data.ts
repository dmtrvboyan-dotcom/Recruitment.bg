import { Users, Clock, Shield, Wallet } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface WhatYouGetItem {
  icon: LucideIcon
  title: string
  description: string
}

export interface WhyBulgariaData {
  left: string[]
  right: string[]
}

export interface HeroData {
  tagline: string
  title: string
  description: string
  subDescription: string
}

export interface SectionHeader {
  tagline: string
  title: string
}

export interface ApproachData {
  header: SectionHeader
  paragraphs: string[]
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
  tagline: "IT Recruitment Bulgaria",
  title: "Hire Software Developers in Bulgaria",
  description:
    "Bulgaria has become one of the strongest technology hubs in Europe, with over 100,000 software specialists and steady IT sector growth.",
  subDescription:
    "We help companies from the USA, UK, Germany, and across Europe hire vetted developers — quickly, efficiently, and with minimal risk.",
}

export const WHAT_YOU_GET_HEADER: SectionHeader = {
  tagline: "Our Promise",
  title: "What You Get",
}

export const WHAT_YOU_GET: WhatYouGetItem[] = [
  {
    icon: Users,
    title: "Vetted Senior Developers",
    description:
      "Access pre-screened, interview-ready candidates with verified skills and experience.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Receive qualified candidates within 3-5 business days, not weeks or months.",
  },
  {
    icon: Shield,
    title: "EU Compliance",
    description:
      "Full legal compliance with EU labor laws, GDPR, and employment regulations.",
  },
  {
    icon: Wallet,
    title: "Cost Efficiency",
    description:
      "Up to 50% lower costs compared to Western Europe without compromising quality.",
  },
]

export const WHY_BULGARIA_HEADER: SectionHeader = {
  tagline: "The Advantage",
  title: "Why Bulgaria",
}

export const WHY_BULGARIA: WhyBulgariaData = {
  left: [
    "Over 100,000 software professionals",
    "Strong technical education system",
    "High English proficiency across the workforce",
    "Cultural alignment with Western business practices",
  ],
  right: [
    "EU member state with stable economy",
    "Competitive salary expectations",
    "Growing tech ecosystem and startup scene",
    "Convenient timezone overlap with Europe",
  ],
}

export const APPROACH_DATA: ApproachData = {
  header: {
    tagline: "How We Work",
    title: "Our Approach",
  },
  paragraphs: [
    "We combine deep local market knowledge with international recruitment best practices. Our team personally vets every candidate, ensuring technical skills, communication abilities, and cultural fit align with your requirements.",
    "From initial briefing to successful placement, we provide end-to-end support, making the hiring process seamless whether you are building your first team in Bulgaria or expanding an existing operation.",
  ],
}

export const CTA_DATA: CtaData = {
  title: "Ready to Hire Developers in Bulgaria?",
  description:
    "Let us help you build your engineering team with top Bulgarian talent. Get started today and receive your first candidates within days.",
  primaryButton: {
    text: "Start Hiring",
    href: "/#contact",
  },
  secondaryButton: {
    text: "Learn More",
    href: "/#companies",
  },
}
