/**
 * Footer links and social media configuration
 */

import { Linkedin, Mail, type LucideIcon } from "lucide-react"

export interface FooterLink {
  label: string
  href: string
}

export interface FooterLinks {
  services: FooterLink[]
  company: FooterLink[]
  candidates: FooterLink[]
}

export interface SocialLink {
  icon: LucideIcon
  href: string
  label: string
}

export const FOOTER_LINKS: FooterLinks = {
  services: [
    { label: "Permanent Recruitment", href: "#services" },
    { label: "Executive Search", href: "#services" },
    { label: "Remote Hiring", href: "#services" },
    { label: "Employer Branding", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ],
  candidates: [
    { label: "Find a Job", href: "#jobs" },
    { label: "Submit CV", href: "#contact" },
    { label: "Career Advice", href: "#contact" },
  ],
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/recruitmentbg",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:contact@recruitment.bg",
    label: "Email",
  },
]

export const COMPANY_INFO = {
  name: "Recruitment.bg",
  location: "Sofia, Bulgaria",
  description:
    "IT recruitment agency connecting top tech talent with leading companies in Bulgaria and beyond.",
  linkedinUrl: "https://www.linkedin.com/company/recruitment-bg/?originalSubdomain=bg",
  facebookUrl: "https://www.facebook.com/recruitment.bg.official/",
}
