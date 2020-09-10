import {TestBed} from '@angular/core/testing';

import {EtatFinancierParMoisService} from './etat-financier-par-mois.service';

describe('EtatFinancierParMoisService', () => {
  let service: EtatFinancierParMoisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtatFinancierParMoisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
