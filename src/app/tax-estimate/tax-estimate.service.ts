import { Injectable } from '@angular/core';
import { SampleResult } from './data-models/mock-result';
import { TaxEstimateResult } from './data-models/tax-estimate-result';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaxEstimateService {

  getTaxEstimate(incomeAmount: number): Observable<TaxEstimateResult> {
    return of(SampleResult);
  }

  constructor() { }
}
