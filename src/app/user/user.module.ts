import {NgModule} from '@angular/core';

import {ProfileComponent} from "./profile/profile.component";
import {UserRoutingModule} from "./user-routing.module";
import {CommonModule} from "@angular/common";
import { ProjectComponent } from './project/project.component';
import { ImageUploaderComponent } from './project/image-uploader/image-uploader.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        ProfileComponent,
        ProjectComponent,
        ImageUploaderComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        ReactiveFormsModule,
    ],
    exports: [ProfileComponent]
})
export class UserModule {
}
