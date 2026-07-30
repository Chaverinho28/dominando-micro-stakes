import { Check, ChevronRight, Clock3, Play } from 'lucide-react'
import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import CoachTip from '../components/content/CoachTip'
import CommonMistake from '../components/content/CommonMistake'
import ExerciseBox from '../components/content/ExerciseBox'
import SummaryBox from '../components/content/SummaryBox'
import LessonLayout from '../components/LessonLayout'
import { chapters, getChapter, type Quiz } from '../data/chapters'

function QuizBox({ quiz }: { quiz: Quiz }): React.JSX.Element {
  const [selected, setSelected] = useState<number | null>(null)
  return <section className="quiz-box"><p className="eyebrow">Quiz rápido</p><h2>{quiz.question}</h2><div role="radiogroup" aria-label={quiz.question}>{quiz.options.map((option, index) => <button key={option} role="radio" aria-checked={selected === index} className={`quiz-option ${selected !== null && index === quiz.answer ? 'quiz-option--correct' : ''} ${selected === index && index !== quiz.answer ? 'quiz-option--wrong' : ''}`} onClick={() => setSelected(index)}><span>{String.fromCharCode(65 + index)}</span>{option}</button>)}</div>{selected !== null && <p className={selected === quiz.answer ? 'quiz-feedback quiz-feedback--correct' : 'quiz-feedback'}>{quiz.explanation}</p>}</section>
}

function IntroChapter({ chapter }: { chapter: (typeof chapters)[number] }): React.JSX.Element {
  return <LessonLayout chapter={chapter} previous={chapters[chapter.number - 2]} next={chapters[chapter.number]}><section className="intro-lessons"><p className="eyebrow">Aulas do módulo</p><h2>Comece por aqui</h2>{chapter.lessons.map((lesson, index) => <button className="lesson" key={lesson.title}><span className={lesson.completed ? 'lesson-number lesson-number--done' : 'lesson-number'}>{lesson.completed ? <Check size={16} /> : index + 1}</span><span className="lesson-title"><strong>{lesson.title}</strong><small><Clock3 size={14} /> {lesson.duration}</small></span><span className="lesson-play"><Play size={15} fill="currentColor" /><ChevronRight size={17} /></span></button>)}</section><SummaryBox>{chapter.takeaway}</SummaryBox></LessonLayout>
}

export default function ChapterPage(): React.JSX.Element {
  const chapter = getChapter(useParams().chapterId)
  if (!chapter) return <Navigate to="/nao-encontrado" replace />
  if (!chapter.content) return <IntroChapter chapter={chapter} />
  const previous = chapters[chapter.number - 2]
  const next = chapters[chapter.number]
  return <LessonLayout chapter={chapter} previous={previous} next={next}>{chapter.content.map((section) => <section className="reading-section" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.example && <div className="example-box"><strong>{section.example.label}</strong><p>{section.example.text}</p></div>}</section>)}<CoachTip>{chapter.coachTip}</CoachTip><CommonMistake mistakes={chapter.commonMistakes ?? []} /><SummaryBox>{chapter.takeaway}</SummaryBox>{chapter.exercise && <ExerciseBox exercise={chapter.exercise} />}{chapter.quiz && <QuizBox quiz={chapter.quiz} />}</LessonLayout>
}
