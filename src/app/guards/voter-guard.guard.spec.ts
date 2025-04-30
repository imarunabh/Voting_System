import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { voterGuardGuard } from './voter-guard.guard';

describe('voterGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => voterGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
