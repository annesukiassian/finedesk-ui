import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {PathConstants} from "../constants/path-constants";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ProjectUploadService {

    // constructor(private http: ApiService) { }
    //
    // //Body-i mej formdata vory append a anum array  Blob(JSON.stringify(file))[]
    //
    // upload(body: Object): Observable<any>{
    //   return this.http.post ("/projects/"+projectName,body).pipe()
    // }


    constructor(private http: HttpClient) {
    }

    upload(files: FileList, projectName: string, data?: any) {
        const formData: FormData = new FormData();

        [].forEach.call(files, (file: File) => {
            formData.append('images', file)
        });

        for (let prop in data) {
            formData.append(prop, data[prop]);
        }

        const headers = new HttpHeaders();
        headers.append('Content-type', 'multipart/form-data');

        return this.http.post(`${environment.api_url}/projects/${projectName}`, formData, { headers });
    }


    // upload(file: File) {
    //     const formData: FormData = new FormData();
    //     formData.append('file', file);
    //     const request = new HttpRequest('POST', '/projects/' +proje )
    //     return this.http.post(PathConstants.getProjectPath(), {})
    // }

}
