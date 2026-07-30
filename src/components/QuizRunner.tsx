import { CheckCircle2, CircleHelp } from 'lucide-react'
import { useState } from 'react'
import type { QuizQuestion } from '../data/chapters'
import { Button, Card, ProgressBar } from './ui'

export default function QuizRunner({ questions }: { questions: QuizQuestion[] }): React.JSX.Element {
  const [current, setCurrent] = useState(0); const [answer, setAnswer] = useState<number | null>(null); const [score, setScore] = useState(0); const question = questions[current]; const finished = current === questions.length - 1 && answer !== null
  const select = (index: number): void => { if (answer !== null) return; setAnswer(index); if (index === question.answer) setScore((value) => value + 1) }
  const next = (): void => { if (finished) { setCurrent(0); setAnswer(null); setScore(0); return } setCurrent((value) => value + 1); setAnswer(null) }
  return <Card className="quiz-runner"><div className="quiz-runner__header"><div><p className="eyebrow">Quiz · {question.type === 'true-false' ? 'Verdadeiro ou falso' : question.type === 'identify-mistake' ? 'Identifique o erro' : 'Múltipla escolha'}</p><h2>{question.question}</h2></div><CircleHelp size={23} /></div><ProgressBar value={((current + (answer !== null ? 1 : 0)) / questions.length) * 100} label="Progresso do quiz" /><div role="radiogroup" aria-label={question.question}>{question.options.map((option, index) => <button key={option} role="radio" aria-checked={answer === index} onClick={() => select(index)} className={`quiz-option ${answer !== null && index === question.answer ? 'quiz-option--correct' : ''} ${answer === index && index !== question.answer ? 'quiz-option--wrong' : ''}`}><span>{String.fromCharCode(65 + index)}</span>{option}</button>)}</div>{answer !== null && <div className={`quiz-feedback ${answer === question.answer ? 'quiz-feedback--correct' : ''}`}><CheckCircle2 size={18} /><span>{question.explanation}</span></div>}{answer !== null && <div className="quiz-runner__footer"><span>Pontuação: {score} / {current + 1}</span><Button onClick={next}>{finished ? 'Recomeçar quiz' : 'Próxima pergunta'}</Button></div>}</Card>
}
