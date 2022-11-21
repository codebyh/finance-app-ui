import { TestBed } from '@angular/core/testing';

import { TaxEstimateService } from './tax-estimate.service';

describe('TaxEstimateService', () => {
  let service: TaxEstimateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxEstimateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
