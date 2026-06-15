import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { LanguageProvider } from "./context/LanguageContext.jsx"

function App() {

  return (
    <LanguageProvider>
      <main className='bg-[#050508] text-white min-h-screen'>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  )
}

export default App
