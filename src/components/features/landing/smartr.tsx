"use client"

import { useCallback, memo } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { SMARTR_FEATURES, SMARTR_URL } from "@/lib/constants/smartr"
import { scrollToSection } from "@/lib/utils/scroll"

/**
 * Feature list item component
 */
const FeatureItem = memo(function FeatureItem({ feature }: { feature: string }) {
  return (
    <li className="flex items-start gap-4 text-muted-foreground">
      <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
      <span className="leading-relaxed text-lg">{feature}</span>
    </li>
  )
})

/**
 * Smart.R ATS/CRM section component
 */
export function SmartRSection() {
  const handleNavigate = useCallback(() => {
    scrollToSection("#contact")
  }, [])

  return (
    <section
      id="smartr"
      className="py-24 md:py-32 px-6 lg:mb-[120px] md:mb-[50px] sm:md-[0px]"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4 text-orange-500" />
          <p className="text-md font-medium text-[#085689] uppercase tracking-wider">
            Own Technology
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-6 text-balance">
          Smart.R — our intelligent{" "}
          <span className="text-[#085689]">HR ATS</span> system
        </h2>

        <p className="text-xl text-slate-600 leading-relaxed mb-5">
          15+ years of hands-on recruitment - now supported by our own ATS and
          recruitment CRM platform, built around how real hiring actually works.
        </p>

        <ul className="space-y-4 text-left max-w-2xl mx-auto mb-12 mt-10">
          {SMARTR_FEATURES.map((feature, index) => (
            <FeatureItem key={index} feature={feature} />
          ))}
        </ul>

        <p className="text-xl text-slate-600 leading-relaxed mb-5">
          Smart.R is used internally as our applicant tracking system and
          recruitment software, helping us deliver better hiring results for our
          clients.
        </p>
        <p className="text-xl text-slate-600 leading-relaxed mb-5">
          It&apos;s also available to HR teams who want to improve their own hiring
          processes.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <a href={SMARTR_URL} target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#085689] text-white hover:bg-[#78B6D9] hover:text-black rounded-lg px-8 py-6 text-base">
              See smart.R in action
            </Button>
          </a>

          <Button
            onClick={handleNavigate}
            variant="outline"
            className="bg-trasparent text-black hover:bg-[#78B6D9] hover:text-white rounded-lg px-8 py-6 text-base"
          >
            Book a consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
