import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-send-mail',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './send-mail.component.html',
  styleUrl: './send-mail.component.css'
})
export class SendMailComponent implements OnInit {
  sendError = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void { }

  onSendMail(formValue: any) {
    this.authService.enviarEmail(formValue)
      .subscribe({
        next: (res: any) => {
          if (res.estado == 1) {
            console.log('envio de correo exitoso');
            // Almacenar el token en el almacenamiento local
            this.authService.storeToken(res.token);
            // redirigir a la pagina de inicio
            window.location.href = '/auth/reset_password';
          } else {
            console.log('envio de correo fallido');
            this.sendError = res.mensaje;
          }
        },
        error: (err: any) => {
          console.log('error en envio de correo');
          this.sendError = 'El envio de correo ha fallado. Por favor, inténtalo de nuevo.';
        }
      });
  }


}