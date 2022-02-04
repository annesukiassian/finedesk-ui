import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({})

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])  ,
      password: new FormControl('', [Validators.required])
    })
  }

  getErrorMessage(field: string) {
    if(this.loginForm.get(field)?.hasError('required')) {
      return 'The field is required';
    }
    return 'Please enter a valid email';
  }


}
