import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs/index';
import {catchError, tap} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemUrl = 'https://csse-backend.herokuapp.com/items';
  private headers: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {
    console.log('Inside item service');
    this.headers = this.headers.append('Content-Type', 'application/json');
    // this.headers = this.headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYW1hbiIsInJvbGVzIjpbIkFETUlOX1VTRVIiLCJDUkVBVEVfUEVSTUlTU0lPTiJdLCJleHAiOjE1MzgxMzk5NzN9.XXM0aMoY4O5SEJ2uevDo-Of66M6jSjk8nXDyIF6PVVDT_eX-mBURMLeTSWP8-_nXvaJy3alvo8lOotWUbyORqg');


  }

  getItems (): Observable<any[]> {
    return this.http.get<any[]>(this.itemUrl, { headers: this.headers })
      .pipe(
        tap(items => console.log(JSON.stringify(items))),
        catchError(this.handleError('getItems', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error("error in item service " + JSON.stringify(error)); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
