import Image from "next/image"
import { featuresData } from "./data"
import { ProductTourClient } from "./product-tour-client"

// ============================================================================
// Feature Card Images
// ============================================================================

const featureImages: Record<string, string> = {
  "AI-Powered Matching": "/images/smartr-ai.jpg",
  "Visual Pipeline": "/images/smartr-dashboard.jpg",
  "Automated Workflows": "/images/smartr-workflow.jpg",
  "Real-time Analytics": "/images/smartr-analytics.jpg",
  "Team Collaboration": "/images/smartr-team.jpg",
  "Email Integration": "/images/smartr-candidate.jpg",
  "Bulgarian Support": "/images/smartr-team.jpg",
  "Resume Parsing": "/images/smartr-candidate.jpg",
}

// ============================================================================
// Powerful Features Section (Server Component)
// ============================================================================

export function PowerfulFeaturesSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.items.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-[#085689]/30 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300"
            >
              {/* Feature Image */}
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
                <Image
                  src={featureImages[feature.title] || "/images/smartr-dashboard.jpg"}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
              </div>
              
              {/* Feature Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#085689]/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-[#085689]" />
                  </div>
                  <h3 className="text-lg font-semibold text-black leading-tight">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// Product Tour Section (Server wrapper for Client component)
// ============================================================================

export function ProductTourSection() {
  return <ProductTourClient />
}
