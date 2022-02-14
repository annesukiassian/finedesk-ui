import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthModule} from "./auth/auth.module";
import {AppRoutingModule} from './app-routing.module';

import {SharedModule} from "./shared/shared.module";
import {AppComponent} from './app.component';
import {HeaderComponent} from "./shared/header/header.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HomeComponent} from "./home/home.component";
import {UserModule} from "./user/user.module";
import {JwtInterceptor} from "./core/interceptors/jwt.interceptor";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedModule,
        AuthModule,
        AppRoutingModule,
        UserModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
