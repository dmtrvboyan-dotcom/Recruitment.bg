"use client"

import { useState, useCallback, memo } from "react"
import { HelpCircle, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FAQ_ITEMS, type FAQItem } from "@/lib/constants/faq"
import { scrollToSection } from "@/lib/utils/scroll"

/**
 * FAQ item component
 */
const FAQItemComponent = memo(function FAQItemComponent({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: FAQItem
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-[#f5f5f5] mb-4 last:mb-0 transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full px-6 py-6 flex items-center justify-between text-left group transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-[#085689]/10 flex-shrink-0 flex items-center justify-center">
            <HelpCircle className="w-5 h-5 text-[#085689]" />
          </div>
          <h3 className="text-xl font-semibold text-black pr-8 leading-tight">
            {faq.q}
          </h3>
        </div>

        <ChevronDown
          className={`w-6 h-6 text-[#085689] transition-transform duration-500 shrink-0 cursor-pointer  hover:text-[#78B6D9] ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out cursor-pointer hover:text-[#78B6D9] ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-8 pl-17 ,text-lg text-slate-600 leading-relaxed">
          {faq.a}
        </div>
      </div>
    </div>
  )
})

/**
 * FAQ section component
 */
export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const handleNavigate = useCallback(() => {
    scrollToSection("#contact")
  }, [])

  const toggleItem = useCallback((index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }, [])

  // Split into two columns for desktop
  const leftFaqs = FAQ_ITEMS.slice(0, 4)
  const rightFaqs = FAQ_ITEMS.slice(4)

  return (
    <section
      id="faq"
      className="py-20 lg:py-28 bg-tranparent lg:pb-[170px] md:pb-[50px] bg-linear-to-b from-[#085689]/12 to-[#f9f9f9]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-md font-medium text-[#085689] uppercase tracking-wider mb-4">
            Got questions?
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-6 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Everything you need to know about working with us.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-2">
            {leftFaqs.map((faq, i) => (
              <FAQItemComponent
                key={i}
                faq={faq}
                index={i}
                isOpen={openItems.includes(i)}
                onToggle={() => toggleItem(i)}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-2">
            {rightFaqs.map((faq, i) => (
              <FAQItemComponent
                key={i + 4}
                faq={faq}
                index={i + 4}
                isOpen={openItems.includes(i + 4)}
                onToggle={() => toggleItem(i + 4)}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <Button
            onClick={handleNavigate}
            className="bg-[#085689] text-white hover:bg-[#78B6D9] hover:text-black rounded-lg px-8 py-6 text-base cursor-pointer"
          >
            Still have questions? Let&apos;s talk
          </Button>
        </div>
      </div>
    </section>
  )
}
