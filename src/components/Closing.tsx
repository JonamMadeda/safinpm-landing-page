import { LINKS } from '../data'

export function FinalCta() {
  return (
    <section className="max-w-6xl mx-auto px-5 pb-16 md:pb-24 bg-white">
      <div className="relative rounded-3xl overflow-hidden border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-8 md:p-14 text-center shadow-glow">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-blue-400/20 blur-[100px] rounded-full pointer-events-none" />
        <h2 className="relative text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          Your SSD is begging you.
          <br />
          Free it tonight.
        </h2>
        <p className="relative text-slate-600 mt-3 max-w-lg mx-auto text-[15px]">
          Download the Windows installer, point it at your dev folder, and watch gigabytes stream
          back — safely binned, never shredded.
        </p>
        <div className="relative mt-7 flex flex-col sm:flex-row justify-center gap-3">
          <a
            href={LINKS.releases}
            className="inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-[15px] rounded-xl px-8 py-3.5 transition"
          >
            ⬇ Download for Windows (.msi)
          </a>
          <a
            href={LINKS.repo}
            className="inline-flex justify-center items-center gap-2 border border-slate-300 hover:border-slate-400 bg-white text-slate-900 font-semibold text-[15px] rounded-xl px-8 py-3.5 transition"
          >
            Read the source
          </a>
        </div>
        <p className="relative mt-4 font-mono text-[12px] text-slate-500">
          free & open-source · MIT / Apache-2.0 · by{' '}
          <a href={LINKS.author} className="text-blue-600 hover:text-blue-700">
            Jonam Madeda
          </a>
        </p>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5 py-12 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-8 h-8 rounded-lg bg-white border border-blue-200 flex items-center justify-center font-mono text-blue-600 font-bold text-[13px]">
              &gt;_
            </span>
            <span className="font-bold text-slate-900">
              safi<span className="text-blue-600">npm</span>
            </span>
          </div>
          <p className="text-slate-500 text-[13.5px] leading-relaxed max-w-xs">
            Find stale <code className="font-mono text-[12px] text-slate-700">node_modules</code>,
            rank by last activity, and bin them safely. Local-first, open-source, Windows-native.
          </p>
          <p className="text-slate-400 text-[12.5px] mt-4">© 2026 Jonam Madeda · MIT / Apache-2.0</p>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-slate-500 mb-3">Product</p>
          <ul className="space-y-2 text-[14px] text-slate-600">
            <li><a href="#features" className="hover:text-slate-900">Features</a></li>
            <li><a href="#how" className="hover:text-slate-900">How It Works</a></li>
            <li><a href="#stack" className="hover:text-slate-900">Tech Stack</a></li>
            <li><a href={LINKS.releases} className="hover:text-slate-900">Download</a></li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-slate-500 mb-3">Repository</p>
          <ul className="space-y-2 text-[14px] text-slate-600">
            <li><a href={LINKS.repo} className="hover:text-slate-900">Source code</a></li>
            <li><a href={LINKS.releases} className="hover:text-slate-900">Releases</a></li>
            <li><a href={LINKS.issues} className="hover:text-slate-900">Issues</a></li>
            <li><a href={LINKS.author} className="hover:text-slate-900">@JonamMadeda</a></li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-slate-500 mb-3">Safety</p>
          <ul className="space-y-2 text-[14px] text-slate-600">
            <li className="font-mono text-[12.5px]"><span className="text-blue-600">✓</span> Recycle Bin only</li>
            <li className="font-mono text-[12.5px]"><span className="text-blue-600">✓</span> No telemetry</li>
            <li className="font-mono text-[12.5px]"><span className="text-blue-600">✓</span> No network</li>
            <li className="font-mono text-[12.5px]"><span className="text-blue-600">✓</span> MIT licensed</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[12px] text-slate-400">
          <span>built with 🦀 + ⚛️ · tauri v2 · vite · tailwind</span>
          <a href="#top" className="hover:text-slate-600">back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
