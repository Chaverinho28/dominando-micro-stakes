import { BookOpen, LayoutDashboard, Menu, Trophy } from 'lucide-react'
import { useState, type PropsWithChildren } from 'react'
import { NavLink } from 'react-router-dom'
import { chapters } from '../data/chapters'

const navClass = ({ isActive }: { isActive: boolean }): string =>
  `nav-link ${isActive ? 'nav-link--active' : ''}`

function Sidebar({ onNavigate }: { onNavigate?: () => void }): React.JSX.Element {
  return (
    <aside className="sidebar">
      <NavLink to="/" className="brand" onClick={onNavigate}>
        <span className="brand-mark"><Trophy size={19} strokeWidth={2.5} /></span>
        <span><strong>Dominando</strong><small>os Micro Stakes</small></span>
      </NavLink>
      <nav aria-label="Navegação principal">
        <p className="nav-label">Visão geral</p>
        <NavLink end to="/" className={navClass} onClick={onNavigate}><LayoutDashboard size={18} /> Início</NavLink>
        <p className="nav-label nav-label--chapters">Conteúdo</p>
        {chapters.map((chapter) => (
          <NavLink
            key={chapter.id}
            to={`/capitulos/${chapter.id}`}
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
            onClick={onNavigate}
          >
            <BookOpen size={18} />
            <span>Cap. {chapter.number}</span>
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-tip">
        <span>♠</span>
        <p><strong>Jogue seu melhor poker.</strong> Uma decisão por vez.</p>
      </div>
    </aside>
  )
}

export default function Layout({ children }: PropsWithChildren): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const close = (): void => setIsOpen(false)
  return (
    <div className="app-shell">
      <div className="desktop-sidebar"><Sidebar /></div>
      {isOpen && <button className="mobile-overlay" aria-label="Fechar menu" onClick={close} />}
      <div className={`mobile-sidebar ${isOpen ? 'mobile-sidebar--open' : ''}`}><Sidebar onNavigate={close} /></div>
      <main className="main-content">
        <header className="mobile-header">
          <button className="icon-button" onClick={() => setIsOpen(true)} aria-label="Abrir menu"><Menu size={22} /></button>
          <span>Dominando os Micro Stakes</span>
        </header>
        {children}
      </main>
    </div>
  )
}
