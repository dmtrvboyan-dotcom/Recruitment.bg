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
  tagline: "Ecommerce Recruitment",
  title: "Ecommerce Talent & Online Retail Hiring",
  description:
    "We help ecommerce companies hire top talent across Shopify, Magento, digital marketing, and online retail operations. Build high-performing teams that drive growth, conversions, and revenue.",
}

export const BULGARIA_DELIVERS_HEADER: SectionHeader = {
  tagline: "Ecommerce Expertise",
  title: "Why Work With Us",
}

export const BULGARIA_DELIVERS: HighlightItem[] = [
  {
    icon: Globe,
    title: "Ecommerce Market Expertise",
    description:
      "Deep understanding of ecommerce, online retail, DTC brands, and marketplace ecosystems across Europe.",
  },
  {
    icon: Clock,
    title: "Fast Hiring Process",
    description:
      "Quick access to pre-vetted ecommerce talent, reducing time-to-hire for critical roles.",
  },
  {
    icon: BadgeCheck,
    title: "Proven Ecommerce Talent",
    description:
      "Hire experienced professionals in Shopify, Magento, performance marketing, and conversion optimization.",
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
    title: "Define Ecommerce Needs",
    description:
      "We align on your ecommerce business model, growth stage, and hiring goals across marketing, tech, and operations.",
  },
  {
    step: "02",
    icon: Users,
    title: "Source Ecommerce Talent",
    description:
      "We identify and vet candidates with proven experience in ecommerce platforms, digital marketing, and online sales.",
  },
  {
    step: "03",
    icon: Handshake,
    title: "Hire & Scale",
    description:
      "We support hiring, offers, and onboarding so you can scale your ecommerce team quickly and efficiently.",
  },
]

export const CTA_DATA: CtaData = {
  title: "Looking to Hire Ecommerce Talent?",
  description:
    "Partner with an ecommerce recruitment agency that understands online retail, digital marketing, and growth. Hire faster and scale your ecommerce business with the right team.",
  primaryButton: {
    text: "Start Hiring",
    href: "/#contact",
  },
  secondaryButton: {
    text: "Talk to an Expert",
    href: "/#companies",
  },
}