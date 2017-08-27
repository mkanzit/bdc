import { TestBed, inject } from '@angular/core/testing';

import { OfferImigrationsService } from './offer-migrations.service';

describe('OfferImigrationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfferImigrationsService]
    });
  });

  it('should be created', inject([OfferImigrationsService], (service: OfferImigrationsService) => {
    expect(service).toBeTruthy();
  }));
});
