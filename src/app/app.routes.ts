import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { AlreadyLoggedInGuard } from './auth/already-logged-in.guard';
import { SendMailComponent } from './auth/send-mail/send-mail.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ReporteComponent } from './reporte/reporte.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AjustesComponent } from './ajustes/ajustes.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';

export const routes: Routes = [
    /*
    rutas:
        auth/login
        auth/reset-password
        auth/send_mail
        dashboard
        pedidos
        reporte
        usuarios
        ajustes
        agregar_producto
    */
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' }, // Redirigir a /auth/login por defecto
    { path: 'auth/login', component: LoginComponent, canActivate: [AlreadyLoggedInGuard] },
    { path: 'auth/reset_password', component: ResetPasswordComponent },
    { path: 'auth/send_mail', component: SendMailComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'pedidos', component: PedidosComponent, canActivate: [AuthGuard] },
    { path: 'reporte', component: ReporteComponent, canActivate: [AuthGuard] },
    { path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuard] },
    { path: 'ajustes', component: AjustesComponent, canActivate: [AuthGuard] },
    { path: 'agregar_producto', component: AgregarProductoComponent },
    { path: '**', redirectTo: '/auth/login' }, // Redirigir a /auth/login si la ruta no existe,


];
