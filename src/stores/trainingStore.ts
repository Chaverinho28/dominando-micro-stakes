import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { TrainingFilters, TrainingStats } from '../features/training/types'

const defaultFilters: TrainingFilters = { positions: [], stacks: [], categories: [] }
interface TrainingState { filters: TrainingFilters; stats: TrainingStats; setFilters: (filters: TrainingFilters) => void; recordAnswer: (correct: boolean, xp: number, seconds: number) => void }
export const useTrainingStore = create<TrainingState>()(persist((set) => ({ filters: defaultFilters, stats: { resolved: 0, correct: 0, streak: 0, xp: 0, secondsTrained: 0 }, setFilters: (filters) => set({ filters }), recordAnswer: (correct, xp, seconds) => set((state) => ({ stats: { resolved: state.stats.resolved + 1, correct: state.stats.correct + Number(correct), streak: correct ? state.stats.streak + 1 : 0, xp: state.stats.xp + (correct ? xp : 0), secondsTrained: state.stats.secondsTrained + seconds } })) }), { name: 'poker-academy-training' }))
