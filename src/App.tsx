import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
const Dashboard = lazy(() => import('./pages/Dashboard'))
const ChapterPage = lazy(() => import('./pages/ChapterPage'))
const NotFound = lazy(() => import('./pages/NotFound'))
const TrainingPage = lazy(() => import('./pages/TrainingPage'))

function App(): React.JSX.Element {
  return (
    <Layout><Suspense fallback={<div className="route-loader" role="status">Carregando conteúdo...</div>}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/capitulos/:chapterId" element={<ChapterPage />} />
        <Route path="/treinamento" element={<TrainingPage />} />
        <Route path="/nao-encontrado" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/nao-encontrado" replace />} />
      </Routes></Suspense>
    </Layout>
  )
}

export default App
