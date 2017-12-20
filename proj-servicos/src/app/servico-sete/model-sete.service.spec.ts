import { TestBed, inject } from '@angular/core/testing';

import { ModelSeteService } from './model-sete.service';

describe('ModelSeteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModelSeteService]
    });
  });

  it('should be created', inject([ModelSeteService], (service: ModelSeteService) => {
    expect(service).toBeTruthy();
  }));
});
