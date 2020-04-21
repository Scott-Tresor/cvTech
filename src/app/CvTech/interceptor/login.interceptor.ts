import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

export class LoginInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        let token = localStorage.getItem('token');
        console.log(req.params)
        if (token) {
            let request = req.clone({
                params: new HttpParams().set('ACCESS_TOKEN',token)
            });
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
