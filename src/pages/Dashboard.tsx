import { ArrowRight, BookMarked, CheckCircle2, Clock3, Flame, PlayCircle, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'
import ChapterCard from '../components/ChapterCard'
import { chapters, dashboardStats } from '../data/chapters'

const statIcons = [Trophy, Clock3, Flame]

export default function Dashboard(): React.JSX.Element {
  const lastChapter = chapters[0]
  const nextLessons = chapters.flatMap((chapter) => chapter.lessons.map((lesson) => ({ ...lesson, chapter }))).filter((lesson) => !lesson.completed).slice(0, 3)
  return <div className="page dashboard"><section className="welcome"><div><p className="eyebrow">Sua jornada começa aqui</p><h1>Olá, jogador.</h1><p className="lead">Construa decisões melhores para dominar os torneios micro stakes — sem fórmulas mágicas.</p></div><div className="table-chips" aria-hidden="true"><span>♠</span><span>♥</span><span>♣</span></div></section>
    <section className="stats-grid" aria-label="Estatísticas do usuário">{dashboardStats.map(({ label, value, detail }, index) => { const Icon = statIcons[index]; return <article className="stat-card" key={label}><Icon size={20} /><div><span>{label}</span><strong>{value}</strong><small>{detail}</small></div></article> })}</section>
    <section className="continue-card"><div className="continue-icon"><PlayCircle size={30} /></div><div className="continue-copy"><p className="eyebrow">Último capítulo estudado</p><h2>{lastChapter.title}</h2><span>Você concluiu 1 de {lastChapter.lessons.length} aulas</span><div className="progress-track"><span style={{ width: `${lastChapter.progress}%` }} /></div></div><Link className="primary-button" to={`/capitulos/${lastChapter.id}`}>Continuar <ArrowRight size={18} /></Link></section>
    <section className="dashboard-columns"><section><div className="section-heading"><div><p className="eyebrow">Próximos passos</p><h2>Próximas lições</h2></div></div><div className="next-lessons">{nextLessons.map(({ title, duration, chapter }) => <Link key={title} to={`/capitulos/${chapter.id}`}><span className="next-lessons__icon"><BookMarked size={17} /></span><span><strong>{title}</strong><small>Cap. {chapter.number} · {duration}</small></span><ArrowRight size={17} /></Link>)}</div></section><aside className="player-card"><Trophy size={21} /><p className="eyebrow">Perfil de estudo</p><strong>Jogador disciplinado</strong><p>Você está construindo a base certa. Mantenha o foco em uma ideia por sessão.</p></aside></section>
    <section className="section-heading"><div><p className="eyebrow">Trilha de aprendizado</p><h2>Todos os módulos</h2></div><span>{chapters.length} capítulos planejados</span></section><div className="chapter-grid">{chapters.map((chapter) => <ChapterCard chapter={chapter} key={chapter.id} />)}</div>
    <section className="study-note"><CheckCircle2 size={20} /><p><strong>Regra de ouro:</strong> não tente aplicar tudo de uma vez. Escolha um conceito, pratique e revise.</p></section></div>
}
