import { TestBed } from '@angular/core/testing';

import { EstaLogueadoGuard } from './estaLogueado.guard';

describe('EsstaLogueadoGuard', () => {
  let guard: EstaLogueadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EstaLogueadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
