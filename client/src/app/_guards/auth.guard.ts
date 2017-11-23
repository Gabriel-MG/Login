import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
 
@Injectable()
export class AuthGuard implements CanActivate {
    
    currentUrl: string = '/';
    
    constructor(private router: Router) {

    }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) 
    {
        console.log(state.url);
        /*if(state.url == '/register' || state.url == '/login')
        {
            if(localStorage.getItem('currentUser'))
            {
                this.router.navigate(['/home']);
                return false;
            }
        }
        else
        {
            if(localStorage.getItem('currentUser'))
            {
                return true;
            }
            else
            {
                // not logged in so redirect to login page with the return url
                this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
                return false;
            }
        }*/
        return true;
    }
}