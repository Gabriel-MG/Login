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

        if(localStorage.getItem('currentUser'))
        {
            if(state.url == '/register' || state.url == '/login')
            {
                this.router.navigate(['/']);
                return false;
            }
            return true;
        }
        else
        {
            if(state.url == '/register' || state.url == '/login')
            {
                return true;
            }
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login']);
            return false;
        } 

 
        // not logged in so redirect to login page with the return url
        
    }
}