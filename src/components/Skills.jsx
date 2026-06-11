import {data} from '../data/content';
import useScrollReveal from "../hooks/useScrollReveal"


export default function Skills() {

    const headerRef = useScrollReveal({ delay: "0s", distance: "32px" })
    const tableRef = useScrollReveal({ delay: "0.15s", distance: "32px" })
    const bottomRef = useScrollReveal({ delay: "0.25s", distance: "32px" })

    return (
        <section id="skills" className="px-14 py-24 border-b border-white/5 relative z-10">

        {/* Section header */}
        <div className="mb-14" ref={headerRef}>
            <p
            className="text-[11px] text-[#5b8ef5] tracking-[3px] uppercase mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
            Skills
            </p>
            <h2
            className="font-light tracking-[-2px] leading-none text-[#d8e0f5]"
            style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(38px, 4vw, 54px)" }}
            >
            What I <em className="italic text-[#7aaaff]">know</em>
            </h2>
        </div>

        {/* Skills table */}
        <div className="flex flex-col" ref={tableRef}>
            {data.skills.map((group, index) => (
            <div
                key={index}
                className="grid gap-8 py-5 border-b border-white/5 first:border-t first:border-white/5 items-center"
                style={{ gridTemplateColumns: "160px 1fr" }}
            >
                {/* Category label */}
                <span
                className="text-[11px] text-[#4a5a8a] tracking-[2px] uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                {group.category}
                </span>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2">
                {group.items.map((skill, i) => (
                    <span
                    key={i}
                    className="text-[12px] px-3 py-[5px] border border-white/[0.07] text-[#8898c8] rounded-[4px] hover:border-[#5b8ef5]/30 hover:text-[#7aaaff] hover:bg-[#5b8ef5]/10 transition-all duration-200 cursor-default"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                    {skill}
                    </span>
                ))}
                </div>

            </div>
            ))}
        </div>

        {/* Bottom note */}
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