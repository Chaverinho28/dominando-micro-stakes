import { trainingSituations } from '../data/situations'
import type { TrainingFilters, TrainingSituation } from '../types'

/** Query boundary for local seeds now and a future API/CMS repository later. */
export function getSituations(filters: TrainingFilters): TrainingSituation[] {
  return trainingSituations.filter((situation) => (!filters.positions.length || filters.positions.includes(situation.position)) && (!filters.stacks.length || filters.stacks.includes(situation.stack)) && (!filters.categories.length || filters.categories.includes(situation.category)))
}
export function getNextSituation(filters: TrainingFilters, previousId?: string): TrainingSituation | undefined { const matches = getSituations(filters); return matches.find((situation) => situation.id !== previousId) ?? matches[0] }
