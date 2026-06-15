import { useState } from "react"
import { LanguageContext } from "./LanguageContext.js"

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en")
  const toggleLang = () => setLang((prev) => (prev === "en" ? "fr" : "en"))

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}