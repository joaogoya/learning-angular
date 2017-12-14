import { TestBed, inject } from '@angular/core/testing';

import { ServCadService } from './serv-cad.service';

describe('ServCadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServCadService]
    });
  });

  it('should be created', inject([ServCadService], (service: ServCadService) => {
    expect(service).toBeTruthy();
  }));
});
