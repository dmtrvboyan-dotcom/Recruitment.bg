"use client"

import { useState, useEffect, useRef } from "react"
import { HEADER_SCROLL_THRESHOLD } from "@/lib/constants/navigation"

export function useScrollState(threshold: number = HEADER_SCROLL_THRESHOLD): boolean {
  const [isScrolled, setIsScrolled] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      // If the body is position:fixed (scroll locked), ignore the event —
      // use the value we saved before locking instead.
      if (document.body.style.position === "fixed") return

      lastScrollY.current = window.scrollY
      setIsScrolled(window.scrollY > threshold)
    }

    // Seed the ref with the real position on mount
    lastScrollY.current = window.scrollY
    setIsScrolled(window.scrollY > threshold)

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [threshold])

  // Whenever the lock is applied/removed, re-evaluate using the saved position
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isLocked = document.body.style.position === "fixed"
      if (isLocked) {
        // Body just got locked — use the scroll position we captured in the ref
        setIsScrolled(lastScrollY.current > threshold)
      } else {
        // Body just got unlocked — window.scrollY is restored by the unlock hook
        setIsScrolled(window.scrollY > threshold)
      }
    })

    observer.observe(document.body, { attributes: true, attributeFilter: ["style"] })
    return () => observer.disconnect()
  }, [threshold])

  return isScrolled
}