import { RaceService } from './services/race.service';
import { PoneyService } from './services/poney.service';
import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

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

  constructor(private titleCasePipe: TitleCasePipe, private poneyService: PoneyService, private raceService: RaceService) {
    this.title = this.titleCasePipe.transform('PARTNAIRE')
    this.poneyService.getAll()
    this.raceService.getAll()
  }
}
