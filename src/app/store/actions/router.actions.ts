import { Action } from '@ngrx/store';

export enum RouterActionTypes {
  ShownWelcomeMessage = '[ROUTER] Shown welcome message'
}

export class ShownWelcomeMessage implements Action {
  readonly type: string = RouterActionTypes.ShownWelcomeMessage
}