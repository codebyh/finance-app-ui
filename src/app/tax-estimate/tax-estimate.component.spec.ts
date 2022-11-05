import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxEstimateComponent } from './tax-estimate.component';

describe('TaxEstimateComponent', () => {
  let component: TaxEstimateComponent;
  let fixture: ComponentFixture<TaxEstimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxEstimateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
