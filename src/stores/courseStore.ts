import { create } from 'zustand'
import { persist } from 'zustand/middleware'
interface CourseState { favorites: string[]; toggleFavorite: (chapterId: string) => void }
export const useCourseStore = create<CourseState>()(persist((set) => ({ favorites: [], toggleFavorite: (chapterId) => set((state) => ({ favorites: state.favorites.includes(chapterId) ? state.favorites.filter((id) => id !== chapterId) : [...state.favorites, chapterId] })) }), { name: 'micro-stakes-course' }))
