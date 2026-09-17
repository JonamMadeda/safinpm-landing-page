const CARDS = [
  {
    icon: '♻️',
    iconClass: 'bg-blue-50 border-blue-200',
    title: 'Recycle Bin Safe',
    body: (
      <>
        Never worry about deleting the wrong thing. Items go straight to Windows trash via{' '}
        <code className="font-mono text-[12.5px] text-blue-700">trash::delete</code> — restore
        instantly if you change your mind.
      </>
    ),
    foot: (
      <p className="mt-3 font-mono text-[12px] text-slate-500">
        <span className="text-blue-600">_</span> zero permanent loss, by design
      </p>
    ),
  },
  {
    icon: '🛡️',
    iconClass: 'bg-amber-50 border-amber-200',
    title: 'Active Process Shield',
    body: (
      <>
        Warns you if a <code className="font-mono text-[12.5px] text-slate-800">node / bun / deno</code>{' '}
        dev server is actively running inside a targeted project — powered by{' '}
        <code className="font-mono text-[12.5px] text-blue-700">sysinfo</code>.
      </>
    ),
    foot: (
      <p className="mt-3">
        <span className="pill bg-amber-50 text-amber-700 border border-amber-200">
          ● ACTIVE — dev server running
        </span>
      </p>
    ),
  },
  {
    icon: '📦',
    iconClass: 'bg-sky-50 border-sky-200',
    title: 'Monorepo & PM Aware',
    body: (
      <>
        Native recognition for pnpm, yarn, npm and bun. Detects workspace roots,{' '}
        <code className="font-mono text-[12.5px] text-slate-800">pnpm-workspace.yaml</code>, and
        handles Yarn PnP safely (no phantom deletes).
      </>
    ),
    foot: (
      <div className="mt-3 flex flex-wrap gap-1.5">
        <span className="pill bg-red-50 text-red-700 border border-red-200">npm</span>
        <span className="pill bg-amber-50 text-amber-700 border border-amber-200">pnpm</span>
        <span className="pill bg-sky-50 text-sky-700 border border-sky-200">yarn</span>
        <span className="pill bg-orange-50 text-orange-700 border border-orange-200">bun</span>
        <span className="pill bg-indigo-50 text-indigo-700 border border-indigo-200">monorepo</span>
      </div>
    ),
  },
  {
    icon: '⚡',
    iconClass: 'bg-indigo-50 border-indigo-200',
    title: 'Real-time Streaming Scan',
    body: (
      <>
        Watch projects appear live as Rust walks your directory tree in parallel with{' '}
        <code className="font-mono text-[12.5px] text-blue-700">jwalk</code>. Real-time progress
        bar, instant cancellation.
      </>
    ),
    foot: (
      <p className="mt-3 font-mono text-[12px] text-slate-500">
        streaming results · <span className="text-slate-900 font-medium">esc</span> to cancel
      </p>
    ),
  },
]

export default function Features() {
  return (
    <>
      <section id="features" className="max-w-6xl mx-auto px-5 py-16 md:py-24 bg-white">
        <p className="font-mono text-[12px] tracking-[.2em] text-blue-600 mb-3">
          {'// CORE FEATURES'}
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <h2 className="text-3xl md:text-[40px] font-extrabold tracking-tight text-slate-900 leading-tight">
            Built for devs who
            <br className="hidden md:block" /> hoard{' '}
            <span className="text-slate-400 line-through decoration-red-400">dependencies</span>{' '}
            projects.
          </h2>
          <p className="text-slate-600 text-[15px] max-w-md leading-relaxed">
            Every side-project, tutorial and client repo leaves a{' '}
            <code className="font-mono text-[13px] bg-slate-100 border border-slate-200 rounded px-1.5 py-0.5 text-blue-700">
              node_modules
            </code>{' '}
            behind. safinpm finds them, ranks them, and bins them — safely.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-glow"
            >
              <div
                className={`w-11 h-11 rounded-xl border flex items-center justify-center text-xl mb-4 ${c.iconClass}`}
              >
                {c.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-[17px] mb-1.5">{c.title}</h3>
              <p className="text-slate-600 text-[14.5px] leading-relaxed">{c.body}</p>
              {c.foot}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-white p-6">
            <h3 className="font-bold text-slate-900 text-[16px] mb-1.5">⏳ Last-Active Ranking</h3>
            <p className="text-slate-600 text-[14px] leading-relaxed">
              Sorts projects by modification time (
              <code className="font-mono text-[12px] text-blue-700">mtime</code>) to accurately
              pinpoint stale directories older than 3 or 6 months — without touching access
              timestamps.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-6">
            <h3 className="font-bold text-slate-900 text-[16px] mb-1.5">🔒 Private & Local-First</h3>
            <p className="text-slate-600 text-[14px] leading-relaxed">
              No telemetry, no cloud accounts, no network calls. Everything stays on your machine.
              Your file tree never leaves your disk.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-5 py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-mono text-[12.5px] text-slate-600">
          <span><span className="text-blue-600">✓</span> trash::delete — never rm -rf</span>
          <span><span className="text-blue-600">✓</span> npm · pnpm · yarn · bun</span>
          <span><span className="text-blue-600">✓</span> monorepo & workspace aware</span>
          <span><span className="text-blue-600">✓</span> zero network calls</span>
          <span className="hidden md:inline"><span className="text-blue-600">✓</span> MIT / Apache-2.0</span>
        </div>
      </section>
    </>
  )
}
