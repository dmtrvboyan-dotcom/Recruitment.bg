import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import { ScrollReveal } from "@/components/common"
import { ProductTourClient } from "./product-tour-client"
import {
  atsMetadata,
  atsJsonLd,
  atsBreadcrumbJsonLd,
  heroData,
  featuresData,
  benefitsData,
  integrationsData,
  securityData,
  testimonialsData,
  faqData,
  ctaData,
} from "./data"

// ============================================================================
// Metadata Export
// ============================================================================

export const metadata: Metadata = atsMetadata

// ============================================================================
// Feature Card Images
// ============================================================================

const featureImages: Record<string, string> = {
  "AI-Powered Matching": "/smartr/1.jpg",
  "Visual Pipeline": "/smartr/2.jpg",
  "Automated Workflows": "/smartr/3.jpg",
  "Real-time Analytics": "/smartr/4.jpg",
  "Team Collaboration": "/smartr/5.jpg",
  "Email Integration": "/smartr/6.jpg",
  "Bulgarian Support": "/smartr/2.jpg",
  "Resume Parsing": "/smartr/1.jpg",
}

// ============================================================================
// Section Components
// ============================================================================


function HeroSection() {
  return (
    <ScrollReveal>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        
        {/* Text content — keep centered with max-width */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-6 leading-tight text-balance pt-20">
              <span className="relative inline-block px-4">
                <span className="absolute inset-0 scale-125 blur-2xl opacity-30 bg-gradient-to-r from-[#085689] via-[#78B6D9] to-[#085689] rounded-full"></span>
                <span className="relative bg-gradient-to-r from-[#085689] via-[#78B6D9] to-[#085689] bg-clip-text text-transparent">
                  The All-In-One ATS
                </span>
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8 text-pretty">
              {heroData.subtitle}
            </p>
          </div>
        </div>

        {/* ── Full-bleed image — fully escapes all containers ── */}
        <div className="relative w-screen left-1/2 -translate-x-1/2">
          <Image
            src="/uploaded/smartr.png"
            alt="Smart.R Dashboard - Visual Hiring Pipeline"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />

          {/* Decorative blurs on the image */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#78B6D9]/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#085689]/10 rounded-full blur-2xl" />
        </div>

        {/* ── Curved overlap section — also full-bleed ── */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-40">
          
          {/* SVG wave */}
          <div className="w-full overflow-hidden leading-[0] ">
            <svg
              viewBox="0 0 1440 80"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="w-full h-16 sm:h-20 md:h-24 lg:h-28"
            >
              <path
                d="M0,80 L0,40 Q360,0 720,40 Q1080,80 1440,40 L1440,80 Z"
                fill="white"
              />
            </svg>
          </div>

          {/* Content below the wave */}
          <div className="bg-[#fff] text-center px-6 pb-16 pt-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-8 leading-tight max-w-4xl mx-auto text-balance">
              Built by recruiters with 15+ years of hands-on experience. Used by
              teams who want to hire smarter, not harder.
            </h2>

            <div className="flex flex-row gap-4 justify-center pt-5">
              <Link href={heroData.secondaryCta.href}>
                <Button
                  variant="outline"
                  className="bg-transparent bg-[#085689] text-white hover:bg-[#78B6D9] hover:border-slate-400 rounded-xl px-8 py-6 text-base font-medium transition-all duration-300"
                >
                  {heroData.secondaryCta.text}
                </Button>
              </Link>
            </div>
          </div>
        </div>

      </section>
    </ScrollReveal>
  );
}

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-white to-[#ededed] -mt-25">
      <div className="max-w-6xl mx-auto mt-15">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-[#085689] uppercase tracking-wider mb-4 block">
            {featuresData.tagline}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-4 text-balance">
            {featuresData.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
            {featuresData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {featuresData.items.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col cursor-pointer"
            >
              {/* Feature Image with title overlay */}
              <div
                className="relative w-full overflow-hidden rounded-3xl bg-[#085689]/10
                           transition-all duration-500 ease-out
                           group-hover:-translate-y-2
                           group-hover:shadow-[0_24px_48px_-12px_rgba(8,86,137,0.30)]"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={featureImages[feature.title] || "/images/smartr-dashboard.jpg"}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Base gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent rounded-3xl
                               transition-opacity duration-500 group-hover:opacity-80" />

                {/* Hover shimmer overlay */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                               transition-opacity duration-500
                               bg-gradient-to-tr from-[#085689]/20 via-transparent to-white/10" />

                {/* Title inside image, bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5
                               transition-transform duration-500 ease-out
                               group-hover:-translate-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight drop-shadow-md">
                    {feature.title}
                  </h3>
                </div>

                {/* Corner accent dot */}
                <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-white/0
                               transition-all duration-500 delay-100
                               group-hover:bg-white/70 group-hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.4)]" />
              </div>

              {/* Feature Description */}
              <div className="mt-5 overflow-hidden">
                <p className="text-slate-600 text-base leading-relaxed
                             transition-all duration-500 ease-out
                             group-hover:text-slate-800 group-hover:translate-x-0.5">
                  {feature.description}
                </p>

                {/* Animated underline accent */}
                <div className="mt-3 h-px w-0 bg-gradient-to-r from-[#085689] to-[#085689]/0
                               transition-all duration-500 ease-out
                               group-hover:w-12" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BenefitsSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-md font-medium text-[#085689] uppercase tracking-wider mb-4 block">
            {benefitsData.tagline}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight  mb-4 text-balance">
            {benefitsData.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {benefitsData.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsData.items.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#085689]/10 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-[#085689]" />
                </div>
                {benefit.stat && (
                  <span className="text-2xl font-bold text-[#78B6D9]">
                    {benefit.stat}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                {benefit.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ScreenshotsSection() {
  return <ProductTourClient />
}

function IntegrationsSection() {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center lg:text-center">
          <span className="text-md font-medium text-[#085689] uppercase tracking-wider mb-4 block">
            {integrationsData.tagline}
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-4 text-balance">
            {integrationsData.title}
          </h2>

          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto ">
            {integrationsData.subtitle}
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {integrationsData.items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#085689]/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-[#085689]" />
                </div>

                <div>
                  <h3 className="font-semibold text-black mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SecuritySection() {
  return (
    <section className="py-16 px-6 border-y border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-md font-medium text-[#085689] uppercase tracking-wider mb-2 block">
            {securityData.tagline}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black text-balance">
            {securityData.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityData.items.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-black text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-md font-medium text-[#085689] uppercase tracking-wider mb-4 block">
            {testimonialsData.tagline}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-4 text-balance">
            {testimonialsData.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {testimonialsData.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonialsData.items.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
            >
              <p className="text-slate-700 leading-relaxed mb-6 italic">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#085689] flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-black">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-slate-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-md font-medium text-[#085689] uppercase tracking-wider mb-4 block">
            {faqData.tagline}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-4 text-balance">
            {faqData.title}
          </h2>
          <p className="text-lg text-slate-600">
            {faqData.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {faqData.items.map((item, index) => (
            <details
              key={index}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="font-semibold text-black pr-4">
                  {item.question}
                </h3>
                <ChevronDown className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180 shrink-0" />
              </summary>
              <div className="px-6 pb-6 pt-0">
                <p className="text-slate-600 leading-relaxed">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-20 md:py-40  bg-gradient-to-br from-[#085689] to-[#064266]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 text-balance">
          {ctaData.title}
        </h2>
        <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
          {ctaData.description}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={ctaData.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-white text-[#085689] hover:bg-slate-100 rounded-lg px-8 py-6 text-base group">
              {ctaData.primaryCta.text}
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <Link href={ctaData.secondaryCta.href}>
            <Button
              variant="outline"
              className="bg-transparent text-white hover:bg-white/20 rounded-lg px-8 py-6 text-base border-white/30"
            >
              {ctaData.secondaryCta.text}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// Main Page Component
// ============================================================================

export default function ApplicantTrackingSystemPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(atsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(atsBreadcrumbJsonLd) }}
      />

      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <ScreenshotsSection />
      <IntegrationsSection />
      <SecuritySection />
      <FAQSection />
      <CTASection />
    </>
  )
}
