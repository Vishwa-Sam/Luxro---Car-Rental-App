import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRental } from './car-rental';

describe('CarRental', () => {
  let component: CarRental;
  let fixture: ComponentFixture<CarRental>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarRental]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarRental);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
