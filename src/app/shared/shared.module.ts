import {NgModule} from "@angular/core";
import {NotFoundComponent} from './not-found/not-found.component';
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [
        NotFoundComponent
    ],
    exports: [NotFoundComponent],
})
export class SharedModule {
}
