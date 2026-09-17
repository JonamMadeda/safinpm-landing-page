import { useState } from 'react'
import { LINKS } from '../data'

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .3.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-sky-400 p-[1.5px] shadow-glow">
            <span className="w-full h-full rounded-[10px] bg-white flex items-center justify-center font-mono text-blue-600 font-bold text-sm">
              &gt;_
            </span>
          </span>
          <span className="font-bold text-[18px] tracking-tight text-slate-900">
            safi<span className="text-blue-600">npm</span>
          </span>
          <span className="hidden sm:inline font-mono text-[11px] text-slate-500 border border-slate-200 bg-slate-50 rounded-md px-1.5 py-0.5 ml-1">
            tauri v2
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7 text-[14px] text-slate-600 font-medium">
          <a href="#features" className="hover:text-slate-900 transition">Features</a>
          <a href="#how" className="hover:text-slate-900 transition">How It Works</a>
          <a href="#stack" className="hover:text-slate-900 transition">Tech Stack</a>
          <a href={LINKS.repo} className="hover:text-slate-900 transition flex items-center gap-1.5">
            <GitHubIcon /> GitHub
          </a>
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href={LINKS.releases}
            className="hidden sm:inline-flex text-[13.5px] font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2.5 transition shadow-[0_8px_25px_-8px_rgba(37,99,235,.7)]"
          >
            ⬇ Download for Windows
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 text-slate-600"
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-200 px-5 py-4 space-y-3 text-[15px] bg-white">
          <a href="#features" onClick={() => setOpen(false)} className="block text-slate-700">Features</a>
          <a href="#how" onClick={() => setOpen(false)} className="block text-slate-700">How It Works</a>
          <a href="#stack" onClick={() => setOpen(false)} className="block text-slate-700">Tech Stack</a>
          <a href={LINKS.repo} onClick={() => setOpen(false)} className="block text-slate-700">GitHub</a>
          <a
            href={LINKS.releases}
            className="block text-center font-semibold bg-blue-600 text-white rounded-lg px-4 py-2.5 mt-2"
          >
            ⬇ Download for Windows
          </a>
        </div>
      )}
    </header>
  )
}
