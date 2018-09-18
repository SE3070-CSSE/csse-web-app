import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { ItemMainComponent } from './item-main/item-main.component';
import { SupplierMainComponent } from './supplier-main/supplier-main.component';
import { PaymentMainComponent } from './payment-main/payment-main.component';
import { EmployeeMainComponent } from './employee-main/employee-main.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: 'items', component: ItemMainComponent },
      { path: 'suppliers', component: SupplierMainComponent },
      { path: 'payments', component: PaymentMainComponent },
      { path: 'employees', component: EmployeeMainComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuardService,
    AuthService
  ]
})
export class AppRoutingModule { }
