"use client"

import { memo } from "react"
import { Linkedin, Facebook } from "lucide-react"
import { COMPANY_INFO } from "@/lib/constants/footer"

/**
 * Social link component
 */
const SocialLink = memo(function SocialLink({
  href,
  label,
  icon: Icon,
  size = 28,
}: {
  href: string
  label: string
  icon: typeof Linkedin
  size?: number
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:text-primary/70 transition-colors duration-200"
      aria-label={label}
    >
      <Icon size={size} />
    </a>
  )
})

/**
 * Social sidebar component for desktop and bottom bar for mobile
 */
export function SocialSidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden 2xl:flex fixed left-15 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-6">
        <SocialLink href={COMPANY_INFO.linkedinUrl} label="LinkedIn" icon={Linkedin} />
        <SocialLink href={COMPANY_INFO.facebookUrl} label="Facebook" icon={Facebook} />

        <div className="w-px h-20 bg-primary/20 my-2" />

        <span
          className="text-foreground text-md font-bold tracking-[3px] uppercase"
          style={{ writingMode: "sideways-lr", textOrientation: "mixed" }}
        >
          Recruitment agency
        </span>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="2xl:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border py-2">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-8">
          <SocialLink
            href={COMPANY_INFO.linkedinUrl}
            label="LinkedIn"
            icon={Linkedin}
            size={25}
          />

          <span className="text-foreground text-sm font-bold tracking-widest uppercase">
            Recruitment agency
          </span>

          <SocialLink
            href={COMPANY_INFO.facebookUrl}
            label="Facebook"
            icon={Facebook}
            size={25}
          />
        </div>
      </div>
    </>
  )
}
