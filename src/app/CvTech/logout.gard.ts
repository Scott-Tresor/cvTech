import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export class LogOutard implements CanActivate {
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        let token = localStorage.getItem('token');
        if (token) {
            return false;
        } else {
            return true;
        }
    }
}
