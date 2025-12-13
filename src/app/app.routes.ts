import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Dashboard } from './user/dashboard/dashboard';
import { authGuard } from './auth/auth-guard';
import { guestGuard } from './auth/guest-guard';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', canActivate: [guestGuard], component: Login },
  { path: 'signup', canActivate: [guestGuard], component: Signup },  
  { path: 'dashboard',canActivate: [authGuard], component: Dashboard },
];
