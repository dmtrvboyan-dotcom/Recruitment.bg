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
  CheckCircle,
  Users,
  Clock,
  Shield,
  Globe,
  ArrowRight,
  GraduationCap,
  Building2,
  BadgeCheck,
  Wallet,
} from "lucide-react"

export const metadata: Metadata = {
  title: "IT Recruitment Agency Bulgaria | Hire Developers Fast",
  description:
    "Hire vetted senior software developers in Bulgaria in 3-5 days. EU-compliant, fast, and up to 50% lower cost than Western Europe.",
}

const WHAT_YOU_GET = [
  {
    icon: Users,
    title: "Vetted Senior Developers",
    description:
      "Access pre-screened, interview-ready candidates with verified skills and experience.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Receive qualified candidates within 3-5 business days, not weeks or months.",
  },
  {
    icon: Shield,
    title: "EU Compliance",
    description:
      "Full legal compliance with EU labor laws, GDPR, and employment regulations.",
  },
  {
    icon: Wallet,
    title: "Cost Efficiency",
    description:
      "Up to 50% lower costs compared to Western Europe without compromising quality.",
  },
]

const WHY_BULGARIA = {
  left: [
    "Over 100,000 software professionals",
    "Strong technical education system",
    "High English proficiency across the workforce",
    "Cultural alignment with Western business practices",
  ],
  right: [
    "EU member state with stable economy",
    "Competitive salary expectations",
    "Growing tech ecosystem and startup scene",
    "Convenient timezone overlap with Europe",
  ],
}

export default function ITRecruitmentBulgariaPage() {
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
              IT Recruitment Bulgaria
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance mb-6">
              Hire Software Developers in Bulgaria
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 text-pretty">
              Bulgaria has become one of the strongest technology hubs in
              Europe, with over 100,000 software specialists and steady IT
              sector growth.
            </p>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              We help companies from the USA, UK, Germany, and across Europe
              hire vetted developers — quickly, efficiently, and with minimal
              risk.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
                Our Promise
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
                What You Get
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {WHAT_YOU_GET.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="group p-8 bg-[#f5f5f5] rounded-3xl border border-slate-100 hover:border-[#78B6D9]/30 hover:shadow-xl transition-all duration-300"
                  >
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

      {/* Why Bulgaria Section */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28 bg-[#f5f5f5]/50">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
                The Advantage
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
                Why Bulgaria
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                {WHY_BULGARIA.left.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-100 hover:border-[#78B6D9]/30 hover:shadow-md transition-all duration-300"
                  >
                    <CheckCircle className="w-5 h-5 text-[#085689] mt-0.5 flex-shrink-0" />
                    <p className="text-slate-700 text-[15px] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {WHY_BULGARIA.right.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-100 hover:border-[#78B6D9]/30 hover:shadow-md transition-all duration-300"
                  >
                    <CheckCircle className="w-5 h-5 text-[#085689] mt-0.5 flex-shrink-0" />
                    <p className="text-slate-700 text-[15px] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Our Approach Section */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
              How We Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-8">
              Our Approach
            </h2>
            <div className="bg-[#f5f5f5] rounded-3xl p-8 md:p-12 border border-slate-100">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We combine deep local market knowledge with international
                recruitment best practices. Our team personally vets every
                candidate, ensuring technical skills, communication abilities,
                and cultural fit align with your requirements.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                From initial briefing to successful placement, we provide
                end-to-end support, making the hiring process seamless whether
                you are building your first team in Bulgaria or expanding an
                existing operation.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28 mb-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-6">
              Ready to Hire Developers in Bulgaria?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
              Let us help you build your engineering team with top Bulgarian
              talent. Get started today and receive your first candidates within
              days.
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
                <Link href="/#companies">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </main>
  )
}
