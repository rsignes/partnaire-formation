import { Race } from 'src/app/interfaces/race';
import { Action } from '@ngrx/store';

export enum RaceActionTypes {
  Add = '[Race] ADD',
  AddSuccess = '[Race] ADD_SUCCESS',
  Load = '[Race] LOAD',
  LoadSuccess = '[Race] LOAD_SUCCESS'
}

export class LoadRaces implements Action {
  readonly type: string = RaceActionTypes.Load
}

export class LoadRacesSuccess implements Action {
  readonly type: string = RaceActionTypes.LoadSuccess

  constructor(public payload: Race[]) {}
}

export class AddRace implements Action {
  
  readonly type: string = RaceActionTypes.Add

  constructor(public payload: Race) {}
}

export class AddRaceSuccess implements Action {
  
  readonly type: string = RaceActionTypes.AddSuccess

  constructor(public payload: Race) {}
}

export type RaceAction = AddRace | LoadRacesSuccess