import { Component, OnInit } from '@angular/core';
 
import { User } from '../_models/index';
import { UserService, AuthenticationService  } from '../_services/index';
 
@Component({
    moduleId: module.id,
    templateUrl: '../views/home.component.html'
})
 
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
 
    constructor(private userService: UserService, private auth: AuthenticationService ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
 
    ngOnInit() {
        this.loadAllUsers();
    }
 
    deleteUser(_id: string) {
        this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
    }

    logout()
    {
        this.auth.logout();
    }
 
    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}