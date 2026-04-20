"use client"

import { useState, useEffect, useCallback, type RefCallback } from "react"

export interface CarouselScrollState {
  canScrollLeft: boolean
  canScrollRight: boolean
}

export interface UseCarouselScrollReturn extends CarouselScrollState {
  scrollContainerRef: RefCallback<HTMLElement>
  scrollLeft: () => void
  scrollRight: () => void
}

/**
 * Hook for managing carousel scroll state and navigation
 */
export function useCarouselScroll(): UseCarouselScrollReturn {
  const [scrollContainer, setScrollContainer] = useState<HTMLElement | null>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = useCallback(() => {
    if (!scrollContainer) return

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainer

    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
  }, [scrollContainer])

  useEffect(() => {
    if (!scrollContainer) return

    updateScrollState()

    scrollContainer.addEventListener("scroll", updateScrollState)
    window.addEventListener("resize", updateScrollState)

    return () => {
      scrollContainer.removeEventListener("scroll", updateScrollState)
      window.removeEventListener("resize", updateScrollState)
    }
  }, [scrollContainer, updateScrollState])

  const scroll = useCallback(
    (direction: "left" | "right") => {
      if (!scrollContainer) return

      const isMobile = window.innerWidth < 640
      const scrollAmount = isMobile
        ? scrollContainer.offsetWidth
        : scrollContainer.offsetWidth / 3

      scrollContainer.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    },
    [scrollContainer]
  )

  return {
    scrollContainerRef: setScrollContainer,
    canScrollLeft,
    canScrollRight,
    scrollLeft: () => scroll("left"),
    scrollRight: () => scroll("right"),
  }
}
