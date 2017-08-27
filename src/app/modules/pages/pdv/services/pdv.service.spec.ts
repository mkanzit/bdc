import { TestBed, inject } from '@angular/core/testing';

import { PdvService } from './pdv.service';

describe('PdvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PdvService]
    });
  });

  it('should be created', inject([PdvService], (service: PdvService) => {
    expect(service).toBeTruthy();
  }));
});
