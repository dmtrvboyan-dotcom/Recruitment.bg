import { CreditCard, ShieldCheck, BarChart3, Briefcase } from "lucide-react"
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
  subDescription: string
}

export interface SectionHeader {
  tagline: string
  title: string
}

export interface BulgariaStrengthsData {
  items: string[]
}

export interface WhatWeHireItem {
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
  tagline: "Fintech Recruitment",
  title: "Fintech Recruitment & Hiring",
  description:
    "The fintech sector is growing rapidly, and the need for experienced professionals is growing with it.",
  subDescription:
    "Bulgaria has become a strong hub for blockchain, payments, cybersecurity, and data & AI development.",
}

export const BULGARIA_STRENGTHS_HEADER: SectionHeader = {
  tagline: "Why Bulgaria",
  title: "Bulgaria Has Strong Development In",
}

export const BULGARIA_STRENGTHS: BulgariaStrengthsData = {
  items: [
    "Blockchain & Web3 technologies",
    "Payments infrastructure & processing",
    "Cybersecurity solutions",
    "Data & AI applications",
  ],
}

export const WHAT_WE_HIRE_HEADER: SectionHeader = {
  tagline: "Our Focus",
  title: "Roles We Hire",
}

export const WHAT_WE_HIRE: WhatWeHireItem[] = [
  {
    icon: CreditCard,
    title: "Backend (Payments, API)",
    description:
      "Experienced backend engineers specializing in payment systems, API development, and financial integrations.",
  },
  {
    icon: ShieldCheck,
    title: "Risk & Compliance",
    description:
      "Professionals with expertise in regulatory compliance, risk management, and financial security.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description:
      "Data scientists and analysts who drive insights and decision-making in financial technology.",
  },
  {
    icon: Briefcase,
    title: "Product Roles",
    description:
      "Product managers and owners with fintech domain expertise and a track record of shipping products.",
  },
]

export const CTA_DATA: CtaData = {
  title: "Ready to Hire Fintech Talent?",
  description:
    "Let us connect you with experienced fintech professionals who can drive your business forward.",
  primaryButton: {
    text: "Hire Fintech Talent",
    href: "/#contact",
  },
  secondaryButton: {
    text: "Request for Candidates",
    href: "/#companies",
  },
}
