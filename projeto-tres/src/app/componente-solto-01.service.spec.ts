import { TestBed, inject } from '@angular/core/testing';

import { ComponenteSolto01Service } from './componente-solto-01.service';

describe('ComponenteSolto01Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponenteSolto01Service]
    });
  });

  it('should be created', inject([ComponenteSolto01Service], (service: ComponenteSolto01Service) => {
    expect(service).toBeTruthy();
  }));
});
