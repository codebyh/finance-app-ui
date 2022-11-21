import { Component, OnInit } from '@angular/core';
import { TaxEstimateResult } from './data-models/tax-estimate-result';
import { TaxEstimateService } from './tax-estimate.service';

@Component({
  selector: 'app-tax-estimate',
  templateUrl: './tax-estimate.component.html',
  styleUrls: ['./tax-estimate.component.css']
})
export class TaxEstimateComponent implements OnInit {
  result: TaxEstimateResult = { } as TaxEstimateResult;
  incomeAmount: number = 0;

  constructor(private taxEstimateService: TaxEstimateService) { }

  ngOnInit(): void {
  }

  calculateTaxEstimate(incomeAmountString: string): void {
    this.incomeAmount = parseInt(incomeAmountString);
    this.taxEstimateService.getTaxEstimate(this.incomeAmount).subscribe(result => this.result = result);
  }

}
