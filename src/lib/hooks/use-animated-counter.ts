"use client"

import { useState, useEffect } from "react"
import { useIntersectionObserver } from "./use-intersection-observer"
import { parseValueWithSuffix } from "@/lib/utils/animation"

export interface UseAnimatedCounterOptions {
  duration?: number
  steps?: number
}

export interface UseAnimatedCounterReturn {
  ref: React.RefObject<HTMLDivElement | null>
  displayValue: string
}

/**
 * Hook for animating a counter value when it enters the viewport
 */
export function useAnimatedCounter(
  value: string,
  options: UseAnimatedCounterOptions = {}
): UseAnimatedCounterReturn {
  const { duration = 1000, steps = 50 } = options
  const [count, setCount] = useState(0)
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.3,
    triggerOnce: true,
  })

  const { numericValue, suffix } = parseValueWithSuffix(value)

  useEffect(() => {
    if (!isVisible) return

    const increment = numericValue / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment

      if (current >= numericValue) {
        setCount(numericValue)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, numericValue, duration, steps])

  return {
    ref,
    displayValue: `${count}${suffix}`,
  }
}
