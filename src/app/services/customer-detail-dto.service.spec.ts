import { TestBed } from '@angular/core/testing';

import { CustomerDetailDtoService } from './customer-detail-dto.service';

describe('CustomerDetailDtoService', () => {
  let service: CustomerDetailDtoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerDetailDtoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
