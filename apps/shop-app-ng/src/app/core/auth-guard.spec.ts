import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { provideZonelessChangeDetection } from '@angular/core';

import { authGuard } from './auth-guard';

describe('authGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]
    });
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
