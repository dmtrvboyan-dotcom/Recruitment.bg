"use client"

import { useEffect, useLayoutEffect } from "react"

export function useBodyScrollLock(isLocked: boolean): void {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isLocked])
}

export function useBodyScrollLockWithPosition(lock: boolean): void {
  useLayoutEffect(() => {
    if (!lock) return

    const scrollY = window.scrollY
    const originalOverflow = document.body.style.overflow
    const originalPosition = document.body.style.position

    document.body.style.overflow = "hidden"
    document.body.style.position = "fixed"
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = "100%"

    return () => {
      document.body.style.overflow = originalOverflow
      document.body.style.position = originalPosition
      document.body.style.top = ""
      document.body.style.width = ""
      window.scrollTo({ top: scrollY, behavior: "instant" })
    }
  }, [lock])
}