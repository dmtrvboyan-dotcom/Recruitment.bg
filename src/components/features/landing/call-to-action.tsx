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
          ? "bg-primary text-primary-foreground shadow hover:bg-primary/90"
          : "hover:bg-white hover:text-foreground"
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
    <section id="contact" className="py-24 lg:py-32 lg:pb-[170px] md:pb-[50px] mb-50 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Let&apos;s Start a Conversation
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Whether you&apos;re looking to hire top IT talent or seeking your next
            career opportunity, we&apos;re here to help.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full p-1 bg-muted">
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
          <div className="bg-white border border-border p-8 lg:p-12 shadow-sm rounded-2xl">
            <ContactForm key={activeTab} mode={activeTab} />
          </div>
        </div>
      </div>
    </section>
  )
}
