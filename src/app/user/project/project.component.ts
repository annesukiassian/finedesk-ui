import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ProjectUploadService} from "../../core/services/project-upload.service";
import {ProjectModel} from "../../core/models/project.model";
import {Subscription} from "rxjs";
import {LocalService} from "../../core/services/local.service";

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, OnDestroy {
    @ViewChild('filesInput', {static: false}) filesInput: ElementRef;

    public projectForm: FormGroup = new FormGroup({})
    public data: ProjectModel;
    public editingView: boolean = true;
    public userDetails$: Subscription;

    constructor(private http: HttpClient,
                private uploadService: ProjectUploadService,
                private localService: LocalService) {
    }

    ngOnInit(): void {
        this.localService.headerNavigation$.next('profile');
        this.projectForm = new FormGroup({
            projectName: new FormControl('', [Validators.required]),
            description: new FormControl('', [Validators.required])
        });
    }

    onSubmit() {
        this.userDetails$ = this.uploadService.upload(this.filesInput.nativeElement.files, {
            projectName: this.projectForm.value.projectName,
            description: this.projectForm.value.description
        }).subscribe((res: any) => {
            const body = res.body;
            this.editingView = false;
            this.data = {
                id: body.id,
                name: body.name,
                description: body.description,
                likeCount: body.likeCount,
                projectItems: body.projectItems?.map((item: any) => item.imageUrl)
            };
        });
    }

    ngOnDestroy() {
        this.userDetails$?.unsubscribe();
    }
}
