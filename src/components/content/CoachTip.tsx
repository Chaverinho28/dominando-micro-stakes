import { Lightbulb } from 'lucide-react'
export default function CoachTip({ children }: React.PropsWithChildren): React.JSX.Element { return <aside className="content-callout coach-tip"><Lightbulb size={22} /><div><p className="eyebrow">Dica do Coach</p><p>{children}</p></div></aside> }
