import { TestBed, inject } from '@angular/core/testing';

import { FlashNewsService } from './flash-news.service';

describe('FlashNewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlashNewsService]
    });
  });

  it('should be created', inject([FlashNewsService], (service: FlashNewsService) => {
    expect(service).toBeTruthy();
  }));
});
