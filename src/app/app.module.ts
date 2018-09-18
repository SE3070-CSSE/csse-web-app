import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ClarityModule } from '@clr/angular';
import { LoginComponent } from './login/login.component';
import { ItemMainComponent } from './item-main/item-main.component';
import { SupplierMainComponent } from './supplier-main/supplier-main.component';
import { PaymentMainComponent } from './payment-main/payment-main.component';
import { EmployeeMainComponent } from './employee-main/employee-main.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    ItemMainComponent,
    SupplierMainComponent,
    PaymentMainComponent,
    EmployeeMainComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ClarityModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
