const STEPS = [
  {
    n: 'STEP 01',
    icon: '📁',
    title: 'Select',
    body: (
      <>
        Choose your dev root folder (e.g.{' '}
        <code className="font-mono text-[12.5px] text-blue-700">C:\dev</code>). safinpm walks it in
        parallel — fast even on huge trees.
      </>
    ),
    highlight: false,
  },
  {
    n: 'STEP 02',
    icon: '📊',
    title: 'Review',
    body: (
      <>
        Instantly view a ranked, filterable list sorted by{' '}
        <span className="text-slate-900 font-medium">last activity</span> and size — with status
        pills and PM badges.
      </>
    ),
    highlight: true,
  },
  {
    n: 'STEP 03',
    icon: '🧹',
    title: 'Clean',
    body: (
      <>
        Select single or bulk items and free up gigabytes instantly with a single click — safely
        binned, never shredded.
      </>
    ),
    highlight: false,
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="border-y border-slate-200 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5 py-16 md:py-24">
        <p className="font-mono text-[12px] tracking-[.2em] text-blue-600 mb-3 text-center">
          {'// HOW IT WORKS'}
        </p>
        <h2 className="text-3xl md:text-[40px] font-extrabold tracking-tight text-slate-900 text-center">
          Three clicks to gigabytes back.
        </h2>
        <p className="text-slate-500 text-center mt-3 font-mono text-[13px]">
          $ safinpm scan C:\dev --stale 6mo
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className={`relative rounded-2xl bg-white p-6 pt-7 ${
                s.highlight
                  ? 'border border-blue-300 shadow-glow'
                  : 'border border-slate-200 shadow-sm'
              }`}
            >
              <span className="absolute -top-3.5 left-6 font-mono text-[12px] font-bold bg-blue-600 text-white rounded-md px-2 py-1">
                {s.n}
              </span>
              <div className="text-2xl mb-3">{s.icon}</div>
              <h3 className="font-bold text-slate-900 text-[17px]">{s.title}</h3>
              <p className="text-slate-600 text-[14.5px] mt-1.5 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl overflow-hidden border border-slate-900 bg-slate-900 shadow-card">
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10">
            <span className="terminal-dot bg-[#ff5f57]" />
            <span className="terminal-dot bg-[#febc2e]" />
            <span className="terminal-dot bg-[#28c840]" />
            <span className="ml-2 font-mono text-[12px] text-slate-400">
              powershell — what happens under the hood
            </span>
          </div>
          <pre className="px-5 py-4 font-mono text-[12.5px] sm:text-[13px] leading-6 overflow-x-auto">
            <code>
              <span className="text-slate-500"># 1. parallel walk (Rust + jwalk, streaming)</span>
              {'\n'}
              <span className="text-sky-300">scan</span> <span className="text-slate-100">C:\dev</span>{' '}
              <span className="text-blue-300">--stale 6mo</span>{' '}
              <span className="text-slate-500"># → 47 projects · 12.4 GB found</span>
              {'\n\n'}
              <span className="text-slate-500"># 2. enrich: mtime rank · pm detect · sysinfo guard</span>
              {'\n'}
              <span className="text-slate-100">old-portfolio/</span>{' '}
              <span className="text-amber-300">2.1 GB</span>{' '}
              <span className="text-red-300">INACTIVE &gt; 6mo</span>{' '}
              <span className="text-slate-500">[npm]</span>
              {'\n\n'}
              <span className="text-slate-500"># 3. safe clean — Recycle Bin, restorable</span>
              {'\n'}
              <span className="text-sky-300">trash::delete</span>(
              <span className="text-slate-100">node_modules</span>){' '}
              <span className="text-slate-500"># undo anytime from trash</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}
