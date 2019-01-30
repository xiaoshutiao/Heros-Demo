import { TestBed } from '@angular/core/testing';

import { VillainCacheService } from './villain-cache.service';

describe('VillainCacheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VillainCacheService = TestBed.get(VillainCacheService);
    expect(service).toBeTruthy();
  });
});
