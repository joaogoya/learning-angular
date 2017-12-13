import { TestBed, inject } from '@angular/core/testing';

import { ClServUmService } from './cl-serv-um.service';

describe('ClServUmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClServUmService]
    });
  });

  it('should be created', inject([ClServUmService], (service: ClServUmService) => {
    expect(service).toBeTruthy();
  }));
});
