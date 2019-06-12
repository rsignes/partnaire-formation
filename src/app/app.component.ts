import { LoadRaces } from './store/actions/race.actions';
import { Store } from '@ngrx/store';
import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { AppState } from './app.state';
import { LoadPonies } from './store/actions/poney.actions';

@Component({
  selector: 'par-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('hoverScale', [
      state('enter', style({
        'transform': 'scale(1.5)'
      })),
      state('leave', style({
        'transform': 'scale(1)'
      })),
      transition('leave => enter', [
        animate('.2s', keyframes([
          style({ backgroundColor: 'blue' }),
          style({ backgroundColor: 'red' }),
          style({ backgroundColor: 'orange' }),
          style({
            'transform': 'scale(1.5)'
          })
        ]))
      ]),
      transition('enter => leave', [
        animate('.2s', keyframes([
          style({ backgroundColor: 'blue' }),
          style({ backgroundColor: 'red' }),
          style({ backgroundColor: 'orange' }),
          style({
            'transform': 'scale(1)'
          })
        ]))
      ])
    ])
  ]
})
export class AppComponent {
  title: string = 'PARTNAIRE'

  buttonState: string = 'leave'

  constructor(
    private titleCasePipe: TitleCasePipe,
    private store: Store<AppState>
  ) {
    this.title = this.titleCasePipe.transform('PARTNAIRE')
    this.store.dispatch(new LoadPonies())
    this.store.dispatch(new LoadRaces())
  }
}
