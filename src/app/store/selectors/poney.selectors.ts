import { Poney } from 'src/app/interfaces/poney';
import { AppState } from 'src/app/app.state';
import { createSelector } from '@ngrx/store';

export const ponies = (state: AppState): Poney[] => state.poney

export const isNameUnique = (name: string) => createSelector(
  ponies,
  (ponies: Poney[]) => !ponies.find(poney => poney.name === name)
)