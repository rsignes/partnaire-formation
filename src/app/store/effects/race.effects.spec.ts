import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RaceEffects } from './race.effects';

describe('RaceEffects', () => {
  let actions$: Observable<any>;
  let effects: RaceEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RaceEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(RaceEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
