import { TitleCasePipe } from '@angular/common';
import { Race } from './interfaces/race';
import { Component } from '@angular/core';

@Component({
  selector: 'par-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'PARTNAIRE'

  races: Race[] = [
    {
      "id": "0",
      "name": "Orléans",
      "poneyIds": ["0", "1"]
    },
    {
      "id": "1",
      "name": "Longchamp",
      "poneyIds": ["1", "2"]
    }
  ]

  constructor(private titleCasePipe: TitleCasePipe) {
    this.title = this.titleCasePipe.transform('PARTNAIRE')
  }
}
