import {TestBed} from '@angular/core/testing';

import {PaimentEmployeService} from './paiment-employe.service';

describe('PaimentEmployeService', () => {
  let service: PaimentEmployeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaimentEmployeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
