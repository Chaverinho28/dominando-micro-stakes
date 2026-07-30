import { ArrowRight, CheckCircle2, Clock3, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Chapter } from '../data/chapters'
import { Badge, ProgressBar } from './ui'
import { useProgressStore } from '../stores/progressStore'

/** Learning-catalog card: state is derived from the progress store rather than duplicated in content data. */
export default function ChapterCard({ chapter }: { chapter: Chapter }): React.JSX.Element {
  const Icon = chapter.icon; const { completedChapters } = useProgressStore(); const completed = completedChapters.includes(chapter.id); const progress = completed ? 100 : chapter.progress; const label = completed ? 'Concluído' : progress > 0 ? 'Continuar' : 'Começar'
  return <Link className={`chapter-card chapter-card--product ${completed ? 'chapter-card--completed' : ''}`} to={`/capitulos/${chapter.id}`} aria-label={`${label}: capítulo ${chapter.number}, ${chapter.title}`}><div className="chapter-card__top"><div className={`chapter-icon chapter-icon--${chapter.accent}`}><Icon size={22} /></div><Badge tone={completed ? 'success' : progress ? 'warning' : 'default'}>{completed ? <><CheckCircle2 size={13} /> Concluído</> : `Módulo ${chapter.number}`}</Badge></div><h3>{chapter.title}</h3><p>{chapter.description}</p><div className="chapter-details"><span><Clock3 size={14} /> {chapter.estimatedMinutes} min</span><span>{chapter.lessons.length} aulas</span></div><ProgressBar value={progress} label={`Progresso de ${chapter.title}`} /><div className="chapter-card__footer"><small>{progress}% concluído</small><strong>{label} {completed ? <CheckCircle2 size={16} /> : progress ? <Play size={15} fill="currentColor" /> : <ArrowRight size={16} />}</strong></div></Link>
}
