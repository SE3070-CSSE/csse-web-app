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

  private listUrl = environment.listUrl;
  private updateUrl = environment.updateUrl;
  private deleteUrl = environment.deleteUrl;
  private registerUrl=environment.registerUrl;
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
    return this.http.get<any[]>(this.listUrl, this.httpOptions)
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
    return this.http.put<ApplicationUser>(this.updateUrl, user, this.httpOptions)
      .pipe(
        catchError(this.handleError<ApplicationUser>('updateUser'))
      );
  }

  deleteUser(users: ApplicationUser[]): Observable<any> {
    return this.http.request('delete', this.deleteUrl, { headers: this.headers, body: users }).pipe(
      tap((resultItem: any) => console.log('deleted users')),
      catchError(this.handleError<ApplicationUser>('deleteUsers'))
    );
  }


  registerUser(user: ApplicationUser) {
    const body: ApplicationUser = {
      emp_ID:user.emp_ID,
      emp_type:user.emp_type,
      firstname: user.firstname,
      lastname: user.lastname,
      address:user.address,
      email: user.email,
      phone:user.phone,
      username: user.username,
      password: user.password
           
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.registerUrl, body,{headers : reqHeader});
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
