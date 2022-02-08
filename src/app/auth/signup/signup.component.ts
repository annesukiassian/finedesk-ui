import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SignUpService} from "../../core/services/sign-up.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup = new FormGroup({})
    passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    constructor(private signUpService: SignUpService, private router: Router) {
    }

    ngOnInit(): void {
        this.signupForm = new FormGroup({
            username: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.pattern(this.passwordRegExp)]),
            matchingPassword: new FormControl('', [Validators.required, this.checkPasswords]),
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
        })
    }

    checkPasswords = (control: FormControl): { [str: string]: boolean } | null => {
        let pass = this.signupForm.get('password')?.value;
        let confirmPass = this.signupForm.get('matchingPassword')?.value
        return pass === confirmPass ? null : {'notSame': true}
    }

    getErrorMessage(field: string) {
        if (this.signupForm.get(field)?.hasError('required')) {
            return 'The field is required';
        }
        if (field === 'password') {
            return 'Password must be minimum 8 characters length contain at least 1 uppercase 1 lowercase and 1 number, 1 symbol';
        }
        if (field === 'matchingPassword') {
            return 'Passwords don\'t match';
        }
        return 'Please enter a valid email';
    }

    postSignup() {
        this.signUpService.signup(
            {
                firstName: this.signupForm.value.firstName,
                lastName: this.signupForm.value.lastName,
                username: this.signupForm.value.username,
                password: this.signupForm.value.password,
                matchingPassword: this.signupForm.value.confirmPassword
            }
        ).subscribe(data => {
            console.log(data, 'data')
        })
    }

}
