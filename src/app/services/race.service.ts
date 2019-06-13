import { Race } from './../interfaces/race';
import { Poney } from './../interfaces/poney';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable({
  providedIn: 'root'
})
export class RaceService extends EntityCollectionServiceBase<Race> {

  constructor(private http: HttpClient, private router: Router, private serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Races', serviceElementsFactory)
  }

  // getRaceById(id: string): Observable<Race> {
  //   return this.races.pipe(map(races => races.find(race => race.id === id)))
  // }

  checkIfNameIsUnique(name: string): Observable<boolean> {
    return this.http.get<Poney[]>(`${environment.API_URL}/ponies`, {
      params: {
        name 
      }
    }).pipe(map(ponies => !ponies.length))
  }
}
