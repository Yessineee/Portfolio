import { useState, useEffect } from "react"
import { data } from "../data/content"


export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState("about")


    useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
      const sections = ["about", "skills", "projects", "experience", "certifications", "contact"]
      // List of all section IDs to observe.

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id)
              // When a section enters the viewport, mark it as active.
            }
          })
        },
        { rootMargin: "-50% 0px -50% 0px" }
        // rootMargin shrinks the observation area to a thin horizontal line
        // at the VERTICAL CENTER of the viewport.
        // A section is only "active" when it crosses this center line —
        // much more accurate than triggering on any visibility.
      )

      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      })

      return () => observer.disconnect()
    }, [])

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 h-16 px-14 flex items-center justify-between border-b border-white/5 backdrop-blur-xl transition-all duration-300 ${
      scrolled ? "bg-[#06080f]/90" : "bg-transparent"
    }`}>
      

      <div
        style={{ fontFamily: "'Fraunces', serif" }}
        className="text-[19px] font-light tracking-[-0.5px] text-[#d8e0f5]"
      >
        Yessine <em className="not-italic italic text-[#7aaaff]">Helal</em>
        
      </div>

      {/* Nav links */}
      <ul className="flex gap-10 list-none">
        {["About", "Skills", "Projects", "Experience", "Certifications", "Contact"].map((item) => {
          const id = item.toLowerCase()
          const isActive = activeSection === id

          return (
            <li key={item}>
              <a
                href={`#${id}`}
                className={`text-[11px] tracking-[1.5px] uppercase transition-colors duration-200 ${
                  isActive ? "text-[#7aaaff]" : "text-[#4a5a8a] hover:text-[#d8e0f5]"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item}
              </a>
          </li>
          )    
        })}
      </ul>

      {/* Status indicator */}
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-[#7aaaff] shadow-[0_0_8px_rgba(122,170,255,0.8)] animate-pulse" />
        
        <span
          className="text-[11px] text-[#7aaaff] tracking-[1px]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Open to internships
        </span>
      </div>

    </nav>
    );
}