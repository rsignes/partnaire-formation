import { Race } from './../interfaces/race';
import { Poney } from './../interfaces/poney';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  private _ponies: Poney[] = [
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

  private _races: Race[] = [
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

  get ponies(): Observable<Poney[]> {
    return new Observable((observer) => {
      // HTTP SIMULATION
      observer.next(this._ponies)
    })
  }

  get races(): Observable<Race[]> {
    return of(this._races)
  }

  getRaceById(id: string): Observable<Race> {
    return this.races.pipe(map(races => races.find(race => race.id === id)))
  }

  resetPonies(): void {
    this._ponies.forEach(poney => poney.distance = 0)
  }
}
