import {Component, DoCheck, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {PathConstants} from "../../core/constants/path-constants";
import {SessionStorageService} from "../../core/services/session-storage.service";
import {LogoutService} from "../../core/services/logout.service";
import {ProjectUploadService} from "../../core/services/project-upload.service";
import {LocalService} from "../../core/services/local.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck, OnDestroy {

    loginRoutingLink = PathConstants.getLoginPath();
    signUpRoutingLink = PathConstants.getSignupPath();
    uploadRoutingLink = PathConstants.getProjectPath();
    profileLink = PathConstants.getProfilePath();
    isAuthenticated = false;
    navigation: string;
    navigationSub$: Subscription;

    constructor(private logoutService: LogoutService, private uploadService: ProjectUploadService, private localService: LocalService) {
    }

    ngOnInit(): void {
        this.navigationSub$ = this.localService.headerNavigation$.subscribe((res: string) => {
            this.navigation = res;
        })
    }

    ngDoCheck() {
        this.isAuthenticated = SessionStorageService.isAuthenticated();
    }

    logout(): void {
        this.logoutService.logout().subscribe(data=>{
            if(data){
                SessionStorageService.removeAll();
            }
        });
    }

    ngOnDestroy() {
        this.navigationSub$?.unsubscribe()
    }
}
