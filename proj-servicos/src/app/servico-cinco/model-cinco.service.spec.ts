import { TestBed, inject } from '@angular/core/testing';

import { ModelCincoService } from './model-cinco.service';

describe('ModelCincoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModelCincoService]
    });
  });

  it('should be created', inject([ModelCincoService], (service: ModelCincoService) => {
    expect(service).toBeTruthy();
  }));
});
