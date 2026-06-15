import { ArrowUpRight } from "lucide-react"
import {data} from "../data/content";
import useScrollReveal from "../hooks/useScrollReveal"
import ProjectGallery from "./ProjectGallery"
import { useLanguage } from "../hooks/useLanguage"
import { translations } from "../data/translations"



export default function Projects() {
  const headerRef = useScrollReveal({ delay: "0s", distance: "32px" })
  const listRef = useScrollReveal({ delay: "0.15s", distance: "32px" })
  const { lang } = useLanguage()
  const t = translations[lang]

    return (
      <section id="projects" className="px-6 md:px-14 py-16 md:py-24 border-b border-white/5 relative z-10">

      <div className="mb-14" ref={headerRef}>
        <p
          className="text-[11px] text-[#5b8ef5] tracking-[3px] uppercase mb-3"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {t.projects.label}
        </p>
        <h2
          className="font-light tracking-[-2px] leading-none text-[#d8e0f5]"
          style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(38px, 4vw, 54px)" }}
        >
          {t.projects.title1} <em className="italic text-[#7aaaff]">{t.projects.title2}</em>
        </h2>
      </div>

      <div className="flex flex-col gap-px bg-white/5" ref={listRef}>

        {data.projects.map((project, index) => (
          <div
            key={index}
            className="grid gap-6 px-4 md:px-8 py-7 md:py-9 bg-[#06080f] hover:bg-[#0b0e1a] transition-colors duration-300 items-start grid-cols-1 md:grid-cols-[1fr_180px]"
          >
            <div className="min-w-0">

              <div className="flex items-center gap-3 mb-3">
                <h3
                  className="text-[20px] font-normal text-[#d8e0f5] tracking-[-0.4px]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {lang === "fr" ? project.title_fr : project.title_en}
                </h3>

                {project.featured && (
                  <span
                    className="text-[9px] px-2 py-[3px] border border-[#5b8ef5]/30 text-[#7aaaff] rounded-[3px] tracking-[2px] uppercase"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {t.projects.featured}
                  </span>
                )}

                {project.confidential && (
                  <span
                    className="text-[9px] px-2 py-[3px] border border-white/10 text-[#4a5a8a] rounded-[3px] tracking-[2px] uppercase"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {t.projects.confidential}
                  </span>
                )}
                
              </div>

              <p
                className="text-[13px] text-[#8898c8] leading-[1.75] mb-5 max-w-[600px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {lang === "fr" ? project.description_fr : project.description_en}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2 py-1 border border-white/[0.06] text-[#4a5a8a] rounded-[3px]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.screenshots && (
                <ProjectGallery images={project.screenshots} />
              )}

            </div>

            <div className="flex flex-row md:flex-col gap-4 md:gap-3 items-start md:items-end pt-1 flex-wrap">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[11px] text-[#4a5a8a] hover:text-[#7aaaff] tracking-[1.5px] uppercase transition-colors duration-200"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <span>{t.projects.github}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[11px] text-[#4a5a8a] hover:text-[#7aaaff] tracking-[1.5px] uppercase transition-colors duration-200"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <span>{t.projects.liveDemo}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
              {project.confidential && !project.github && !project.demo && (
                <span
                  className="text-[11px] text-[#4a5a8a] tracking-[1.5px] uppercase text-left md:text-right"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {t.projects.privateRepo}
                </span>
                
              )}
            </div>

          </div>
        ))}
      </div>

    </section>
    );
}