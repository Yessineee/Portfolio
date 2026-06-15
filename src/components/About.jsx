import {data} from  "../data/content"
import useScrollReveal from "../hooks/useScrollReveal"
import GitHubActivity from "./GitHubActivity";
import { useLanguage } from "../hooks/useLanguage"
import { translations } from "../data/translations"

export default function About() {
    const headerRef = useScrollReveal({ delay: "0s", distance: "32px" })
    const leftRef = useScrollReveal({ delay: "0.1s", distance: "32px" })
    const rightRef = useScrollReveal({ delay: "0.2s", distance: "32px" })
    const langRef = useScrollReveal({ delay: "0.25s", distance: "32px" })

    const { lang } = useLanguage()
    const t = translations[lang]


    return (
      <section id="about" className="px-6 md:px-14 py-16 md:py-24 border-b border-white/5 relative z-10">

      <div className="mb-14" ref={headerRef}>
        <p
          className="text-[11px] text-[#5b8ef5] tracking-[3px] uppercase mb-3"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {t.about.label}
        </p>
        <h2
          className="font-light tracking-[-2px] leading-none text-[#d8e0f5]"
          style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(38px, 4vw, 54px)" }}
        >
          {t.about.title1} <em className="italic text-[#7aaaff]">{t.about.title2}</em>
        </h2>
      </div>

      <div className="grid gap-12 lg:gap-28 grid-cols-1 lg:grid-cols-[1fr_480px]">

        <div ref={leftRef}>
          <p
            className="text-[15px] text-[#8898c8] leading-[1.9] mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {t.hero.bio}
          </p>

          <div className="mt-14 pt-14 border-t border-white/5" ref={langRef}>
            <p
              className="text-[11px] text-[#4a5a8a] tracking-[3px] uppercase mb-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {t.about.languagesLabel}
            </p>
            <div className="flex flex-col gap-0">
              {data.languages.map((language, index) => (
                <div
                  key={index}
                  className="flex items-baseline justify-between py-3 border-b border-white/5 first:border-t first:border-white/5"
                >
                  <span
                    className="text-[13px] text-[#d8e0f5]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {language.name}
                  </span>
                  <span
                    className="text-[11px] text-[#4a5a8a] tracking-[1px]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {t.about.langLevels[language.level]}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
        </div>


        <div ref={rightRef}>
          <div className="flex flex-col pl-0 lg:pl-8 border-l-0 lg:border-l border-[#5b8ef5]/20">
            {[
              { key: t.about.infoTable.location, val: data.location, accent: false },
              { key: t.about.infoTable.degree, val: t.about.infoTable.degreeValue, accent: false },
              { key: t.about.infoTable.institution, val: lang === "fr" ? data.education[0].school_fr : data.education[0].school_en, accent: false },
              { key: t.about.infoTable.period, val: data.education[0].period, accent: false },
              { key: t.about.infoTable.achievement, val: lang === "fr" ? data.education[0].achievement_fr : data.education[0].achievement_en, accent: true },
              { key: t.about.infoTable.status, val: t.about.infoTable.statusValue, accent: true },
            ].map((row, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-6 py-4 border-b border-white/5 first:border-t first:border-white/5"
              >
                <span
                  className="text-[11px] text-[#4a5a8a] tracking-[2px] uppercase shrink-0"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {row.key}
                </span>
                <span
                  className={`text-[13px] text-left sm:text-right ${row.accent ? "text-[#7aaaff]" : "text-[#d8e0f5]"}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {row.val}
                  
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