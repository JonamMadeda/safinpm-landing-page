import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import TechStack from './components/TechStack'
import { FinalCta, Footer } from './components/Closing'
import { LINKS } from './data'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden text-slate-900">
      <div className="bg-blue-50 border-b border-blue-100 text-center text-[13px] py-2 px-4 text-blue-800">
        <span className="font-mono text-blue-600">v1.0</span> — Open-source & free forever. MIT /
        Apache-2.0
        <a
          href={LINKS.releases}
          className="underline underline-offset-4 decoration-blue-300 hover:text-blue-950 ml-2 font-medium"
        >
          Get the .msi →
        </a>
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <TechStack />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
