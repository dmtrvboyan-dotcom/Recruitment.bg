import type { Metadata } from "next"
import Link from "next/link"
import {
  Header,
  Footer,
  ScrollReveal,
  DynamicBackground,
  SocialSidebar,
} from "@/components/common"
import { Button } from "@/components/ui/button"
import {
  Globe,
  Shield,
  Users,
  Zap,
  FileCheck,
  Handshake,
  ArrowRight,
  Clock,
  BadgeCheck,
  Briefcase,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Build a Remote Team in Europe | Bulgaria Talent",
  description:
    "Create a high-performing remote team in Europe with top Bulgarian talent. Full EU legal framework, no complicated processes, fast onboarding.",
}

const BULGARIA_DELIVERS = [
  {
    icon: Globe,
    title: "EU Legal Framework",
    description:
      "Full compliance with European employment law, GDPR, and IP protection standards.",
  },
  {
    icon: Clock,
    title: "Timezone Alignment",
    description:
      "Convenient overlap with European business hours, easy collaboration with teams in the UK, Germany, and beyond.",
  },
  {
    icon: BadgeCheck,
    title: "Top-Tier Talent",
    description:
      "Access to a deep pool of experienced developers, engineers, and technical specialists.",
  },
]

const HOW_WE_HELP = [
  {
    step: "01",
    icon: Briefcase,
    title: "Define Requirements",
    description:
      "We work with you to understand your technical needs, team culture, and hiring timeline.",
  },
  {
    step: "02",
    icon: Users,
    title: "Source & Vet Candidates",
    description:
      "Our team identifies and pre-screens candidates, presenting only those who meet your standards.",
  },
  {
    step: "03",
    icon: Handshake,
    title: "Seamless Onboarding",
    description:
      "We support the hiring process through offer negotiation, contracts, and onboarding.",
  },
]

export default function HireRemoteTeamEuropePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <DynamicBackground />
      <Header />
      <SocialSidebar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-4">
              Remote Teams in Europe
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance mb-6">
              Build Your Remote Team in Europe
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Access top-tier European talent without the hassle of complex
              processes or legal risks.
            </p>
          </div>
        </div>
      </section>

      {/* Bulgaria Delivers Section */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
                The Advantage
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
                Bulgaria Delivers
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BULGARIA_DELIVERS.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="group p-8 bg-[#f5f5f5] rounded-3xl border border-slate-100 hover:border-[#78B6D9]/30 hover:shadow-xl transition-all duration-300 text-center"
                  >
                    <div className="mb-6 flex justify-center">
                      <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#085689]/5 text-[#085689] group-hover:bg-[#78B6D9] group-hover:text-white transition-colors">
                        <Icon className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-2xl text-black mb-3 leading-tight group-hover:text-[#085689] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-[15px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* How We Help Section */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28 bg-[#f5f5f5]/50">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
                Our Process
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
                How We Help
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {HOW_WE_HELP.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="group p-8 bg-white rounded-3xl border border-slate-100 hover:border-[#78B6D9]/30 hover:shadow-xl transition-all duration-300 relative"
                  >
                    <div className="absolute top-6 right-6 text-5xl font-bold text-[#085689]/10 group-hover:text-[#78B6D9]/20 transition-colors">
                      {item.step}
                    </div>
                    <div className="mb-6">
                      <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#085689]/5 text-[#085689] group-hover:bg-[#78B6D9] group-hover:text-white transition-colors">
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-xl text-black mb-3 leading-tight group-hover:text-[#085689] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-[15px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28 mb-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-6">
              Ready to Build Your European Team?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
              Start building your remote team with top Bulgarian talent today.
              No complicated processes, no legal risks — just great developers
              ready to join your team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                className="bg-[#085689] text-white hover:bg-[#78B6D9] hover:text-black rounded-xl px-8 py-6 text-base font-medium"
              >
                <Link href="/#contact">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-transparent text-black hover:bg-[#78B6D9] hover:text-white rounded-xl px-8 py-6 border-2 border-[#78B6D9]/50 text-base font-medium"
              >
                <Link href="/#companies">Learn About Our Process</Link>
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </main>
  )
}
