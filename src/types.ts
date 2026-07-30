import type { LucideIcon } from 'lucide-react'

export type Chapter = {
  id: string
  title: string
  duration: string
  level: 'Fácil' | 'Médio' | 'Avançado'
  summary: string
  objective: string
  takeaway: string
  next?: string
}

export type MenuItem = {
  title: string
  path: string
  icon: LucideIcon
}
