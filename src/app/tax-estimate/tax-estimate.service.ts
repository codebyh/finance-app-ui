import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../services/message.service';
import { TaxEstimateInput } from './data-models/tax-estimate-input';
import { TaxEstimateResult } from './data-models/tax-estimate-result';


@Injectable({
  providedIn: 'root'
})
export class TaxEstimateService {
  private taxEstimateUrl = 'finance-app.azurewebsites.net/TaxEstimate';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getTaxEstimate(incomeAmount: number): Observable<TaxEstimateResult> {
    const payload = {} as TaxEstimateInput;
    payload.Income = incomeAmount;
    payload.FilingStatus = 1;

    const result = this.http.post<TaxEstimateResult>(this.taxEstimateUrl, payload, this.httpOptions)
      .pipe(
        catchError(this.handleError<TaxEstimateResult>('getTaxEstimate', {} as TaxEstimateResult))
      );
    this.messageService.add('TaxEstimateService: Calculated Tax Estimate');
    return result;
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a message with the MessageService */
  private log(message: string) {
    this.messageService.add(`TaxEstimateService: ${message}`);
  }
}

