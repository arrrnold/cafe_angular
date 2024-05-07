import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

    loginError: string = ''; // Agrega esta línea

    constructor(private authService: AuthService) { }

    ngOnInit(): void { }

    onLogin(formValue: any) {
        // post para login de usuario

        this.authService.login(formValue)
            .subscribe({
                next: (res: any) => {
                    if (res.estado == 1) {
                        console.log('login exitoso');
                        // redirigir a la pagina de inicio
                        window.location.href = '/dashboard';
                    } else {
                        console.log('login fallido');
                        // mostrar mensaje de error en html
                        this.loginError = res.mensaje;
                    }
                },
                error: (err: any) => {
                    console.log('error en login');
                    this.loginError = 'El inicio de sesión ha fallado. Por favor, inténtalo de nuevo.'; // Agrega esta línea
                }
            });

    }
}
