import { AppState } from './../../app.state';
import { RaceService } from './../../services/race.service';
import { Poney } from './../../interfaces/poney';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Race } from 'src/app/interfaces/race';
import { Store, select } from '@ngrx/store';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'par-race-create',
  templateUrl: './race-create.component.html',
  styleUrls: ['./race-create.component.scss']
})
export class RaceCreateComponent implements OnInit {

  ponies$: Observable<Poney[]>
  race: Race = {
    name: '',
    poneyIds: []
  }

  constructor(
    private raceService: RaceService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.ponies$ = this.store.pipe(select('poney'))
  }

  handleSubmit() {
    this.raceService.saveRace(this.race)
  }

}
