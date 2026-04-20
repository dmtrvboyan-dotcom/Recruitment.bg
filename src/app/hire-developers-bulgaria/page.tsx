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
  Code2,
  Server,
  Layers,
  Cloud,
  Brain,
  Rocket,
  TrendingUp,
  Building2,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Hire Developers in Bulgaria | Build Your Engineering Team",
  description:
    "Scale your engineering team fast with senior Bulgarian developers. Backend, frontend, full-stack, DevOps, AI – all at competitive EU rates.",
}

const WHAT_WE_COVER = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "React, Vue, Angular, Next.js, TypeScript — we source developers fluent in modern frontend ecosystems.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Node.js, Python, Java, Go, .NET — find backend engineers who build scalable, secure systems.",
  },
  {
    icon: Layers,
    title: "Full-Stack Engineers",
    description:
      "Versatile developers comfortable across the entire stack, from database to deployment.",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description:
      "AWS, Azure, GCP, Kubernetes, CI/CD — infrastructure experts who keep your systems running smoothly.",
  },
]

const PERFECT_FOR = [
  {
    icon: Rocket,
    title: "Startups",
    description:
      "Move fast with senior developers who understand startup pace and can wear multiple hats.",
  },
  {
    icon: TrendingUp,
    title: "Scale-ups",
    description:
      "Expand your engineering capacity quickly without sacrificing code quality or team culture.",
  },
  {
    icon: Building2,
    title: "Product Companies",
    description:
      "Build dedicated teams that integrate seamlessly with your existing engineering organization.",
  },
]

export default function HireDevelopersBulgariaPage() {
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
              Build Your Team
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance mb-6">
              Hire Developers in Bulgaria and Build Your Team
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Expand your engineering team without increasing costs. Bulgaria is
              one of the smartest choices in Europe.
            </p>
          </div>
        </div>
      </section>

      {/* What We Cover Section */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
                Expertise Areas
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
                What We Cover
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {WHAT_WE_COVER.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="group p-8 bg-[#f5f5f5] rounded-3xl border border-slate-100 hover:border-[#78B6D9]/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#085689]/5 text-[#085689] group-hover:bg-[#78B6D9] group-hover:text-white transition-colors">
                          <Icon className="w-7 h-7" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl text-black mb-3 leading-tight group-hover:text-[#085689] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 text-[15px] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Perfect For Section */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28 bg-[#f5f5f5]/50">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
                Who We Help
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
                Perfect For
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PERFECT_FOR.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="group p-8 bg-white rounded-3xl border border-slate-100 hover:border-[#78B6D9]/30 hover:shadow-xl transition-all duration-300 text-center"
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

      {/* CTA Section */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28 mb-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-6">
              Ready to Build Your Development Team?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
              Tell us about your hiring needs and we will match you with
              pre-vetted developers who fit your technical requirements and
              company culture.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                className="bg-[#085689] text-white hover:bg-[#78B6D9] hover:text-black rounded-xl px-8 py-6 text-base font-medium"
              >
                <Link href="/#contact">
                  Start Hiring
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-transparent text-black hover:bg-[#78B6D9] hover:text-white rounded-xl px-8 py-6 border-2 border-[#78B6D9]/50 text-base font-medium"
              >
                <Link href="/#companies">View Success Stories</Link>
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </main>
  )
}
