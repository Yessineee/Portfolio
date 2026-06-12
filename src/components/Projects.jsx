import { ArrowUpRight } from "lucide-react"
import {data} from "../data/content";
import useScrollReveal from "../hooks/useScrollReveal"
import ProjectGallery from "./ProjectGallery"



export default function Projects() {
  const headerRef = useScrollReveal({ delay: "0s", distance: "32px" })
  const listRef = useScrollReveal({ delay: "0.15s", distance: "32px" })

    return (
        <section id="projects" className="px-14 py-24 border-b border-white/5 relative z-10">

      {/* Section header */}
      <div className="mb-14" ref={headerRef}>
        <p
          className="text-[11px] text-[#5b8ef5] tracking-[3px] uppercase mb-3"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Projects
        </p>
        <h2
          className="font-light tracking-[-2px] leading-none text-[#d8e0f5]"
          style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(38px, 4vw, 54px)" }}
        >
          What I've <em className="italic text-[#7aaaff]">built</em>
        </h2>
      </div>

      {/* Projects list */}
      <div className="flex flex-col gap-px bg-white/5" ref={listRef}>

        {data.projects.map((project, index) => (
          <div
            key={index}
            className="grid gap-10 px-8 py-9 bg-[#06080f] hover:bg-[#0b0e1a] transition-colors duration-300 items-start"
            style={{ gridTemplateColumns: "1fr 180px" }}
          >
            {/* Left — project info */}
            <div>

              {/* Title row */}
              <div className="flex items-center gap-3 mb-3">
                <h3
                  className="text-[20px] font-normal text-[#d8e0f5] tracking-[-0.4px]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {project.title}
                </h3>

                {/* Featured badge */}
                {project.featured && (
                  <span
                    className="text-[9px] px-2 py-[3px] border border-[#5b8ef5]/30 text-[#7aaaff] rounded-[3px] tracking-[2px] uppercase"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Featured
                  </span>
                )}

                {/* Confidential badge */}
                {project.confidential && (
                  <span
                    className="text-[9px] px-2 py-[3px] border border-white/10 text-[#4a5a8a] rounded-[3px] tracking-[2px] uppercase"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Confidential
                  </span>
                )}
                {/* Only renders if project.confidential is true —
                    signals a serious private project without apology. */}
              </div>

              {/* Description */}
              <p
                className="text-[13px] text-[#8898c8] leading-[1.75] mb-5 max-w-[600px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {project.description}
              </p>

              {/* Tech stack */}
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

            {/* Right — links */}
            <div className="flex flex-col gap-3 items-end pt-1">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[11px] text-[#4a5a8a] hover:text-[#7aaaff] tracking-[1.5px] uppercase transition-colors duration-200"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <span>GitHub</span>
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
                  <span>Live Demo</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
              {project.confidential && !project.github && !project.demo && (
                <span
                  className="text-[11px] text-[#4a5a8a] tracking-[1.5px] uppercase text-right"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Private repo
                </span>
                
              )}
            </div>

          </div>
        ))}
      </div>

    </section>
    );
}