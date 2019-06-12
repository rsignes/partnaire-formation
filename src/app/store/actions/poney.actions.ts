import { Action } from '@ngrx/store';
import { Poney } from 'src/app/interfaces/poney';

export enum PoneyActionTypes {
  Add = '[Poney] ADD',
  AddSuccess = '[Poney] ADD_SUCCESS',
  Load = '[Poney] LOAD',
  LoadSuccess = '[Poney] LOAD_SUCCESS'
}

export class LoadPonies implements Action {
  readonly type: string = PoneyActionTypes.Load
}

export class LoadPoniesSuccess implements Action {
  readonly type: string = PoneyActionTypes.LoadSuccess

  constructor(public payload: Poney[]) {}
}

export class AddPoney implements Action {
  
  readonly type: string = PoneyActionTypes.Add

  constructor(public payload: Poney) {}
}

export class AddPoneySuccess implements Action {
  
  readonly type: string = PoneyActionTypes.AddSuccess

  constructor(public payload: Poney) {}
}

export type PoneyAction = AddPoney | LoadPoniesSuccess