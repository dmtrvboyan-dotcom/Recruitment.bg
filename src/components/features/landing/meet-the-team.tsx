"use client"

import { memo } from "react"
import Image from "next/image"
import { RiArrowLeftSLine, RiArrowRightSLine, RiLinkedinBoxFill } from "react-icons/ri"
import { TbPointFilled } from "react-icons/tb"
import { TEAM_MEMBERS, COMPANY_VALUES, type TeamMember } from "@/lib/constants/team"
import { useCarouselScroll } from "@/lib/hooks/use-carousel-scroll"

/**
 * Company value item component
 */
const ValueItem = memo(function ValueItem({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-[#085689] mt-1">
        <TbPointFilled size={32} />
      </div>
      <div>
        <h3 className="font-semibold text-xl mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
})

/**
 * Team member card component
 */
const TeamMemberCard = memo(function TeamMemberCard({
  member,
}: {
  member: TeamMember
}) {
  return (
    <div className="w-[80%] flex-shrink-0 snap-start group sm:w-[33.333%] sm:px-3 mt-[50px]">
      <div className="rounded-3xl overflow-hidden flex flex-col items-center">
        <div className="flex flex-col items-center gap-2">
          <div className="relative w-[200px] h-[200px]">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover border-4 border-[#085689] rounded-full"
            />
          </div>

          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#085689] hover:text-[#78B6D9] transition-colors duration-200"
            >
              <RiLinkedinBoxFill className="mt-6" size={36} />
            </a>
          )}
        </div>

        <div className="p-7 flex-1 flex flex-col items-center">
          <p className="font-semibold text-lg text-gray-900">{member.name}</p>
          <div className="text-gray-600 text-[15px] italic text-center mt-4">
            &quot;{member.quote}&quot;
          </div>
        </div>
      </div>
    </div>
  )
})

/**
 * Carousel navigation arrows component
 */
const CarouselArrows = memo(function CarouselArrows({
  canScrollLeft,
  canScrollRight,
  onScrollLeft,
  onScrollRight,
}: {
  canScrollLeft: boolean
  canScrollRight: boolean
  onScrollLeft: () => void
  onScrollRight: () => void
}) {
  return (
    <div className="flex items-center justify-center mt-[-20px]">
      <div className="flex gap-3 mt-[50px]">
        <button
          onClick={onScrollLeft}
          className={`w-11 h-11 rounded-full text-white bg-[#085689] flex items-center justify-center
            transform transition-all duration-200 ease-out
            ${
              canScrollLeft
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-75 translate-y-2 pointer-events-none"
            }`}
        >
          <RiArrowLeftSLine size={24} />
        </button>

        <button
          onClick={onScrollRight}
          className={`w-11 h-11 rounded-full text-white bg-[#085689] flex items-center justify-center
            transform transition-all duration-200 ease-out
            ${
              canScrollRight
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-75 translate-y-2 pointer-events-none"
            }`}
        >
          <RiArrowRightSLine size={24} />
        </button>
      </div>
    </div>
  )
})

/**
 * Meet the team section component
 */
export function MeetTheTeam() {
  const {
    scrollContainerRef,
    canScrollLeft,
    canScrollRight,
    scrollLeft,
    scrollRight,
  } = useCarouselScroll()

  return (
    <section
      id="about"
      className="py-20 lg:py-28 lg:mb-[120px] md:mb-[50px] sm:md-[0px]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-md font-medium text-[#085689] uppercase tracking-wider mb-4">
            Meet the Team
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-6">
            Nice to meet you
          </h2>
        </div>

        <div className="relative shadow-2xl rounded-3xl overflow-hidden mb-20">
          <Image
            src="/uploaded/team2.jpg"
            alt="Our Team"
            width={1400}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
        </div>

        {/* Company Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-4xl mx-auto mb-20">
          <div className="space-y-6">
            {COMPANY_VALUES.slice(0, 2).map((value, index) => (
              <ValueItem key={index} title={value.title} description={value.description} />
            ))}
          </div>

          <div className="space-y-6 mt-[-15px]">
            {COMPANY_VALUES.slice(2).map((value, index) => (
              <ValueItem key={index} title={value.title} description={value.description} />
            ))}
          </div>
        </div>

        {/* Team Carousel */}
        <div>
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden mt-[-30px]"
          >
            {TEAM_MEMBERS.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>

          <CarouselArrows
            canScrollLeft={canScrollLeft}
            canScrollRight={canScrollRight}
            onScrollLeft={scrollLeft}
            onScrollRight={scrollRight}
          />
        </div>
      </div>
    </section>
  )
}
