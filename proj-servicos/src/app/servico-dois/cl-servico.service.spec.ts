import { TestBed, inject } from '@angular/core/testing';

import { ClServicoService } from './cl-servico.service';

describe('ClServicoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClServicoService]
    });
  });

  it('should be created', inject([ClServicoService], (service: ClServicoService) => {
    expect(service).toBeTruthy();
  }));
});
