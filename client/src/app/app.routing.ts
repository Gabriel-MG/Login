import { Routes, RouterModule } from '@angular/router';
 
import { HomeComponent } from './controler/home.component';
import { LoginComponent } from './controler/login.component';
import { RegisterComponent } from './controler/register.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthGuard } from './_guards/index';
import { ControlComponent } from './control/control.component';
 
const appRoutes: Routes = [
    { path: '', component: ControlComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
	{ path: 'user', component: RegistroComponent, canActivate: [AuthGuard]},
	{ path: 'h', component: HomeComponent, canActivate: [AuthGuard]},
	{ path: 'r', component: RegisterComponent, canActivate: [AuthGuard]},
    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];
 
export const routing = RouterModule.forRoot(appRoutes);