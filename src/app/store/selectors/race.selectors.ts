import { Race } from 'src/app/interfaces/Race';
import { AppState } from 'src/app/app.state';
import { createSelector } from '@ngrx/store'

export const races = (state: AppState): Race[] => state.race

export const raceById = id => createSelector(
  races,
  (races: Race[]) => races.find(race => race.id === id)
)