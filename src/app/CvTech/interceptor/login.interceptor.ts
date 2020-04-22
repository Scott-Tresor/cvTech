import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

export class LoginInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        let token = localStorage.getItem('token');

        if (token) {
            let keys = req.params.keys();
            let params = new HttpParams();
            for(let index = 0; index < keys.length; index++){
                params = params.append(keys[index], req.params.get(keys[index]));
            }
            params.append('access_token', token);
            const request = req.clone({params});
            return next.handle(request);
        } else {
            return next.handle(req);
        }
    }
}

export const LoginInterceptorProvider = {
   provide: HTTP_INTERCEPTORS,
   useClass: LoginInterceptor,
   multi: true
}
