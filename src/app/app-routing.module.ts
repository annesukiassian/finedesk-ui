import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./shared/not-found/not-found.component";
import {PathConstants} from "./core/constants/path-constants";
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./user/profile/profile.component";
import {ProjectComponent} from "./user/project/project.component";
import {VerificationComponent} from "./shared/verification/verification.component";


const routes: Routes = [

    {
        path: PathConstants.ROOT,
        component: HomeComponent
    },
    {
        path: PathConstants.ROOT_USER,
        component: ProfileComponent
    },
    {
        path: PathConstants.ROOT_AUTH,
        loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule)
    },
    {
        path: PathConstants.PROJECT,
        component: ProjectComponent
    },
    {
        path: PathConstants.CONFIRM,
        component: VerificationComponent
    },
    {
        path: '**', component: NotFoundComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
