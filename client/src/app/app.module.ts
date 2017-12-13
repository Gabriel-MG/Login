import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
 
import { AppComponent } from './controler/app.component';
import { routing } from './app.routing';
 
import { customHttpProvider } from './_helpers/index';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, ControlService } from './_services/index';
import { HomeComponent } from './controler/home.component';
import { LoginComponent } from './controler/login.component';
import { RegisterComponent } from './controler/register.component';

import { HeaderComponent } from './header/header.component';
import { ControlComponent } from './control/control.component';
import { RegistroComponent } from './registro/registro.component';
import { NavbarComponent } from './navbar/navbar.component';
 
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
        RegisterComponent,
        HeaderComponent,
        ControlComponent,
        RegistroComponent,
        NavbarComponent
    ],
    providers: [
        customHttpProvider,
        AuthGuard,
        AlertService,
        ControlService,
        AuthenticationService,
        UserService
    ],
    bootstrap: [AppComponent]
})
 
export class AppModule { }