import type { Metadata } from "next"
import type { LucideIcon } from "lucide-react"
import {
  Zap,
  Users,
  BarChart3,
  Clock,
  Shield,
  Globe,
  Workflow,
  Bot,
  Kanban,
  Mail,
  Calendar,
  FileSearch,
  Target,
  TrendingUp,
  CheckCircle,
  Star,
  Puzzle,
  Smartphone,
  Headset,
} from "lucide-react"

// ============================================================================
// Types
// ============================================================================

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export interface Step {
  number: string
  title: string
  description: string
  icon: LucideIcon
}

export interface Benefit {
  icon: LucideIcon
  title: string
  description: string
  stat?: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  avatar: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface PricingPlan {
  name: string
  description: string
  price: string
  period: string
  features: string[]
  highlighted?: boolean
  cta: string
}

// ============================================================================
// SEO Metadata
// ============================================================================

export const atsMetadata: Metadata = {
  title: "Smart.R | AI-Powered Applicant Tracking System | Recruitment.bg",
  description:
    "Smart.R is an AI-powered ATS built by recruiters, for recruiters. Streamline your hiring process with intelligent candidate matching, visual pipelines, and powerful analytics. Reduce time-to-hire by 50%.",
  keywords: [
    "applicant tracking system",
    "ATS software",
    "recruitment software",
    "hiring software",
    "AI recruitment",
    "candidate management",
    "recruitment CRM",
    "HR software",
    "talent acquisition software",
    "hiring platform",
    "recruitment automation",
    "AI ATS",
    "smart recruitment",
    "Bulgaria ATS",
    "European recruitment software",
    "HR tech",
    "hiring pipeline",
    "candidate tracking",
    "recruitment analytics",
    "team hiring software",
  ],
  openGraph: {
    title: "Smart.R | AI-Powered Applicant Tracking System",
    description:
      "Built by recruiters, for recruiters. Streamline your hiring with AI-powered candidate matching and visual pipelines.",
    type: "website",
    locale: "en_US",
    siteName: "Recruitment.bg",
    url: "https://recruitment.bg/applicant-tracking-system",
    images: [
      {
        url: "/images/smartr-og.png",
        width: 1200,
        height: 630,
        alt: "Smart.R Applicant Tracking System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart.R | AI-Powered Applicant Tracking System",
    description:
      "Built by recruiters, for recruiters. Streamline your hiring with AI-powered candidate matching.",
    images: ["/images/smartr-og.png"],
  },
  alternates: {
    canonical: "https://recruitment.bg/applicant-tracking-system",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

// ============================================================================
// JSON-LD Structured Data
// ============================================================================

export const atsJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Smart.R",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "AI-powered Applicant Tracking System built by recruiters, for recruiters. Streamline your hiring process with intelligent candidate matching, visual pipelines, and powerful analytics.",
  url: "https://recruitment.bg/applicant-tracking-system",
  provider: {
    "@type": "Organization",
    name: "Recruitment.bg",
    url: "https://recruitment.bg",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    description: "Free trial available",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "150",
    bestRating: "5",
    worstRating: "1",
  },
  featureList: [
    "AI-Powered Candidate Matching",
    "Visual Hiring Pipeline",
    "Automated Screening",
    "Team Collaboration",
    "Analytics & Reporting",
    "Multi-language Support",
    "GDPR Compliance",
    "API Integrations",
  ],
}

export const atsBreadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://recruitment.bg",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Smart.R ATS",
      item: "https://recruitment.bg/applicant-tracking-system",
    },
  ],
}

// ============================================================================
// Hero Section
// ============================================================================

export const heroData = {
  tagline: "Smart.R",
  title: "The All-in-One ATS Built for Modern Recruiters",
  subtitle:
    "From candidate sourcing to hire — Smart.R streamlines your entire recruitment process with AI-powered matching and intuitive workflows.",
  description:
    "Built by recruiters with 15+ years of hands-on experience. Used by teams who want to hire smarter, not harder.",
  primaryCta: {
    text: "Start Free Trial",
    href: "https://smartr-olive.vercel.app/",
  },
  secondaryCta: {
    text: "Book a Demo",
    href: "/#contact",
  },
  stats: [
    { value: "50%", label: "Faster hiring" },
    { value: "3x", label: "More candidates" },
    { value: "15+", label: "Years expertise" },
  ],
}

// ============================================================================
// Features Section
// ============================================================================

export const featuresData = {
  tagline: "POWERFUL FEATURES",
  title: "Everything You Need to Hire Smarter",
  subtitle: "Comprehensive tools designed around how real hiring actually works",
  items: [
    {
      icon: Bot,
      title: "AI-Powered Matching",
      description:
        "Our intelligent algorithms analyze candidate profiles and match them with your requirements, with Smart.R features surfacing the best fits instantly.",
    },
    {
      icon: Kanban,
      title: "Visual Pipeline",
      description:
        "Drag-and-drop kanban boards give you complete visibility into your hiring funnel with Smart.R tools. Track every candidate from application to offer.",
    },
    {
      icon: Workflow,
      title: "Automated Workflows",
      description:
        "Set up triggers and actions to automate repetitive tasks using Smart.R workflows. Send emails, move candidates, and update statuses automatically.",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description:
        "Comprehensive dashboards show you time-to-hire, source effectiveness, and pipeline health at a glance.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Share candidate profiles, collect feedback, and keep all stakeholders aligned with built-in Smart.R collaboration tools.",
    },
    {
      icon: Mail,
      title: "Email Integration",
      description:
        "Send personalized emails at scale through Smart.R. Track opens, clicks, and responses directly within the platform.",
    },
    {
      icon: Headset,
      title: "Bulgarian Support",
      description:
        "We’re just a call or email away with Smart.R support. Get fast, reliable assistance in Bulgarian—whether it’s onboarding, troubleshooting, or optimizing your hiring workflows.",
    },
    {
      icon: FileSearch,
      title: "Resume Parsing",
      description:
        "Automatically extract and structure data from resumes using Smart.R parsing. Search across all candidates with powerful filters.",
    },
  ] as Feature[],
}

// ============================================================================
// How It Works Section
// ============================================================================

export const howItWorksData = {
  tagline: "HOW IT WORKS",
  title: "Simple, Powerful, Effective",
  subtitle: "Get started in minutes, see results in days",
  items: [
    {
      number: "01",
      title: "Post Your Jobs",
      description:
        "Create compelling job listings and distribute them across multiple job boards with a single click.",
      icon: Target,
    },
    {
      number: "02",
      title: "Receive & Screen",
      description:
        "AI-powered screening helps you quickly identify top candidates and filter out unqualified applicants.",
      icon: FileSearch,
    },
    {
      number: "03",
      title: "Collaborate & Evaluate",
      description:
        "Schedule interviews, collect team feedback, and keep all stakeholders aligned throughout the process.",
      icon: Users,
    },
    {
      number: "04",
      title: "Hire the Best",
      description:
        "Make data-driven decisions and extend offers to the best candidates faster than ever before.",
      icon: CheckCircle,
    },
  ] as Step[],
}

// ============================================================================
// Benefits Section
// ============================================================================

export const benefitsData = {
  tagline: "WHY SMART.R",
  title: "Transform Your Hiring Process Positively",
  subtitle: "Enhance your candidate experience with seamless communication.",
  items: [
    {
      icon: Clock,
      title: "Save Time",
      description:
        "Reduce time-to-hire by up to 50% with automated workflows and AI-powered candidate matching.",
      stat: "50%",
    },
    {
      icon: TrendingUp,
      title: "Reduce Bottlenecks",
      description:
        "Identify and eliminate inefficiencies in your recruitment process with real-time analytics.",
      stat: "3x",
    },
    {
      icon: Star,
      title: "Better Candidate Experience",
      description:
        "Keep candidates engaged with timely updates and a seamless, professional application process.",
      stat: "95%",
    },
    {
      icon: BarChart3,
      title: "Gain Visibility",
      description:
        "Get complete transparency into your recruitment pipeline with comprehensive reporting.",
      stat: "100%",
    },
  ] as Benefit[],
}

// ============================================================================
// Integrations Section
// ============================================================================

export const integrationsData = {
  tagline: "INTEGRATIONS",
  title: "Works With Your Stack",
  subtitle: "Connect Smart.R with the tools you already use",
  items: [
    {
      icon: Globe,
      title: "Job Boards",
      description: "Post to LinkedIn, Indeed, Glassdoor, and 50+ job boards with one click.",
    },
    {
      icon: Mail,
      title: "Email & Calendar",
      description: "Sync with Gmail, Outlook, Google Calendar, and Microsoft 365.",
    },
    {
      icon: Puzzle,
      title: "HR Systems",
      description: "Connect with your HRIS, payroll, and onboarding tools via API.",
    },
    {
      icon: Smartphone,
      title: "Communication",
      description: "Integrate with Slack, Teams, and other communication platforms.",
    },
  ] as Feature[],
}

// ============================================================================
// Security Section
// ============================================================================

export const securityData = {
  tagline: "SECURITY & COMPLIANCE",
  title: "Enterprise-Grade Security",
  items: [
    {
      icon: Shield,
      title: "GDPR Compliant",
      description: "Full compliance with European data protection regulations.",
    },
    {
      icon: Shield,
      title: "Data Encryption",
      description: "256-bit encryption for all data in transit and at rest.",
    },
    {
      icon: Shield,
      title: "SOC 2 Type II",
      description: "Independently audited security controls and practices.",
    },
    {
      icon: Shield,
      title: "Regular Backups",
      description: "Automated daily backups with disaster recovery protocols.",
    },
  ],
}

// ============================================================================
// Testimonials Section
// ============================================================================

export const testimonialsData = {
  tagline: "TESTIMONIALS",
  title: "Loved by Hiring Teams Everywhere",
  subtitle: "See what our customers have to say about Smart.R",
  items: [
    {
      quote:
        "Smart.R has completely transformed how we hire. We've reduced our time-to-hire by 40% and our hiring managers love the collaboration features.",
      author: "Sarah Chen",
      role: "VP of People",
      company: "TechCorp",
      avatar: "SC",
    },
    {
      quote:
        "The AI-powered screening saves us hours every week. We can now focus on building relationships with top candidates instead of sifting through resumes.",
      author: "Michael Rodriguez",
      role: "Talent Acquisition Lead",
      company: "Innovate Inc",
      avatar: "MR",
    },
    {
      quote:
        "Finally, an ATS that doesn't feel like it was built in 2005. The interface is intuitive and our entire team was onboarded in under a day.",
      author: "Emma Thompson",
      role: "HR Director",
      company: "GrowthStartup",
      avatar: "ET",
    },
    {
      quote:
        "The pipeline view is incredibly powerful. We went from chaotic spreadsheets to a clean, visual hiring process that everyone actually enjoys using.",
      author: "David Kim",
      role: "Head of Talent",
      company: "Nexus Labs",
      avatar: "DK",
    },
  ] as Testimonial[],
}

// ============================================================================
// FAQ Section
// ============================================================================

export const faqData = {
  tagline: "FAQ",
  title: "Frequently Asked Questions",
  subtitle: "",
  items: [
    {
      question: "How long does it take to set up Smart.R?",
      answer:
        "Most teams are up and running within a few hours. Our onboarding team will guide you through the setup process, import your existing data, and train your team on best practices.",
    },
    {
      question: "Can I import data from my current ATS?",
      answer:
        "Yes! We support data migration from all major ATS platforms including Greenhouse, Lever, Workday, and more. Our team handles the entire migration process for you.",
    },
    {
      question: "Is Smart.R compliant with GDPR and other privacy regulations?",
      answer:
        "Absolutely. Smart.R is fully GDPR compliant and follows best practices for data privacy and security. We're also SOC 2 Type II certified.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We offer email support for all plans, with priority support and dedicated account managers available for Enterprise customers. Our average response time is under 2 hours.",
    },
    {
      question: "Can I try Smart.R before committing?",
      answer:
        "Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can also book a personalized demo with our team.",
    },
    {
      question: "How does the AI matching work?",
      answer:
        "Our AI analyzes job requirements and candidate profiles to identify the best matches based on skills, experience, and cultural fit. It learns from your hiring decisions to improve recommendations over time.",
    },
  ] as FAQ[],
}

// ============================================================================
// CTA Section
// ============================================================================

export const ctaData = {
  title: "Ready to Transform Your Hiring?",
  description:
    "Join thousands of companies using Smart.R to hire faster and smarter. Start your free trial today — no credit card required.",
  primaryCta: {
    text: "Start Free Trial",
    href: "https://smartr-olive.vercel.app/",
  },
  secondaryCta: {
    text: "Book a Demo",
    href: "/#contact",
  },
}
