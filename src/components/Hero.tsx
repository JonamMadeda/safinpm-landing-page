import { useEffect, useState } from 'react'
import { LINKS, MOCK_ROWS } from '../data'

function useCountUp(target: number, durationMs = 1500) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / durationMs)
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, durationMs])
  return value
}

function ScanMock() {
  const [pct, setPct] = useState(78)
  const [dirs, setDirs] = useState(1284)
  const [scanning, setScanning] = useState(true)

  useEffect(() => {
    if (!scanning) return
    const t = setInterval(() => {
      setPct((p) => (p >= 99 ? 62 : p + Math.floor(Math.random() * 4) + 1))
      setDirs((d) => d + Math.floor(Math.random() * 40) + 8)
    }, 1600)
    return () => clearInterval(t)
  }, [scanning])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setScanning((s) => !s)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="rounded-2xl overflow-hidden shadow-card glow-border bg-white text-left">
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-slate-50">
        <div className="flex items-center gap-1.5">
          <span className="terminal-dot bg-[#ff5f57]" />
          <span className="terminal-dot bg-[#febc2e]" />
          <span className="terminal-dot bg-[#28c840]" />
          <span className="ml-3 font-mono text-[12px] text-slate-500">
            safinpm — C:\dev <span className="caret text-blue-600">▊</span>
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 font-mono text-[11px]">
          <span className="text-slate-400">rust · jwalk · sysinfo</span>
          <span className="pill bg-blue-50 text-blue-700 border border-blue-200">
            ● LIVE SCAN
          </span>
        </div>
      </div>

      <div className="px-4 sm:px-5 pt-4">
        <div className="flex items-center justify-between font-mono text-[12px] mb-2">
          <span className="text-slate-500">
            Scanning <span className="text-slate-900 font-medium">C:\dev</span> —{' '}
            <span className="text-blue-700 font-medium">{dirs.toLocaleString()}</span> dirs walked
          </span>
          <span className="text-slate-400">
            <span className="text-slate-900 font-bold">{pct}%</span> ·{' '}
            <button
              onClick={() => setScanning((s) => !s)}
              className="text-red-600 hover:text-red-500 underline underline-offset-2"
            >
              {scanning ? 'cancel [esc]' : 'resume [↻]'}
            </button>
          </span>
        </div>
        <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
          <div
            className="scan-bar h-full rounded-full bg-gradient-to-r from-blue-600 to-sky-400 shadow-[0_0_12px_rgba(37,99,235,.5)]"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="flex flex-wrap items-center gap-2 mt-3">
          <span className="font-mono text-[11px] text-slate-500 border border-slate-200 bg-slate-50 rounded-md px-2 py-1">
            sort: last-active ↓
          </span>
          <span className="font-mono text-[11px] text-slate-500 border border-slate-200 bg-slate-50 rounded-md px-2 py-1">
            filter: &gt; 3 months
          </span>
          <span className="font-mono text-[11px] text-blue-700 border border-blue-200 bg-blue-50 rounded-md px-2 py-1 ml-auto">
            3 selected · 4.8 GB reclaimable
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className="rounded-xl border border-slate-200 overflow-hidden">
          <div className="hidden sm:grid grid-cols-[1fr_110px_150px_130px] gap-3 px-4 py-2.5 bg-slate-50 font-mono text-[11px] uppercase tracking-wider text-slate-500">
            <span>Project / path</span>
            <span>Size</span>
            <span>Status</span>
            <span>Package mgr</span>
          </div>
          <div className="divide-y divide-slate-100 text-[13.5px] bg-white">
            {MOCK_ROWS.map((r, i) => (
              <div
                key={r.path}
                className={`row-appear grid sm:grid-cols-[1fr_110px_150px_130px] gap-1 sm:gap-3 px-4 py-3 items-center hover:bg-slate-50 transition ${
                  r.checked ? 'bg-blue-50/60' : ''
                }`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span
                    className={`w-4 h-4 rounded border text-[11px] font-bold flex items-center justify-center shrink-0 ${
                      r.checked
                        ? 'bg-blue-600 border-blue-600 text-white'
                        : 'border-slate-300 text-transparent'
                    }`}
                  >
                    ✓
                  </span>
                  <div className="min-w-0">
                    <div className="font-mono text-[12.5px] text-slate-900 truncate">
                      {r.path}
                      <span className="text-slate-400">\node_modules</span>
                    </div>
                    <div className="text-[11.5px] text-slate-500 truncate">{r.sub}</div>
                  </div>
                </div>
                <div className="font-mono text-[13px] text-slate-900 font-semibold pl-6 sm:pl-0">
                  {r.size}
                </div>
                <div>
                  <span className={`pill border ${r.statusClass}`}>{r.status}</span>
                </div>
                <div>
                  <span className={`pill border ${r.pmClass}`}>{r.pm}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
          <button className="w-full sm:w-auto font-semibold text-[13.5px] bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5 py-2.5 transition">
            Move 3 to Recycle Bin — free 4.8 GB
          </button>
          <span className="font-mono text-[12px] text-slate-500">
            ↩ restore anytime from Windows trash · Yarn PnP skipped automatically
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const gb = useCountUp(12)
  const speed = useCountUp(40)

  return (
    <section id="top" className="relative bg-white">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 pt-14 pb-10 md:pt-20 md:pb-14 text-center">
        <div className="inline-flex items-center gap-2 text-[12px] font-mono border border-blue-200 bg-blue-50 text-blue-700 rounded-full px-3.5 py-1.5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
          WINDOWS DESKTOP APP &nbsp;·&nbsp; RUST + REACT &nbsp;·&nbsp; 100% LOCAL
        </div>

        <h1 className="text-[34px] leading-[1.08] sm:text-5xl md:text-[64px] font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto">
          Reclaim Gigabytes of Dead Space from Forgotten{' '}
          <span className="font-mono font-bold text-blue-600 decoration-blue-200 underline decoration-4 underline-offset-8">
            node_modules
          </span>
          .
        </h1>

        <p className="mt-6 text-slate-600 text-[16px] md:text-lg leading-relaxed max-w-2xl mx-auto">
          A blazing-fast Windows desktop app built in{' '}
          <span className="text-slate-900 font-medium">Rust and React</span> by{' '}
          <a
            href={LINKS.author}
            className="text-blue-600 underline underline-offset-4 decoration-blue-200 hover:text-blue-700"
          >
            Jonam Madeda
          </a>{' '}
          that safely sweeps away stale project dependencies into your Recycle Bin. Nothing is
          ever permanently deleted.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={LINKS.releases}
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-[15px] rounded-xl px-7 py-3.5 transition shadow-[0_10px_35px_-10px_rgba(37,99,235,.7)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5M4 20h16" />
            </svg>
            Download Latest Release
          </a>
          <a
            href={LINKS.repo}
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-900 font-semibold text-[15px] rounded-xl px-7 py-3.5 transition"
          >
            View on GitHub
          </a>
        </div>
        <p className="mt-4 font-mono text-[12.5px] text-slate-500">
          no telemetry &nbsp;·&nbsp; no cloud &nbsp;·&nbsp; no account &nbsp;·&nbsp;{' '}
          <span className="text-blue-600">trash::delete only</span>
        </p>

        <div className="mt-8 flex items-center justify-center gap-6 sm:gap-10 text-center">
          <div>
            <div className="text-2xl font-extrabold text-slate-900">
              {gb}.4<span className="text-blue-600">GB</span>
            </div>
            <div className="text-[12px] text-slate-500 mt-0.5">avg. reclaimed / clean</div>
          </div>
          <div className="w-px h-9 bg-slate-200" />
          <div>
            <div className="text-2xl font-extrabold text-slate-900">~{speed}x</div>
            <div className="text-[12px] text-slate-500 mt-0.5">faster parallel scan</div>
          </div>
          <div className="w-px h-9 bg-slate-200" />
          <div>
            <div className="text-2xl font-extrabold text-slate-900">
              0<span className="text-blue-600">%</span>
            </div>
            <div className="text-[12px] text-slate-500 mt-0.5">permanent deletes</div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <ScanMock />
          <p className="font-mono text-[12px] text-slate-400 mt-3">
            preview mock — ranked by <span className="text-slate-600">mtime</span> · access times
            untouched · active dev servers flagged
          </p>
        </div>
      </div>
    </section>
  )
}
