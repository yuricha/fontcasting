import { TestBed } from '@angular/core/testing';

import { ServicerecetService } from './servicerecet.service';

describe('ServicerecetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicerecetService = TestBed.get(ServicerecetService);
    expect(service).toBeTruthy();
  });
});
