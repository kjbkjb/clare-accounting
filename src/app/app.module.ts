import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './/app-routing.module';
import {AppMaterialModule} from './app-material.module';
import {SalesComponent} from './sales/sales.component';
import {SalesDetailComponent} from './sales/sales-detail.component';
import {SalesService} from './sales/sales.service';
import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesComponent,
    SalesDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    HttpClientModule
  ],
  providers: [SalesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
