import { Poney } from 'src/app/interfaces/poney';
import { PoneyAction, PoneyActionTypes } from '../actions/poney.actions';

const INITIAL_STATE = []

export const poneyReducer = (state: Poney[] = INITIAL_STATE, action: PoneyAction) => {

  switch(action.type) {
    case PoneyActionTypes.LoadSuccess:
      return action.payload
    case PoneyActionTypes.AddSuccess:
      return [...state, action.payload]
    default:
      return state
  }

}