import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usernameX: string; 
  isLoggedIn = false;
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
    console.log("dhsjbv");
    return this.http.post<any[]>(this.loginUrl, user, { headers: this.headers })
      .pipe(
        tap((loginResponse) => {
          this.JWTtoken = loginResponse.Authorization;
          this.isLoggedIn = true; 
        })
      );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
