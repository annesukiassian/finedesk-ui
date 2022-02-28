import {NgModule} from "@angular/core";
import {NotFoundComponent} from './not-found/not-found.component';
import {RouterModule} from "@angular/router";
import { VerificationComponent } from './verification/verification.component';

@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [
        NotFoundComponent,
        VerificationComponent,

    ],
    exports: [NotFoundComponent],
})
export class SharedModule {
}
