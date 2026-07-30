import { RotateCw } from 'lucide-react'
import { useState } from 'react'
import type { Flashcard } from '../data/chapters'
import { Button, Card } from './ui'

export default function Flashcards({ cards }: { cards: Flashcard[] }): React.JSX.Element {
  const [index, setIndex] = useState(0); const [flipped, setFlipped] = useState(false); const card = cards[index]
  const changeCard = (direction: number): void => { setIndex((current) => (current + direction + cards.length) % cards.length); setFlipped(false) }
  return <Card className="flashcards"><div className="flashcards__header"><div><p className="eyebrow">Flashcards</p><h2>Revise o conceito</h2></div><span>{index + 1} / {cards.length}</span></div><button className={`flashcard ${flipped ? 'flashcard--flipped' : ''}`} onClick={() => setFlipped(!flipped)} aria-label="Virar flashcard"><span>{flipped ? card.back : card.front}</span><small><RotateCw size={13} /> Clique para virar</small></button><div className="flashcards__actions"><Button variant="secondary" onClick={() => changeCard(-1)}>Anterior</Button><Button variant="secondary" onClick={() => changeCard(1)}>Próximo</Button></div></Card>
}
