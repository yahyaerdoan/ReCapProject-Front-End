import { TestBed } from '@angular/core/testing';

import { CarDetailImageService } from './car-detail-image.service';

describe('CarDetailImageService', () => {
  let service: CarDetailImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarDetailImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
