import { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BookOpen, Gauge, Menu, Trophy } from 'lucide-react'
import type { MenuItem } from '../types'

const navItems: MenuItem[] = [
  { title: 'Dashboard', path: '/', icon: Gauge },
  { title: 'Capítulos', path: '/capitulos/introducao', icon: BookOpen },
  { title: 'Estratégia', path: '/estrategia', icon: Trophy },
]

type Props = { children: ReactNode }

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link to="/" className="flex items-center gap-3 font-semibold text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-400 text-slate-950">
              <Menu className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm text-emerald-300">Dominando os Micro Stakes</div>
              <div className="text-xs text-slate-400">PokerStars MTT Guide</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[280px_1fr] lg:px-10">
        <aside className="rounded-3xl border border-white/10 bg-white/5 p-5 h-fit lg:sticky lg:top-24">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">Conteúdo</p>
          <div className="mt-4 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-2xl px-4 py-3 transition ${
                    isActive ? 'bg-emerald-400 text-slate-950' : 'bg-slate-900/40 text-slate-300 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </NavLink>
            ))}
          </div>
        </aside>

        <section>{children}</section>
      </div>
    </div>
  )
}
