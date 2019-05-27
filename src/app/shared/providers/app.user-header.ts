// import { UserModule } from '@modules/user/user.module';
import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class UserHeader implements HttpInterceptor {
    token: string;
    jsonReq: HttpRequest<any>;

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.method == "POST" && req.url === "http://localhost:4444/rest/isLoggedIn") {
            if (localStorage.getItem('token')) {
                this.token = localStorage.getItem('token');
            } else {
                this.token = 'UNAUTHORIZED';
            }
            this.jsonReq = req.clone({
                setHeaders: { 'Authorization': `Bearer ${this.token}` }
            })
        } else {
            this.jsonReq = req.clone()
        }
        return next.handle(this.jsonReq);

    }

}
