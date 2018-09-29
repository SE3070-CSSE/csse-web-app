import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, of, throwError } from 'rxjs/index';
import { catchError, tap } from 'rxjs/internal/operators';
import { Supplier } from '../models/supplier';
import { environment } from './../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
  })
  export class SupplierService {

    private supplierUrl = environment.supplierEndpoint;
    private headers: HttpHeaders = new HttpHeaders();
    private httpOptions = {};

    /**
   * @param authService is used to access the JWT token provided by the backend server during login.
   * The token is used to authorize all requests to the backend
   */

  constructor(public authService: AuthService, private http: HttpClient, private toastr: ToastrService) {
    console.log('Inside item service');
    this.headers = this.headers.append('Content-Type', 'application/json');
    this.headers = this.headers.append('Authorization', authService.JWTtoken);
    this.httpOptions = { headers: this.headers };
  }

  getSuppliers(): Observable<any[]> {
    return this.http.get<any[]>(this.supplierUrl, this.httpOptions)
      .pipe(
        tap(suppliers => console.log(JSON.stringify(suppliers))),
        catchError(this.handleError('getSuppliers', [], 'Could not get suppliers from server'))
      );
  }

  addSupplier (supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(this.supplierUrl, supplier, this.httpOptions).pipe(
      tap((resultSupplier: any) => console.log(`added supplier w/ id=${resultSupplier._id}`)),
      catchError(this.handleError<Supplier>('addSupplier'))
    );
  }

  deleteSuppliers (suppliers: Supplier[]): Observable<any> {
    return this.http.request('delete', this.supplierUrl, { headers: this.headers, body: suppliers }).pipe(
      tap((resultItem: any) => console.log('deleted suppliers')),
      catchError(this.handleError<Supplier>('deleteSuppliers'))
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
  