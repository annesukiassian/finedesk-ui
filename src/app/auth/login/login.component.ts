import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginServiceService} from "../../services/login-service.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup = new FormGroup({})
    loginHttp;
    profile: Object;


    constructor(loginHttp: LoginServiceService, private router: Router) {
        this.loginHttp = loginHttp;
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
        this.loginHttp.login({
            password: this.loginForm.value.password,
            username: this.loginForm.value.username
        }).subscribe(data => {
            this.profile = data;
            this.router.navigateByUrl(`/profiles/${data.body.accessToken}`)
            console.log(data.headers.get('accessToken'))
        })
    }
}
