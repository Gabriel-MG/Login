import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService  } from '../_services/index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  logout()
  {
  	this.auth.logout();
    this.router.navigate(["/login"]);
  }


}
