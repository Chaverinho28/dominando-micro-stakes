import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import ChapterPage from './pages/ChapterPage'
import NotFound from './pages/NotFound'

function App(): React.JSX.Element {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/capitulos/:chapterId" element={<ChapterPage />} />
        <Route path="/nao-encontrado" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/nao-encontrado" replace />} />
      </Routes>
    </Layout>
  )
}

export default App
