import { TestBed, inject } from '@angular/core/testing';

import { PromotionsService } from './promotions.service';

describe('PromotionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PromotionsService]
    });
  });

  it('should be created', inject([PromotionsService], (service: PromotionsService) => {
    expect(service).toBeTruthy();
  }));
});
