import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmService} from "../../core/services/confirm.service";

@Component({
    selector: 'app-verification',
    templateUrl: './verification.component.html',
    styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {


    token: string | null;
    message = '';

    constructor(private route: ActivatedRoute, private confirmService: ConfirmService, private router: Router) {
        console.log(this.route.snapshot.params['token'])

    }

    ngOnInit(): void {

        this.token = this.route.snapshot.params['token'];
        console.log('1')
        if (this.token != null) {
            console.log(this.token);
            this.confirmService.confirm(this.token).subscribe(result => {
                console.log(result);
                if (result?.body?.confirmed) {
                    this.message = 'User confirmed successfully';
                } else {
                    this.message = result.message;
                }
            },
                error => {
                this.message = error.message
                });
        }
    }

    navigateToHome(): void {
        this.router.navigateByUrl('/');
    }
}
