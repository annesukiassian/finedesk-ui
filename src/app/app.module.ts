import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './core/home/home.component';
import {SignupComponent} from "./user/signup/signup.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
