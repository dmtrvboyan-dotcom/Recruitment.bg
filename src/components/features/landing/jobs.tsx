"use client"

import { useState, useCallback, useMemo, memo } from "react"
import * as ReactDOM from "react-dom"
import { MapPin, Filter, X, Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  JOB_DETAILS,
  SAMPLE_JOBS,
  JOB_LOCATIONS,
  SENIORITY_OPTIONS,
  CONTRACT_OPTIONS,
  TECH_OPTIONS,
  type Job,
} from "@/lib/data/jobs"
import { filterJobs, toggleArrayItem } from "@/lib/utils/filters"
import { useEscapeKey, useBodyScrollLockWithPosition } from "@/lib/hooks"

/**
 * Bullet list component for job details
 */
const BulletList = memo(function BulletList({
  items,
  color,
}: {
  items: string[]
  color: string
}) {
  return (
    <ul className="space-y-2 mt-2">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-2 text-sm text-slate-700 leading-snug"
        >
          <span
            className="mt-1.5 shrink-0 w-2 h-2 rounded-full"
            style={{ backgroundColor: color }}
          />
          {item}
        </li>
      ))}
    </ul>
  )
})

/**
 * Job modal component
 */
const JobModal = memo(function JobModal({
  job,
  onClose,
}: {
  job: Job
  onClose: () => void
}) {
  const details = JOB_DETAILS[job.id]

  useEscapeKey(onClose)
  useBodyScrollLockWithPosition(true)

  const modalContent = (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @media (min-width: 640px) {
          .modal-panel {
            align-self: center !important;
            max-width: 72rem !important;
            height: 90dvh !important;
          }
        }
      `}</style>

      <div
        className="modal-panel bg-white w-full flex flex-col"
        style={{
          height: "100dvh",
          maxHeight: "100dvh",
          animation: "slideUp 0.35s cubic-bezier(0.32, 0.72, 0, 1) forwards",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div className="bg-[#085689] p-6 text-white relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
            style={{ background: "rgba(255,255,255,0.15)" }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.3)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.15)")
            }
          >
            <X className="w-4 h-4" />
          </button>

          <h2 className="text-xl font-bold leading-tight pr-12 mb-1 text-white">
            {job.title}
          </h2>
          <p className="text-sm opacity-75 mb-4">{job.seniority}</p>

          <div className="flex flex-wrap gap-2">
            <span
              className="flex items-center gap-1 text-xs px-3 py-1 rounded-full"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              <MapPin className="w-3 h-3" /> {job.location}
            </span>
            <span
              className="text-xs px-3 py-1 rounded-full"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              {job.type}
            </span>
            <span
              className="text-xs px-3 py-1 rounded-full capitalize"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              {job.contract}
            </span>
            {job.techStack.map((t, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  background: "rgba(120,182,217,0.35)",
                  border: "1px solid rgba(120,182,217,0.5)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div
          className="flex-1 overflow-y-auto p-5 space-y-4"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="bg-slate-50 p-4">
            <p className="text-xs font-semibold text-[#085689] uppercase tracking-widest mb-2">
              Position Overview
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              {details.overview}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-2xl p-4">
              <p className="text-xs font-semibold text-[#085689] uppercase tracking-widest mb-1">
                Responsibilities
              </p>
              <BulletList items={details.responsibilities} color="#78B6D9" />
            </div>
            <div className="bg-slate-50 rounded-2xl p-4">
              <p className="text-xs font-semibold text-[#085689] uppercase tracking-widest mb-1">
                Requirements
              </p>
              <BulletList items={details.requirements} color="#78B6D9" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-2xl p-4">
              <p className="text-xs font-semibold text-[#10b981] uppercase tracking-widest mb-1">
                Nice to Have
              </p>
              <BulletList items={details.niceToHave} color="#10b981" />
            </div>
            <div className="bg-slate-50 rounded-2xl p-4">
              <p className="text-xs font-semibold text-[#f59e0b] uppercase tracking-widest mb-1">
                What We Offer
              </p>
              <BulletList items={details.offers} color="#f59e0b" />
            </div>
          </div>

          <p className="text-md text-slate-600 leading-relaxed text-center max-w-5xl mx-auto mt-5 mb-5">
            By applying for this position, you agree that your personal data
            will be processed according to our privacy policy.
          </p>
        </div>

        <div className="shrink-0 px-5 py-4 border-t border-slate-100 ">
          <button
            onClick={() => console.log(`Applying for: ${job.title}`)}
            className="w-full bg-[#085689] hover:bg-[#0a6a9e] text-white py-4 rounded-2xl font-semibold text-base transition-all active:scale-[0.98]"
          >
            Apply for this role
          </button>
        </div>
      </div>
    </div>
  )

  return ReactDOM.createPortal(modalContent, document.body)
})

/**
 * Filter section component
 */
const FilterSection = memo(function FilterSection({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-lg font-semibold mb-3 hover:text-[#085689] transition-colors"
      >
        {title}
        <ChevronDown
          className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"
          }`}
      >
        {children}
      </div>
    </div>
  )
})

