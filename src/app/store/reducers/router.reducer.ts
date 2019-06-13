import { ShownWelcomeMessage, RouterActionTypes } from '../actions/router.actions';

const INITIAL_STATE = {
  welcomeMessageShown: false
}

export const routerReducer = (state: Object = INITIAL_STATE, action: ShownWelcomeMessage) => {

  switch(action.type) {
    case RouterActionTypes.ShownWelcomeMessage:
      return Object.assign({}, state, {welcomeMessageShown: true})
    default:
      return state
  }

}