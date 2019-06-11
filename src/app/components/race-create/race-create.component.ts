import { RaceService } from './../../services/race.service';
import { Poney } from './../../interfaces/poney';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Race } from 'src/app/interfaces/race';

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

  constructor(private raceService: RaceService) { }

  ngOnInit() {
    this.ponies$ = this.raceService.ponies
  }

  handleSubmit() {
    this.raceService.saveRace(this.race)
  }

}
