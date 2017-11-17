import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiEnvelope} from '../api-envelope';
import {SummaryReport} from './summary-report';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {of} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })
};

@Injectable()
export class DashboardService {

  constructor(private http: HttpClient) {
  }

  getReport(): Observable<ApiEnvelope<SummaryReport>>{
    return this.http.get<ApiEnvelope<SummaryReport>>(this.reportUrl(), httpOptions).pipe(
      catchError(this.handleError('getReport', new ApiEnvelope<SummaryReport>())));
  }

  private reportUrl(): string{
    return environment.apiBase + '/reports/organization_summary/overview.json';
  }

  private handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      return of(result as T);
    }
  }
}
