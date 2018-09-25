import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, of, throwError } from 'rxjs/index';
import { catchError, tap } from 'rxjs/internal/operators';
import { Item } from '../models/item';
import { environment } from './../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PurchaseRequestService {

  private purchaseRequestURL = environment.purchaseRequestEndpoint;
  private headers: HttpHeaders = new HttpHeaders();
  private httpOptions = {};

  constructor() { }
}
