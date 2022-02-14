import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  public headerNavigation$: BehaviorSubject<string> = new BehaviorSubject('work');
  constructor() { }
}
