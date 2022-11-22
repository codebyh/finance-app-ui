import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorsComponent } from './calculators/calculators.component';
import { MessagesComponent } from './messages/messages.component';
import { TaxEstimateComponent } from './tax-estimate/tax-estimate.component';

const routes: Routes = [
  { path: 'calculators', component: CalculatorsComponent},
  { path: 'calculators/tax-estimate', component: TaxEstimateComponent },
  { path: 'messages', component: MessagesComponent },
  // default navigation page 
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
