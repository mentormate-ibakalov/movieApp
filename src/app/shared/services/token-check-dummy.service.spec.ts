import { TestBed } from '@angular/core/testing';

import { TokenCheckDummyService } from './token-check-dummy.service';

describe('TokenCheckDummyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenCheckDummyService = TestBed.get(TokenCheckDummyService);
    expect(service).toBeTruthy();
  });
});
