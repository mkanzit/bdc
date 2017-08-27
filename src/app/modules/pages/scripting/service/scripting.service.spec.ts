import { TestBed, inject } from '@angular/core/testing';

import { ScriptingService } from './scripting.service';

describe('ScriptingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScriptingService]
    });
  });

  it('should be created', inject([ScriptingService], (service: ScriptingService) => {
    expect(service).toBeTruthy();
  }));
});
