import { create } from 'zustand'
import { persist } from 'zustand/middleware'
interface SettingsState { reducedMotion: boolean; setReducedMotion: (value: boolean) => void }
export const useSettingsStore = create<SettingsState>()(persist((set) => ({ reducedMotion: false, setReducedMotion: (reducedMotion) => set({ reducedMotion }) }), { name: 'micro-stakes-settings' }))
