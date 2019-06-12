import { Race } from 'src/app/interfaces/Race';
import { RaceAction, RaceActionTypes } from '../actions/race.actions';

const INITIAL_STATE = []

export const raceReducer = (state: Race[] = INITIAL_STATE, action: RaceAction) => {

  switch(action.type) {
    case RaceActionTypes.LoadSuccess:
      return action.payload
    case RaceActionTypes.AddSuccess:
      return [...state, action.payload]
    default:
      return state
  }

}