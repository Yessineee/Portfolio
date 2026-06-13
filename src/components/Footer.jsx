import { ArrowUpRight, FolderCode, Mail } from "lucide-react"
import { FaLinkedinIn } from "react-icons/fa"
import { data } from "../data/content"
import useScrollReveal from "../hooks/useScrollReveal"


export default function Footer() {

  const year = new Date().getFullYear()
  const footerRef = useScrollReveal({ delay: "0s", distance: "16px" })

  return (
      <footer className="px-6 md:px-14 py-7 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10" ref={footerRef}>

      {/* Logo */}
      <div
        className="text-[16px] font-light text-[#8898c8] tracking-[-0.3px]"
        style={{ fontFamily: "'Fraunces', serif" }}
      >
        Yessine <em className="italic text-[#7aaaff]">Helal</em>
      </div>

      {/* Copyright */}
      <div
        className="text-[11px] text-[#4a5a8a] tracking-[1px] text-center order-3 md:order-2"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        © {year} - Designed & built by Yessine Helal
      </div>

      {/* Links */}
      <div className="flex items-center gap-7 order-2 md:order-3">
        {[
          { label: "GitHub", href: data.github, icon: FolderCode },
          { label: "LinkedIn", href: data.linkedin, icon: FaLinkedinIn },
          { label: "Email", href: `mailto:${data.email}`, icon: Mail },
        ].map((link, index) => (
          <a
            key={index}
            href={link.href}
            target={link.href.startsWith("mailto") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] text-[#4a5a8a] hover:text-[#d8e0f5] tracking-[1.5px] uppercase transition-colors duration-200"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {link.icon && <link.icon className="h-3.5 w-3.5" />}
            <span>{link.label}</span>
            <ArrowUpRight className="h-3 w-3" />
          </a>
        ))}
      </div>

    </footer>
  );
}