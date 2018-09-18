import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ClarityModule } from '@clr/angular';
import { LoginComponent } from './login/login.component';
import { ItemAddComponent } from './item-add/item-add.component';
import { ViewItemsComponent } from './view-items/view-items.component';
import { SupplierAddComponent } from './supplier-add/supplier-add.component';
import { SupplierViewComponent } from './supplier-view/supplier-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    ItemAddComponent,
    ViewItemsComponent,
    SupplierAddComponent,
    SupplierViewComponent
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
