import { TestBed, inject } from '@angular/core/testing';

import { RoamingService } from './roaming.service';

describe('RoamingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoamingService]
    });
  });

  it('should be created', inject([RoamingService], (service: RoamingService) => {
    expect(service).toBeTruthy();
  }));
});
