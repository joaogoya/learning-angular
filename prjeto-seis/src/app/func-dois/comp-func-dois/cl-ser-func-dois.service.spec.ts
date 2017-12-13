import { TestBed, inject } from '@angular/core/testing';

import { ClSerFuncDoisService } from './cl-ser-func-dois.service';

describe('ClSerFuncDoisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClSerFuncDoisService]
    });
  });

  it('should be created', inject([ClSerFuncDoisService], (service: ClSerFuncDoisService) => {
    expect(service).toBeTruthy();
  }));
});
