import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

export const routes: Routes = [
    /*
    rutas:
    auth/login
    auth/reset-password
    */
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' }, // Redirigir a /auth/login por defecto
    { path: 'auth/login', component: LoginComponent },
    { path: 'auth/reset_password', component: ResetPasswordComponent },
    { path: '**', redirectTo: '/auth/login' } // Redirigir a /auth/login si la ruta no existe
];
