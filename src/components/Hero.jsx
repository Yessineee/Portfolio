import {useState,useEffect} from "react"
import { CheckCircle2 } from "lucide-react"
import {data} from "../data/content"
import { useLanguage } from "../hooks/useLanguage"
import { translations } from "../data/translations"



export default function Hero() {
    const [displayed, setDisplayed] = useState("")
    const [titleIndex, setTitleIndex] = useState(0)
    const [deleting, setDeleting] = useState(false)

    const { lang } = useLanguage()
    const t = translations[lang]

    const titles = t.hero.titles

    useEffect(() => {
    const current = titles[titleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1))
      }, 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1))
      }, 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setTitleIndex((prev) => (prev + 1) % titles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, titleIndex, lang])

  useEffect(() => {
  setDisplayed("")
  setDeleting(false)
  setTitleIndex(0)
}, [lang])

    return (
        <section className="relative min-h-screen pt-16 px-6 md:px-14 pb-0 flex flex-col border-b border-white/5 overflow-hidden">

      
        <div className="absolute top-[-300px] right-[-200px] w-[800px] h-[800px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(50,90,220,0.07) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[5%] left-[-200px] w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(80,50,180,0.05) 0%, transparent 70%)" }} />
        

        <div className="flex-1 flex items-center">
            <div className="grid w-full gap-10 lg:gap-12 grid-cols-1 lg:grid-cols-[1fr_360px]">

            <div className="flex flex-col justify-center">

                <div className="flex items-center gap-3 mb-7">
                <span
                    className="text-[11px] text-[#4a5a8a] tracking-[3px] uppercase"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                    {data.location}
                </span>

                </div>

                <h1
                className="font-light leading-[0.9] tracking-[-4px] mb-8 text-[#d8e0f5]"
                style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(48px, 13vw, 108px)" }}
                >
                Yessine
                <br />
                <em className="italic text-[#7aaaff]">Helal</em>
                
                </h1>

                <div
                className="flex items-center gap-2 mb-8 text-[#8898c8] text-[15px]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                <span className="text-[#5b8ef5]">&gt;</span>
                <span>{displayed}</span>
                <span className="w-[8px] h-[15px] bg-[#7aaaff] animate-pulse inline-block" />
                </div>

                <p className="text-[15px] text-[#6b7db3] leading-[1.85] max-w-[420px] mb-10"
                style={{ fontFamily: "'Inter', sans-serif" }}>
                {t.hero.bio}
                </p>

                <div className="flex gap-3">
                <a
                    href="#projects"
                    className="inline-flex items-center px-7 py-3 bg-[#5b8ef5] text-white text-[11px] tracking-[1.5px] uppercase font-medium rounded-md hover:bg-[#4a7ef0] transition-all duration-200 hover:-translate-y-px"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                >
                    {t.hero.viewWork}
                </a>
                <a
                    href="/yessine_helal.pdf"
                    download
                    className="inline-flex items-center px-7 py-3 bg-transparent text-[#d8e0f5] text-[11px] tracking-[1.5px] uppercase font-medium rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-200"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                >
                    {t.hero.downloadCV}
                </a>
                </div>

            </div>

            <div className="flex items-center justify-center mt-8 lg:mt-0">
                <div className="w-full rounded-xl overflow-hidden border border-white/[0.06] shadow-[0_24px_64px_rgba(0,0,0,0.4)]"
                style={{ background: "#0b0e1a" }}>

                <div className="h-10 flex items-center px-4 gap-[7px] border-b border-white/[0.06]"
                    style={{ background: "#101426" }}>
                    <div className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]" />
                    <div className="w-[11px] h-[11px] rounded-full bg-[#ffbd2e]" />
                    <div className="w-[11px] h-[11px] rounded-full bg-[#28c840]" />
                    <span
                    className="mx-auto text-[11px] text-[#4a5a8a] tracking-[1px]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                    yessine — zsh
                    </span>
                </div>

                <div
                    className="p-5 text-[12.5px] leading-[2.1] pb-8"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                    <div className="flex gap-2">
                    <span className="text-[#7aaaff]">~$</span>
                    <span className="text-[#8898c8]">{t.hero.terminal.whoami}</span>
                    </div>
                    <div className="pl-5 text-[#5af078]">yessine_helal</div>

                    <div className="flex gap-2">
                    <span className="text-[#7aaaff]">~$</span>
                    <span className="text-[#8898c8]">{t.hero.terminal.skills}</span>
                    </div>
                    <div className="pl-5 text-[#7aaaff]">Python · Java · React · Spring Boot</div>
                    <div className="pl-5 text-[#7aaaff]">Kali Linux · Nmap · Wireshark</div>

                    <div className="flex gap-2">
                    <span className="text-[#7aaaff]">~$</span>
                    <span className="text-[#8898c8]">{t.hero.terminal.status}</span>
                    </div>
                    <div className="pl-5 flex items-center gap-2 text-[#5af078]">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                    <span>{t.hero.terminal.internships}</span>
                    </div>
                    <div className="pl-5 flex items-center gap-2 text-[#5af078]">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                    <span>{t.hero.terminal.collabs}</span>
                    </div>

                    <div className="flex gap-2">
                    <span className="text-[#7aaaff]">~$</span>
                    <span className="text-[#8898c8]">ls certifications/</span>
                    </div>
                    <div className="pl-5 text-[#4a5a8a]">cisco/&nbsp;&nbsp;aws/&nbsp;&nbsp;nvidia/</div>

                    <div className="flex items-center gap-2 mt-1 leading-none">
                    <span className="text-[#7aaaff] leading-none">~$</span>
                    <span
                        className="w-[8px] h-[13px] bg-[#7aaaff] animate-pulse self-center"
                        style={{ display: "inline-block" }}
                    />
                    </div>
                </div>

                </div>
            </div>

            </div>
        </div>

        <div className="border-t border-white/5 py-5 mt-10">
            <p
            className="text-center text-[10px] md:text-[11px] text-[#4a5a8a] tracking-[2px] leading-[2] px-2"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
            {t.hero.statusLine}
            </p>
            
        </div>

        </section>
    );
}