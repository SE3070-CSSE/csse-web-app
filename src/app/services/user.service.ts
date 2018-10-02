import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, of, throwError } from 'rxjs/index';
import { catchError, tap } from 'rxjs/internal/operators';
import { ApplicationUser } from '../models/ApplicationUser';
import { environment } from './../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = environment.userUrl;
  private headers: HttpHeaders = new HttpHeaders();
  private httpOptions = {};

  constructor(public authService: AuthService, private http: HttpClient, private toastr: ToastrService) {
    console.log('Inside user service');
    this.headers = this.headers.append('Content-Type', 'application/json');
    this.headers = this.headers.append('Authorization', authService.JWTtoken);
    this.httpOptions = { headers: this.headers };
  }

  /**
   *  GET: Get a list of users from the server. Returns the list of users upon success.
   */
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.userUrl, this.httpOptions)
      .pipe(
        tap(users => console.log(JSON.stringify(users))),
        catchError(this.handleError('getUsers', [], 'Could not get users from server'))
      );
  }


  // addItem(item: Item): Observable<Item> {
  //   return this.http.post<Item>(this.itemUrl, item, this.httpOptions).pipe(
  //     tap((resultItem: any) => console.log(`added item w/ id=${resultItem._id}`)),
  //     catchError(this.handleError<Item>('addItem'))
  //   );
  // }

  updateUser(user: ApplicationUser): Observable<ApplicationUser> {
    return this.http.put<ApplicationUser>(this.userUrl, user, this.httpOptions)
      .pipe(
        catchError(this.handleError<ApplicationUser>('updateUser'))
      );
  }

  deleteUser(users: ApplicationUser[]): Observable<any> {
    return this.http.request('delete', this.userUrl, { headers: this.headers, body: users }).pipe(
      tap((resultItem: any) => console.log('deleted users')),
      catchError(this.handleError<ApplicationUser>('deleteUsers'))
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
