import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { map, flatMap, first } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED, RouterNavigatedAction } from '@ngrx/router-store';
import { MatSnackBar } from '@angular/material';
import { ShownWelcomeMessage } from '../actions/router.actions';

@Injectable()
export class RouterEffects {

  @Effect()
  navigatedToHome$ = this.actions$.pipe(
    ofType<RouterNavigatedAction>(ROUTER_NAVIGATED),
    flatMap(action => {
      return this.store.pipe(select('routerInfo')).pipe(first()).pipe(map(routerInfo => {
        if (action.payload.event.urlAfterRedirects === '/race-list' && !routerInfo.welcomeMessageShown) {
          // display snackbar
          this.snackbar.open('Bienvenue chez Partnaire !', '', {
            duration: 5000
          })
          return new ShownWelcomeMessage()
        }
  
        return { type: "NO_ACTION" }
      }))
    })
  )

  constructor(
    private actions$: Actions, 
    private snackbar: MatSnackBar,
    private store: Store<AppState>
  ) { }
}