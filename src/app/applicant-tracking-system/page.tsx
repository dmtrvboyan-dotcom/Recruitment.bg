import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight, ChevronDown } from "lucide-react"

import {
  atsMetadata,
  atsJsonLd,
  atsBreadcrumbJsonLd,
  heroData,
  featuresData,
  howItWorksData,
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
// Section Components
// ============================================================================

function HeroSection() {
  return (
    <section className="relative lg:mt-24 pb-20 md:pt-40 md:pb-32 mt-50 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-5">
          <Sparkles className="w-4 h-4 text-orange-500" />
          <span className="uppercase tracking-widest text-[#085689] font-semibold">
            {heroData.tagline}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-5 leading-tight">
          {heroData.title}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-4">
          {heroData.subtitle}
        </p>

        {/* Description */}
        {/* <p className="text-sm sm:text-base text-slate-500 mb-8">
          {heroData.description}
        </p> */}

        {/* CTAs */}
        <div className="flex flex-row sm:flex-row gap-3 justify-center mb-10 mt-10">
          <a
            href={heroData.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button className="w-full sm:w-auto bg-[#085689] text-white hover:bg-[#78B6D9] hover:text-black rounded-xl px-6 py-5 text-sm   group shadow-lg">
              {heroData.primaryCta.text}
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>

          <Link href={heroData.secondaryCta.href} className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full sm:w-auto bg-transparent border-slate-300 hover:bg-[#78B6D9] hover:text-white hover:border-[#78B6D9] rounded-xl px-6 py-5 text-sm"
            >
              {heroData.secondaryCta.text}
            </Button>
          </Link>
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-3 sm:flex sm:flex-wrap justify-center gap-6">
          {heroData.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#085689]">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-slate-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}

      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-md font-medium text-[#085689] uppercase tracking-wider mb-4 block">
            {featuresData.tagline}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-4 text-balance">
            {featuresData.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {featuresData.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.items.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-slate-200/50 hover:border-[#085689]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[#085689]/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[#085689]" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// function HowItWorksSection() {
//   return (
//     <section className="py-20 md:py-32 px-6">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <span className="text-md font-medium text-[#085689] uppercase tracking-wider mb-4 block">
//             {howItWorksData.tagline}
//           </span>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-4 text-balance">
//             {howItWorksData.title}
//           </h2>
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//             {howItWorksData.subtitle}
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {howItWorksData.items.map((step, index) => (
//             <div key={index} className="relative">
//               {/* Connector line */}
//               {index < howItWorksData.items.length - 1 && (
//                 <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-slate-200 -translate-x-1/2 z-0" />
//               )}
              
//               <div className="relative z-10 text-center">
//                 <div className="w-24 h-24 rounded-full bg-[#085689]/10 flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
//                   <span className="text-2xl font-bold text-[#085689]">
//                     {step.number}
//                   </span>
//                 </div>
//                 <h3 className="text-xl font-semibold text-black mb-3">
//                   {step.title}
//                 </h3>
//                 <p className="text-slate-600 leading-relaxed">
//                   {step.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

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
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-md font-medium text-[#085689] uppercase tracking-wider mb-4 block">
            PRODUCT TOUR
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-4 text-balance">
            See Smart.R in Action
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore the powerful features that make Smart.R the choice for modern hiring teams
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Screenshot 1 */}
          <div className="group">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-slate-200 mb-4">
              <Image
                src="/uploaded/product-smart.png"
                alt="Smart.R Visual Hiring Pipeline"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">
              Visual Hiring Pipeline
            </h3>
            <p className="text-slate-600">
              Drag-and-drop kanban boards for complete visibility into your hiring funnel.
            </p>
          </div>

          {/* Screenshot 2 */}
          <div className="group">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-slate-200 mb-4">
              <Image
                src="/images/smartr-analytics.png"
                alt="Smart.R Analytics Dashboard"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">
              Real-time Analytics
            </h3>
            <p className="text-slate-600">
              Comprehensive dashboards showing time-to-hire, source effectiveness, and more.
            </p>
          </div>

          {/* Screenshot 3 */}
          <div className="group">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-slate-200 mb-4">
              <Image
                src="/images/smartr-candidate.png"
                alt="Smart.R Candidate Profile"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">
              Rich Candidate Profiles
            </h3>
            <p className="text-slate-600">
              All candidate information, communications, and feedback in one place.
            </p>
          </div>

          {/* Screenshot 4 */}
          <div className="group">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-slate-200 mb-4">
              <Image
                src="/images/smartr-ai.png"
                alt="Smart.R AI Matching"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">
              AI-Powered Matching
            </h3>
            <p className="text-slate-600">
              Intelligent algorithms surface the best candidates for your open roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
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
  );
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
      {/* <HowItWorksSection /> */}
      <BenefitsSection />
      <ScreenshotsSection />
      <IntegrationsSection />
      <SecuritySection />
      {/* <TestimonialsSection /> */}
      <FAQSection />
      <CTASection />
    </>
  )
}
