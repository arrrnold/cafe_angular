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

    constructor(private authService: AuthService) { }

    ngOnInit(): void {

    }

    onLogin(formValue: any) {
        console.log(formValue);
        console.log(formValue.email);
        console.log(formValue.clave);

        // post para login de usuario *usar next
        this.authService.login(formValue).subscribe(
            (res: any) => {
                console.log(res);
                if (res.estado == 1) {
                    console.log('login exitoso');
                    // redirigir a la pagina de inicio
                } else {
                    console.log('login fallido');
                    // mostrar mensaje de error
                }
            },
            (err: any) => {
                console.log(err);
                console.log('error en login');
                // mostrar mensaje de error
            }
        );

    }
}
