import { RaceService } from './../../services/race.service';
import { RaceActionTypes, LoadRacesSuccess, AddRace, AddRaceSuccess } from './../actions/race.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { flatMap, map, tap } from 'rxjs/operators'
import { Router } from '@angular/router';

@Injectable()
export class RaceEffects {

  @Effect()
  loadPonies$ = this.actions$.pipe(
    ofType(RaceActionTypes.Load),
    flatMap(() => this.raceService.races),
    map(races => new LoadRacesSuccess(races))
  )
  
  @Effect()
  addRace$ = this.actions$.pipe(
    ofType<AddRace>(RaceActionTypes.Add),
    flatMap(action => this.raceService.saveRace(action.payload)),
    tap(race => this.router.navigate(['/race', race.id])),
    map(race => new AddRaceSuccess(race))
  )

  constructor(private actions$: Actions, private raceService: RaceService, private router: Router) {}

}