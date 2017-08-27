import { TestBed, inject } from '@angular/core/testing';

import { EdocService } from './edoc.service';

describe('EdocService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EdocService]
    });
  });

  it('should be created', inject([EdocService], (service: EdocService) => {
    expect(service).toBeTruthy();
  }));
});
