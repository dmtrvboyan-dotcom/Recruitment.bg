"use client"


import Image from "next/image"
import { COMPANIES, type Company } from "@/app/_components/track-section/companies"

function LogoCard({ name, logo }: Company) {
  return (
    <div
      style={{ minWidth: 150 }} // slightly wider so text + bigger logo fit nicely
      className="
        flex items-center gap-3 px-4 py-3 mx-2 shrink-0
        rounded-lg
        hover:bg-slate-100/60 hover:-translate-y-0.5
        transition-all duration-200 cursor-default
      "
    >
      <div className="w-25 h-25 rounded-lg flex items-center justify-center shrink-0 overflow-hidden">
        <Image
          src={logo}
          alt={`${name} logo`}
          width={48}
          height={48}
          className="object-contain w-full h-full"
        />
      </div>
      <span className="text-sm font-bold text-[#1A1A2E] tracking-wide whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}
function MarqueeRow({
  companies,
  reverse = false,
  duration = "30s",
}: {
  companies: Company[]
  reverse?: boolean
  duration?: string
}) {
  const items = [...companies, ...companies, ...companies, ...companies]

  return (
    <div className="relative overflow-hidden py-3">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-28 z-10 bg-gradient-to-r " />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-28 z-10 bg-gradient-to-l" />

      <div
        className="flex w-max"
        style={{
          animation: `trustedMarquee ${duration} linear infinite ${reverse ? "reverse" : "normal"}`,
        }}
      >
        {items.map((c, i) => (
          <LogoCard key={`${c.name}-${i}`} name={c.name} logo={c.logo} />
        ))}
      </div>
    </div>
  )
}

export function TrustSection() {
  const row1 = COMPANIES.slice(0, 7)
  const row2 = COMPANIES.slice(7)

  return (
    <section className="py-12 lg:py-16 bg-transparent lg:mb-[60px] md:mb-[25px] bg-linear-to-b from-[#085689]/12 to-[#f9f9f9]">
      <style>{`
        @keyframes trustedMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-7">
          <p className="text-sm font-bold tracking-[0.2em] text-[#085689] uppercase mb-4 flex items-center justify-center gap-3">
            Trusted by industry leaders
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A1A2E] leading-[1.1]">
            Companies that rely on{" "}
            <span className="text-[#085689] relative inline-block">
              our expertise
              <span className="absolute bottom-0.5 left-0 w-full h-0.75  rounded" />
            </span>
          </h2>
        </div>

        {/* Row 1 — scrolls left */}
        <MarqueeRow companies={row1} duration="28s" />

        <div className="h-4" />

        {/* Row 2 — scrolls right */}
        <MarqueeRow companies={row2} reverse duration="34s" />
      </div>
    </section>
  )
}
