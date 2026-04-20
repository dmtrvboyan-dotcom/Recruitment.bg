"use client"

import { memo } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { TECHNOLOGY_PILLS, TECH_CATEGORIES, type TechCategory } from "@/lib/constants/specialized"

/**
 * Technology pill component
 */
const TechPill = memo(function TechPill({ tech }: { tech: string }) {
  return (
    <Badge
      variant="secondary"
      className="px-5 py-2 text-sm font-medium bg-[#085689] hover:bg-[#78B6D9]/90 text-white border-none transition-all duration-200 hover:scale-105"
    >
      {tech}
    </Badge>
  )
})

/**
 * Category card component
 */
const CategoryCard = memo(function CategoryCard({ category }: { category: TechCategory }) {
  return (
    <Card className="group border border-slate-100 hover:border-[#085689]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-[#f5f5f5]">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-slate-900 group-hover:text-[#085689] transition-colors">
          {category.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {category.techs.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="bg-slate-50 text-slate-700 border-slate-200 hover:bg-[#085689] hover:text-white hover:border-[#085689] transition-all text-xs font-medium px-3 py-1"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
})

/**
 * Specialized recruitment section component
 */
export function SpecializedRecruitment() {
  return (
    <section className="py-20 lg:py-28 lg:mb-[120px] md:mb-[50px] sm:md-[0px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-md font-medium text-[#085689] uppercase tracking-wider mb-4">
            Industry-Focused Expertise
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-6 text-balance">
            Specialized recruitment
          </h2>

          <p className="text-xl text-slate-600 leading-relaxed">
            Our team of industry-specialized recruiters brings deep expertise to
            your talent search.
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-16">
          {TECHNOLOGY_PILLS.map((tech) => (
            <TechPill key={tech} tech={tech} />
          ))}
        </div>

        <Separator className="mb-12" />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_CATEGORIES.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
