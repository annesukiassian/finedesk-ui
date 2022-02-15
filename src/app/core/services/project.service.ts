import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private apiService: ApiService) { }
  
  getProjects(): Observable<any> {
    return this.apiService.get('/projects?pageNo=0&pageSize=10&sortByDate=2022-02-15');
  }
}
