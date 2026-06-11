import { useState, useEffect } from "react"


export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
    }, [])


    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 h-16 px-14 flex items-center justify-between border-b border-white/5 backdrop-blur-xl transition-all duration-300 ${
      scrolled ? "bg-[#06080f]/90" : "bg-transparent"
    }`}>
      {/* h-16 — fixed 64px height, consistent with the mockup.
          px-14 — generous horizontal padding matching section padding.
          backdrop-blur-xl — frosted glass effect on the navbar.
          bg-transparent at top so it blends into the hero seamlessly. */}

      {/* Logo */}
      <div
        style={{ fontFamily: "'Fraunces', serif" }}
        className="text-[19px] font-light tracking-[-0.5px] text-[#d8e0f5]"
      >
        Yessine <em className="not-italic italic text-[#7aaaff]">Helal</em>
        {/* Fraunces is a variable serif font — font-light gives weight 300.
            The italic em tag uses the font's true italic variant,
            which is more elegant than CSS fake-italic. */}
      </div>

      {/* Nav links */}
      <ul className="flex gap-10 list-none">
        {["About", "Skills", "Projects", "Experience", "Certifications", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="font-mono text-[11px] text-[#4a5a8a] hover:text-[#d8e0f5] tracking-[1.5px] uppercase transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Status indicator */}
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-[#7aaaff] shadow-[0_0_8px_rgba(122,170,255,0.8)] animate-pulse" />
        {/* shadow with rgba creates the glow effect around the dot.
            animate-pulse makes it fade in and out — signals "live" status. */}
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