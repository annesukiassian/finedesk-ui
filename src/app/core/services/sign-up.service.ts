import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  commonHttp;

  constructor(private http: ApiService) {
    this.commonHttp = http;
  }

  signup(body: Object): Observable<any> {
    return this.commonHttp.post("/users/register", body).pipe(tap(data => {
      console.log(data.body.message)
      console.log(data.body)
    }))
  }

}
