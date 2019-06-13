import { TestBed } from '@angular/core/testing';

import { PoneyService } from './poney.service';

describe('PoneyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoneyService = TestBed.get(PoneyService);
    expect(service).toBeTruthy();
  });
});
