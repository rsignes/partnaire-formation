import { Race } from './interfaces/race';
import { PoneyComponent } from './components/poney/poney.component';
import { Poney } from './interfaces/poney';
import { Component, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'par-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'PARTNAIRE';

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
}
