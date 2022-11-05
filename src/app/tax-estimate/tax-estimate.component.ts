import { Component, OnInit } from '@angular/core';
import { TaxEstimateResult } from './data-models/tax-estimate-result';

@Component({
  selector: 'app-tax-estimate',
  templateUrl: './tax-estimate.component.html',
  styleUrls: ['./tax-estimate.component.css']
})
export class TaxEstimateComponent implements OnInit {
  result: TaxEstimateResult = {
    taxableIncome: 100,
    totalTax: 10
  };
  incomeAmount: number = 0;

  constructor() {  }

  ngOnInit(): void {
  }

  // calculateTaxEstimate(incomeAmount: number): void {
  //   if (!incomeAmount) { return 'Income'; }
  //   this.heroService.addHero({ name } as Hero)
  //     .subscribe(hero => {
  //       this.heroes.push(hero);
  //     });
  // }

}