/**
 * Job card component
 */
const JobCard = memo(function JobCard({
  job,
  onSelect,
}: {
  job: Job
  onSelect: () => void
}) {
  return (
    <div className="bg-[#f5f5f5] border border-slate-200 rounded-3xl p-6 hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
      <div className="flex gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-black group-hover:text-[#085689] transition-colors line-clamp-2">
            {job.title}
          </h3>
          <p className="text-[#085689] font-medium mt-1">{job.seniority}</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-sm">
            <div className="flex items-center gap-1.5 text-slate-600">
              <MapPin className="w-4 h-4" />
              {job.location}
            </div>
            <div className="px-3 py-1 bg-[#085689] text-white rounded-full text-xs font-medium">
              {job.type}
            </div>
            <div className="px-3 py-1 bg-[#085689] text-white rounded-full text-xs font-medium capitalize">
              {job.contract}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-between mt-auto pt-6">
        <div className="flex flex-wrap gap-2">
          {job.techStack.map((tech, i) => (
            <span
              key={i}
              className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-xl"
            >
              {tech}
            </span>
          ))}
        </div>
        <button
          onClick={onSelect}
          className="bg-[#78B6D9] hover:bg-[#0a6a9e] text-white px-4 py-2 rounded-2xl text-xs font-medium transition-all active:scale-95 cursor-pointer"
        >
          View Position
        </button>
      </div>
    </div>
  )
})


