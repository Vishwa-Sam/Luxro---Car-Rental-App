import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickFilter } from './quick-filter';

describe('QuickFilter', () => {
  let component: QuickFilter;
  let fixture: ComponentFixture<QuickFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
