"use client"

import { useState, useCallback, memo, useRef } from "react"
import { useEscapeKey, useClickOutside } from "@/lib/hooks"
import { X, Users, Search, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SERVICES, EXECUTIVE_STATS, HIRE_STATS, REMOTE_STATS, type Service } from "@/lib/constants/services"
import { scrollToSection } from "@/lib/utils/scroll"

/**
 * Mobile accordion item component - clean FAQ-style implementation
 */
const MobileServiceItem = memo(function MobileServiceItem({
  service,
  isOpen,
  onToggle,
}: {
  service: Service
  isOpen: boolean
  onToggle: () => void
}) {
  const IconComponent = service.icon

  const handleNavigate = useCallback((href: string) => {
    scrollToSection(href)
  }, [])

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-[#f5f5f5] mb-4 last:mb-0 transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full px-6 py-6 flex items-center justify-between text-left group transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-[#085689]/10 flex-shrink-0 flex items-center justify-center group-hover:bg-[#085689]/20 transition-colors">
            <IconComponent className="w-6 h-6 text-[#085689]" />
          </div>
          <h3 className="text-lg font-semibold text-black pr-4 leading-tight">
            {service.title}
          </h3>
        </div>

        <ChevronDown
          className={`w-6 h-6 text-[#085689] transition-transform duration-500 shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-8">
          {service.subtitle && (
            <p className="text-[#085689] font-medium mb-4">{service.subtitle}</p>
          )}

          <div className="space-y-6">
            {service.sections.map((section, idx) => (
              <div key={idx}>
                <h4 className="text-lg font-semibold text-black mb-3">
                  {section.heading}
                </h4>
                <ul className="space-y-2">
                  {section.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-base leading-relaxed text-gray-600"
                    >
                      <span className="text-[#085689] text-lg leading-none mt-0.5 flex-shrink-0">
                        &bull;
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Stats sections */}
          {service.title === "Executive Search & Headhunting" && (
            <div className="mt-8 grid grid-cols-3 gap-4">
              {EXECUTIVE_STATS.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-xl font-bold text-[#085689]">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {service.title === "Remote IT Hiring & Global Talent" && (
            <div className="mt-8 grid grid-cols-3 gap-4">
              {REMOTE_STATS.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-xl font-bold text-[#085689]">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {service.title === "Hire Contract or Freelance Developers" && (
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex justify-center">
                {HIRE_STATS.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-xl font-bold text-[#085689]">{stat.value}</div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Button
                onClick={() => handleNavigate("#companies")}
                className="w-full bg-[#085689] hover:bg-[#0a6a9c] text-white py-3 rounded-xl"
              >
                Hire contract <Users className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}

          {/* Action buttons */}
          {service.title === "Permanent IT Recruitment" && (
            <div className="mt-8">
              <Button
                onClick={() => handleNavigate("#companies")}
                className="w-full bg-[#085689] hover:bg-[#0a6a9c] text-white py-3 rounded-xl cursor-pointer"
              >
                Learn more <Users className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}

          {service.title === "IT Salary Benchmarking & Hiring Insights" && (
            <div className="mt-8">
              <Button
                onClick={() => handleNavigate("#contact")}
                className="w-full bg-[#085689] hover:bg-[#0a6a9c] text-white py-3 rounded-xl cursor-pointer"
              >
                Learn more <Search className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
})

/**
 * Desktop service card component
 */
const DesktopServiceCard = memo(function DesktopServiceCard({
  service,
  isSelected,
  onSelect,
}: {
  service: Service
  isSelected: boolean
  onSelect: () => void
}) {
  const IconComponent = service.icon

  return (
    <div
      onClick={onSelect}
      className="group cursor-pointer border border-slate-200 rounded-2xl bg-[#f5f5f5] p-6 hover:border-[#78B6D9] hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-[#085689]/10 flex items-center justify-center group-hover:bg-[#085689]/20 transition-colors">
            <IconComponent className="w-6 h-6 text-[#085689]" />
          </div>
          <h3 className="text-lg font-semibold text-black leading-tight pt-1">
            {service.title}
          </h3>
        </div>

        <div className="mt-1 p-2 rounded-full transition-all duration-300 group-hover:scale-110">
          <ChevronRight
            className={`w-5 h-5 text-[#085689] transition-transform duration-300 ${
              isSelected ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>
    </div>
  )
})

/**
 * Desktop sliding panel component
 */
const DesktopPanel = memo(function DesktopPanel({
  service,
  onClose,
}: {
  service: Service | null
  onClose: () => void
}) {
  const handleNavigate = useCallback((href: string) => {
    scrollToSection(href)
  }, [])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-start justify-end transition-all duration-300 ${service ? "visible" : "invisible"
        }`}
    >
      <div
        className={`absolute inset-0 bg-[#ededed]/90 backdrop-blur-md transition-opacity duration-300 ${service ? "opacity-100" : "opacity-0"
          }`}
        onClick={onClose}
      />

      <div
        className={`relative h-full w-full md:w-[50%] bg-[#efeeef] shadow-xl transform transition-transform duration-500 ease-out overflow-y-auto ${service ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {service && (
          <div className="p-6 md:p-8">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#085689] hover:bg-[#78B6D9] transition-colors"
            >
              <X className="w-6 h-6 hover:text-gray-600 text-white" />
            </button>

            <div className="w-20 h-20 rounded-2xl bg-[#085689]/10 flex items-center justify-center mb-8">
              <service.icon className="w-12 h-12 text-[#085689]" />
            </div>

            <h3 className="text-3xl font-bold text-black mb-2">{service.title}</h3>
            <p className="text-xl text-[#085689] font-medium mb-6">
              {service.subtitle}
            </p>

            <p className="text-lg leading-relaxed text-gray-600 mb-10">
              {service.intro}
            </p>

            <div className="grid grid-cols-1 [@media(min-width:1235px)]:grid-cols-2 gap-8 md:gap-12">
              {service.sections.map((section, idx) => (
                <div key={idx}>
                  <h4 className="text-xl font-semibold text-black mb-5">
                    {section.heading}
                  </h4>
                  <ul className="space-y-3">
                    {section.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[17px] leading-relaxed text-gray-600"
                      >
                        <span className="text-[#085689] text-xl leading-none mt-0.5 flex-shrink-0">
                          &bull;
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              {service.title === "Permanent IT Recruitment" && (
                <Button
                  onClick={() => handleNavigate("#companies")}
                  className="w-full sm:w-auto px-8 py-3.5 text-base font-medium bg-[#085689] hover:bg-[#0a6a9c] text-white rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex items-center gap-2 cursor-pointer"
                >
                  Learn more
                  <Users className="w-4 h-4" />
                </Button>
              )}

              {service.title === "IT Salary Benchmarking & Hiring Insights" && (
                <Button
                  onClick={() => handleNavigate("#contact")}
                  className="w-full sm:w-auto px-8 py-3.5 text-base font-medium bg-[#085689] hover:bg-[#0a6a9c] text-white rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex items-center gap-2 cursor-pointer"
                >
                  Learn more
                  <Search className="w-4 h-4" />
                </Button>
              )}

            </div>

            {service.title === "Executive Search & Headhunting" && (
              <div className="mt-16 border-t border-gray-200 pt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {EXECUTIVE_STATS.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-[2rem] font-bold leading-none text-[#085689]">
                        {stat.value}
                      </div>
                      <div className="mt-4 text-md font-medium text-gray-700">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

             {service.title === "Remote IT Hiring & Global Talent" && (
              <div className="mt-16 border-t border-gray-200 pt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {REMOTE_STATS.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-[2rem] font-bold leading-none text-[#085689]">
                        {stat.value}
                      </div>
                      <div className="mt-4 text-md font-medium text-gray-700">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action + Stats for Hire Contract */}

            {service.title === "Hire Contract or Freelance Developers" && (
              <div className="mt-10 flex flex-row lg:flex-row gap-8 lg:gap-0 items-start">

                <div className="lg:w-[260px]  lg:shrink-0 mt-8 lg:pt-2">
                  <Button
                    onClick={() => handleNavigate("#specialized")}
                    className="w-full bg-[#085689] hover:bg-[#0a6a9c] text-white py-3.5 rounded-xl text-base font-medium cursor-pointer"
                  >
                    Learn more <Users className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                <div className="flex">
                  <div className="grid grid-cols-1 pl-8">
                    {HIRE_STATS.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-[2rem] font-bold text-[#085689]">{stat.value}</div>
                        <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button - Right (closer on desktop) */}

              </div>
            )}

          </div>
        )}
      </div>
    </div>
  )
})

/**
 * Main services section component
 */
export function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [openMobileItems, setOpenMobileItems] = useState<number[]>([])
  const mobileAccordionRef = useRef<HTMLDivElement>(null)

  const closePanel = useCallback(() => setSelectedService(null), [])
  const closeAllMobileItems = useCallback(() => setOpenMobileItems([]), [])

  useEscapeKey(closePanel)
  useClickOutside(mobileAccordionRef, closeAllMobileItems)

  const toggleMobileItem = useCallback((index: number) => {
    setOpenMobileItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }, [])

  return (
    <section id="services" className="py-24 lg:py-32 lg:pb-[170px] md:pb-[50px] bg-linear-to-b from-[#085689]/12 to-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <p className="text-md font-medium text-[#085689] uppercase tracking-wider mb-4">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-6 text-balance">
            Our IT Recruitment Services
          </h2>
        </div>

        {/* Mobile: FAQ-style accordion - tap outside to close all */}
        <div ref={mobileAccordionRef} className="md:hidden space-y-2">
          {SERVICES.map((service, index) => (
            <MobileServiceItem
              key={index}
              service={service}
              isOpen={openMobileItems.includes(index)}
              onToggle={() => toggleMobileItem(index)}
            />
          ))}
        </div>

        {/* Desktop: Card grid with sliding panel */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <DesktopServiceCard
              key={index}
              service={service}
              isSelected={selectedService?.title === service.title}
              onSelect={() => setSelectedService(service)}
            />
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl text-slate-600 leading-relaxed mt-[80px]">
            We provide end-to-end IT recruitment services, helping companies hire
            top tech talent locally and globally.
          </p>
        </div>
      </div>

      <DesktopPanel service={selectedService} onClose={closePanel} />
    </section>
  )
}
