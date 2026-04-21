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
      className="py-24 md:py-32 px-6 lg:mb-[120px] md:mb-[50px] relative overflow-hidden"
    >
      {/* Animated background — full section */}
      <div className="absolute inset-0 -z-10">
        {/* Base */}
        <div style={{ position: "absolute", inset: 0, background: "#ededed" }} />

        {/* Blob 1 — light blue */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 55% 50% at 25% 55%, #78B6D9cc 0%, #78B6D900 70%)",
            animation: "floatA 10s ease-in-out infinite alternate",
            filter: "blur(40px)",
          }}
        />

        {/* Blob 2 — deep navy */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 45% 50% at 75% 40%, #085689bb 0%, #08568900 65%)",
            animation: "floatB 13s ease-in-out infinite alternate",
            filter: "blur(45px)",
          }}
        />

        {/* Edge vignette — fades back to #ededed on all sides */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 85% 80% at 50% 50%, transparent 35%, #ededed 100%)",
            pointerEvents: "none",
          }}
        />
      </div>

      <style>{`
        @keyframes floatA {
          from { transform: translate(-6%, -5%) scale(1);    opacity: 0.8; }
          to   { transform: translate( 6%,  6%) scale(1.1);  opacity: 1;   }
        }
        @keyframes floatB {
          from { transform: translate( 5%,  6%) scale(1.08); opacity: 0.65; }
          to   { transform: translate(-5%, -5%) scale(0.95); opacity: 1;    }
        }
      `}</style>

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
              Built by recruiters, for recruiters. <br /> <br /> Our intelligent ATS streamlines
              your hiring process from candidate sourcing to offer — all in one place.
            </p>

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
          <div className="order-2 lg:order-2 relative">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden ">
              <Image
                src="/uploaded/smart.png"
                alt="Smart.R Applicant Tracking System Dashboard"
                fill
                className="object-cover object-top opacity-50"
                sizes="(max-width: 768px) 100vw, 55vw"
                priority
              />
              <div className="absolute inset-0 " />
            </div>

          
          </div>

        </div>
      </div>
    </section>
  )
})