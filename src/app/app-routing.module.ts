import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./shared/not-found/not-found.component";
import {PathConstants} from "./core/constants/path-constants";


const routes: Routes = [
    {
        path: PathConstants.ROOT, component: HomeComponent, pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: PathConstants.ROOT_USER,
        loadChildren: () => import('./user/user-routing.module').then(m => m.UserRoutingModule)
    },
    {
        path: PathConstants.ROOT_AUTH,
        loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule)
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
