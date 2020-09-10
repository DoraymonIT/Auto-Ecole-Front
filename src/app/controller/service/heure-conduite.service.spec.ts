import {TestBed} from '@angular/core/testing';

import {HeureConduiteService} from './heure-conduite.service';

describe('HeureConduiteService', () => {
  let service: HeureConduiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeureConduiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
