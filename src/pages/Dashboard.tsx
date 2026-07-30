import { ArrowRight, BookOpen, Check, ChevronRight, Clock3, Flame, Sparkles, Target, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'
import ChapterCard from '../components/ChapterCard'
import { chapters } from '../data/chapters'
import { useProgressStore } from '../stores/progressStore'
import { useUserStore } from '../stores/userStore'
import { Avatar, Badge, ProgressBar } from '../components/ui'

const messages = ['Hoje é um bom dia para tomar decisões melhores.', 'Pequenas vantagens acumuladas vencem torneios.', 'Seu próximo bom fold também conta como vitória.']
const greeting = (): string => { const hour = new Date().getHours(); return hour < 12 ? 'Bom dia' : hour < 18 ? 'Boa tarde' : 'Boa noite' }

function DailyMission(): React.JSX.Element {
  const tasks = [{ label: 'Ler 1 capítulo', done: true }, { label: 'Resolver 5 exercícios', done: false }, { label: 'Acertar 80% do quiz', done: false }]
  const completed = tasks.filter((task) => task.done).length
  return <section className="daily-mission premium-panel"><div className="mission-title"><span className="mission-icon"><Target size={20} /></span><div><p className="eyebrow">Foco da sessão</p><h2>Missão diária</h2></div><Badge tone="warning">+250 XP</Badge></div><div className="mission-list">{tasks.map((task) => <div key={task.label} className={task.done ? 'mission-item mission-item--done' : 'mission-item'}><span>{task.done ? <Check size={14} /> : null}</span>{task.label}</div>)}</div><div className="mission-footer"><span>{completed} de {tasks.length} concluídas</span><ProgressBar value={(completed / tasks.length) * 100} label="Progresso da missão diária" /></div></section>
}

export default function Dashboard(): React.JSX.Element {
  const { completedChapters, completedLessons, studyStreak } = useProgressStore()
  const { name, level, xp } = useUserStore()
  const totalLessons = chapters.reduce((total, chapter) => total + chapter.lessons.length, 0)
  const courseProgress = Math.round((completedLessons.length / totalLessons) * 100)
  const continueChapter = chapters.find((chapter) => !completedChapters.includes(chapter.id)) ?? chapters[0]
  const xpNextLevel = 1000
  return <div className="page learning-home"><header className="home-hero"><div><div className="welcome-line"><p className="eyebrow">{greeting()}, {name} <span aria-hidden="true">✦</span></p><Badge tone="success">Nível {level}</Badge></div><h1>Uma sessão de cada vez.</h1><p>{messages[new Date().getDate() % messages.length]}</p></div><div className="home-user"><Avatar name={name} /><span>{xp} XP</span></div></header>
    <section className="continue-hero premium-panel"><div className="continue-hero__copy"><p className="eyebrow">Continue de onde parou</p><h2>{continueChapter.title}</h2><p>{continueChapter.description}</p><div className="continue-hero__meta"><Clock3 size={15} /> {continueChapter.estimatedMinutes} min <span>•</span> {continueChapter.lessons.length} aulas</div><ProgressBar value={continueChapter.progress} label="Progresso do capítulo atual" /><small>{continueChapter.progress}% concluído</small></div><Link className="hero-button" to={`/capitulos/${continueChapter.id}`}>Continuar <ArrowRight size={18} /></Link></section>
    <div className="engagement-grid"><DailyMission /><section className="streak-card premium-panel"><Flame size={30} /><p className="eyebrow">Sequência</p><strong>{studyStreak || 7} dias estudando</strong><span>Maior sequência: <b>18 dias</b></span><div className="streak-days" aria-label="Atividade da semana">{['S', 'T', 'Q', 'Q', 'S', 'S', 'D'].map((day, index) => <i className={index < 5 ? 'streak-day streak-day--active' : 'streak-day'} key={`${day}-${index}`}>{day}</i>)}</div></section><section className="xp-card premium-panel"><Sparkles size={24} /><p className="eyebrow">Evolução</p><strong>Nível {level}</strong><span>{xp} / {xpNextLevel} XP</span><ProgressBar value={(xp / xpNextLevel) * 100} label="XP até o próximo nível" /><small>Faltam {xpNextLevel - xp} XP para o nível {level + 1}</small></section></div>
    <section className="home-section-heading"><div><p className="eyebrow">Trilha de evolução</p><h2>Escolha seu próximo módulo</h2></div><Link to="/treinamento">Ir para treinamento <ChevronRight size={17} /></Link></section><div className="chapter-grid chapter-grid--premium">{chapters.map((chapter) => <ChapterCard chapter={chapter} key={chapter.id} />)}</div>
    <section className="training-banner"><div><span>♠</span><p className="eyebrow">Centro de treinamento</p><h2>Decisões rápidas. Feedback imediato.</h2><p>Teste sua leitura de mão em cenários curtos inspirados no jogo real.</p></div><Link className="ui-button ui-button--secondary" to="/treinamento"><BookOpen size={17} /> Treinar agora</Link></section>
    <section className="session-stats" aria-label="Estatísticas de estudo"><div><Trophy size={19} /><span>Capítulos concluídos<strong>{completedChapters.length}</strong></span></div><div><Clock3 size={19} /><span>Aulas estudadas<strong>{completedLessons.length}</strong></span></div><div><Target size={19} /><span>Progresso geral<strong>{courseProgress}%</strong></span></div></section></div>
}
