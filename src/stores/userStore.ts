import { create } from 'zustand'
interface UserState { id: string | null; name: string; level: number; xp: number; setUser: (user: Pick<UserState, 'id' | 'name'>) => void }
/** Authentication-ready user boundary; currently seeded with a local learning profile. */
export const useUserStore = create<UserState>((set) => ({ id: null, name: 'Jogador', level: 2, xp: 240, setUser: (user) => set(user) }))
