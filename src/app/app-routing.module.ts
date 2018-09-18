import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { ItemAddComponent } from './item-add/item-add.component';
import { ViewItemsComponent } from './view-items/view-items.component';
import { SupplierAddComponent } from './supplier-add/supplier-add.component';
import { SupplierViewComponent } from './supplier-view/supplier-view.component';

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
      }
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
