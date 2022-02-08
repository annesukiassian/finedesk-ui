import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../core/services/login.service";
import {Router} from "@angular/router";
import {PathConstants} from "../../core/constants/path-constants";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup = new FormGroup({})
    profile: Object;


    constructor(private loginService: LoginService, private router: Router) {
        this.profile = {}
    }

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            username: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required])
        })
    }

    getErrorMessage(field: string) {
        if (this.loginForm.get(field)?.hasError('required')) {
            return 'The field is required';
        }
        return 'Please enter a valid email';
    }

    postLogin() {
        this.loginService.login({
            password: this.loginForm.value.password,
            username: this.loginForm.value.username
        }).subscribe(data => {
            this.profile = data;
            this.router.navigateByUrl(PathConstants.getProfilePath())
        })
    }
}
