import {Component, OnInit} from '@angular/core';
import {PathConstants} from "../../core/constants/path-constants";

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

    homeRoutingLink = PathConstants.ROOT;

    constructor() {
    }


    ngOnInit(): void {
    }

}
