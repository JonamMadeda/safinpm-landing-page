export const LINKS = {
  releases: 'https://github.com/JonamMadeda/safinpm/releases',
  repo: 'https://github.com/JonamMadeda/safinpm',
  issues: 'https://github.com/JonamMadeda/safinpm/issues',
  author: 'https://github.com/JonamMadeda',
} as const

export type MockRow = {
  checked: boolean
  path: string
  sub: string
  size: string
  status: string
  statusClass: string
  pm: string
  pmClass: string
}

export const MOCK_ROWS: MockRow[] = [
  {
    checked: true,
    path: 'C:\\dev\\old-portfolio',
    sub: 'my-portfolio-2022 · 214 days idle',
    size: '2.1 GB',
    status: 'INACTIVE > 6mo',
    statusClass: 'bg-red-50 text-red-700 border-red-200',
    pm: 'npm',
    pmClass: 'bg-red-50 text-red-700 border-red-200',
  },
  {
    checked: true,
    path: 'C:\\dev\\client-acme-shop',
    sub: 'acme-storefront · 189 days idle',
    size: '1.6 GB',
    status: 'INACTIVE > 6mo',
    statusClass: 'bg-red-50 text-red-700 border-red-200',
    pm: 'pnpm',
    pmClass: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  {
    checked: true,
    path: 'C:\\dev\\tutorial-next-14',
    sub: 'learn-next · 121 days idle',
    size: '1.1 GB',
    status: 'STALE > 3mo',
    statusClass: 'bg-amber-50 text-amber-700 border-amber-200',
    pm: 'bun',
    pmClass: 'bg-orange-50 text-orange-700 border-orange-200',
  },
  {
    checked: false,
    path: 'C:\\dev\\safinpm',
    sub: 'safinpm · active 2h ago · MONOREPO',
    size: '840 MB',
    status: 'ACTIVE · shield',
    statusClass: 'bg-blue-50 text-blue-700 border-blue-200',
    pm: 'pnpm',
    pmClass: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  {
    checked: false,
    path: 'C:\\dev\\api-billing',
    sub: 'billing-api · dev server :3000 running',
    size: '692 MB',
    status: 'ACTIVE — guarded',
    statusClass: 'bg-amber-50 text-amber-700 border-amber-200',
    pm: 'yarn',
    pmClass: 'bg-sky-50 text-sky-700 border-sky-200',
  },
]
