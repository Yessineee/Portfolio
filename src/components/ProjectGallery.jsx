import { useRef, useState } from "react"

export default function ProjectGallery({ images }) {
  const scrollRef = useRef()
  const [selected, setSelected] = useState(null)
  // selected holds the currently zoomed image, or null if none.

  const scroll = (direction) => {
    scrollRef.current.scrollBy({ left: direction * 360, behavior: "smooth" })
  }

  return (
    <>
      <div className="relative mt-6">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-2 scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {images.map((img, i) => (
            <div key={i} className="flex-shrink-0 w-[340px]">
              <button
                onClick={() => setSelected(img)}
                className="block w-full rounded-lg overflow-hidden border border-white/[0.06] hover:border-[#5b8ef5]/30 transition-all duration-200 cursor-zoom-in"
              >
                <div className="h-8 flex items-center px-3 gap-[6px] bg-[#101426]">
                  <div className="w-[9px] h-[9px] rounded-full bg-[#ff5f57]" />
                  <div className="w-[9px] h-[9px] rounded-full bg-[#ffbd2e]" />
                  <div className="w-[9px] h-[9px] rounded-full bg-[#28c840]" />
                </div>
                <img src={img.src} alt={img.label} className="w-full h-auto block" />
              </button>
              <p
                className="text-[11px] text-[#4a5a8a] tracking-[1px] mt-2"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {img.label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-3">
          <button
            onClick={() => scroll(-1)}
            className="w-8 h-8 flex items-center justify-center border border-white/10 rounded text-[#4a5a8a] hover:text-[#7aaaff] hover:border-[#5b8ef5]/30 transition-all duration-200"
          >
            ←
          </button>
          <button
            onClick={() => scroll(1)}
            className="w-8 h-8 flex items-center justify-center border border-white/10 rounded text-[#4a5a8a] hover:text-[#7aaaff] hover:border-[#5b8ef5]/30 transition-all duration-200"
          >
            →
          </button>
        </div>
      </div>

      {/* Lightbox overlay */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200] flex items-center justify-center p-8 cursor-zoom-out"
          
        >
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* stopPropagation prevents closing when clicking the image itself —
                only clicking the dark backdrop closes it. */}
            <div className="rounded-lg overflow-hidden border border-white/10">
              <div className="h-9 flex items-center px-3 gap-[6px] bg-[#101426]">
                <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
                <div className="w-[10px] h-[10px] rounded-full bg-[#ffbd2e]" />
                <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
              </div>
              <img src={selected.src} alt={selected.label} className="w-full h-auto block" style={{ maxHeight: "80vh", objectFit: "contain" }} />
            </div>
            <p
              className="text-[12px] text-[#8898c8] tracking-[1px] mt-3 text-center"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {selected.label} : Click anywhere to close
            </p>
          </div>
        </div>
      )}
    </>
  )
}