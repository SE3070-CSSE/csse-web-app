import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';
import { Observable, of, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private supplierURL = environment.supplierEndpoint;
  private headers: HttpHeaders = new HttpHeaders();
  private httpOptions = {};

  /**
   * @param authService is used to access the JWT token provided by the backend server during login.
   * The token is used to authorize all requests to the backend
   */
  constructor(public authService: AuthService, private http: HttpClient, private toastr: ToastrService) {
    console.log('Inside request service');
    this.headers = this.headers.append('Content-Type', 'application/json');
    this.headers = this.headers.append('Authorization', authService.JWTtoken);
    this.httpOptions = { headers: this.headers };
  }

  /**
   *  GET: Get a list of suppliers from the server. Returns the list of items upon success.
   */
  getSuppliers(): Observable<any[]> {
    return this.http.get<any[]>(this.supplierURL, this.httpOptions)
      .pipe(
        tap(suppliers => console.log(JSON.stringify(suppliers))),
        catchError(this.handleError('getSuppliers', [], 'Could not get suppliers from server'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T, message?: string) {
    return (error: any): Observable<T> => {

      console.error('error ' + JSON.stringify(error)); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      if (result) {
        this.toastr.error(`Internal error: ${message}`);
        return of(result as T);
      } else {
        return throwError(`${operation} failed`);
      }
    };
  }
}
