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
export class ResetPasswordComponent {

  sendError = '';

  onSendMail(formValue: any) {
    // TODO: Implementar la lógica para enviar el correo electrónico
    console.log('Correo electrónico enviado a: ' + formValue.email);
  }


}