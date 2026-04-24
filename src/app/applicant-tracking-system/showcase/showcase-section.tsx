"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

// ============================================================================
// Product Tour Images Data
// ============================================================================

const productTourImages = [
  {
    id: 1,
    src: "/uploaded/product-smart.png",
    alt: "Smart.R Visual Hiring Pipeline",
    title: "Visual Hiring Pipeline",
    description: "Drag-and-drop kanban boards for complete visibility into your hiring funnel.",
  },
  {
    id: 2,
    src: "/images/smartr-analytics.jpg",
    alt: "Smart.R Analytics Dashboard",
    title: "Real-time Analytics",
    description: "Comprehensive dashboards showing time-to-hire, source effectiveness, and more.",
  },
  {
    id: 3,
    src: "/images/smartr-candidate.jpg",
    alt: "Smart.R Candidate Profile",
    title: "Rich Candidate Profiles",
    description: "All candidate information, communications, and feedback in one place.",
  },
  {
    id: 4,
    src: "/images/smartr-ai.jpg",
    alt: "Smart.R AI Matching",
    title: "AI-Powered Matching",
    description: "Intelligent algorithms surface the best candidates for your open roles.",
  },
  {
    id: 5,
    src: "/images/smartr-workflow.jpg",
    alt: "Smart.R Automated Workflows",
    title: "Automated Workflows",
    description: "Set up triggers and actions to automate repetitive recruitment tasks.",
  },
  {
    id: 6,
    src: "/images/smartr-team.jpg",
    alt: "Smart.R Team Collaboration",
    title: "Team Collaboration",
    description: "Share candidate profiles, collect feedback, and keep all stakeholders aligned.",
  },
]

// ============================================================================
// Product Tour Client Component
// ============================================================================

export function ShowcaseSection() {
  const [activeImage, setActiveImage] = useState(productTourImages[0])

  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-[#085689] uppercase tracking-wider mb-4 block">
            PRODUCT TOUR
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-4 text-balance">
            See Smart.R in Action
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
            Explore the powerful features that make Smart.R the choice for modern hiring teams
          </p>
        </div>

        {/* Main Featured Image */}
        <div className="mb-8">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-200/50 bg-slate-100">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              className="object-cover transition-opacity duration-500"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
          
          {/* Active Image Info */}
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-semibold text-black mb-2">
              {activeImage.title}
            </h3>
            <p className="text-slate-600 max-w-xl mx-auto">
              {activeImage.description}
            </p>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
          {productTourImages.map((image) => (
            <button
              key={image.id}
              onClick={() => setActiveImage(image)}
              className={cn(
                "relative aspect-video rounded-xl overflow-hidden border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#085689] focus:ring-offset-2",
                activeImage.id === image.id
                  ? "border-[#085689] shadow-lg shadow-[#085689]/20 scale-[1.02]"
                  : "border-transparent hover:border-slate-300 hover:shadow-md opacity-70 hover:opacity-100"
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 33vw, 16vw"
              />
              
              {/* Active Indicator Overlay */}
              {activeImage.id === image.id && (
                <div className="absolute inset-0 bg-[#085689]/10 pointer-events-none" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
