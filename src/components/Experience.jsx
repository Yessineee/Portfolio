import {data} from  "../data/content"
import useScrollReveal from "../hooks/useScrollReveal"


export default function Experience() {
  const headerRef = useScrollReveal({ delay: "0s", distance: "32px" })
  const timelineRef = useScrollReveal({ delay: "0.15s", distance: "32px" })

    return (
      <section id="experience" className="px-6 md:px-14 py-16 md:py-24 border-b border-white/5 relative z-10">

      {/* Section header */}
      <div className="mb-14" ref={headerRef}>
        <p
          className="text-[11px] text-[#5b8ef5] tracking-[3px] uppercase mb-3"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Experience
        </p>
        <h2
          className="font-light tracking-[-2px] leading-none text-[#d8e0f5]"
          style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(38px, 4vw, 54px)" }}
        >
          Where I've <em className="italic text-[#7aaaff]">studied</em>
        </h2>
      </div>

      {/* Timeline */}
      <div className="flex flex-col" ref={timelineRef}>
        {data.education.map((edu, index) => (
          <div
            key={index}
            className="grid gap-3 md:gap-10 py-9 border-b border-white/5 first:border-t first:border-white/5 items-start grid-cols-1 md:grid-cols-[160px_1fr]"
          >
            {/* Period */}
            <span
              className="text-[11px] text-[#4a5a8a] tracking-[1px] pt-1"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {edu.period}
            </span>

            {/* Content */}
            <div>
              <h3
                className="text-[19px] font-normal text-[#d8e0f5] tracking-[-0.3px] mb-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {edu.degree_en}
              </h3>
              <p
                className="text-[12px] text-[#5b8ef5] tracking-[1px] mb-4"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {edu.school_en}
              </p>
              <p
                className="text-[13px] text-[#8898c8] leading-[1.75] mb-5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Studied core IT concepts including software engineering,
                algorithms, data structures, object-oriented programming,
                databases, and web development. Completed a national-scale
                final year project in collaboration with the Tunisian
                Ministry of Health.
                {/* Mentioning the PFE here too ties the Experience and
                    Projects sections together — shows context and depth. */}
              </p>

              {/* Achievement badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-[5px] border border-[#5b8ef5]/20 bg-[#5b8ef5]/8 rounded-[4px]"
                style={{ background: "rgba(91,142,245,0.06)" }}
              >
                <span className="text-[#7aaaff] text-[11px]">★</span>
                <span
                  className="text-[10px] text-[#7aaaff] tracking-[1.5px] uppercase"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {edu.achievement_en}
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
    );
}