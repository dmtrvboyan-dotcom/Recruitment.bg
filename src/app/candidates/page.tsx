import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/common"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  ArrowRight,
  Upload,
  User,
  Target,
  HeartHandshake,
  Briefcase,
  Clock,
  Shield,
  MessageSquare,
  TrendingUp,
  Globe,
  Award,
  Users,
  Sparkles,
  Zap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "For Candidates | Find Your Next Career Opportunity | Recruitment.bg",
  description:
    "Looking for your next career move? Recruitment.bg helps IT professionals and executives find roles that match their skills, goals, and lifestyle. Transparent process, honest feedback, and long-term career support.",
  keywords: [
    "IT jobs Bulgaria",
    "developer jobs",
    "software engineer jobs",
    "tech careers Bulgaria",
    "career opportunities",
    "job search Bulgaria",
    "IT recruitment",
    "tech jobs Europe",
    "remote jobs Bulgaria",
    "senior developer positions",
    "executive roles Bulgaria",
    "career guidance",
    "job placement",
    "tech talent",
    "recruitment agency candidates",
  ],
  openGraph: {
    title: "For Candidates | Find Your Next Career Opportunity | Recruitment.bg",
    description:
      "Looking for your next career move? We help IT professionals find roles that match their skills, goals, and lifestyle.",
    type: "website",
    locale: "en_US",
    siteName: "Recruitment.bg",
    url: "https://recruitment.bg/candidates",
  },
  twitter: {
    card: "summary_large_image",
    title: "For Candidates | Find Your Next Career Opportunity",
    description:
      "Looking for your next career move? We help IT professionals find roles that match their skills, goals, and lifestyle.",
  },
  alternates: {
    canonical: "https://recruitment.bg/candidates",
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

const CANDIDATE_STEPS = [
  {
    icon: User,
    number: "01",
    title: "You tell us what you actually look for",
    description:
      "Share your skills, experience, and what matters most to you. Whether it's remote work, leadership opportunities, or a specific tech stack - we listen.",
    example:
      '"I\'m a React developer who loves remote work. I\'m looking for a team where I can grow and work in a flexible environment."',
  },
  {
    icon: Target,
    number: "02",
    title: "We match you with the right opportunities",
    description:
      "Our AI platform (smart.R) combined with experienced recruiters connects you with roles that truly fit your goals - not just any open position.",
    example: "Personalized job matching based on your unique profile and preferences.",
  },
  {
    icon: HeartHandshake,
    number: "03",
    title: "We support you through the process",
    description:
      "Fast feedback, honest guidance, and long-term support throughout your journey. We're with you from first interview to first day.",
    example: "Interview prep, salary negotiation advice, and onboarding support.",
  },
]

const YOUR_GOALS_SECTION = {
  tagline: "YOUR GOALS COME FIRST",
  title: "We Focus on What Matters to You",
  points: [
    {
      icon: MessageSquare,
      title: "Clear conversation about your skills and direction",
      description:
        "We take time to understand your technical expertise, career aspirations, and what success looks like for you.",
    },
    {
      icon: Shield,
      title: "Honest feedback and realistic opportunities",
      description:
        "No false promises. We give you straight talk about the market and opportunities that genuinely match your profile.",
    },
    {
      icon: Target,
      title: "Roles aligned with your expectations and lifestyle",
      description:
        "Whether you prioritize remote work, salary, or growth opportunities, we find positions that fit your life.",
    },
    {
      icon: HeartHandshake,
      title: "Support throughout the entire hiring process",
      description:
        "From resume review to interview coaching to offer negotiation - we're in your corner every step of the way.",
    },
  ],
}

const WHAT_YOU_GET_SECTION = {
  tagline: "WHAT YOU GET",
  title: "Benefits of Working With Us",
  benefits: [
    {
      icon: Briefcase,
      title: "Relevant Job Opportunities",
      description:
        "Access exclusive positions that match your skills and career goals. Many roles aren't publicly advertised.",
    },
    {
      icon: MessageSquare,
      title: "Transparent Communication",
      description:
        "Know where you stand at every stage. We keep you informed with regular updates and honest feedback.",
    },
    {
      icon: Clock,
      title: "Faster Feedback",
      description:
        "Our strong relationships with employers mean quicker responses on applications and interviews.",
    },
    {
      icon: TrendingUp,
      title: "Long-term Career Support",
      description:
        "We're not just about filling positions. We build lasting relationships to support your career journey.",
    },
  ],
}

const WHY_CHOOSE_US = {
  tagline: "WHY RECRUITMENT.BG",
  title: "What Sets Us Apart",
  reasons: [
    {
      icon: Globe,
      title: "Deep Market Knowledge",
      description:
        "With years of experience in the Bulgarian and European tech market, we know which companies offer the best opportunities.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description:
        "Hundreds of successful placements in top tech companies, startups, and international corporations.",
    },
    {
      icon: Users,
      title: "Personalized Approach",
      description:
        "Every candidate is unique. We tailor our approach to your specific situation and career goals.",
    },
    {
      icon: Sparkles,
      title: "smart.R Technology",
      description:
        "Our proprietary AI platform matches you with opportunities faster and more accurately than traditional methods.",
    },
  ],
}

const INDUSTRIES = [
  "FinTech & Banking",
  "iGaming & Betting",
  "E-Commerce & Retail",
  "SaaS & Product Companies",
  "AI & Machine Learning",
  "Cybersecurity",
  "Healthcare Tech",
  "Enterprise Software",
]

const ROLES = [
  "Software Engineers",
  "Frontend & Backend Developers",
  "DevOps & Cloud Engineers",
  "Data Scientists & Analysts",
  "Product Managers",
  "Engineering Managers",
  "CTOs & Tech Leaders",
  "QA & Test Engineers",
]

// JSON-LD structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "For Candidates - Find Your Next Career Opportunity",
  description:
    "Looking for your next career move? Recruitment.bg helps IT professionals and executives find roles that match their skills, goals, and lifestyle.",
  url: "https://recruitment.bg/candidates",
  mainEntity: {
    "@type": "Service",
    name: "Career Placement Services",
    provider: {
      "@type": "Organization",
      name: "Recruitment.bg",
      url: "https://recruitment.bg",
    },
    serviceType: "IT Recruitment and Career Placement",
    areaServed: ["Bulgaria", "Europe"],
    description:
      "Professional recruitment services connecting IT professionals with top employers in Bulgaria and Europe.",
  },
  breadcrumb: {
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
        name: "For Candidates",
        item: "https://recruitment.bg/candidates",
      },
    ],
  },
}

