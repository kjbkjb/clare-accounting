import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {of} from 'rxjs/observable/of';
import {Sale} from './sale';
import {environment} from '../../environments/environment';
import {catchError, map, tap} from 'rxjs/operators';
import {ApiEnvelope} from '../api-envelope';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'format': 'json' })
};

@Injectable()
export class SalesService {


  constructor(private http: HttpClient) {
  }

  getSales(): Observable<ApiEnvelope<Sale[]>> {
    return this.http.get<ApiEnvelope<Sale[]>>(this.salesUrl()).pipe(
      catchError(this.handleError('getSales', new ApiEnvelope<Sale[]>())));
  }

  getSale(id): Observable<Sale> {
    return this.http.get<Sale>(this.saleUrl(id))
  }


  private salesUrl(): string {
    return environment.apiBase + '/sales.json';
  }

  private saleUrl(id): string {
    return this.salesUrl() + '/' + id
  }

  private handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      return of(result as T);
    }
  }
}
