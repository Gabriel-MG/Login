/*import { BrowserModule } 	from '@angular/platform-browser';
import { NgModule } 		from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap';

import { Indexx } 			from './controler/index.component';
import { AppComponent } 	from './controler/app.component';

@NgModule({
  declarations: [
    AppComponent,
    Indexx
  ],
  imports: [
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
 
import { AppComponent } from './controler/app.component';
import { routing } from './app.routing';
 
import { customHttpProvider } from './_helpers/index';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './controler/home.component';
import { LoginComponent } from './controler/login.component';
import { RegisterComponent } from './controler/register.component';
 
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        customHttpProvider,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService
    ],
    bootstrap: [AppComponent]
})
 
export class AppModule { }