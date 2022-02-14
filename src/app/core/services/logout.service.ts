import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {PathConstants} from "../constants/path-constants";
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class LogoutService {


    constructor(private apiService: ApiService, private router: Router) {
    }

    logout() :Observable<any>{
        this.router.navigate(['/']).then();
        return this.apiService.post(PathConstants.getLogoutPath())
    }
}
