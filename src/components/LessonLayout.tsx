import { ArrowLeft, ArrowRight, Clock3, Goal } from 'lucide-react'
import type { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import type { Chapter } from '../data/chapters'

/** Shared reading shell so new long-form chapters stay structurally consistent. */
export default function LessonLayout({ chapter, previous, next, children }: PropsWithChildren<{ chapter: Chapter; previous?: Chapter; next?: Chapter }>): React.JSX.Element {
  const Icon = chapter.icon
  return <div className="page lesson-page"><Link className="back-link" to="/"><ArrowLeft size={17} /> Todos os módulos</Link>
    <header className={`chapter-hero chapter-hero--${chapter.accent}`}><div className="chapter-hero__icon"><Icon size={34} /></div><div><p className="eyebrow">Capítulo {chapter.number} · {chapter.eyebrow}</p><h1>{chapter.title}</h1><p>{chapter.description}</p><span className="reading-time"><Clock3 size={15} /> {chapter.estimatedMinutes} min de leitura</span></div></header>
    <div className="reading-progress" aria-label={`Progresso do capítulo: ${chapter.progress}%`}><span style={{ width: `${chapter.progress}%` }} /></div>
    <div className="lesson-body"><article className="lesson-content">{children}</article><aside className="lesson-aside"><div className="objective-card"><Goal size={21} /><p className="eyebrow">Objetivo</p><strong>{chapter.objective}</strong></div><nav className="lesson-toc" aria-label="Navegação do capítulo"><p className="eyebrow">Neste módulo</p>{chapter.lessons.map((lesson, index) => <span key={lesson.title}>{index + 1}. {lesson.title}</span>)}</nav></aside></div>
    <nav className="chapter-pagination" aria-label="Navegação entre capítulos">{previous ? <Link to={`/capitulos/${previous.id}`}><ArrowLeft size={17} /><span><small>Anterior</small>{previous.title}</span></Link> : <span />}{next && <Link to={`/capitulos/${next.id}`} className="chapter-pagination__next"><span><small>Próximo</small>{next.title}</span><ArrowRight size={17} /></Link>}</nav>
  </div>
}
