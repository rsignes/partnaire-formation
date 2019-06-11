import { Race } from './../interfaces/race';
import { Poney } from './../interfaces/poney';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  private _ponies: Poney[] = []

  constructor(private http: HttpClient) {}

  get ponies(): Observable<Poney[]> {
    return this.http.get<Poney[]>(`${environment.API_URL}/ponies`)
  }

  get races(): Observable<Race[]> {
    return this.http.get<Race[]>(`${environment.API_URL}/races`)
  }

  getRaceById(id: string): Observable<Race> {
    return this.races.pipe(map(races => races.find(race => race.id === id)))
  }
}
