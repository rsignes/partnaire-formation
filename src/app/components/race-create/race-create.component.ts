import { PoneyService } from './../../services/poney.service';
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

  constructor(private raceService: RaceService, private poneyService: PoneyService) { }

  ngOnInit() {
    this.ponies$ = this.poneyService.entities$
  }

  handleSubmit() {
    this.raceService.add(this.race)
  }

}
