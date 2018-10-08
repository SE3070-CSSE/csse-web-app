import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usernameX: string;
  isLoggedIn = false;
  isAdmin  = false;
  headers: HttpHeaders = new HttpHeaders();

  loginUrl = environment.loginUrl;
  JWTtoken = '';
  // store the URL so we can redirect after logging in
  redirectUrl: string;


  constructor(private http: HttpClient) {
    this.headers = this.headers.append('Content-Type', 'application/json');
  }

  login(user): Observable<any> {
    this.usernameX = user.username;
    console.log(this.usernameX);
    console.log('dhsjbv');
    return this.http.post<any[]>(this.loginUrl, user, { headers: this.headers })
      .pipe(
        tap((loginResponse) => {
          this.JWTtoken = loginResponse.Authorization;
          const decodedToken = helper.decodeToken(this.JWTtoken);
          console.log('permissions array ' + JSON.stringify(decodedToken.roles));
          this.isAdmin = this.checkAdmin(decodedToken.roles);
          console.log('is admin ? ' + JSON.stringify(this.isAdmin));
          this.isLoggedIn = true;
        }));
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  checkAdmin(roles: string[]) {
    return (roles.indexOf('ADMIN') > -1);
  }
}
