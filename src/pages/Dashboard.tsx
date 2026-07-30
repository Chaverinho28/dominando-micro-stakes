import { ChevronRight, Target, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { chapters } from '../data/chapters'

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-black/20">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Versão 0.2</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">Dominando os Micro Stakes</h1>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Uma plataforma prática para estudar MTT micro com capítulos curtos, objetivos claros e foco em decisão lucrativa.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/capitulos/introducao" className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 font-semibold text-slate-950">
              Continuar estudando <ChevronRight className="h-4 w-4" />
            </Link>
            <a href="#modulos" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white">
              Ver módulos
            </a>
          </div>
        </div>
      </section>

      <section id="modulos" className="grid gap-5 md:grid-cols-3">
        {[
          { icon: Target, title: 'Objetivo', text: 'Ensinar poker de forma simples, visual e aplicável nos micro buy-ins.' },
          { icon: Zap, title: 'Método', text: 'Aprendizado por capítulos curtos, exemplos práticos e revisão constante.' },
          { icon: ChevronRight, title: 'Resultado', text: 'Jogar melhor, sofrer menos com variância e subir de limite com mais segurança.' },
        ].map(({ icon: Icon, title, text }) => (
          <article key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <Icon className="h-6 w-6 text-emerald-300" />
            <h2 className="mt-4 text-xl font-semibold text-white">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
          </article>
        ))}
      </section>

      <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Capítulos</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Primeiros módulos disponíveis</h2>
          </div>
          <div className="text-sm text-slate-400">{chapters.length} capítulos na base inicial</div>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {chapters.map((chapter) => (
            <Link
              key={chapter.id}
              to={`/capitulos/${chapter.id}`}
              className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 transition hover:border-emerald-400/40 hover:bg-slate-900"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">{chapter.title}</h3>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">{chapter.level}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">{chapter.summary}</p>
              <div className="mt-4 text-xs text-slate-400">{chapter.duration}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
