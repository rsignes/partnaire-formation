import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Race } from './../../interfaces/race';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'par-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss']
})
export class RaceListComponent implements OnInit {

  races$: Observable<Race[]>

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.races$ = this.store.select('race')
  }

}
