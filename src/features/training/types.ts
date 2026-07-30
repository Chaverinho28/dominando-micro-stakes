export type Position = 'BTN' | 'SB' | 'BB'
export type StackDepth = 10 | 15 | 18 | 20
export type TrainingCategory = 'push-fold' | 'open-raise' | 'three-bet'
export type TrainingAction = 'fold' | 'limp' | 'call' | 'raise' | 'push'
export type Difficulty = 'beginner' | 'intermediate' | 'advanced'

export interface VillainProfile { position: string; stack: number; description: string }
export interface TrainingSituation {
  id: string
  category: TrainingCategory
  position: Position
  stack: StackDepth
  blind: string
  heroCards: [string, string]
  board: string[]
  villains: VillainProfile[]
  actionContext: string
  correctAction: TrainingAction
  explanation: string
  concepts: string[]
  whenItChanges: string
  difficulty: Difficulty
  xpReward: number
}
export interface TrainingFilters { positions: Position[]; stacks: StackDepth[]; categories: TrainingCategory[] }
export interface TrainingStats { resolved: number; correct: number; streak: number; xp: number; secondsTrained: number }
