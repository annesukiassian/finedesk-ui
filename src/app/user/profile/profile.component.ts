import {Component, OnInit} from '@angular/core';
import {ProfileModel} from "../../core/models/profile.model";
import {SessionStorageService} from "../../core/services/session-storage.service";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    profile: ProfileModel;

    constructor() {

        this.profile = <ProfileModel>SessionStorageService.getUser();
        console.log(this.profile)
    }

    ngOnInit(): void {
    }

}
