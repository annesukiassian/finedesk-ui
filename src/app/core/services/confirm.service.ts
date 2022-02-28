import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ConfirmService {

    constructor(private apiService: ApiService) {
    }

    confirm(token: string | null): Observable<any> {
        return this.apiService.get('/verification/confirm/' + token);
    }
}
