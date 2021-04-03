import { TestBed } from '@angular/core/testing';

import { CardPaymentService } from './card-payment.service';

describe('CardPaymentService', () => {
  let service: CardPaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardPaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
