import { ArrowRight, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Chapter } from '../data/chapters'

/** Reusable card for catalog and dashboard surfaces. */
export default function ChapterCard({ chapter }: { chapter: Chapter }): React.JSX.Element {
  const Icon = chapter.icon
  return <Link className="chapter-card" to={`/capitulos/${chapter.id}`} aria-label={`Abrir capítulo ${chapter.number}: ${chapter.title}`}>
    <div className={`chapter-icon chapter-icon--${chapter.accent}`}><Icon size={23} /></div>
    <p>Capítulo {chapter.number}</p><h3>{chapter.title}</h3><span>{chapter.description}</span>
    <div className="chapter-meta"><Clock3 size={14} /> {chapter.estimatedMinutes} min de leitura</div>
    <div className="chapter-card__progress"><span style={{ width: `${chapter.progress}%` }} /></div>
    <div className="chapter-link">{chapter.progress > 0 ? 'Continuar' : 'Começar capítulo'} <ArrowRight size={16} /></div>
  </Link>
}
