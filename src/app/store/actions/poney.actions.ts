import { Action } from '@ngrx/store';
import { Poney } from 'src/app/interfaces/poney';

export enum PoneyActionTypes {
  Add = '[Poney] ADD',
  Load = '[Poney] LOAD'
}

export class LoadPonies implements Action {
  readonly type: string = PoneyActionTypes.Load
}

export class AddPoney implements Action {
  
  readonly type: string = PoneyActionTypes.Add

  constructor(public payload: Poney) {}
}

export type PoneyAction = AddPoney