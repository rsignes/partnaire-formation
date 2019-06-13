import { MessageModalService } from './../../services/message-modal.service';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EntityOp, EntityAction } from '@ngrx/data';



@Injectable()
export class RaceEffects {

  @Effect({ dispatch: false })
  raceCreated$ = this.actions$.pipe(
    ofType<EntityAction>(`[Races] ${EntityOp.SAVE_ADD_ONE_SUCCESS}`),
    map(action => {
      if (action.payload.entityName === 'Races') {
        this.messageModal.openModal('La course a été créée')
      }
    })
  )

  constructor(private actions$: Actions, private messageModal: MessageModalService) {}

}
