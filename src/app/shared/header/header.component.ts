import {Component, OnInit} from '@angular/core';
import {PathConstants} from "../../core/constants/path-constants";
import {SessionStorageService} from "../../core/services/session-storage.service";
import {LogoutService} from "../../core/services/logout.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    loginRoutingLink = PathConstants.getLoginPath();
    signUpRoutingLink = PathConstants.getSignupPath();
    isAuthenticated = SessionStorageService.isAuthenticated();

    constructor(private logoutService: LogoutService) {
    }

    ngOnInit(): void {
    }

    logout(): void {
        this.logoutService.logout().subscribe(data=>{
            if(data){
                SessionStorageService.removeAll();
            }
        });
    }
}
