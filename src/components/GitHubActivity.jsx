import { useEffect, useState } from "react"
import useScrollReveal from "../hooks/useScrollReveal"

const USERNAME = "Yessineee"

export default function GitHubActivity() {
  const [weeks, setWeeks] = useState([])
  const [total, setTotal] = useState(0)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  const ref = useScrollReveal({ delay: "0.3s", distance: "32px" })

  useEffect(() => {
    
    Promise.all([
      fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`)
        .then(r => r.json()),
      fetch(`https://api.github.com/users/${USERNAME}`)
        .then(r => r.json()),
    ])
      .then(([contribData, profileData]) => {
        // Process contributions into weeks
        const days = contribData.contributions
        const recentDays = days.slice(-182)
        const grouped = []
        for (let i = 0; i < recentDays.length; i += 7) {
          grouped.push(recentDays.slice(i, i + 7))
        }
        setWeeks(grouped)
        setTotal(contribData.total.lastYear)
        setProfile(profileData)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const getColor = (level) => {
    
    if (level === 0) return "bg-white/[0.04]"
    if (level === 1) return "bg-[#1e3a5f]"
    if (level === 2) return "bg-[#2d5f9e]"
    if (level === 3) return "bg-[#4a7ef0]"
    return "bg-[#7aaaff]"
  }

  if (loading) return (
    <div className="mt-14 pt-14 border-t border-white/5">
      <div className="h-[120px] bg-white/[0.02] rounded animate-pulse" />
    </div>
  )

  return (
    <div className="mt-14 pt-14 border-t border-white/5" ref={ref}>

      {/* Header + stats row */}
      <div className="mb-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
          <p
            className="text-[11px] text-[#6b7db3] tracking-[3px] uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            GitHub Activity
          </p>

          {profile && (
            <div className="flex items-center gap-4 md:gap-6 flex-wrap">
              {[
                { label: "Public Repos", value: profile.public_repos },
                { label: "Contributions", value: total },
                { label: "Last Updated", value: new Date(profile.updated_at).toLocaleDateString("en-GB", { month: "short", year: "numeric" }) },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span
                    className="text-[#7aaaff] text-[13px] font-medium"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-[11px] text-[#4a5a8a]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Context note */}
        <p
          className="text-[10px] text-[#5a6a9a] tracking-[1px]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          * Contributions from private repos not shown — incl. national healthcare platform for the Tunisian Ministry of Health
        </p>
        
      </div>

      {/* Month labels */}
      <div className="hidden sm:flex gap-[3px] w-full mb-1">
        {weeks.map((week, wi) => {
          const firstDay = week[0]?.date
          const date = new Date(firstDay)
          const isFirstWeekOfMonth = date.getDate() <= 7
          // Only show month label on the first week of each month.
          return (
            <div key={wi} className="flex-1">
              {isFirstWeekOfMonth ? (
                <span
                  className="text-[9px] text-[#4a5a8a]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {date.toLocaleString("en", { month: "short" })}
                </span>
              ) : null}
            </div>
          )
        })}
      </div>


      {/* Heatmap — full width */}
      <div className="flex gap-[3px] w-full">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px] flex-1">
            {week.map((day, di) => {
              const date = new Date(day.date)
              const formatted = date.toLocaleDateString("en-GB", {
                weekday: "short",
                day: "numeric",
                month: "short",
                year: "numeric",
              })
              // Formats date as "Sat, 3 Jan 2026" — clean and readable.
              const label = day.count === 0
                ? `${formatted} - No contributions`
                : `${formatted} - ${day.count} contribution${day.count > 1 ? "s" : ""}`
              // Pluralizes "contribution" correctly.

              return (
                <div
                  key={di}
                  className={`rounded-[2px] ${getColor(day.level)} hover:opacity-70 transition-opacity duration-200 cursor-default`}
                  style={{ width: "100%", paddingBottom: "100%" }}
                  // paddingBottom: 100% is a CSS trick to make an element
                  // perfectly square regardless of its container width.
                  // The element has 0 height but 100% padding pushes it down
                  // to match its own width — always a perfect square.
                  title={label}
                />
              )
            })}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-[4px] mt-3 justify-end">
        <span
          className="text-[10px] text-[#4a5a8a] mr-1"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Less
        </span>
        {[0, 1, 2, 3, 4].map(level => (
          <div
            key={level}
            className={`w-[10px] h-[10px] rounded-[2px] ${getColor(level)}`}
          />
        ))}
        <span
          className="text-[10px] text-[#4a5a8a] ml-1"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          More
        </span>
      </div>

    </div>
  )
}