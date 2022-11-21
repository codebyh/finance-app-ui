import { Injectable } from '@angular/core';
import { SampleResult } from './data-models/mock-result';
import { TaxEstimateResult } from './data-models/tax-estimate-result';

@Injectable({
  providedIn: 'root'
})
export class TaxEstimateService {

  getTaxEstimate(incomeAmount: number): TaxEstimateResult {
    return SampleResult;
  }

  constructor() { }
}
