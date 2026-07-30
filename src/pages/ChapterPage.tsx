import { ChevronLeft, ChevronRight, CheckCircle2, Target, Timer } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { chapters } from '../data/chapters'

export default function ChapterPage() {
  const { chapterId } = useParams()
  const chapter = chapters.find((item) => item.id === chapterId) ?? chapters[0]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white">
          <ChevronLeft className="h-4 w-4" />
          Voltar ao dashboard
        </Link>
        {chapter.next ? (
          <Link to={`/capitulos/${chapter.next}`} className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950">
            Próximo capítulo <ChevronRight className="h-4 w-4" />
          </Link>
        ) : null}
      </div>

      <section className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-xl shadow-black/20">
        <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Capítulo</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">{chapter.title}</h1>
        <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-300">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2"><Timer className="h-4 w-4 text-emerald-300" />{chapter.duration}</span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2"><Target className="h-4 w-4 text-emerald-300" />{chapter.level}</span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2"><CheckCircle2 className="h-4 w-4 text-emerald-300" />Objetivo claro</span>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        <article className="rounded-3xl border border-white/10 bg-white/5 p-6 lg:col-span-2">
          <h2 className="text-xl font-semibold text-white">Resumo</h2>
          <p className="mt-3 leading-7 text-slate-300">{chapter.summary}</p>
          <h3 className="mt-6 text-lg font-semibold text-white">Objetivo</h3>
          <p className="mt-2 leading-7 text-slate-300">{chapter.objective}</p>
          <h3 className="mt-6 text-lg font-semibold text-white">O que levar da aula</h3>
          <p className="mt-2 leading-7 text-slate-300">{chapter.takeaway}</p>
        </article>

        <aside className="space-y-4">
          <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Dica do Coach</p>
            <p className="mt-3 text-sm leading-6 text-slate-100">Jogue de forma simples. Nos micro stakes, disciplina e posição costumam valer mais do que jogadas sofisticadas.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Próximo passo</p>
            <p className="mt-3 text-sm leading-6 text-slate-200">Ao terminar esta aula, avance para o próximo capítulo e repita os exercícios até as decisões ficarem automáticas.</p>
          </div>
        </aside>
      </section>
    </div>
  )
}
