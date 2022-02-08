import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {PathConstants} from "../constants/path-constants";

@Injectable({
    providedIn: 'root'
})
export class LogoutService {


    constructor(private apiService: ApiService) {
    }

    logout() :Observable<any>{
        return this.apiService.post(PathConstants.getLogoutPath())
    }
}
