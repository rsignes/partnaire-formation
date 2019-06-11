import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'par-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'PARTNAIRE'

  constructor(private titleCasePipe: TitleCasePipe) {
    this.title = this.titleCasePipe.transform('PARTNAIRE')
  }
}
