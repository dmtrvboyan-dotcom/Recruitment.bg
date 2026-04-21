"use client"

import { useCallback, memo } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight } from "lucide-react"
import { scrollToSection } from "@/lib/utils/scroll"
import Image from "next/image"
import Link from "next/link"

/**
 * Smart.R ATS/CRM section component - Minimal, clean design with CTA focus
 */
export const SmartRSection = memo(function SmartRSection() {
  const handleNavigate = useCallback(() => {
    scrollToSection("#contact")
  }, [])

  return (
    <section
      id="smartr"
      className="py-24 md:py-32 px-6 lg:mb-[120px] md:mb-[50px]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-[#085689] uppercase tracking-wider">
                Own Technology
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-6 text-balance">
              Smart.R — AI-Powered{" "}
              <span className="text-[#085689]">Applicant Tracking</span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Built by recruiters, for recruiters. Our intelligent ATS streamlines 
              your hiring process from candidate sourcing to offer — all in one place.
            </p>

            {/* Key highlights - minimal */}
            <ul className="space-y-3 mb-10">
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#085689]" />
                <span>AI-powered candidate matching</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#085689]" />
                <span>Visual hiring pipeline management</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#085689]" />
                <span>Real-time analytics and reporting</span>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/applicant-tracking-system" target="_blank">
                <Button className="bg-[#085689] text-white hover:bg-[#78B6D9] hover:text-black rounded-lg px-8 py-6 text-base group">
                  See Smart.R in action
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <Button
                onClick={handleNavigate}
                variant="outline"
                className="bg-transparent text-black hover:bg-[#78B6D9] hover:text-white rounded-lg px-8 py-6 text-base border-slate-300"
              >
                Book a demo
              </Button>
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50">
              {/* Replace this image with your Smart.R screenshot */}
              <Image
                src="/images/smartr-dashboard.png"
                alt="Smart.R Applicant Tracking System Dashboard"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-3 border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-lg font-bold">50%</span>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-slate-900">Faster Hiring</p>
                  <p className="text-slate-500">Average time saved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
