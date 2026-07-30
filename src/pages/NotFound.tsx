import { Home } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFound(): React.JSX.Element {
  return <div className="page not-found"><p className="eyebrow">404</p><h1>Esta mesa não está aberta.</h1><p>A página que você procurou não existe ou ainda está em desenvolvimento.</p><Link className="primary-button" to="/"><Home size={18} /> Ir para o início</Link></div>
}
