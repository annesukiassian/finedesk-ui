import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ProfileModel} from "../../core/models/profile.model";
import {SessionStorageService} from "../../core/services/session-storage.service";
import {LocalService} from "../../core/services/local.service";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewChecked {

    profile = {} as ProfileModel | undefined;
    public name: string = "";

    constructor(private ref: ChangeDetectorRef, private localService: LocalService) {
        this.profile = SessionStorageService.getUser();
    }

    ngOnInit(): void {
        this.localService.headerNavigation$.next('work');
    }

    ngAfterViewChecked(): void {
        this.ref.detectChanges();
    }

}
