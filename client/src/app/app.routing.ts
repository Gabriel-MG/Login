import { Routes, RouterModule } from '@angular/router';
 
import { HomeComponent } from './controler/home.component';
import { LoginComponent } from './controler/login.component';
import { RegisterComponent } from './controler/register.component';
import { AuthGuard } from './_guards/index';
 
const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
 
    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];
 
export const routing = RouterModule.forRoot(appRoutes);