import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home-content/home.component';
import { LoginComponent } from './pages/authentification/login/login.component';
import { RegisterComponent } from './pages/authentification/register/register.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
];
