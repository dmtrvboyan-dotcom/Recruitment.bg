"use client"

import { memo, useState, useRef, useCallback } from "react"
import Image from "next/image"
import { RiArrowLeftSLine, RiArrowRightSLine, RiLinkedinBoxFill, RiCheckLine } from "react-icons/ri"
import { TbPointFilled } from "react-icons/tb"
import { TEAM_MEMBERS, COMPANY_VALUES, type TeamMember } from "@/lib/constants/team"
import { useCarouselScroll } from "@/lib/hooks/use-carousel-scroll"

// ─── Gallery photos ────────────────────────────────────────────────────────
// Replace these src strings with your actual image paths.
const GALLERY_PHOTOS = [
  { src: "/uploaded/team.jpg", alt: "Team photo 1" },
  { src: "/uploaded/team1.png", alt: "Team photo 2" },
  { src: "/uploaded/team2.jpg", alt: "Team photo 3" },
  { src: "/uploaded/team3.jpg", alt: "Team photo 4" },
  { src: "/uploaded/team4.jpg", alt: "Team photo 5" },
  { src: "/uploaded/team5.jpg", alt: "Team photo 6" },
]

const THUMBS_PER_PAGE = 3

// ─── Sub-components ────────────────────────────────────────────────────────

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

const TeamMemberCard = memo(function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="w-[85%] shrink-0 snap-start group sm:w-[50%] lg:w-[25%] sm:px-3 mt-[50px]">
      <div className="rounded-3xl overflow-hidden flex flex-col items-center">
        <div className="flex flex-col items-center gap-2">
          <div className="relative w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] lg:w-[150px] lg:h-[150px]">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover border-4 border-[#085689] rounded-full transition-all duration-500 group-hover:border-[#78B6D9]"
            />
          </div>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#085689] hover:text-[#78B6D9] transition-colors duration-200"
            >
              <RiLinkedinBoxFill className="mt-3 sm:mt-4 lg:mt-6" size={28} />
            </a>
          )}
        </div>
        <div className="p-2 sm:p-4 flex-1 flex flex-col items-center">
          <p className="font-semibold text-sm sm:text-base text-gray-900">{member.name}</p>
          <div className="text-gray-600 text-[12px] sm:text-[13px] italic text-center mt-2 sm:mt-3">
            &quot;{member.quote}&quot;
          </div>
        </div>
      </div>
    </div>
  )
})

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
            ${canScrollLeft ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-75 translate-y-2 pointer-events-none"}`}
        >
          <RiArrowLeftSLine size={24} />
        </button>
        <button
          onClick={onScrollRight}
          className={`w-11 h-11 rounded-full text-white bg-[#085689] flex items-center justify-center
            transform transition-all duration-200 ease-out
            ${canScrollRight ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-75 translate-y-2 pointer-events-none"}`}
        >
          <RiArrowRightSLine size={24} />
        </button>
      </div>
    </div>
  )
})

// ─── Photo gallery ─────────────────────────────────────────────────────────