export default function CandidatesPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-4">
              FOR CANDIDATES
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance mb-6">
              Find a Role That Actually Fits
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 text-pretty">
              We take the time to understand your goals, skills, and aspirations
              to connect you with opportunities that genuinely feel right.
            </p>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-10">
              No mass applications. No ghost jobs. Just honest conversations and
              real opportunities that match what you&apos;re looking for.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                className="group bg-[#085689] text-white hover:bg-[#78B6D9] hover:text-black rounded-xl px-8 py-6 text-base font-medium"
              >
                <Link href="/#contact">
                  <Upload className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Send Us Your CV
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-transparent text-black hover:bg-[#78B6D9] hover:text-white rounded-xl px-8 py-6 border-2 border-[#78B6D9]/50 text-base font-medium"
              >
                <Link href="/#jobs">
                  Browse Open Positions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28 bg-[#f5f5f5]/50">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
                HOW IT WORKS
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
                Your Journey to the Right Role
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                A simple, transparent process designed around you
              </p>
            </div>

            {/* Desktop: Horizontal Line + Numbers on Top */}
            <div className="hidden md:flex justify-center mb-12">
              <div className="relative w-full max-w-4xl">
                <div className="absolute top-5 left-0 right-0 h-px bg-[#78B6D9]/30" />
                <div className="relative flex justify-between px-8">
                  {CANDIDATE_STEPS.map((step) => (
                    <span
                      key={step.number}
                      className="px-5 text-3xl font-bold text-[#78B6D9] bg-[#f5f5f5]/50"
                    >
                      {step.number}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {CANDIDATE_STEPS.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={index} className="text-center">
                    <div className="hidden md:flex justify-center mb-6">
                      <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white text-[#085689] shadow-sm">
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>
                    <div className="md:hidden flex items-center gap-4 mb-4">
                      <span className="text-2xl font-bold text-[#78B6D9]">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-[#085689] shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-xl text-black mb-3 md:text-center text-left">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-[15px] leading-relaxed mb-4 md:text-center text-left">
                      {step.description}
                    </p>
                    <p className="text-sm text-[#085689] italic md:text-center text-left">
                      {step.example}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Your Goals Come First Section */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
                {YOUR_GOALS_SECTION.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
                {YOUR_GOALS_SECTION.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {YOUR_GOALS_SECTION.points.map((point, index) => {
                const Icon = point.icon
                return (
                  <div
                    key={index}
                    className="group p-8 bg-[#f5f5f5] rounded-3xl border border-slate-100 hover:border-[#78B6D9]/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-2xl bg-[#085689]/5 text-[#085689] group-hover:bg-[#78B6D9] group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-black mb-2 group-hover:text-[#085689] transition-colors">
                          {point.title}
                        </h3>
                        <p className="text-slate-600 text-[15px] leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* What You Get Section */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28 bg-[#f5f5f5]/50">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
                {WHAT_YOU_GET_SECTION.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
                {WHAT_YOU_GET_SECTION.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {WHAT_YOU_GET_SECTION.benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={index}
                    className="group p-8 bg-white rounded-3xl border border-slate-100 hover:border-[#78B6D9]/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="mb-6">
                      <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#085689]/5 text-[#085689] group-hover:bg-[#78B6D9] group-hover:text-white transition-colors">
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-xl text-black mb-3 leading-tight group-hover:text-[#085689] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 text-[15px] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Why Choose Us Section */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
                {WHY_CHOOSE_US.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
                {WHY_CHOOSE_US.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {WHY_CHOOSE_US.reasons.map((reason, index) => {
                const Icon = reason.icon
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-[#f5f5f5] rounded-2xl border border-slate-100 hover:border-[#78B6D9]/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-[#085689]/10 text-[#085689]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-black mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-slate-600 text-[15px] leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Industries & Roles Section */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28 bg-[#f5f5f5]/50">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
                OPPORTUNITIES
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
                Industries & Roles We Cover
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                We specialize in placing top talent across the most dynamic
                sectors in tech
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Industries */}
              <div>
                <h3 className="text-xl font-semibold text-black mb-6 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-[#085689]" />
                  Industries
                </h3>
                <div className="space-y-3">
                  {INDUSTRIES.map((industry, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-[#78B6D9]/30 transition-colors"
                    >
                      <CheckCircle className="w-5 h-5 text-[#085689] flex-shrink-0" />
                      <span className="text-slate-700">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Roles */}
              <div>
                <h3 className="text-xl font-semibold text-black mb-6 flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-[#085689]" />
                  Roles
                </h3>
                <div className="space-y-3">
                  {ROLES.map((role, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-[#78B6D9]/30 transition-colors"
                    >
                      <CheckCircle className="w-5 h-5 text-[#085689] flex-shrink-0" />
                      <span className="text-slate-700">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonial / Social Proof Section */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <div className="bg-[#085689] rounded-3xl p-10 md:p-14">
              <Zap className="w-12 h-12 text-[#78B6D9] mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-6 text-balance">
                &ldquo;We don&apos;t just find you a job. We help you find the
                right fit - a role where you can thrive, grow, and build
                something meaningful.&rdquo;
              </blockquote>
              <p className="text-[#78B6D9] font-medium">
                The Recruitment.bg Team
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ Section for Candidates */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28 bg-[#f5f5f5]/50">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
                COMMON QUESTIONS
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Is there any cost for candidates?",
                  a: "No, our services are completely free for candidates. Employers pay our fees when they hire through us.",
                },
                {
                  q: "How long does the process typically take?",
                  a: "It varies depending on the role and your profile, but we typically present relevant opportunities within 1-2 weeks of our initial conversation.",
                },
                {
                  q: "Do you only work with senior candidates?",
                  a: "While we specialize in mid-to-senior level positions, we work with talented professionals at various career stages. What matters most is your potential and commitment.",
                },
                {
                  q: "Can I apply for remote positions?",
                  a: "Absolutely! We have many remote and hybrid opportunities, especially for tech roles. Just let us know your preferences.",
                },
                {
                  q: "Will you share my CV without my permission?",
                  a: "Never. We always discuss specific opportunities with you first and only share your profile with employers after getting your explicit consent.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-2xl border border-slate-100"
                >
                  <h3 className="font-semibold text-lg text-black mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28 mb-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-6">
              Ready to Find Your Next Opportunity?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
              Whether you&apos;re actively looking or just exploring
              options, we&apos;d love to hear from you. Send us your CV and
              let&apos;s start the conversation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                className="group bg-[#085689] text-white hover:bg-[#78B6D9] hover:text-black rounded-xl px-8 py-6 text-base font-medium"
              >
                <Link href="/#contact">
                  <Upload className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Send Us Your CV
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-transparent text-black hover:bg-[#78B6D9] hover:text-white rounded-xl px-8 py-6 border-2 border-[#78B6D9]/50 text-base font-medium"
              >
                <Link href="/#jobs">
                  Browse Open Positions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
