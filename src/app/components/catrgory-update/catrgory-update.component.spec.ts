import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatrgoryUpdateComponent } from './catrgory-update.component';

describe('CatrgoryUpdateComponent', () => {
  let component: CatrgoryUpdateComponent;
  let fixture: ComponentFixture<CatrgoryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatrgoryUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatrgoryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
