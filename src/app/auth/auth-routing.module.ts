import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PathConstants} from "../core/constants/path-constants";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";


const routes: Routes = [
    {
        path: PathConstants.ROOT,
        component: LoginComponent
    },
    {
        path: PathConstants.SIGNUP,
        component: SignupComponent
    }
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class AuthRoutingModule {
}
