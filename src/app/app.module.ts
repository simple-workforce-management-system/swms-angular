import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './configuration/app-routing/app-routing.module';
import {MaterialDesignModule} from './configuration/material-design/material-design.module';

import {AppComponent} from './app.component';
import {LoginComponent} from './users/login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from './users/auth/auth.guard';
import { PageNotFoundComponent } from './configuration/errors/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MaterialDesignModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
