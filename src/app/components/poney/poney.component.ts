import { Poney } from './../../interfaces/poney';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'par-poney',
  templateUrl: './poney.component.html',
  styleUrls: ['./poney.component.scss']
})
export class PoneyComponent implements OnInit {

  @Input() poney: Poney
  @Output() win: EventEmitter<Poney> = new EventEmitter()
  intervalId: any

  constructor() { }

  ngOnInit() {
    this.run()
  }

  ngOnDestroy(): void {
    this.stopRunning()
  }

  handleClick() {
    console.log('CLICK : ', this.poney.name)
  }

  run() {
    this.intervalId = setInterval(() => {
      this.poney.distance += Math.floor(Math.random() * 10) + 1

      if (this.poney.distance >= 90) {
        this.poney.distance = 90
        this.win.emit(this.poney)
      }
    }, 1000)
  }

  stopRunning() {
    clearInterval(this.intervalId)
  }

}
