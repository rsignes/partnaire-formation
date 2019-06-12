import { Poney } from 'src/app/interfaces/poney';
import { PoneyAction, PoneyActionTypes } from '../actions/poney.actions';

const INITIAL_STATE = [
  {
    "name": "Roger",
    "img": "http://www.upandgo.nl/wp-content/uploads/2016/12/Characters_Runner_v02.gif",
    "id": "INK_7UR"
  },
  {
    "name": "Usain",
    "img": "https://dataethics.eu/wp-content/uploads/frostRun-1-2.gif",
    "id": "OxqueyR"
  },
  {
    "name": "Mathieu",
    "img": "https://i.redd.it/ewjlhkbrzvg21.gif",
    "id": "Ac_cdlK"
  }
]

export const poneyReducer = (state: Poney[] = INITIAL_STATE, action: PoneyAction) => {

  switch(action.type) {
    case PoneyActionTypes.Add:
      return [...state, action.payload]
    default:
      return state
  }

}