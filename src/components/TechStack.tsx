import { LINKS } from '../data'

const STACK = [
  '🦀 Rust',
  '⚡ Tauri v2',
  '⚛️ React 18',
  '📘 TypeScript',
  '🎨 Tailwind CSS',
  '⚡ Vite',
]

const CRATES = ['jwalk', 'sysinfo', 'trash crate']

export default function TechStack() {
  return (
    <section id="stack" className="max-w-6xl mx-auto px-5 py-16 md:py-24 bg-white">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <p className="font-mono text-[12px] tracking-[.2em] text-blue-600 mb-3">
            {'// UNDER THE HOOD'}
          </p>
          <h2 className="text-3xl md:text-[38px] font-extrabold tracking-tight text-slate-900 leading-tight">
            Tiny binary.
            <br />
            Absurd performance.
          </h2>
          <p className="text-slate-600 text-[15px] mt-4 leading-relaxed">
            Built with <span className="text-slate-900 font-semibold">Tauri v2 + Rust</span> for tiny
            installers, low memory usage and maximum speed — with a modern{' '}
            <span className="text-slate-900 font-semibold">React 18 + TypeScript + Tailwind</span>{' '}
            frontend scaffolded with <span className="text-slate-900 font-semibold">Vite</span> for
            blazing-fast asset bundling. No Electron bloat. No background services.
          </p>
          <ul className="mt-6 space-y-3 text-[14.5px]">
            <li className="flex gap-3">
              <span className="text-blue-600 font-mono">›</span>
              <span className="text-slate-600">
                <strong className="text-slate-900">Rust core</strong> — parallel directory walk with{' '}
                <code className="font-mono text-[12.5px] text-blue-700">jwalk</code>, streaming IPC
                to the UI.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-mono">›</span>
              <span className="text-slate-600">
                <strong className="text-slate-900">Safety first</strong> —{' '}
                <code className="font-mono text-[12.5px] text-blue-700">trash::delete</code> +{' '}
                <code className="font-mono text-[12.5px] text-blue-700">sysinfo</code> process
                guard + Yarn PnP allowlist.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-mono">›</span>
              <span className="text-slate-600">
                <strong className="text-slate-900">Accurate staleness</strong> —{' '}
                <code className="font-mono text-[12.5px] text-blue-700">mtime</code>-based ranking;
                atime never touched.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-mono">›</span>
              <span className="text-slate-600">
                <strong className="text-slate-900">Crafted by Jonam Madeda</strong> — open-source,
                MIT / Apache-2.0. Contributions welcome.
              </span>
            </li>
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={LINKS.repo}
              className="inline-flex items-center gap-2 border border-slate-300 hover:border-blue-400 bg-white hover:text-blue-700 text-slate-900 text-[14px] font-semibold rounded-xl px-5 py-2.5 transition"
            >
              ★ Star on GitHub
            </a>
            <a
              href={LINKS.author}
              className="inline-flex items-center gap-2 text-[14px] font-medium text-slate-500 hover:text-slate-900 transition px-2 py-2.5"
            >
              by @JonamMadeda →
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-mono text-[11px] uppercase tracking-widest text-slate-500 mb-4">Stack</p>
            <div className="flex flex-wrap gap-2">
              {STACK.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[12.5px] bg-slate-100 border border-slate-200 rounded-lg px-3 py-1.5 text-slate-700"
                >
                  {s}
                </span>
              ))}
              {CRATES.map((c) => (
                <span
                  key={c}
                  className="font-mono text-[12.5px] bg-blue-50 border border-blue-200 rounded-lg px-3 py-1.5 text-blue-700"
                >
                  {c}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3 mt-5 text-center">
              <div className="rounded-xl bg-slate-50 border border-slate-200 py-3">
                <div className="font-extrabold text-slate-900">~8MB</div>
                <div className="text-[11px] text-slate-500 font-mono mt-0.5">installer</div>
              </div>
              <div className="rounded-xl bg-slate-50 border border-slate-200 py-3">
                <div className="font-extrabold text-slate-900">~40MB</div>
                <div className="text-[11px] text-slate-500 font-mono mt-0.5">idle RAM</div>
              </div>
              <div className="rounded-xl bg-slate-50 border border-slate-200 py-3">
                <div className="font-extrabold text-blue-600">0</div>
                <div className="text-[11px] text-slate-500 font-mono mt-0.5">network calls</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-900 bg-slate-900 p-5 font-mono text-[12.5px] leading-6 overflow-x-auto shadow-card">
            <p className="text-slate-500 mb-2">{'// src-tauri/Cargo.toml — the important bits'}</p>
            <code>
              <span className="text-indigo-300">[dependencies]</span>
              <br />
              <span className="text-slate-100">tauri</span> <span className="text-slate-500">=</span>{' '}
              <span className="text-amber-300">"2"</span>
              <br />
              <span className="text-slate-100">jwalk</span> <span className="text-slate-500">=</span>{' '}
              <span className="text-amber-300">"0.8"</span>{' '}
              <span className="text-slate-500"># parallel walk</span>
              <br />
              <span className="text-slate-100">trash</span> <span className="text-slate-500">=</span>{' '}
              <span className="text-amber-300">"5"</span>{' '}
              <span className="text-slate-500"># recycle bin</span>
              <br />
              <span className="text-slate-100">sysinfo</span> <span className="text-slate-500">=</span>{' '}
              <span className="text-amber-300">"0.32"</span>{' '}
              <span className="text-slate-500"># process guard</span>
            </code>
          </div>
        </div>
      </div>
    </section>
  )
}
