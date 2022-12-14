import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaxEstimateComponent } from './tax-estimate/tax-estimate.component';
import { MessagesComponent } from './messages/messages.component';
import { CalculatorsComponent } from './calculators/calculators.component';

@NgModule({
  declarations: [
    AppComponent,
    TaxEstimateComponent,
    MessagesComponent,
    CalculatorsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
