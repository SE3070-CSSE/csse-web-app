import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs/index';
import { catchError, tap } from 'rxjs/internal/operators';
import { AuthService } from './auth.service';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemUrl = environment.itemEndpoint;
  private headers: HttpHeaders = new HttpHeaders();

  constructor(public authService: AuthService, private http: HttpClient) {
    console.log('Inside item service');
    this.headers = this.headers.append('Content-Type', 'application/json');
    this.headers = this.headers.append('Authorization', authService.JWTtoken);
  }

  getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.itemUrl, { headers: this.headers })
      .pipe(
        tap(items => console.log(JSON.stringify(items))),
        catchError(this.handleError('getItems', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error('error in item service ' + JSON.stringify(error)); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
