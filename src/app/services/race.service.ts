import { Race } from './../interfaces/race';
import { Poney } from './../interfaces/poney';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  private _ponies: Poney[] = []

  constructor(private http: HttpClient, private router: Router) {}

  get ponies(): Observable<Poney[]> {
    return this.http.get<Poney[]>(`${environment.API_URL}/ponies`)
  }

  get races(): Observable<Race[]> {
    return this.http.get<Race[]>(`${environment.API_URL}/races`)
  }

  saveRace(race: Race): Observable<Race> {
    return this.http.post<Race>(`${environment.API_URL}/races`, race)
  }

  savePoney(poney: Poney): Observable<Poney> {
    return this.http.post<Poney>(`${environment.API_URL}/ponies`, poney)
  }

  // checkIfNameIsUnique(name: string): Observable<boolean> {
  //   return this.http.get<Poney[]>(`${environment.API_URL}/ponies`, {
  //     params: {
  //       name 
  //     }
  //   }).pipe(map(ponies => !ponies.length))
  // }
}