export function JobsSection() {
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [selectedType, setSelectedType] = useState("all")
  const [selectedTech, setSelectedTech] = useState("all")
  const [selectedSeniorities, setSelectedSeniorities] = useState<string[]>([])
  const [selectedContracts, setSelectedContracts] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [currentPage, setCurrentPage] = useState(1)


  const [openSections, setOpenSections] = useState({
    technology: true,
    seniority: true,
    location: true,
    contract: true,
    workModel: true,
  })

  const toggleSection = useCallback((section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }, [])

  const filteredJobs = useMemo(() => {
    setCurrentPage(1) // reset to page 1 whenever filters change
    return filterJobs(SAMPLE_JOBS, {
      locations: selectedLocations,
      type: selectedType,
      tech: selectedTech,
      seniorities: selectedSeniorities,
      contracts: selectedContracts,
      searchQuery,
    })
  }, [selectedLocations, selectedType, selectedTech, selectedSeniorities, selectedContracts, searchQuery])

  const JOBS_PER_PAGE = 6


  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE)
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * JOBS_PER_PAGE,
    currentPage * JOBS_PER_PAGE
  )

  return (
    <section id="jobs" className="py-16 lg:py-24 lg:mb-[20px] md:mb-[50px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {selectedJob && (
          <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
        )}

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
            Careers
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
            Job Positions
          </h2>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-10">
          <div className="w-full md:w-[50%]">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs by title or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-200 pl-12 pr-12 py-4 rounded-3xl text-lg focus:outline-none focus:border-[#78B6D9] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Mobile filter button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 mx-auto bg-[#085689] text-white px-6 py-3 rounded-2xl mb-6"
          >
            <Filter className="w-5 h-5" />
            Filters
            {showFilters && <X className="w-5 h-5" />}
          </button>

          {/* Filters panel */}
          <div
            className={`lg:w-80 lg:shrink-0 transition-all  ${showFilters ? "block" : "hidden "
              } lg:block`}
          >
            <div className="bg-[#f5f5f5] border border-slate-200 rounded-3xl p-6 lg:sticky lg:top-8 space-y-6 ">
              <FilterSection
                title="Technology"
                isOpen={openSections.technology}
                onToggle={() => toggleSection("technology")}
              >
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {TECH_OPTIONS.map((tech) => (
                    <button
                      key={tech.value}
                      onClick={() => setSelectedTech(tech.value)}
                      className={`py-3 px-4 rounded-2xl text-sm font-medium transition-all ${selectedTech === tech.value
                        ? "bg-[#78B6D9] text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                        }`}
                    >
                      {tech.label}
                    </button>
                  ))}
                </div>
              </FilterSection>

              <FilterSection
                title="Seniority"
                isOpen={openSections.seniority}
                onToggle={() => toggleSection("seniority")}
              >
                <div className="space-y-3 pt-1">
                  {SENIORITY_OPTIONS.map((s) => (
                    <label key={s} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedSeniorities.includes(s)}
                        onChange={() =>
                          setSelectedSeniorities((prev) => toggleArrayItem(prev, s))
                        }
                        className="w-5 h-5 accent-[#78B6D9] rounded"
                      />
                      <span className="text-slate-700">{s}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              <FilterSection
                title="Location"
                isOpen={openSections.location}
                onToggle={() => toggleSection("location")}
              >
                <div className="space-y-3 pt-1">
                  {JOB_LOCATIONS.map((loc) => (
                    <label key={loc} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedLocations.includes(loc)}
                        onChange={() =>
                          setSelectedLocations((prev) => toggleArrayItem(prev, loc))
                        }
                        className="w-5 h-5 accent-[#78B6D9] rounded"
                      />
                      <span className="text-slate-700">{loc}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              <FilterSection
                title="Contract Type"
                isOpen={openSections.contract}
                onToggle={() => toggleSection("contract")}
              >
                <div className="space-y-3 pt-1">
                  {CONTRACT_OPTIONS.map((c) => (
                    <label
                      key={c.value}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedContracts.includes(c.value)}
                        onChange={() =>
                          setSelectedContracts((prev) =>
                            toggleArrayItem(prev, c.value)
                          )
                        }
                        className="w-5 h-5 accent-[#78B6D9] rounded"
                      />
                      <span className="text-slate-700">{c.label}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              <FilterSection
                title="Work Model"
                isOpen={openSections.workModel}
                onToggle={() => toggleSection("workModel")}
              >
                <div className="space-y-2 pt-1">
                  {["all", "hybrid", "remote", "office"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`w-full text-left px-4 py-3 rounded-2xl transition-all ${selectedType === type
                        ? "bg-[#78B6D9] text-white"
                        : "hover:bg-slate-100 text-slate-700"
                        }`}
                    >
                      {type === "all"
                        ? "All"
                        : type === "hybrid"
                          ? "Hybrid"
                          : type === "remote"
                            ? "Fully Remote"
                            : "Office"}
                    </button>
                  ))}
                </div>
              </FilterSection>
            </div>
          </div>

          {/* Job cards */}
          <div className="flex-1">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Left: positions count */}
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-semibold">
                  {filteredJobs.length} positions
                </span>
                {searchQuery && (
                  <span className="text-slate-500 text-sm">
                    matching &quot;{searchQuery}&quot;
                  </span>
                )}
              </div>

              {/* Right: pagination — always exactly 3 page buttons */}
              {totalPages > 1 && (
                <div className="flex items-center gap-1.5 sm:gap-2 ml-auto lg:mt-0 md:mt-0 sm:mt-0 -mt-12">
                  {/* Prev arrow */}
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center bg-[#f5f5f5] border border-slate-200 text-slate-600 hover:bg-[#085689] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm"
                  >
                    ‹
                  </button>

                  {(() => {
                    // 2 pages: show just 2 buttons
                    if (totalPages === 2) {
                      return [1, 2].map((page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                            currentPage === page
                              ? "bg-[#085689] text-white shadow-md"
                              : "bg-[#f5f5f5] border border-slate-200 text-slate-600 hover:bg-[#78B6D9] hover:text-white"
                          }`}
                        >
                          {page}
                        </button>
                      ))
                    }

                    // 3+ pages: always exactly 3 buttons — [1] [middle] [last]
                    // Middle = current page, clamped so it's never 1 or last
                    const middle =
                      currentPage === 1
                        ? 2
                        : currentPage === totalPages
                        ? totalPages - 1
                        : currentPage

                    return [1, middle, totalPages].map((page, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentPage(page)}
                        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                          currentPage === page
                            ? "bg-[#085689] text-white shadow-md"
                            : "bg-[#f5f5f5] border border-slate-200 text-slate-600 hover:bg-[#78B6D9] hover:text-white"
                        }`}
                      >
                        {page}
                      </button>
                    ))
                  })()}

                  {/* Next arrow */}
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center bg-[#f5f5f5] border border-slate-200 text-slate-600 hover:bg-[#085689] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm"
                  >
                    ›
                  </button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paginatedJobs.map((job) => (
                <JobCard key={job.id} job={job} onSelect={() => setSelectedJob(job)} />
              ))}
            </div>

           {filteredJobs.length === 0 && (
              <div className="text-center py-20 text-slate-500">
                No jobs found matching your criteria.
              </div>
            )}
          </div>
 
         
        </div>
      </div>
    </section>
  )
}