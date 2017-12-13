import { TestBed, inject } from '@angular/core/testing';

import { ServicoUmService } from './servico-um.service';

describe('ServicoUmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicoUmService]
    });
  });

  it('should be created', inject([ServicoUmService], (service: ServicoUmService) => {
    expect(service).toBeTruthy();
  }));
});