function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [thumbPage, setThumbPage] = useState(0)
  const [hasSwiped, setHasSwiped] = useState(false)
  
  // Touch/swipe state
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)
  const minSwipeDistance = 50

  const totalPages = Math.ceil(GALLERY_PHOTOS.length / THUMBS_PER_PAGE)
  const visibleThumbs = GALLERY_PHOTOS.slice(
    thumbPage * THUMBS_PER_PAGE,
    thumbPage * THUMBS_PER_PAGE + THUMBS_PER_PAGE,
  )

  function prevPage() {
    setThumbPage((p) => Math.max(0, p - 1))
  }

  function nextPage() {
    setThumbPage((p) => Math.min(totalPages - 1, p + 1))
  }

  // Navigate to previous image
  const goToPrevImage = useCallback(() => {
    setActiveIndex((prev) => {
      const newIndex = prev > 0 ? prev - 1 : GALLERY_PHOTOS.length - 1
      // Update thumb page to show the new active image
      const newThumbPage = Math.floor(newIndex / THUMBS_PER_PAGE)
      setThumbPage(newThumbPage)
      return newIndex
    })
  }, [])

  // Navigate to next image
  const goToNextImage = useCallback(() => {
    setActiveIndex((prev) => {
      const newIndex = prev < GALLERY_PHOTOS.length - 1 ? prev + 1 : 0
      // Update thumb page to show the new active image
      const newThumbPage = Math.floor(newIndex / THUMBS_PER_PAGE)
      setThumbPage(newThumbPage)
      return newIndex
    })
  }, [])

  // Touch event handlers
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchEndX.current = null
    touchStartX.current = e.targetTouches[0].clientX
  }, [])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }, [])

  const onTouchEnd = useCallback(() => {
    if (!touchStartX.current || !touchEndX.current) return
    
    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      goToNextImage()
      setHasSwiped(true)
    } else if (isRightSwipe) {
      goToPrevImage()
      setHasSwiped(true)
    }

    // Reset
    touchStartX.current = null
    touchEndX.current = null
  }, [goToNextImage, goToPrevImage])

  return (
    <div className="relative mb-20">
      {/* ── Main photo with swipe support ── */}
      <div 
        className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <Image
          key={activeIndex}
          src={GALLERY_PHOTOS[activeIndex].src}
          alt={GALLERY_PHOTOS[activeIndex].alt}
          fill
          className="object-cover transition-opacity duration-500 select-none pointer-events-none"
          priority={activeIndex === 0}
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30 pointer-events-none" />
        
        {/* Swipe hint on mobile - fades out after first swipe */}
        <div 
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/70 text-sm md:hidden transition-opacity duration-500 ${hasSwiped ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <span className="animate-pulse">Swipe to browse</span>
        </div>
      </div>

      {/* ── Thumbnail strip ── */}
<div className="px-2 py-4 flex items-center justify-center gap-2 max-w-[320px] mx-auto">        {/* Prev arrow */}
        <button
          onClick={prevPage}
          disabled={thumbPage === 0}
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white bg-[#085689]
            transition-all duration-200
            ${thumbPage === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-[#78B6D9] opacity-100"}`}
          aria-label="Previous photos"
        >
          <RiArrowLeftSLine size={22} />
        </button>

        {/* Thumbnails */}
        <div className="flex flex-1 gap-2">
          {visibleThumbs.map((photo, i) => {
            const globalIndex = thumbPage * THUMBS_PER_PAGE + i
            const isActive = globalIndex === activeIndex
            return (
              <button
                key={globalIndex}
                onClick={() => setActiveIndex(globalIndex)}
                className={`relative w-24 h-16 shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-200
                  ${isActive
                    ? "border-[#78B6D9] scale-[1.03] shadow-lg shadow-[#085689]/40"
                    : "border-white/20 hover:border-white/60 hover:scale-[1.02]"
                  }`}
                aria-label={photo.alt}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 30vw, 15vw"
                />
                {/* Active overlay */}
                {isActive && (
                  <div className="absolute inset-0 bg-[#085689]/20" />
                )}
              </button>
            )
          })}
        </div>

        {/* Next arrow */}
        <button
          onClick={nextPage}
          disabled={thumbPage >= totalPages - 1}
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white bg-[#085689]
            transition-all duration-200
            ${thumbPage >= totalPages - 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-[#78B6D9] opacity-100"}`}
          aria-label="Next photos"
        >
          <RiArrowRightSLine size={22} />
        </button>
      </div>
    </div>
  )
}

// ─── Main section ──────────────────────────────────────────────────────────

export function MeetTheTeam() {
  const { scrollContainerRef, canScrollLeft, canScrollRight, scrollLeft, scrollRight } =
    useCarouselScroll()

  return (
    <section id="about" className="py-14 sm:py-20 lg:py-28 lg:mb-[120px] md:mb-[50px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-md font-medium text-[#085689] uppercase tracking-wider mb-4">
            Meet the Team
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-6">
            Nice to meet you
          </h2>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6 text-xs sm:text-sm text-gray-600 font-medium text-center">
            <div className="flex items-center gap-2">
              <RiCheckLine className="text-[#085689]" size={16} />
              <span>15+ years IT Recruitment Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <RiCheckLine className="text-[#085689]" size={16} />
              <span>Average time 2–10 days to present candidates</span>
            </div>
          </div>
        </div>

        {/* Photo gallery with thumbnails */}
        <PhotoGallery />

        {/* Company Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-8 lg:gap-y-10 max-w-4xl mx-auto mb-15 -mt-2">
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
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden mt-[-50px]"
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
