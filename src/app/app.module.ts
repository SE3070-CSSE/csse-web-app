import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { UiModule } from './components/ui/ui.module';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ClarityModule, ClrFormsNextModule } from '@clr/angular';
import { LoginComponent } from './components/login/login.component';
import { ItemAddComponent } from './components/item-add/item-add.component';
import { ViewItemsComponent } from './components/view-items/view-items.component';
import { SupplierAddComponent } from './components/supplier-add/supplier-add.component';
import { SupplierViewComponent } from './components/supplier-view/supplier-view.component';
import { FormsModule } from '@angular/forms';
import { PurchaseRequestViewComponent } from './components/purchase-request-view/purchase-request-view.component';
import { PurchaseOrderViewComponent } from './components/purchase-order-view/purchase-order-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    ItemAddComponent,
    ViewItemsComponent,
    SupplierAddComponent,
    SupplierViewComponent,
    PurchaseRequestViewComponent,
    PurchaseOrderViewComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BrowserModule,
    FormsModule,
    ClrFormsNextModule,
    ClarityModule,
    UiModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
