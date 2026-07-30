import { ClipboardCheck } from 'lucide-react'
export default function SummaryBox({ children }: React.PropsWithChildren): React.JSX.Element { return <aside className="summary-box"><ClipboardCheck size={22} /><div><p className="eyebrow">Resumo do capítulo</p><p>{children}</p></div></aside> }
