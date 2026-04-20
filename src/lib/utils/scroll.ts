/**
 * Scroll-related utility functions
 */

import { SCROLL_OFFSET } from "@/lib/constants/navigation"

export interface ScrollOptions {
  offset?: number
  behavior?: ScrollBehavior
  highlightDuration?: number
  highlightColor?: string
}

const DEFAULT_SCROLL_OPTIONS: ScrollOptions = {
  offset: SCROLL_OFFSET,
  behavior: "smooth",
  highlightDuration: 1200,
  highlightColor: "rgba(8, 86, 137, 0.15)",
}

/**
 * Smoothly scrolls to a section on the page with optional highlight effect
 */
export function scrollToSection(href: string, options: ScrollOptions = {}): void {
  const { offset, behavior, highlightDuration, highlightColor } = {
    ...DEFAULT_SCROLL_OPTIONS,
    ...options,
  }

  const id = href.replace("#", "")
  const element = document.getElementById(id)

  if (!element) return

  const elementPosition = element.getBoundingClientRect().top + window.scrollY
  const offsetPosition = elementPosition - (offset ?? SCROLL_OFFSET)

  window.scrollTo({
    top: offsetPosition,
    behavior,
  })

  // Optional highlight effect
  if (highlightDuration && highlightColor) {
    element.style.transition = "box-shadow 0.6s ease"
    element.style.boxShadow = `0 0 0 6px ${highlightColor}`

    setTimeout(() => {
      element.style.boxShadow = "none"
    }, highlightDuration)
  }
}

/**
 * Scrolls to a section without the highlight effect
 */
export function scrollToSectionSimple(href: string, offset: number = SCROLL_OFFSET): void {
  const id = href.replace("#", "")
  const element = document.getElementById(id)

  if (!element) return

  const elementPosition = element.getBoundingClientRect().top + window.scrollY
  const offsetPosition = elementPosition - offset

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  })
}

/**
 * Scrolls to top of the page
 */
export function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

/**
 * Locks body scroll (useful for modals)
 */
export function lockBodyScroll(): () => void {
  const scrollY = window.scrollY

  document.body.style.position = "fixed"
  document.body.style.top = `-${scrollY}px`
  document.body.style.left = "0"
  document.body.style.right = "0"
  document.body.style.width = "100%"

  return () => {
    document.body.style.position = ""
    document.body.style.top = ""
    document.body.style.left = ""
    document.body.style.right = ""
    document.body.style.width = ""

    window.scrollTo(0, scrollY)
  }
}
