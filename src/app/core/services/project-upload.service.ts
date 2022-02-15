import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ProjectUploadService {

    constructor(private http: HttpClient) {
    }

    upload(files: FileList, data?: any) {
        const formData: FormData = new FormData();

        [].forEach.call(files, (file: File) => {
            formData.append('images', file)
        });

        for (let prop in data) {
            formData.append(prop, data[prop]);
        }

        const headers = new HttpHeaders();
        headers.append('Content-type', 'multipart/form-data');

        return this.http.post(`${environment.api_url}/projects/${data.projectName}`, formData, {headers});
    }

}
