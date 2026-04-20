/**
 * Filter-related utility functions for jobs and other filterable content
 */

import type { Job } from "@/lib/data/jobs"

export interface JobFilters {
  locations: string[]
  type: string
  tech: string
  seniorities: string[]
  contracts: string[]
  searchQuery: string
}

/**
 * Filters jobs based on the provided filter criteria
 */
export function filterJobs(jobs: Job[], filters: JobFilters): Job[] {
  const { locations, type, tech, seniorities, contracts, searchQuery } = filters

  return jobs.filter((job) => {
    const locationMatch = locations.length === 0 || locations.includes(job.location)
    const typeMatch = type === "all" || job.type.toLowerCase() === type
    const techMatch = tech === "all" || job.techStack.includes(tech)
    const seniorityMatch = seniorities.length === 0 || seniorities.includes(job.seniority)
    const contractMatch = contracts.length === 0 || contracts.includes(job.contract)

    const searchLower = searchQuery.toLowerCase().trim()
    const searchMatch =
      !searchLower ||
      job.title.toLowerCase().includes(searchLower) ||
      job.techStack.some((t) => t.toLowerCase().includes(searchLower))

    return locationMatch && typeMatch && techMatch && seniorityMatch && contractMatch && searchMatch
  })
}

/**
 * Toggles an item in an array (adds if not present, removes if present)
 */
export function toggleArrayItem<T>(array: T[], item: T): T[] {
  if (array.includes(item)) {
    return array.filter((i) => i !== item)
  }
  return [...array, item]
}

/**
 * Creates initial filter state
 */
export function createInitialFilters(): JobFilters {
  return {
    locations: [],
    type: "all",
    tech: "all",
    seniorities: [],
    contracts: [],
    searchQuery: "",
  }
}
