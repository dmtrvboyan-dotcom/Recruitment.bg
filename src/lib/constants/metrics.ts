/**
 * Trust metrics and statistics for the company
 */

export interface TrustMetric {
  value: string
  label: string
  description: string
}

export const TRUST_METRICS: TrustMetric[] = [
  {
    value: "650+",
    label: "Successful IT Hirings",
    description: "",
  },
  {
    value: "12",
    label: "Senior Tech Recruiters",
    description: "",
  },
  {
    value: "100%",
    label: "Recruiting all Tech Stacks",
    description: "",
  },
  {
    value: "1",
    label: "Built-in House Smart.R ATS",
    description: "",
  },
]

export const HERO_STATS = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Placements Made" },
  { value: "95%", label: "Client Retention" },
]
