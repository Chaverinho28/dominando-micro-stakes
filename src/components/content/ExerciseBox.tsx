import { CheckSquare } from 'lucide-react'
import type { Chapter } from '../../data/chapters'
export default function ExerciseBox({ exercise }: { exercise: NonNullable<Chapter['exercise']> }): React.JSX.Element { return <section className="exercise-box"><CheckSquare size={22} /><div><p className="eyebrow">Exercício</p><h2>{exercise.title}</h2><p>{exercise.prompt}</p><ul>{exercise.checklist.map((item) => <li key={item}>{item}</li>)}</ul></div></section> }
