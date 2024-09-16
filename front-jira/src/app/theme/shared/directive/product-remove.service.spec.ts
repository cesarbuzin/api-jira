import { TestBed } from '@angular/core/testing';

import { ProductRemoveService } from './product-remove.service';

describe('ProductRemoveService', () => {
  let service: ProductRemoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductRemoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
