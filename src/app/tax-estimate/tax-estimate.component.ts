import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { TaxEstimateResult } from './data-models/tax-estimate-result';
import { TaxEstimateService } from './tax-estimate.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-tax-estimate',
  templateUrl: './tax-estimate.component.html',
  styleUrls: ['./tax-estimate.component.css']
})
export class TaxEstimateComponent implements OnInit {
  result: TaxEstimateResult = { } as TaxEstimateResult;
  incomeAmount: number = 0;

  constructor(private taxEstimateService: TaxEstimateService,
    private location: Location,
    private messageService: MessageService) { }

  ngOnInit(): void {
  }

  calculateTaxEstimate(incomeAmountString: string): void {
    this.incomeAmount = Number(incomeAmountString);
    this.taxEstimateService.getTaxEstimate(this.incomeAmount).subscribe(result => this.result = result);
    this.messageService.add('TaxEstimateComponent: Completed Tax estimate calculations');
  }

  goBack(): void {
    this.location.back();
  }
}
