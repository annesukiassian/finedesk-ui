import {Injectable} from '@angular/core';
import {catchError, Observable, tap, throwError} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {
    }

    private static formatErrors(error: any) {
        return throwError(error.error);
    }

    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http.get(`${environment.api_url}${path}`, {params}).pipe(catchError(ApiService.formatErrors));
    }

    // tslint:disable-next-line:ban-types
    post(path: string, body: Object = {}): Observable<any> {
        return this.http.post(`${environment.api_url}${path}`, JSON.stringify(body), {
            headers:
                {'Content-Type': 'application/json'},
            observe: 'response'
        })
    }

    // tslint:disable-next-line:ban-types
    put(path: string, body: Object = {}): Observable<any> {
        return this.http.put(`${environment.api_url}${path}`, JSON.stringify(body)).pipe(catchError(ApiService.formatErrors));
    }

    delete(path: string): Observable<any> {
        return this.http.delete(`${environment.api_url}${path}`).pipe(catchError(ApiService.formatErrors));
    }
// .pipe(catchError(ApiServiceService.formatErrors))
}
