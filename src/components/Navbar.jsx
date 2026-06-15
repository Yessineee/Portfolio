import { useState, useEffect } from "react"
import { useLanguage } from "../hooks/useLanguage"
import { translations } from "../data/translations"
import { Globe } from "lucide-react"



export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState("about")
    const [mobileOpen, setMobileOpen] = useState(false)

    const { lang, toggleLang } = useLanguage()
    const t = translations[lang]

    useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
      const sections = ["about", "skills", "projects", "experience", "certifications", "contact"]

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id)
            }
          })
        },
        { rootMargin: "-50% 0px -50% 0px" }
        
      )

      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      })

      return () => observer.disconnect()
    }, [])

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 h-16 px-6 md:px-14 flex items-center justify-between border-b border-white/5 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "bg-[#06080f]/90" : "bg-transparent"
      }`}>
      

      <div
        style={{ fontFamily: "'Fraunces', serif" }}
        className="text-[19px] font-light tracking-[-0.5px] text-[#d8e0f5]"
      >
        Yessine <em className="not-italic italic text-[#7aaaff]">Helal</em>
        
      </div>

      {/* Nav links */}
      <ul className="hidden md:flex gap-10 list-none">
        {["about", "skills", "projects", "experience", "certifications", "contact"].map((id) => {
        const isActive = activeSection === id
        return (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`text-[11px] tracking-[1.5px] uppercase transition-colors duration-200 ${
                isActive ? "text-[#7aaaff]" : "text-[#4a5a8a] hover:text-[#d8e0f5]"
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {t.nav[id]}
            </a>
          </li>
        )
      })}
      </ul>

      {/* Status indicator */}
      <div className="hidden md:flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-[#7aaaff] shadow-[0_0_8px_rgba(122,170,255,0.8)] animate-pulse" />
        
        <span
          className="text-[11px] text-[#7aaaff] tracking-[1px]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {t.nav.status}
        </span>
      </div>
      <button
        onClick={toggleLang}
        className="hidden md:flex items-center gap-1.5 px-2.5 h-7 rounded border border-white/10 text-[10px] tracking-[1px] text-[#8898c8] hover:border-[#5b8ef5]/30 hover:text-[#7aaaff] transition-all duration-200"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        <Globe className="h-3.5 w-3.5" />
        {lang === "en" ? "FR" : "EN"}
              
      </button>
        
      {/* Hamburger button — mobile only */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-[5px] w-6 h-6 items-center justify-center"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[1.5px] bg-[#d8e0f5] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-[#d8e0f5] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-[#d8e0f5] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>

        {/* Mobile menu overlay */}
        {mobileOpen && (
          <div className="md:hidden fixed inset-x-0 top-16 bottom-0 z-[60] overflow-x-auto overflow-y-hidden bg-[#06080f]/98 px-6 py-8 pb-12 backdrop-blur-xl">
          <div className="flex min-w-max items-center gap-4 pb-12 pt-1 pr-4">
            {["about", "skills", "projects", "experience", "certifications", "contact"].map((item) => {
              const id = item.toLowerCase()
              const isActive = activeSection === id
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`flex-shrink-0 rounded-md px-4 py-3 text-[14px] sm:text-[16px] tracking-[2px] uppercase transition-colors duration-200 ${
                    isActive ? "text-[#7aaaff]" : "text-[#8898c8]"
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {t.nav[item]}
                </a>
              )
            })}

            <div className="flex flex-shrink-0 items-center gap-2 px-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#7aaaff] shadow-[0_0_8px_rgba(122,170,255,0.8)] animate-pulse" />
              <span
                className="text-[11px] text-[#7aaaff] tracking-[1px]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {t.nav.status}
              </span>
            </div>
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-2.5 h-7 rounded border border-white/10 text-[10px] tracking-[1px] text-[#8898c8] hover:border-[#5b8ef5]/30 hover:text-[#7aaaff] transition-all duration-200"
            >
              <Globe className="h-3.5 w-3.5" />
              {lang === "en" ? "FR" : "EN"}
              
            </button>
            </div>
          </div>
        )}

      </nav>
      );
}