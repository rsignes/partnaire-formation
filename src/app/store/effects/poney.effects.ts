import { RaceService } from './../../services/race.service';
import { PoneyActionTypes, LoadPoniesSuccess, AddPoney, AddPoneySuccess } from './../actions/poney.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { flatMap, map, tap } from 'rxjs/operators'
import { Router } from '@angular/router';

@Injectable()
export class PoneyEffects {

  @Effect()
  loadPonies$ = this.actions$.pipe(
    ofType(PoneyActionTypes.Load),
    flatMap(() => this.raceService.ponies),
    map(ponies => new LoadPoniesSuccess(ponies))
  )
  
  @Effect()
  addPoney$ = this.actions$.pipe(
    ofType<AddPoney>(PoneyActionTypes.Add),
    flatMap(action => this.raceService.savePoney(action.payload)),
    tap(() => this.router.navigateByUrl('/race-create')),
    map(poney => new AddPoneySuccess(poney))
  )

  constructor(private actions$: Actions, private raceService: RaceService, private router: Router) {}

}