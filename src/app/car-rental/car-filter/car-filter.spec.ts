import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFilter } from './car-filter';

describe('CarFilter', () => {
  let component: CarFilter;
  let fixture: ComponentFixture<CarFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
