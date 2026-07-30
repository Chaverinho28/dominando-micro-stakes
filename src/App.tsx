import { BookOpen, Brain, Trophy, Target, ChevronRight, Sparkles } from 'lucide-react'

const chapters = [
  'Introdução',
  'Mentalidade',
  'Bankroll',
  'Posições',
  'Pré-flop',
  'Flop',
  'Turn',
  'River',
  'Bubble',
  'ICM',
]

const pillars = [
  {
    icon: BookOpen,
    title: 'Fundamentos',
    text: 'Entenda torneios, variância, bankroll e o que realmente importa para evoluir nos micro stakes.',
  },
  {
    icon: Target,
    title: 'Pré-flop',
    text: 'Aprenda posições, ranges, open raise, call, 3-bet e push/fold de forma simples e prática.',
  },
  {
    icon: Trophy,
    title: 'Estratégia MTT',
    text: 'Jogue melhor nas fases mais importantes: bubble, mesa final, Turbo, Regular, Mystery e KO.',
  },
  {
    icon: Brain,
    title: 'Mentalidade',
    text: 'Evite tilt, tome boas decisões e construa um processo de estudo que realmente funciona.',
  },
]

function App() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-8 lg:px-10">
      <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 shadow-2xl shadow-emerald-500/10 backdrop-blur">
        <div className="grid gap-10 px-6 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              <Sparkles className="h-4 w-4" />
              Dominando os Micro Stakes
            </div>

            <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              O guia definitivo para dominar torneios MTT micro no PokerStars.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Um projeto prático, visual e fácil de estudar. Feito para buy-ins de US$1,10 a US$5,50, com foco em decisão, disciplina e lucro no longo prazo.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#capitulos" className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300">
                Começar agora <ChevronRight className="h-4 w-4" />
              </a>
              <a href="#conteudo" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10">
                Ver estrutura
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ['25 capítulos', 'Conteúdo organizado por módulos.'],
                ['300+ mãos', 'Exemplos com situações reais.'],
                ['100% prático', 'Linguagem simples e direta.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-lg font-semibold text-white">{title}</div>
                  <div className="mt-1 text-sm leading-6 text-slate-300">{text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-5 shadow-xl shadow-black/20">
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4">
              <div className="text-sm font-medium text-emerald-300">Estrutura do curso</div>
              <h2 className="mt-2 text-2xl font-semibold text-white">Do básico ao jogo lucrativo</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">Uma navegação simples, com capítulos curtos, revisões e quizzes.</p>
            </div>

            <div className="mt-5 space-y-3">
              {chapters.map((chapter, index) => (
                <div key={chapter} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/15 text-sm font-semibold text-emerald-300">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="font-medium text-white">{chapter}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="conteudo" className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {pillars.map(({ icon: Icon, title, text }) => (
          <article key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10">
            <Icon className="h-6 w-6 text-emerald-300" />
            <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
          </article>
        ))}
      </section>

      <section id="capitulos" className="mt-10 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 lg:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Próximo passo</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Versão 0.1 pronta para evoluir</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-300">
            A base do projeto já está criada. Agora o conteúdo pode ser expandido capítulo por capítulo, com páginas, quizzes e simuladores.
          </p>
        </div>
      </section>
    </main>
  )
}

export default App
