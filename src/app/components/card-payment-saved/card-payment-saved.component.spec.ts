import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPaymentSavedComponent } from './card-payment-saved.component';

describe('CardPaymentSavedComponent', () => {
  let component: CardPaymentSavedComponent;
  let fixture: ComponentFixture<CardPaymentSavedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPaymentSavedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPaymentSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
