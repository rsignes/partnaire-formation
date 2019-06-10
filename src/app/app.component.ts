import { PoneyComponent } from './components/poney/poney.component';
import { Poney } from './interfaces/poney';
import { Component, ViewEncapsulation, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'par-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'PARTNAIRE';

  ponies: Poney[] = [
    {
      "id": "0",
      "name": "Romain",
      "img": "http://ponyracer.ninja-squad.com/assets/images/pony-blue-running.gif",
      "distance": 0
    },
    {
      "id": "1",
      "name": "Chris",
      "img": "http://ponyracer.ninja-squad.com/assets/images/pony-green-running.gif",
      "distance": 0
    },
    {
      "id": "2",
      "name": "Hary",
      "img": "http://ponyracer.ninja-squad.com/assets/images/pony-orange-running.gif",
      "distance": 0
    }
  ]

  @ViewChildren('poneyChildren') poneyChildren: QueryList<PoneyComponent>

  handleWin(poney: Poney): void {
    console.log('WIN : ', poney.name)
    this.poneyChildren.forEach(poney => {
      poney.stopRunning()
    })
  }
}
