import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailDtoComponent } from './customer-detail-dto.component';

describe('CustomerDetailDtoComponent', () => {
  let component: CustomerDetailDtoComponent;
  let fixture: ComponentFixture<CustomerDetailDtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDetailDtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailDtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
