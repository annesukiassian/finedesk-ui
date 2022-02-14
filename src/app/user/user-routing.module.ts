import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PathConstants} from "../core/constants/path-constants";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
    // {
    //     path: PathConstants.ROOT_USER,
    //     component: ProfileComponent
    // }
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class UserRoutingModule {
}
