"use client"

import { useCallback, memo } from "react"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WHY_CHOOSE_US_POINTS, HIRE_WITH_CLARITY_POINTS } from "@/lib/constants/companies"
import { scrollToSection } from "@/lib/utils/scroll"

/**
 * List item with checkmark icon
 */
const CheckListItem = memo(function CheckListItem({
  item,
  variant = "dark",
}: {
  item: string
  variant?: "dark" | "brand"
}) {
  const bgColor = variant === "dark" ? "bg-slate-900" : "bg-[#085689]/10"
  const iconColor = variant === "dark" ? "text-white" : "text-[#085689]"

  return (
    <li className="flex gap-4">
      <div
        className={`mt-1 w-6 h-6 rounded-full ${bgColor} flex-shrink-0 flex items-center justify-center`}
      >
        <CheckCircle className={`w-4 h-4 ${iconColor}`} />
      </div>
      <p className="text-lg text-slate-700 leading-relaxed">{item}</p>
    </li>
  )
})

/**
 * Section header with label
 */
const SectionHeader = memo(function SectionHeader({
  label,
  variant = "dark",
}: {
  label: string
  variant?: "dark" | "brand"
}) {
  const bgColor = variant === "dark" ? "bg-slate-900 text-white" : "bg-[#085689]/10 text-[#085689]"

  return (
    <div className="flex justify-center lg:justify-start mb-8">
      <div className={`inline-flex items-center gap-2 ${bgColor} px-4 py-2 rounded-full`}>
        {variant === "brand" && <CheckCircle className="w-5 h-5" />}
        <span className="font-semibold">{label}</span>
      </div>
    </div>
  )
})

/**
 * Companies section showing why companies should choose us
 */
export function CompaniesSection() {
  const handleNavigate = useCallback(() => {
    scrollToSection("#contact")
  }, [])

  return (
    <section
      id="companies"
      className="py-20 lg:py-28 bg-transparent lg:mb-[120px] md:mb-[50px]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <p className="text-md font-medium text-[#085689] uppercase tracking-wider mb-4">
            Who we work with
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-6 text-balance">
            Why Companies Work With Us
          </h2>

          {/* <p className="text-xl text-slate-600 leading-relaxed">
            With deep industry expertise and a personalized approach, we connect
            companies with pre-vetted senior developers and engineers who truly fit
            your culture and drive long-term success.
          </p> */}
        </div>

        {/* Two Column Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <SectionHeader label="Why Companies Choose Us" variant="dark" />
            <ul className="space-y-6">
              {WHY_CHOOSE_US_POINTS.map((item, index) => (
                <CheckListItem key={index} item={item} variant="dark" />
              ))}
            </ul>
          </div>

          <div>
            <SectionHeader label="Hire with Clarity" variant="brand" />
            <ul className="space-y-6">
              {HIRE_WITH_CLARITY_POINTS.map((item, index) => (
                <CheckListItem key={index} item={item} variant="brand" />
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <Button
            onClick={handleNavigate}
            className="bg-[#085689] text-white hover:bg-[#78B6D9] hover:text-black rounded-lg px-8 py-6 text-base"
          >
            Talk to us
          </Button>
        </div>
      </div>
    </section>
  )
}
