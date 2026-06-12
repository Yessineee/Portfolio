import { ArrowUpRight } from "lucide-react"
import { data } from "../data/content"
import useScrollReveal from "../hooks/useScrollReveal"




const issuerConfig = {
  "Cisco": {
    color: "#00bceb",
  },
  "Amazon Web Services": {
    color: "#ff9900",
  },
  "NVIDIA": {
    color: "#76b900",
  },
}

export default function Certifications() {
  const headerRef = useScrollReveal({ delay: "0s", distance: "32px" })
  const gridRef = useScrollReveal({ delay: "0.15s", distance: "32px" })
  const bottomRef = useScrollReveal({ delay: "0.25s", distance: "32px" })

  return (
        <section id="certifications" className="px-14 py-24 border-b border-white/5 relative z-10">

      <div className="mb-14" ref={headerRef}>
        <p
          className="text-[11px] text-[#5b8ef5] tracking-[3px] uppercase mb-3"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Certifications
        </p>
        <h2
          className="font-light tracking-[-2px] leading-none text-[#d8e0f5]"
          style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(38px, 4vw, 54px)" }}
        >
          My <em className="italic text-[#7aaaff]">credentials</em>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-px bg-white/5" ref={gridRef}>
        

        {data.certifications.map((cert, index) => {
          const config = issuerConfig[cert.issuer]

          return (
            <div
              key={index}
              className="bg-[#06080f] hover:bg-[#0b0e1a] transition-colors duration-300 p-8 flex flex-col gap-3"
            >

              <span
                className="text-[10px] tracking-[2px] uppercase font-medium"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: config?.color,
                  
                }}
              >
                {cert.issuer}
              </span>

              <h3
                className="text-[15px] font-normal text-[#d8e0f5] leading-[1.4]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {cert.name}
              </h3>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <span
                  className="text-[11px] text-[#4a5a8a]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {cert.date}
                </span>
                <a
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[11px] tracking-[1px] uppercase transition-colors duration-200 hover:opacity-70"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: config?.color,
                  }}
                >
                  <span>View credential</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>

            </div>
          )
        })}
      </div>

      <div className="mt-12 flex items-center gap-4" ref={bottomRef}>
        <div className="flex-1 h-px bg-white/5" />
        <span
          className="text-[11px] text-[#4a5a8a] tracking-[2px] uppercase"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Continuously learning
        </span>
        <div className="flex-1 h-px bg-white/5" />
      </div>

    </section>
    );
}