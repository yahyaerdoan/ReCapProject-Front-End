import { TestBed } from '@angular/core/testing';

import { ExpirationInterceptor } from './expiration.interceptor';

describe('ExpirationInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ExpirationInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ExpirationInterceptor = TestBed.inject(ExpirationInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
