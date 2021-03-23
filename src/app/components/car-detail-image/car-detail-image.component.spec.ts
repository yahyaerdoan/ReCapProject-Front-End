import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailImageComponent } from './car-detail-image.component';

describe('CarDetailImageComponent', () => {
  let component: CarDetailImageComponent;
  let fixture: ComponentFixture<CarDetailImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDetailImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDetailImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
