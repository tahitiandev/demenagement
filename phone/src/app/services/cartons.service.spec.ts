import { TestBed } from '@angular/core/testing';

import { CartonsService } from './cartons.service';

describe('CartonsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartonsService = TestBed.get(CartonsService);
    expect(service).toBeTruthy();
  });
});
