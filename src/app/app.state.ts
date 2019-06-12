import { Race } from './interfaces/race';
import { Poney } from './interfaces/poney';

export interface AppState {
  poney: Poney[],
  race: Race[]
}