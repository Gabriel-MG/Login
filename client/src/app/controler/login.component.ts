
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 
import { User } from '../_models/user';
import { AlertService, AuthenticationService } from '../_services/index';
 
@Component({
    moduleId: module.id,
    templateUrl: '../views/login.component.html',
    styleUrls: ['../assets/login.component.css']
})
 
export class LoginComponent implements OnInit {
    model = new User('','','','','','');
    loading = false;
    returnUrl: string;
    error = false;
 
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }
 
    ngOnInit() {
        // reset login status
        //this.authenticationService.logout();
 
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        
    }

    cerrar()
    {
        this.error = false;
    }
 
    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    //this.alertService.error(error);
                    this.loading = false;
                    this.error = true;
                });
    }
}