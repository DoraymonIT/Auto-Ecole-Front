import {TestBed} from '@angular/core/testing';

import {PaimentClientService} from './paiment-client.service';

describe('PaimentClientService', () => {
  let service: PaimentClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaimentClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
