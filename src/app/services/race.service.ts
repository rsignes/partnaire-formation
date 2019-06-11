import { Race } from './../interfaces/race';
import { Poney } from './../interfaces/poney';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'
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

  getRaceById(id: string): Observable<Race> {
    return this.races.pipe(map(races => races.find(race => race.id === id)))
  }

  saveRace(race: Race): void {
    this.http.post<Race>(`${environment.API_URL}/races`, race).subscribe(race => {
      this.router.navigate(['/race', race.id])
    })
  }
}
