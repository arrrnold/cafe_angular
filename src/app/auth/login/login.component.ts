import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginError: string = '';

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onLogin(formValue: any) {
    this.authService.login(formValue)
      .subscribe({
        next: (res: any) => {
          if (res.estado == 1) {
            // si el usuario es administrador
            if (res.rol == 'administrador') {
              console.log('login exitoso');
              // Almacenar el token en el almacenamiento local
              this.authService.storeToken(res.token);
              // redirigir a la pagina de inicio
              window.location.href = '/dashboard';
            } else {
              console.log('login fallido');
              this.loginError = 'No tienes permiso para acceder a esta página';
            }
          } else {
            console.log('login fallido');
            this.loginError = res.mensaje;
          }
        },
        error: (err: any) => {
          console.log('error en login');
          this.loginError = 'El inicio de sesión ha fallado. Por favor, inténtalo de nuevo.';
        }
      });
  }
}
