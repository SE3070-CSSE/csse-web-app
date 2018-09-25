import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { ItemAddComponent } from './components/item-add/item-add.component';
import { ViewItemsComponent } from './components/view-items/view-items.component';
import { SupplierAddComponent } from './components/supplier-add/supplier-add.component';
import { SupplierViewComponent } from './components/supplier-view/supplier-view.component';
import { FormsModule } from '@angular/forms';
import { PurchaseRequestViewComponent } from './components/purchase-request-view/purchase-request-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'items',
        children: [
          { path: 'add', component: ItemAddComponent },
          { path: 'view', component: ViewItemsComponent }
        ]
      },
      {
        path: 'suppliers',
        children: [
          { path: 'add', component: SupplierAddComponent },
          { path: 'view', component: SupplierViewComponent }
        ]
      },
      {
        path: 'requests',
        children: [
          { path: 'view', component: PurchaseRequestViewComponent },
          { path: 'add', component: SupplierViewComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule],
  providers: [
    AuthGuardService,
    AuthService
  ]
})
export class AppRoutingModule { }
