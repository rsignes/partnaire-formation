import { ROUTES } from './app.routes'
import { MaterialModule } from './modules/material/material.module'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { PoneyComponent } from './components/poney/poney.component'
import { RainbowDirective } from './directives/rainbow.directive'
import { RaceComponent } from './components/race/race.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PercentagePipe } from './pipes/percentage.pipe'
import { IsRacingPipe } from './pipes/is-racing.pipe'
import { TitleCasePipe } from '@angular/common'
import { RaceListComponent } from './components/race-list/race-list.component'
import { RaceCreateComponent } from './components/race-create/race-create.component'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoneyCreateComponent } from './components/poney-create/poney-create.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { poneyReducer } from './store/reducers/poney.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PoneyEffects } from './store/effects/poney.effects';
import { raceReducer } from './store/reducers/race.reducer';
import { RaceEffects } from './store/effects/race.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterEffects } from './store/effects/router.effects';
import { routerReducer } from './store/reducers/router.reducer'

@NgModule({
  declarations: [
    AppComponent,
    PoneyComponent,
    RainbowDirective,
    RaceComponent,
    PercentagePipe,
    IsRacingPipe,
    RaceListComponent,
    RaceCreateComponent,
    PoneyCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      poney: poneyReducer,
      race: raceReducer,
      routerInfo: routerReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 100
    }),
    EffectsModule.forRoot([
      PoneyEffects,
      RaceEffects,
      RouterEffects
    ]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    TitleCasePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
