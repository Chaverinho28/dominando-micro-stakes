import { TriangleAlert } from 'lucide-react'
export default function CommonMistake({ mistakes }: { mistakes: string[] }): React.JSX.Element { return <aside className="content-callout common-mistake"><TriangleAlert size={22} /><div><p className="eyebrow">Erros comuns</p><ul>{mistakes.map((mistake) => <li key={mistake}>{mistake}</li>)}</ul></div></aside> }
