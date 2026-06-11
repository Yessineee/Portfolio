import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { ArrowUpRight, CheckCircle2, FolderCode, Mail, XCircle } from "lucide-react"
import { FaLinkedinIn } from "react-icons/fa"
import { data } from "../data/content"
import useScrollReveal from "../hooks/useScrollReveal"


const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY


export default function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState("idle")
  const headerRef = useScrollReveal({ delay: "0s", distance: "32px" })
  const leftRef = useScrollReveal({ delay: "0.1s", distance: "32px" })
  const rightRef = useScrollReveal({ delay: "0.2s", distance: "32px" })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus("success")
      formRef.current.reset()
    } catch {
      setStatus("error")
    }
  }
  return (
    <section id="contact" className="px-14 py-24 border-b border-white/5 relative z-10">

      {/* Section header */}
      <div className="mb-14" ref={headerRef}>
        <p
          className="text-[11px] text-[#5b8ef5] tracking-[3px] uppercase mb-3"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Contact
        </p>
        <h2
          className="font-light tracking-[-2px] leading-none text-[#d8e0f5]"
          style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(38px, 4vw, 54px)" }}
        >
          Get in <em className="italic text-[#7aaaff]">touch</em>
        </h2>
      </div>

      {/* Two column layout */}
      <div className="grid gap-20" style={{ gridTemplateColumns: "1fr 1fr" }}>

        {/* Left — info */}
        <div ref={leftRef}>
          <p
            className="text-[15px] text-[#8898c8] leading-[1.9] mb-6 max-w-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {/* Rewrite this in your own words — keep it honest and direct. */}
            Looking for internship opportunities in cybersecurity or
            software engineering. Open to collaborations and
            interesting projects.
          </p>

          {/* Contact links */}
          <div className="flex flex-col">
            {[
              { label: "Email", value: data.email, href: `mailto:${data.email}`, icon: Mail },
              { label: "GitHub Profile", value: "github.com/Yessineee", href: data.github, icon: FolderCode },
              { label: "LinkedIn Profile", value: "linkedin.com/in/yessine-helal", href: data.linkedin, icon: FaLinkedinIn },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-between py-4 border-b border-white/5 first:border-t first:border-white/5 group transition-colors duration-200"
              >
                <span className="flex items-center gap-3">
                  {link.icon && (
                    <link.icon className="h-4 w-4 text-[#4a5a8a] group-hover:text-[#7aaaff] transition-colors duration-200" />
                  )}
                  <span className="flex flex-col">
                    <span
                      className="text-[13px] text-[#8898c8] group-hover:text-[#d8e0f5] transition-colors duration-200"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {link.label}
                    </span>
                    <span
                      className="text-[11px] text-[#4a5a8a] group-hover:text-[#7aaaff] transition-colors duration-200"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {link.value}
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-[#4a5a8a] group-hover:text-[#7aaaff] transition-all duration-200" />
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div ref={rightRef}>
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Name */}
            <div className="flex flex-col gap-2">
            <label
              className="text-[10px] text-[#4a5a8a] tracking-[2px] uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="bg-white/[0.025] border border-white/[0.06] rounded-md px-4 py-3 text-[13px] text-[#d8e0f5] placeholder-[#4a5a8a] outline-none focus:border-[#5b8ef5]/40 transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
            <label
              className="text-[10px] text-[#4a5a8a] tracking-[2px] uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="bg-white/[0.025] border border-white/[0.06] rounded-md px-4 py-3 text-[13px] text-[#d8e0f5] placeholder-[#4a5a8a] outline-none focus:border-[#5b8ef5]/40 transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
            <label
              className="text-[10px] text-[#4a5a8a] tracking-[2px] uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your message..."
              className="bg-white/[0.025] border border-white/[0.06] rounded-md px-4 py-3 text-[13px] text-[#d8e0f5] placeholder-[#4a5a8a] outline-none focus:border-[#5b8ef5]/40 transition-colors duration-200 resize-none"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 py-3 bg-[#5b8ef5] text-white text-[11px] tracking-[1.5px] uppercase font-medium rounded-md hover:bg-[#4a7ef0] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {/* Status messages */}
            {status === "success" && (
              <p
                className="flex items-center justify-center gap-2 text-[12px] text-center text-[#5af078] tracking-[1px]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                <span>Message sent successfully</span>
              </p>
            )}
            {status === "error" && (
              <p
                className="flex items-center justify-center gap-2 text-[12px] text-center text-red-400 tracking-[1px]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <XCircle className="h-3.5 w-3.5 shrink-0" />
                <span>Something went wrong - try again</span>
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  )
}