import {Injectable} from '@angular/core';
import {Observable, tap} from "rxjs";
import {ApiService} from "./api.service";
import {SessionStorageService} from "./session-storage.service";

@Injectable({
    providedIn: 'root'
})
export class LoginService {


    constructor(private http: ApiService) {
    }

    login(body: Object): Observable<any> {
        return this.http.post("/auth/login", body).pipe(tap(data => {
            SessionStorageService.setToken(data.body.message)
            SessionStorageService.setUser(data.body.body);
        }))
    }

    autoLogin() {

    }
}
