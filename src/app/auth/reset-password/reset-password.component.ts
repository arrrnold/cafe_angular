import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent implements OnInit {

  resetError = '';

  ngOnInit(): void { }

  constructor(private authService: AuthService) { }

  onResetPassword(form: any) {
    // verificar que la clave y la confirmación sean iguales
    if (form.password != form.confirmPassword) {
      this.resetError = 'Las claves no coinciden. Verifica e inténtalo de nuevo.';
      return;
    }

    this.authService.cambiarClave(form.token, form.password)
      .subscribe({
        next: (res: any) => {
          if (res.estado == 1) {
            console.log('contraseña cambiada');
            // navegar hacia el login
            window.location.href = '/auth/login';
          } else {
            console.log('error al cambiar la contraseña');
            this.resetError = res.mensaje;
          }
        },
        error: (err: any) => {
          console.log('error al cambiar la contraseña');
          this.resetError = 'Error al restablecer la contraseña. Verifica los campos e inténtalo de nuevo.';
        }
      });
  }

}