import { Observable } from 'rxjs';
import { RaceService } from './../../services/race.service';
import { Race } from './../../interfaces/race';
import { Poney } from './../../interfaces/poney';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { PoneyComponent } from '../poney/poney.component';
import { ActivatedRoute, Router } from '@angular/router';
import { flatMap, tap } from 'rxjs/operators'

@Component({
  selector: 'par-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  ponies$: Observable<Poney[]>

  @ViewChildren('poneyChildren') poneyChildren: QueryList<PoneyComponent>
  race$: Observable<Race>

  handleWin(poney: Poney): void {
    console.log('WIN : ', poney.name)
    this.poneyChildren.forEach(poney => {
      poney.stopRunning()
    })
  }

  constructor(
    private raceService: RaceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.ponies$ = this.raceService.ponies

    this.race$ = this.route.paramMap
      .pipe(
        flatMap(paramMap => this.raceService.getRaceById(paramMap.get('id'))),
        tap(race => {
          if (!race) {
            this.router.navigateByUrl('/race-list')
          }
        })
      )
  }

}
