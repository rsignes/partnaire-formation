import { RaceComponent } from './components/race/race.component';
import { Routes } from '@angular/router'
import { RaceListComponent } from './components/race-list/race-list.component';
import { RaceCreateComponent } from './components/race-create/race-create.component';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'race-list',
    pathMatch: 'prefix'
  },
  {
    path: 'race-list',
    component: RaceListComponent
  },
  {
    path: 'race/:id',
    component: RaceComponent
  },
  {
    path: 'race-create',
    component: RaceCreateComponent
  },
  {
    path: '**',
    redirectTo: 'race-list'
  }
]