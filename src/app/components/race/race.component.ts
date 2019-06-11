import { Poney } from './../../interfaces/poney';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { PoneyComponent } from '../poney/poney.component';

@Component({
  selector: 'par-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
