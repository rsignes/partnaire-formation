import { Observable } from 'rxjs';
import { Race } from './../../interfaces/race';
import { RaceService } from './../../services/race.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'par-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss']
})
export class RaceListComponent implements OnInit {

  races$: Observable<Race[]>

  constructor(private raceService: RaceService) { }

  ngOnInit() {
    this.races$ = this.raceService.races
  }

}
