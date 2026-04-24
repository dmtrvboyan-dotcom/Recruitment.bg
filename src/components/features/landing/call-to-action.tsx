"use client"

import { useState, useCallback, memo } from "react"
import { ContactForm } from "./contact-form"
import { Button } from "@/components/ui/button"

type TabType = "candidate" | "company"

/**
 * Tab button component
 */
const TabButton = memo(function TabButton({
  label,
  isActive,
  onClick,
}: {
  label: string
  isActive: boolean
  onClick: () => void
}) {
  return (
    <Button
      variant={isActive ? "default" : "ghost"}
      onClick={onClick}
      className={`rounded-full px-8 py-3 transition-all ${
        isActive
          ? "bg-[#085689] text-white shadow hover:bg-[#78B6D9]"
          : "hover:bg-white hover:text-slate-900"
      }`}
    >
      {label}
    </Button>
  )
})

/**
 * Call to action section with contact form
 */
export function CallToAction() {
  const [activeTab, setActiveTab] = useState<TabType>("company")

  const handleCompanyClick = useCallback(() => setActiveTab("company"), [])
  const handleCandidateClick = useCallback(() => setActiveTab("candidate"), [])

  return (
    <section id="contact" className="py-24 lg:py-32 lg:pb-[170px] md:pb-[50px] mb-50 bg-linear-to-b from-[#085689]/12 to-[#f9f9f9]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
            Let&apos;s Start a Conversation
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Whether you&apos;re looking to hire top IT talent or seeking your next
            career opportunity, we&apos;re here to help.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full p-1 bg-slate-100">
            <TabButton
              label="I'm a Company"
              isActive={activeTab === "company"}
              onClick={handleCompanyClick}
            />
            <TabButton
              label="I'm a Candidate"
              isActive={activeTab === "candidate"}
              onClick={handleCandidateClick}
            />
          </div>
        </div>

        {/* Dynamic Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#f5f5f5] border border-slate-200 p-8 lg:p-12 shadow-sm rounded-3xl">
            <ContactForm key={activeTab} mode={activeTab} />
          </div>
        </div>
      </div>
    </section>
  )
}
