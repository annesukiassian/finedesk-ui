import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {SessionStorageService} from "../services/session-storage.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = SessionStorageService.getToken();



        return next.handle(req);
    }

}