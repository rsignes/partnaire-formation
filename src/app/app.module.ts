import { MaterialModule } from './modules/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PoneyComponent } from './components/poney/poney.component';
import { RainbowDirective } from './directives/rainbow.directive';
import { RaceComponent } from './components/race/race.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PercentagePipe } from './pipes/percentage.pipe';
import { IsRacingPipe } from './pipes/is-racing.pipe';
import { TitleCasePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PoneyComponent,
    RainbowDirective,
    RaceComponent,
    PercentagePipe,
    IsRacingPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    TitleCasePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
