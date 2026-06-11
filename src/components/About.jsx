import {data} from  "../data/content"
import useScrollReveal from "../hooks/useScrollReveal"
import GitHubActivity from "./GitHubActivity";

export default function About() {
    const headerRef = useScrollReveal({ delay: "0s", distance: "32px" })
    const leftRef = useScrollReveal({ delay: "0.1s", distance: "32px" })
    const rightRef = useScrollReveal({ delay: "0.2s", distance: "32px" })
    const langRef = useScrollReveal({ delay: "0.25s", distance: "32px" })


    return (
        <section id="about" className="px-14 py-24 border-b border-white/5 relative z-10">

      {/* Section header */}
      <div className="mb-14" ref={headerRef}>
        <p
          className="text-[11px] text-[#5b8ef5] tracking-[3px] uppercase mb-3"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          About
        </p>
        <h2
          className="font-light tracking-[-2px] leading-none text-[#d8e0f5]"
          style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(38px, 4vw, 54px)" }}
        >
          Who I <em className="italic text-[#7aaaff]">am</em>
        </h2>
      </div>

      {/* Two column grid */}
      <div className="grid gap-28" style={{ gridTemplateColumns: "1fr 480px" }}>

        {/* Left — bio */}
        <div ref={leftRef}>
          <p
            className="text-[15px] text-[#8898c8] leading-[1.9] mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {data.bio}
            {/* Your bio from content.js — write this yourself! */}
          </p>

          {/* Languages */}
          <div className="mt-14 pt-14 border-t border-white/5" ref={langRef}>
            <p
              className="text-[11px] text-[#4a5a8a] tracking-[3px] uppercase mb-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Languages
            </p>
            <div className="flex flex-col gap-0">
              {data.languages.map((lang, index) => (
                <div
                  key={index}
                  className="flex items-baseline justify-between py-3 border-b border-white/5 first:border-t first:border-white/5"
                  // first:border-t adds a top border only to the first item
                  // creating a clean contained list
                >
                  <span
                    className="text-[13px] text-[#d8e0f5]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {lang.name}
                  </span>
                  <span
                    className="text-[11px] text-[#4a5a8a] tracking-[1px]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
        </div>


        {/* Right — info table */}
        <div ref={rightRef}>
          <div className="flex flex-col pl-8 border-l border-[#5b8ef5]/20">
            {[
              { key: "Location", val: data.location, accent: false },
              { key: "Degree", val: "B.Sc. Software Engineering & Information Systems", accent: false },
              { key: "Institution", val: data.education[0].school_en, accent: false },
              { key: "Period", val: data.education[0].period, accent: false },
              { key: "Achievement", val: data.education[0].achievement_en, accent: true },
              { key: "Status", val: "Open to internships", accent: true },
            ].map((row, index) => (
              <div
                key={index}
                className="flex items-baseline justify-between gap-6 py-4 border-b border-white/5 first:border-t first:border-white/5"
              >
                <span
                  className="text-[11px] text-[#4a5a8a] tracking-[2px] uppercase shrink-0"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {row.key}
                </span>
                <span
                  className={`text-[13px] text-right ${row.accent ? "text-[#7aaaff]" : "text-[#d8e0f5]"}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {row.val}
                  {/* accent rows show in blue — Status and Achievement
                      stand out from the regular info rows */}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
      <GitHubActivity />
    </section>
    );
}