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
              // Almacenar el token en el almacenamiento local
              this.authService.storeToken(res.token);
              // redirigir a la pagina de inicio
              window.location.href = '/dashboard';
            } else {
              this.loginError = 'No tienes permiso para acceder a esta página';
            }
          } else {
            this.loginError = res.mensaje;
          }
        },
        error: (err: any) => {
          this.loginError = 'El inicio de sesión ha fallado. Por favor, inténtalo de nuevo.';
        }
      });
  }
}
